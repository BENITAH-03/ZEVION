import { Router } from 'express';
import healthRoutes from './healthRoutes.js';
import contentRoutes from './contentRoutes.js';
import productsRoutes from './productsRoutes.js';
import featuresRoutes from './featuresRoutes.js';
import contactRoutes from './contactRoutes.js';

const router = Router();

router.use('/health', healthRoutes);
router.use('/content', contentRoutes);
router.use('/products', productsRoutes);
router.use('/features', featuresRoutes);
router.use('/contact', contactRoutes);

export default router;
