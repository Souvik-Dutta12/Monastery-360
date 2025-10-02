import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, (req, res) => {
    res.json({ message: 'Get all bookings for current user' });
  })
  .post(protect, (req, res) => {
    res.json({ message: 'Create new booking' });
  });

router.route('/:id')
  .get(protect, (req, res) => {
    res.json({ message: `Get booking with id ${req.params.id}` });
  })
  .put(protect, (req, res) => {
    res.json({ message: `Update booking with id ${req.params.id}` });
  })
  .delete(protect, (req, res) => {
    res.json({ message: `Cancel booking with id ${req.params.id}` });
  });

export default router;