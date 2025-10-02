import { translate } from '../services/translationService.js';

// Fields that should be translated in responses
const TRANSLATABLE_FIELDS = ['name', 'description', 'history', 'message'];

// Middleware to translate API responses
export const translateResponse = async (req, res, next) => {
  // Store the original json method
  const originalJson = res.json;
  
  // Override the json method
  res.json = async function(data) {
    // If no language specified or language is English, return original data
    if (!req.language || req.language === 'en') {
      return originalJson.call(this, data);
    }
    
    try {
      // Translate the response data
      const translatedData = await translateObject(data, req.language);
      return originalJson.call(this, translatedData);
    } catch (error) {
      console.error('Translation middleware error:', error);
      // Return original data if translation fails
      return originalJson.call(this, data);
    }
  };
  
  next();
};

// Helper function to translate an object recursively
const translateObject = async (obj, targetLanguage) => {
  if (!obj) return obj;
  
  // Handle arrays
  if (Array.isArray(obj)) {
    const translatedArray = [];
    for (const item of obj) {
      translatedArray.push(await translateObject(item, targetLanguage));
    }
    return translatedArray;
  }
  
  // Handle objects
  if (typeof obj === 'object') {
    const translatedObj = {};
    for (const [key, value] of Object.entries(obj)) {
      if (TRANSLATABLE_FIELDS.includes(key) && typeof value === 'string') {
        // Translate string fields that are in the translatable fields list
        translatedObj[key] = await translate(value, targetLanguage);
      } else {
        // Recursively translate nested objects
        translatedObj[key] = await translateObject(value, targetLanguage);
      }
    }
    return translatedObj;
  }
  
  // Return primitive values as is
  return obj;
};