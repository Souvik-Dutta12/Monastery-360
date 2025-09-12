export const tourData = {
  North: {
    title: 'Northern Sikkim Adventure',
    duration: '3-4 days',
    difficulty: 'Moderate',
    highlights: ['Lachen Monastery', 'Gurudongmar Lake', 'Yumthang Valley'],
    itinerary: [
      { day: 1, title: 'Gangtok to Lachen', activities: ['Depart early morning', 'Visit Rumtek Monastery', 'Reach Lachen by evening'] },
      { day: 2, title: 'Gurudongmar Lake', activities: ['Early morning drive', 'Sacred lake visit', 'Return to Lachen'] },
      { day: 3, title: 'Yumthang Valley', activities: ['Valley exploration', 'Hot springs', 'Return to Gangtok'] }
    ],
    vrSpots: ['Lachen Monastery', 'Gurudongmar Lake', 'Yumthang Valley'],
    aiTips: [
      'Best visited between March-June and September-November',
      'Permits required for foreign tourists',
      'Pack warm clothing - temperatures can drop below freezing',
      'Altitude sickness precautions recommended'
    ]
  },
  South: {
    title: 'Southern Sikkim Heritage',
    duration: '2-3 days',
    difficulty: 'Easy',
    highlights: ['Namchi Monastery', 'Ravangla Buddha', 'Temi Tea Garden'],
    itinerary: [
      { day: 1, title: 'Gangtok to Namchi', activities: ['Visit Namchi Monastery', 'Explore local markets', 'Stay overnight'] },
      { day: 2, title: 'Ravangla & Temi', activities: ['Ravangla Buddha statue', 'Temi Tea Garden tour', 'Return to Gangtok'] }
    ],
    vrSpots: ['Namchi Monastery', 'Ravangla Buddha', 'Temi Tea Garden'],
    aiTips: [
      'Perfect for families and first-time visitors',
      'Tea tasting experiences available',
      'Moderate climate year-round',
      'Local handicrafts shopping opportunities'
    ]
  },
  East: {
    title: 'Eastern Sikkim Discovery',
    duration: '2-3 days',
    difficulty: 'Easy',
    highlights: ['Gangtok City', 'Rumtek Monastery', 'Enchey Monastery'],
    itinerary: [
      { day: 1, title: 'Gangtok Exploration', activities: ['City tour', 'MG Marg shopping', 'Local cuisine'] },
      { day: 2, title: 'Monastery Circuit', activities: ['Rumtek Monastery', 'Enchey Monastery', 'Tashi Viewpoint'] }
    ],
    vrSpots: ['Rumtek Monastery', 'Enchey Monastery', 'Gangtok City'],
    aiTips: [
      'Capital city with modern amenities',
      'Best shopping and dining options',
      'Multiple monastery visits possible',
      'Cable car rides available'
    ]
  },
  West: {
    title: 'Western Sikkim Trek',
    duration: '4-5 days',
    difficulty: 'Challenging',
    highlights: ['Pemayangtse Monastery', 'Tashiding Monastery', 'Yuksom Base Camp'],
    itinerary: [
      { day: 1, title: 'Gangtok to Pemayangtse', activities: ['Long drive', 'Monastery visit', 'Local stay'] },
      { day: 2, title: 'Tashiding & Yuksom', activities: ['Tashiding Monastery', 'Yuksom exploration', 'Trek preparation'] },
      { day: 3, title: 'Kanchenjunga Base Camp', activities: ['Trekking begins', 'Base camp reach', 'Mountain views'] }
    ],
    vrSpots: ['Pemayangtse Monastery', 'Tashiding Monastery', 'Kanchenjunga Base Camp'],
    aiTips: [
      'Most challenging but rewarding route',
      'Trekking permits required',
      'Best for adventure enthusiasts',
      'Stunning mountain views guaranteed'
    ]
  }
}

export const mustVisitSections = [
  {
    title: 'Sacred Monasteries',
    icon: 'ri-building-line',
    count: '200+',
    description: 'Ancient Buddhist monasteries with rich history',
    highlights: ['Rumtek Monastery', 'Pemayangtse Monastery', 'Tashiding Monastery']
  },
  {
    title: 'Natural Wonders',
    icon: 'ri-landscape-line',
    count: '50+',
    description: 'Breathtaking landscapes and pristine nature',
    highlights: ['Gurudongmar Lake', 'Yumthang Valley', 'Kanchenjunga Base Camp']
  },
  {
    title: 'Cultural Heritage',
    icon: 'ri-ancient-pavilion-line',
    count: '100+',
    description: 'Traditional villages and cultural sites',
    highlights: ['Lachen Village', 'Yuksom Heritage', 'Namchi Cultural Center']
  },
  {
    title: 'Adventure Spots',
    icon: 'ri-hiking-line',
    count: '30+',
    description: 'Trekking routes and adventure activities',
    highlights: ['Goecha La Trek', 'Singalila Ridge', 'Dzongri Trek']
  }
]

export const vrExperiences = [
  { 
    title: 'Monastery VR Tours', 
    desc: 'Walk through ancient monasteries in 360°',
    icon: 'ri-building-line',
    features: ['360° Views', 'Audio Guides', 'Historical Context']
  },
  { 
    title: 'Nature VR Experiences', 
    desc: 'Explore pristine landscapes virtually',
    icon: 'ri-landscape-line',
    features: ['Mountain Views', 'Lake Experiences', 'Wildlife Spotting']
  },
  { 
    title: 'Cultural VR Immersion', 
    desc: 'Experience local traditions and festivals',
    icon: 'ri-ancient-pavilion-line',
    features: ['Festival Participation', 'Traditional Crafts', 'Local Cuisine']
  }
]

export const regionHighlights = {
  North: ['Gurudongmar Lake', 'Lachen Monastery', 'Yumthang Valley', 'Zero Point'],
  South: ['Namchi Monastery', 'Ravangla Buddha', 'Temi Tea Garden', 'Char Dham'],
  East: ['Rumtek Monastery', 'Enchey Monastery', 'MG Marg', 'Tashi Viewpoint'],
  West: ['Pemayangtse Monastery', 'Tashiding Monastery', 'Yuksom', 'Kanchenjunga Base Camp']
}

export const regionDescriptions = {
  North: 'Explore the pristine beauty of Northern Sikkim with its high-altitude lakes, monasteries, and breathtaking mountain views.',
  South: 'Discover the cultural heritage of Southern Sikkim with its monasteries, tea gardens, and traditional villages.',
  East: 'Experience the capital region with modern amenities, ancient monasteries, and vibrant city life.',
  West: 'Embark on challenging treks and explore ancient monasteries in the western region of Sikkim.'
}
