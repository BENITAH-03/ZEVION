import { Router } from 'express';
import { listFeatures } from '../../controllers/featuresController.js';

const router = Router();

router.get('/', listFeatures);

export default router;
