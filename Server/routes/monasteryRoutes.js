import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Import controllers when they're created
// For now, we'll create placeholder routes
router.route('/')
  .get((req, res) => {
    res.json({ message: 'Get all monasteries' });
  })
  .post(protect, admin, (req, res) => {
    res.json({ message: 'Create monastery' });
  });

router.route('/:id')
  .get((req, res) => {
    res.json({ message: `Get monastery with id ${req.params.id}` });
  })
  .put(protect, admin, (req, res) => {
    res.json({ message: `Update monastery with id ${req.params.id}` });
  })
  .delete(protect, admin, (req, res) => {
    res.json({ message: `Delete monastery with id ${req.params.id}` });
  });

export default router;