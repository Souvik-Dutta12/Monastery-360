import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Supported languages (expanded to include all LibreTranslate languages)
export const SUPPORTED_LANGUAGES = {
  en: 'English',
  ar: 'Arabic',
  az: 'Azerbaijani',
  zh: 'Chinese',
  cs: 'Czech',
  da: 'Danish',
  nl: 'Dutch',
  eo: 'Esperanto',
  fi: 'Finnish',
  fr: 'French',
  de: 'German',
  el: 'Greek',
  he: 'Hebrew',
  hi: 'Hindi',
  hu: 'Hungarian',
  id: 'Indonesian',
  ga: 'Irish',
  it: 'Italian',
  ja: 'Japanese',
  ko: 'Korean',
  fa: 'Persian',
  pl: 'Polish',
  pt: 'Portuguese',
  ru: 'Russian',
  sk: 'Slovak',
  es: 'Spanish',
  sv: 'Swedish',
  tr: 'Turkish',
  uk: 'Ukrainian',
  vi: 'Vietnamese',
  // Indian languages
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

    const response = await fetch("https://libretranslate.com/detect", {
      method: "POST",
      body: JSON.stringify({
        q: text,
      }),
      headers: { "Content-Type": "application/json" },
    });


    const detections = await response.json();
    console.log(detections);

    if (detections && detections.length > 0) {
      const detectedLang = detections[0].language;
      if (SUPPORTED_LANGUAGES.hasOwnProperty(detectedLang)) {
        return detectedLang;
      }
    }

    const englishPattern = /^[A-Za-z0-9\s.,?!;:'"\-()]+$/;
    if (englishPattern.test(text.substring(0, 100))) {
      return 'en';
    }

    return 'en';
  } catch (error) {
    console.error('Language detection error:', error.message);
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