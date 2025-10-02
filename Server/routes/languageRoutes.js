import express from 'express';
import { detectTextLanguage, translateText, getSupportedLanguages } from '../controllers/languageController.js';

const router = express.Router();

router.post('/detect', detectTextLanguage);
router.post('/translate', translateText);
router.get('/supported', getSupportedLanguages);

export default router;