import rateLimit from 'express-rate-limit';
import { env } from '../config/env.js';

function rateLimitHandler(req, res) {
  res.status(429).json({
    success: false,
    error: {
      message: 'Too many requests. Please wait a moment and try again.',
    },
  });
}

// Generous limit for general read-only API traffic.
export const generalApiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  handler: rateLimitHandler,
});

// Stricter limit specifically for the public contact form to prevent spam.
export const contactFormLimiter = rateLimit({
  windowMs: env.contactRateLimitWindowMinutes * 60 * 1000,
  max: env.contactRateLimitMax,
  standardHeaders: true,
  legacyHeaders: false,
  handler: rateLimitHandler,
  message: undefined,
});
