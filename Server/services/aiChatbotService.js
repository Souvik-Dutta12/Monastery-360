import axios from 'axios';
import dotenv from 'dotenv';
import { translate } from './translationService.js';
import mongoose from 'mongoose';


dotenv.config();

// AI model configuration
const AI_MODEL_URL = process.env.AI_MODEL_URL || 'https://api.openai.com/v1/chat/completions';
const AI_MODEL_KEY = process.env.AI_MODEL_KEY;

// Context for the monastery information
const MONASTERY_CONTEXT = `
You are an AI assistant for Monastery 360, a platform that provides information about monasteries in Sikkim, India.
You can provide information about monastery history, architecture, cultural significance, visiting hours, and more.
Always be respectful when discussing religious and cultural topics.
`;

// Generate AI response for user queries
export const generateAIResponse = async (query, language = 'en') => {
  try {
    // Translate query to English if needed
    const translatedQuery = language !== 'en' 
      ? await translate(query, 'en', language) 
      : query;
    
    // Call AI model API
    const response = await axios.post(
      AI_MODEL_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: MONASTERY_CONTEXT },
          { role: 'user', content: translatedQuery }
        ],
        max_tokens: 500,
        temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AI_MODEL_KEY}`
        }
      }
    );
    
    const aiResponse = response.data.choices[0].message.content;
    
    // Translate response back to user's language if needed
    const finalResponse = language !== 'en' 
      ? await translate(aiResponse, language, 'en') 
      : aiResponse;
    
    return {
      success: true,
      response: finalResponse
    };
  } catch (error) {
    console.error('AI chatbot error:', error);
    return {
      success: false,
      response: 'I apologize, but I am unable to process your request at the moment. Please try again later.'
    };
  }
};

// Get monastery-specific information
export const getMonasteryInfo = async (monasteryId, query, language = 'en') => {
  try {
    // Validate monasteryId
    if (!mongoose.Types.ObjectId.isValid(monasteryId)) {
      return {
        success: false,
        response: 'Invalid monastery ID'
      };
    }
    
    // Get monastery data from database
    const Monastery = mongoose.model('Monastery');
    const monastery = await Monastery.findById(monasteryId);
    
    if (!monastery) {
      return {
        success: false,
        response: 'Monastery not found'
      };
    }
    
    // Create monastery-specific context
    const monasteryContext = `
      ${MONASTERY_CONTEXT}
      
      Information about ${monastery.name}:
      Location: ${monastery.location}
      Description: ${monastery.description}
      History: ${monastery.history || 'Not available'}
      Features: ${monastery.features?.join(', ') || 'Not available'}
      Opening Hours: ${monastery.openingHours || 'Not available'}
    `;
    
    // Call AI model with monastery context
    const response = await axios.post(
      AI_MODEL_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: monasteryContext },
          { role: 'user', content: query }
        ],
        max_tokens: 500,
        temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AI_MODEL_KEY}`
        }
      }
    );
    
    const aiResponse = response.data.choices[0].message.content;
    
    // Translate response if needed
    const finalResponse = language !== 'en' 
      ? await translate(aiResponse, language, 'en') 
      : aiResponse;
    
    return {
      success: true,
      response: finalResponse
    };
  } catch (error) {
    console.error('Monastery AI info error:', error);
    return {
      success: false,
      response: 'I apologize, but I am unable to provide information about this monastery at the moment.'
    };
  }
};

// Fallback responses when AI service is unavailable
const fallbackResponses = {
  'en': 'I apologize, but I am unable to process your request at the moment. Please try again later.',
  'hi': 'मुझे क्षमा करें, लेकिन मैं इस समय आपके अनुरोध को संसाधित करने में असमर्थ हूं। कृपया बाद में पुनः प्रयास करें।',
  'bn': 'আমি দুঃখিত, কিন্তু আমি এই মুহূর্তে আপনার অনুরোধ প্রক্রিয়া করতে অক্ষম। অনুগ্রহ করে পরে আবার চেষ্টা করুন।',
  'ne': 'म क्षमा चाहन्छु, तर म यस समयमा तपाईंको अनुरोध प्रशोधन गर्न असमर्थ छु। कृपया पछि फेरि प्रयास गर्नुहोस्।'
};

// Get fallback response in the appropriate language
export const getFallbackResponse = (language = 'en') => {
  return fallbackResponses[language] || fallbackResponses['en'];
};