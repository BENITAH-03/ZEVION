import { env } from '../config/env.js';

/**
 * Thrown deliberately by controllers for expected error conditions
 * (e.g. not found, bad input) so the central handler can map them
 * to a safe, consistent JSON response.
 */
export class ApiError extends Error {
  constructor(statusCode, message, details) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
}

export function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    error: {
      message: 'The requested resource was not found.',
    },
  });
}

// Express recognizes error-handling middleware by its 4-argument signature.
// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  const statusCode = err instanceof ApiError ? err.statusCode : 500;

  // Log full detail server-side only. Never forward stack traces, SQL,
  // or internal paths to the client.
  if (statusCode >= 500) {
    console.error('[error]', err);
  } else {
    console.warn('[warn]', err.message);
  }

  const responseBody = {
    success: false,
    error: {
      message:
        statusCode >= 500
          ? 'Something went wrong on our end. Please try again shortly.'
          : err.message || 'Invalid request.',
    },
  };

  if (err instanceof ApiError && err.details) {
    responseBody.error.details = err.details;
  }

  if (!env.isProduction && statusCode >= 500) {
    responseBody.error.debug = err.message;
  }

  res.status(statusCode).json(responseBody);
}
