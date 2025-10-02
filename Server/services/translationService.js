import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Supported languages
export const SUPPORTED_LANGUAGES = {
  en: 'English',
  hi: 'Hindi',
  bn: 'Bengali',
  ne: 'Nepali',
  ta: 'Tamil',
  te: 'Telugu',
  kn: 'Kannada',
  ml: 'Malayalam',
  pa: 'Punjabi',
  gu: 'Gujarati',
  mr: 'Marathi',
  or: 'Odia',
  as: 'Assamese',
  si: 'Sikkimese'
};

// Translation service using LibreTranslate API (no API key required)
export const translateText = async (text, targetLanguage, sourceLanguage = 'en') => {
  try {
    // Using LibreTranslate API
    const response = await axios.post(
      process.env.TRANSLATION_API_URL || 'https://libretranslate.com/translate',
      {
        q: text,
        source: sourceLanguage,
        target: targetLanguage,
        format: 'text'
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    // Return original text if translation fails
    return text;
  }
};

// Detect language from text using a combination of approaches
export const detectLanguage = async (text) => {
  try {
    // Simple language detection for common Indian languages based on script
    const hindiPattern = /[\u0900-\u097F]/; // Devanagari script (Hindi)
    const bengaliPattern = /[\u0980-\u09FF]/; // Bengali script
    const tamilPattern = /[\u0B80-\u0BFF]/; // Tamil script
    const teluguPattern = /[\u0C00-\u0C7F]/; // Telugu script
    const kannadaPattern = /[\u0C80-\u0CFF]/; // Kannada script
    const malayalamPattern = /[\u0D00-\u0D7F]/; // Malayalam script
    const gujaratiPattern = /[\u0A80-\u0AFF]/; // Gujarati script
    const punjabiPattern = /[\u0A00-\u0A7F]/; // Gurmukhi script (Punjabi)
    const oriyaPattern = /[\u0B00-\u0B7F]/; // Oriya script
    
    // Check for script patterns first (more reliable for Indian languages)
    if (hindiPattern.test(text)) return 'hi';
    if (bengaliPattern.test(text)) return 'bn';
    if (tamilPattern.test(text)) return 'ta';
    if (teluguPattern.test(text)) return 'te';
    if (kannadaPattern.test(text)) return 'kn';
    if (malayalamPattern.test(text)) return 'ml';
    if (gujaratiPattern.test(text)) return 'gu';
    if (punjabiPattern.test(text)) return 'pa';
    if (oriyaPattern.test(text)) return 'or';
    
    // For other languages or if script detection fails, use LibreTranslate
    // Limit text length to avoid large payloads
    const truncatedText = text.substring(0, 500);
    
    // Use a more reliable LibreTranslate instance
    const response = await axios.post(
      process.env.LANGUAGE_DETECTION_API_URL || 'https://libretranslate.com/detect',
      {
        q: truncatedText
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ); 

    // LibreTranslate returns an array of detected languages with confidence scores
    const detections = response.data;
    if (detections && detections.length > 0) {
      const detectedLang = detections[0].language;
      
      // Check if the detected language is in our supported languages
      if (Object.keys(SUPPORTED_LANGUAGES).includes(detectedLang)) {
        return detectedLang;
      }
    }
    
    // If no language detected or not in our supported languages, check if it's English text
    const englishPattern = /^[A-Za-z0-9\s.,?!;:'"\-()]+$/;
    if (englishPattern.test(text.substring(0, 100))) {
      return 'en';
    }
    
    // Default to English if all detection methods fail
    return 'en';
  } catch (error) {
    console.error('Language detection error:', error.message);
    // Default to English if detection fails
    return 'en';
  }
};

// Fallback translation using predefined dictionaries for common phrases
const commonPhrases = {
  'Welcome to Monastery 360': {
    hi: 'मोनास्ट्री 360 में आपका स्वागत है',
    bn: 'মোনাস্টারি 360 এ আপনাকে স্বাগতম',
    ne: 'मोनास्ट्री 360 मा स्वागत छ',
    // Add more languages as needed
  },
  'Explore Monasteries': {
    hi: 'मठों का अन्वेषण करें',
    bn: 'মোনাস্টারি অন্বেষণ করুন',
    ne: 'मठहरू अन्वेषण गर्नुहोस्',
    // Add more languages as needed
  }
  // Add more common phrases
};

// Fallback translation function
export const getLocalTranslation = (text, targetLanguage) => {
  if (targetLanguage === 'en') return text;
  
  if (commonPhrases[text] && commonPhrases[text][targetLanguage]) {
    return commonPhrases[text][targetLanguage];
  }
  
  return text; // Return original if no translation found
};

// Combined translation function that tries API first, then falls back to local
export const translate = async (text, targetLanguage, sourceLanguage = 'en') => {
  try {
    // Try API translation first
    const apiTranslation = await translateText(text, targetLanguage, sourceLanguage);
    return apiTranslation;
  } catch (error) {
    // Fall back to local translation
    return getLocalTranslation(text, targetLanguage);
  }
};