import { body } from 'express-validator';

export const contactValidationRules = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required.')
    .isLength({ min: 2, max: 150 })
    .withMessage('Name must be between 2 and 150 characters.')
    .matches(/^[\p{L}\p{M}\s.'-]+$/u)
    .withMessage('Name contains characters that are not allowed.'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required.')
    .isEmail()
    .withMessage('Please provide a valid email address.')
    .isLength({ max: 255 })
    .withMessage('Email is too long.')
    .normalizeEmail(),

  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required.')
    .isLength({ min: 10, max: 3000 })
    .withMessage('Message must be between 10 and 3000 characters.'),

];
