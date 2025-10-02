import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, admin, (req, res) => {
    res.json({ message: 'Get all users' });
  });

router.route('/:id')
  .get(protect, (req, res) => {
    res.json({ message: `Get user with id ${req.params.id}` });
  })
  .put(protect, (req, res) => {
    res.json({ message: `Update user with id ${req.params.id}` });
  })
  .delete(protect, admin, (req, res) => {
    res.json({ message: `Delete user with id ${req.params.id}` });
  });

export default router;