import User from '../models/User.js';
import Monastery from '../models/Monastery.js';
import Tour from '../models/Tour.js';
import { getMonasteryRecommendations, getTourRecommendations } from '../services/recommendationService.js';

// @desc    Get personalized monastery recommendations
// @route   GET /api/recommendations/monasteries
// @access  Private
export const getPersonalizedMonasteries = async (req, res) => {
  try {
    const userId = req.user._id;
    const language = req.language || 'en';
    
    // Get user with preferences and history
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    // Get all monasteries
    const monasteries = await Monastery.find({});
    
    // Generate recommendations
    const recommendations = await getMonasteryRecommendations(user, monasteries, language);
    
    res.json({
      success: true,
      count: recommendations.length,
      data: recommendations
    });
  } catch (error) {
    console.error('Monastery recommendation error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error generating monastery recommendations' 
    });
  }
};

// @desc    Get personalized tour recommendations
// @route   GET /api/recommendations/tours
// @access  Private
export const getPersonalizedTours = async (req, res) => {
  try {
    const userId = req.user._id;
    const language = req.language || 'en';
    
    // Get user with preferences and history
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    // Get all tours
    const tours = await Tour.find({});
    
    // Generate recommendations
    const recommendations = await getTourRecommendations(user, tours, language);
    
    res.json({
      success: true,
      count: recommendations.length,
      data: recommendations
    });
  } catch (error) {
    console.error('Tour recommendation error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error generating tour recommendations' 
    });
  }
};