import { Router } from 'express';
import { listContent, getContentBySectionKey } from '../../controllers/contentController.js';

const router = Router();

router.get('/', listContent);
router.get('/:sectionKey', getContentBySectionKey);

export default router;
