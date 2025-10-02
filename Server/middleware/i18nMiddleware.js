import { SUPPORTED_LANGUAGES, detectLanguage } from '../services/translationService.js';

// Default language
const DEFAULT_LANGUAGE = 'en';

// i18n middleware
export const i18nMiddleware = async (req, res, next) => {
  try {
    // Get language from query parameter, header, or cookie
    let lang = req.query.lang || req.headers['accept-language'] || req.cookies?.lang || DEFAULT_LANGUAGE;
    
    // Extract primary language code (e.g., 'en-US' -> 'en')
    lang = lang.split('-')[0].toLowerCase();
    
    // Check if language is supported, otherwise use default
    if (!Object.keys(SUPPORTED_LANGUAGES).includes(lang)) {
      lang = DEFAULT_LANGUAGE;
    }
    
    // Attach language to request object
    req.language = lang;
    
    next();
  } catch (error) {
    console.error('i18n middleware error:', error);
    req.language = DEFAULT_LANGUAGE;
    next();
  }
};

// Auto-detect language middleware (uses content to detect language)
export const autoDetectLanguage = async (req, res, next) => {
  try {
    // Check if req.body exists and has content
    if (!req.body || typeof req.body !== 'object') {
      return next();
    }
    
    // Try to find text content in common request body properties
    const textToDetect = req.body.content || 
                         req.body.text || 
                         req.body.message || 
                         req.body.query || 
                         (typeof req.body.q === 'string' ? req.body.q : null);
    
    if (!textToDetect) {
      return next();
    }
    
    // Detect language from content
    const detectedLang = await detectLanguage(textToDetect);
    req.detectedLanguage = detectedLang;
    
    next();
  } catch (error) {
    console.error('Language detection error:', error);
    next();
  }
};