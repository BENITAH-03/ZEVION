import { Router } from 'express';
import { submitContactMessage } from '../../controllers/contactController.js';
import { contactValidationRules } from '../../validators/contactValidator.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import { contactFormLimiter } from '../../middleware/rateLimiters.js';

const router = Router();

router.post('/', contactFormLimiter, contactValidationRules, validateRequest, submitContactMessage);

export default router;
