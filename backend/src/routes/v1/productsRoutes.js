import { Router } from 'express';
import { listProducts, getProductBySlug } from '../../controllers/productsController.js';

const router = Router();

router.get('/', listProducts);
router.get('/:slug', getProductBySlug);

export default router;
