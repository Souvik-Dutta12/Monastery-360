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

// Translation service using external API
export const translateText = async (text, targetLanguage, sourceLanguage = 'en') => {
  try {
    // Using a translation API (replace with your preferred service)
    const response = await axios.post(
      `${process.env.TRANSLATION_API_URL}`,
      {
        q: text,
        source: sourceLanguage,
        target: targetLanguage,
        format: 'text'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.TRANSLATION_API_KEY}`
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

// Detect language from text
export const detectLanguage = async (text) => {
  try {
    const response = await axios.post(
      `${process.env.LANGUAGE_DETECTION_API_URL}`,
      {
        q: text
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.TRANSLATION_API_KEY}`
        }
      }
    );

    return response.data.language;
  } catch (error) {
    console.error('Language detection error:', error);
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