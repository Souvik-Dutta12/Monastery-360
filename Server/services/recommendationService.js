import { translate } from './translationService.js';

/**
 * Generate personalized monastery recommendations based on user preferences and history
 * @param {Object} user - User object with preferences and history
 * @param {Array} monasteries - Available monasteries data
 * @param {String} language - Target language for recommendations
 * @returns {Array} - Recommended monasteries with explanation
 */
export const getMonasteryRecommendations = async (user, monasteries, language = 'en') => {
  try {
    // Extract user preferences and history
    const { preferences = {}, visitHistory = [] } = user;
    const { interests = [], preferredLocations = [] } = preferences;
    
    // Filter out monasteries user has already visited
    const visitedIds = visitHistory.map(visit => visit.monasteryId.toString());
    const unvisitedMonasteries = monasteries.filter(
      monastery => !visitedIds.includes(monastery._id.toString())
    );
    
    // Score each monastery based on user preferences
    const scoredMonasteries = unvisitedMonasteries.map(monastery => {
      let score = 0;
      
      // Score based on matching interests
      if (interests && interests.length > 0) {
        const monasteryFeatures = monastery.features || [];
        const matchingInterests = interests.filter(interest => 
          monasteryFeatures.some(feature => 
            feature.toLowerCase().includes(interest.toLowerCase())
          )
        );
        score += matchingInterests.length * 2;
      }
      
      // Score based on preferred locations
      if (preferredLocations && preferredLocations.length > 0) {
        if (preferredLocations.some(loc => 
          monastery.location.toLowerCase().includes(loc.toLowerCase())
        )) {
          score += 3;
        }
      }
      
      // Score based on ratings
      if (monastery.averageRating) {
        score += monastery.averageRating;
      }
      
      return { monastery, score };
    });
    
    // Sort by score and take top 5
    const recommendations = scoredMonasteries
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(item => item.monastery);
    
    // Generate explanation for each recommendation
    const recommendationsWithReason = await Promise.all(recommendations.map(async monastery => {
      let reason = `This monastery was recommended based on your interests`;
      
      if (language !== 'en') {
        reason = await translate(reason, language);
      }
      
      return {
        ...monastery.toObject(),
        recommendationReason: reason
      };
    }));
    
    return recommendationsWithReason;
  } catch (error) {
    console.error('Recommendation error:', error);
    return [];
  }
};

/**
 * Generate tour recommendations based on user preferences and history
 * @param {Object} user - User object with preferences and history
 * @param {Array} tours - Available tours data
 * @param {String} language - Target language for recommendations
 * @returns {Array} - Recommended tours with explanation
 */
export const getTourRecommendations = async (user, tours, language = 'en') => {
  try {
    // Extract user preferences and booking history
    const { preferences = {}, bookingHistory = [] } = user;
    const { interests = [], budget = 0, preferredDuration = 0 } = preferences;
    
    // Filter out tours user has already booked
    const bookedTourIds = bookingHistory.map(booking => booking.tourId.toString());
    const unbookedTours = tours.filter(
      tour => !bookedTourIds.includes(tour._id.toString())
    );
    
    // Score each tour based on user preferences
    const scoredTours = unbookedTours.map(tour => {
      let score = 0;
      
      // Score based on budget (higher score for tours within budget)
      if (budget > 0 && tour.price <= budget) {
        score += 3;
      }
      
      // Score based on preferred duration
      if (preferredDuration > 0) {
        const durationDiff = Math.abs(tour.duration - preferredDuration);
        score += Math.max(0, 5 - durationDiff); // Higher score for closer match
      }
      
      // Score based on matching interests with tour description
      if (interests && interests.length > 0) {
        const matchingInterests = interests.filter(interest => 
          tour.description.toLowerCase().includes(interest.toLowerCase())
        );
        score += matchingInterests.length * 2;
      }
      
      return { tour, score };
    });
    
    // Sort by score and take top 5
    const recommendations = scoredTours
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(item => item.tour);
    
    // Generate explanation for each recommendation
    const recommendationsWithReason = await Promise.all(recommendations.map(async tour => {
      let reason = `This tour matches your preferences for duration and budget`;
      
      if (language !== 'en') {
        reason = await translate(reason, language);
      }
      
      return {
        ...tour.toObject(),
        recommendationReason: reason
      };
    }));
    
    return recommendationsWithReason;
  } catch (error) {
    console.error('Tour recommendation error:', error);
    return [];
  }
};