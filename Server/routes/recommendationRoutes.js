import express from 'express';
import { getPersonalizedMonasteries, getPersonalizedTours } from '../controllers/recommendationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/monasteries', protect, getPersonalizedMonasteries);
router.get('/tours', protect, getPersonalizedTours);

export default router;