import { generateAIResponse, getMonasteryInfo, getFallbackResponse } from '../services/aiChatbotService.js';

// @desc    Get AI response for user query
// @route   POST /api/chatbot/query
// @access  Public
export const getChatbotResponse = async (req, res) => {
  try {
    const { query, monasteryId } = req.body;
    const language = req.language || 'en';
    
    if (!query) {
      return res.status(400).json({ 
        success: false, 
        message: 'Query is required' 
      });
    }
    
    let response;
    
    // If monastery ID is provided, get specific monastery info
    if (monasteryId) {
      response = await getMonasteryInfo(query, monasteryId, language);
    } else {
      // Otherwise, generate a general AI response
      response = await generateAIResponse(query, language);
    }
    
    res.json({
      success: true,
      query,
      response,
      language
    });
  } catch (error) {
    console.error('Chatbot error:', error);
    
    // Use fallback response in case of error
    const fallbackResponse = await getFallbackResponse(req.body.query, req.language || 'en');
    
    res.status(200).json({ 
      success: true,
      query: req.body.query,
      response: fallbackResponse,
      language: req.language || 'en',
      isError: true
    });
  }
};