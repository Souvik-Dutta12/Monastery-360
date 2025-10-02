import { detectLanguage, translate, SUPPORTED_LANGUAGES } from '../services/translationService.js';

// @desc    Detect language from text
// @route   POST /api/language/detect
// @access  Public
export const detectTextLanguage = async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ 
        success: false, 
        message: 'Text is required' 
      });
    }
    
    const detectedLanguage = await detectLanguage(text);
    
    res.json({
      success: true,
      language: detectedLanguage,
      languageName: SUPPORTED_LANGUAGES[detectedLanguage] || 'Unknown'
    });
  } catch (error) {
    console.error('Language detection error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error detecting language' 
    });
  }
};

// @desc    Translate text to target language
// @route   POST /api/language/translate
// @access  Public
export const translateText = async (req, res) => {
  try {
    const { text, targetLanguage, sourceLanguage } = req.body;
    
    if (!text || !targetLanguage) {
      return res.status(400).json({ 
        success: false, 
        message: 'Text and target language are required' 
      });
    }
    
    // Check if target language is supported
    if (!Object.keys(SUPPORTED_LANGUAGES).includes(targetLanguage)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Unsupported target language' 
      });
    }
    
    const translatedText = await translate(text, targetLanguage, sourceLanguage || 'en');
    
    res.json({
      success: true,
      originalText: text,
      translatedText,
      targetLanguage,
      sourceLanguage: sourceLanguage || 'en'
    });
  } catch (error) {
    console.error('Translation error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error translating text' 
    });
  }
};

// @desc    Get supported languages
// @route   GET /api/language/supported
// @access  Public
export const getSupportedLanguages = (req, res) => {
  try {
    res.json({
      success: true,
      languages: SUPPORTED_LANGUAGES
    });
  } catch (error) {
    console.error('Error getting supported languages:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error getting supported languages' 
    });
  }
};