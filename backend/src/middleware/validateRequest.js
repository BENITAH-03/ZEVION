import { validationResult } from 'express-validator';
import { ApiError } from './errorHandler.js';

/**
 * Runs after express-validator rules and turns any validation failures
 * into a safe 400 response. Frontend validation is never trusted alone;
 * this is the real gate.
 */
export function validateRequest(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const details = errors.array().map((e) => ({
      field: e.path,
      message: e.msg,
    }));
    return next(new ApiError(400, 'Please check the highlighted fields and try again.', details));
  }
  next();
}
