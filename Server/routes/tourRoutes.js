import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.json({ message: 'Get all tours' });
  })
  .post(protect, admin, (req, res) => {
    res.json({ message: 'Create tour' });
  });

router.route('/:id')
  .get((req, res) => {
    res.json({ message: `Get tour with id ${req.params.id}` });
  })
  .put(protect, admin, (req, res) => {
    res.json({ message: `Update tour with id ${req.params.id}` });
  })
  .delete(protect, admin, (req, res) => {
    res.json({ message: `Delete tour with id ${req.params.id}` });
  });

export default router;