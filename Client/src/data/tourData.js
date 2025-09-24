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
    icon: 'ri-treasure-map-line',
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

export const sidebarItems = [
  { key: 'Monasteries', icon: 'ri-dashboard-line' },
  { key: 'Users', icon: 'ri-user-line' },
  { key: 'Tours', icon: 'ri-compass-3-line' },
  { key: 'Archives', icon: 'ri-article-line' },
  { key: 'Analytics', icon: 'ri-line-chart-fill' },
  { key: 'Bookings', icon: 'ri-calendar-check-line' },
  { key: 'Pricing', icon: 'ri-price-tag-3-line' },
  { key: 'Status', icon: 'ri-wifi-line' },
  { key: 'Profile', icon: 'ri-user-3-line' },
]

export const pricingPlans = [
  {
    name: 'Explorer',
    price: 'Free',
    color: 'from-amber-200 to-red-200',
    text: 'text-red-900',
    features: [
      'Basic VR tours (limited)',
      'Community events (view only)',
      'Email support',
    ],
    cta: 'Get Started'
  },
  {
    name: 'Traveler',
    price: '₹499/mo',
    color: 'from-amber-300 to-red-400',
    text: 'text-red-900',
    features: [
      'Unlimited VR tours',
      'AI cultural guide (standard)',
      'Audio guidance offline',
      'Bookings with reminders',
    ],
    cta: 'Upgrade'
  },
  {
    name: 'Researcher',
    price: '₹1,499/mo',
    color: 'from-amber-400 to-red-600',
    text: 'text-amber-50',
    features: [
      'All Traveler features',
      'Digital archives access',
      'Advanced search & filters',
      'Priority support',
    ],
    cta: 'Choose Plan'
  },
]

export const sampleBookings = [
  { id: 'B-1001', name: 'Amit Sharma', email: 'amit@example.com', date: '2025-09-20', time: '10:00', people: 2, tour: 'Rumtek Monastery', status: 'Confirmed' },
  { id: 'B-1002', name: 'Priya Singh', email: 'priya@example.com', date: '2025-09-22', time: '14:00', people: 4, tour: 'Pemayangtse Monastery', status: 'Pending' },
]

export const statusDefaults = {
  online: true,
  audioOffline: true,
  latencyMs: 42,
}

export const regions = ['East', 'West', 'South', 'North']

export const regionToMonasteries = {
 "East": [
    {
      "id": "rumtek",
      "name": "Rumtek Monastery",
      "about": "Rumtek Monastery, built in the 16th century, is one of Sikkim's largest and most significant monasteries, renowned for its Kagyu teachings, golden stupa, and vibrant Tibetan Buddhist architecture.",
      "location": "Gangtok, East Sikkim, India",
      "cover": "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1200x675/Blog_20241231-1706054417-1735621009.jpeg",
      "images": [
        "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1200x675/Blog_20241231-1706054417-1735621009.jpeg",
        "https://media.istockphoto.com/id/2228503994/photo/rumtek-monastery-in-lush-green-hills-of-himalayas.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vv1bFTkog_h0Ma1pvqTMzUM5sDbv04S70gfBnwHsBF4=",
        "https://media.istockphoto.com/id/622223788/photo/the-enchey-monastery.webp?a=1&b=1&s=612x612&w=0&k=20&c=JTwVxOrLCRPG1gu_t6KIIG8x28BJemWow8l7WFgaYgA=",
        "https://media.istockphoto.com/id/2225606046/photo/interior-of-rumtek-monastery-also-known-as-the-dharma-chakra-centre-gangtok.webp?a=1&b=1&s=612x612&w=0&k=20&c=0VwgVC-BeYpOI4sdo-PpGRC8aSFo3jZ7-1mF46No1KE="
      ]
    }
  ],
  "West": [
    {
      "id": "pemayangtse",
      "name": "Pemayangtse Monastery",
      "location": "Pelling, West Sikkim, India",
      "about": "Pemayangtse Monastery, founded in the 17th century, is a key Nyingma monastery known for its exquisite wooden sculptures and panoramic views of Kanchenjunga.",
      "cover": "https://s7ap1.scene7.com/is/image/incredibleindia/spiritual-spots-in-pelling-popular?qlt=82&ts=1727335378796",
      "images": [
        "https://s7ap1.scene7.com/is/image/incredibleindia/spiritual-spots-in-pelling-popular?qlt=82&ts=1727335378796",
        "https://media.istockphoto.com/id/186875600/photo/pemayangtse-monastery.webp?a=1&b=1&s=612x612&w=0&k=20&c=ttd0KyJunM5CUfoa1fS-gslQ5vItUTAoLBf7a3S38vQ=",
        "https://images.unsplash.com/photo-1726334937318-dbc03627160d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFBlbWF5YW5ndHNlJTIwTW9uYXN0ZXJ5fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1717738979582-aa23dd492fbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGVtYXlhbmd0c2UlMjBNb25hc3Rlcnl8ZW58MHx8MHx8fDA%3D"
      ]
    },
    {
      "id": "tashiding",
      "name": "Tashiding Monastery",
      "location": "West Sikkim, India",
      "about": "Tashiding Monastery, built in the 17th century, is considered one of the holiest monasteries in Sikkim, famous for its annual Bumchu festival and sacred chortens.",
      "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Mani_stone_slabs_outside_Tashiding_Monastery.jpg/1200px-Mani_stone_slabs_outside_Tashiding_Monastery.jpg",
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Mani_stone_slabs_outside_Tashiding_Monastery.jpg/1200px-Mani_stone_slabs_outside_Tashiding_Monastery.jpg",
        "https://media.istockphoto.com/id/491471378/photo/evening-prayer-flags-in-sangachoeling-monastery-sikkim-tibet-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=UhwsRU-SSbyh8DYyN72UbtAiYyk_ZbUbivBVg34qGBo=",
        "https://www.adotrip.com/public/images/areas/master_images/5c3f0a99aa3ec-Tashiding_Monastery_Attractions.jpg",
        "https://c8.alamy.com/comp/FJ94FC/tashiding-monastery-gangtok-sikkim-india-asia-FJ94FC.jpg"
      ]
    },
    {
      "id": "yuksom",
      "name": "Dubdi Monastery (Yuksom)",
      "location": "Yuksom, West Sikkim, India",
      "about": "Dubdi Monastery, established in 1701, is Sikkim’s oldest monastery and the birthplace of its Buddhist kingdom, surrounded by forests and serene landscapes.",
      "cover": "https://upload.wikimedia.org/wikipedia/commons/0/08/Dubdi_Monastery_2.jpg",
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Dubdi_Monastery_2.jpg",
        "https://images.unsplash.com/photo-1634308670152-17f7f1aa4e79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RHViZGklMjBNb25hc3RlcnklMjAoWXVrc29tKXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1695491883757-f502728f9610?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RHViZGklMjBNb25hc3RlcnklMjAoWXVrc29tKXxlbnwwfHwwfHx8MA%3D%3D",
        "https://s7ap1.scene7.com/is/image/incredibleindia/dubdi-monastery-pelling-sikkim-attr-about?qlt=82&ts=1727335485961"
      ]
    }
  ],
  "South": [
    {
      "id": "namchi",
      "name": "Namchi Monastery",
      "location": "Namchi, South Sikkim, India",
      "about": "Namchi Monastery is a serene Buddhist site in South Sikkim, known for its peaceful ambiance, cultural festivals, and proximity to the iconic Namchi Char Dham complex.",
      "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Namchi_Monastery7.jpg/1200px-Namchi_Monastery7.jpg",
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Namchi_Monastery7.jpg/1200px-Namchi_Monastery7.jpg",
        "https://media.istockphoto.com/id/1132799250/photo/namchi-monastery-sikkim-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=3IB7YgojPawwdeP0Y8PaSHG4glPSLShkmnqh14JZFeM=",
        "https://media.istockphoto.com/id/1283355994/photo/siddheswar-dham-or-char-dham-temple.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZcwyuLLvLhAG_5qcnuUplblfMam3uwDmAwsDjlCCXPs=",
        "https://media.istockphoto.com/id/836677232/photo/close-up-at-the-right-golden-hand-with-mace-of-guru-rinpoche-statue-the-patron-saint-of-sikkim.webp?a=1&b=1&s=612x612&w=0&k=20&c=oOIbwkr8S_ZVkuRdI-qwe1LmzYsimVMRVnGQLgA_yhw="
      ]
    },
    {
      "id": "ravangla",
      "name": "Ravangla Monastery",
      "location": "Ravangla, South Sikkim, India",
      "about": "Ravangla Monastery, near the Buddha Park, is famous for its panoramic views, tranquil setting, and giant Shakyamuni Buddha statue, attracting pilgrims and tourists alike.",
      "cover": "https://holidays.tripfactory.com/sikkim/wp-content/uploads/sites/18/2024/05/Ralang-Monastery.webp",
      "images": [
        "https://holidays.tripfactory.com/sikkim/wp-content/uploads/sites/18/2024/05/Ralang-Monastery.webp",
        "https://images.unsplash.com/photo-1706778442454-fc151a3b07e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmF2YW5nbGElMjBNb25hc3Rlcnl8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1678521000167-05f24453b78e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJhdmFuZ2xhJTIwTW9uYXN0ZXJ5fGVufDB8fDB8fHww",
        "https://media.istockphoto.com/id/2226096784/photo/offering-bowls-at-buddha-temple-ravangla-gumpa-gangtok.webp?a=1&b=1&s=612x612&w=0&k=20&c=J5fO85uXprIrpC9mg2zq_4G3EmqEeCBOKgc56zNM078="
      ]
    },
    {
      "id": "temi",
      "name": "Temi Monastery",
      "location": "Temi, South Sikkim, India",
      "about": "Temi Monastery is located near the famous Temi Tea Garden, offering a blend of spirituality and nature, with beautiful surroundings of rolling tea estates and hills.",
      "cover": "https://myholidayhappiness.com/uploads/temi-tea-garden-13791.jpg",
      "images": [
        "https://myholidayhappiness.com/uploads/temi-tea-garden-13791.jpg",
        "https://media.istockphoto.com/id/960455154/photo/bhutan-temple-top-of-the-hill.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xuk12ZNfavsCQji5hdzyk8_7Nyod9oJeaFJCU6ABLD8=",
        "https://media.istockphoto.com/id/1389342953/photo/tawang-monastery.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z3T1gBcU-7O6yshRhFOw8fnbBUGJRqKmQxa0RZ8s75g=",
        "https://media.istockphoto.com/id/1327666529/photo/view-of-the-top-portion-of-the-pangan-nyingma-monastery-at-manali-in-himachal-pradesh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=xOVV9PmMIQLbrkBaMPDLXyKMcfEByAZJVROzLcroyl0="
      ]
    },
    {
      "id": "borong",
      "name": "Borong Monastery",
      "location": "Borong, South Sikkim, India",
      "about": "Borong Monastery is a hidden gem in South Sikkim, surrounded by forests and hot springs, offering peace, meditation opportunities, and scenic Himalayan views.",
      "cover": "https://northbengaltourism.com/images/holiday/nbthp0100_3.webp",
      "images": [
        "https://northbengaltourism.com/images/holiday/nbthp0100_3.webp",
        "https://plus.unsplash.com/premium_photo-1752140697600-c78c0ce62efa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qm9yb25nJTIwTW9uYXN0ZXJ5fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1662907929402-c8b0921a5820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJvcm9uZyUyME1vbmFzdGVyeXxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1664301792823-cf444818b684?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJvcm9uZyUyME1vbmFzdGVyeXxlbnwwfHwwfHx8MA%3D%3D"
      ]
    },
    {
      "id": "assangthang",
      "name": "Assangthang Monastery",
      "location": "Assangthang, South Sikkim, India",
      "about": "Assangthang Monastery is a lesser-known spiritual retreat, surrounded by natural beauty, where visitors experience local Buddhist traditions and cultural richness.",
      "cover": "https://live.staticflickr.com/7101/7013883003_4b9933d73d_z.jpg",
      "images": [
        "https://live.staticflickr.com/7101/7013883003_4b9933d73d_z.jpg",
        "https://www.trawell.in/admin/images/upload/288555461Namchi_Sa.jpg",
        "https://images.unsplash.com/photo-1601121956138-78c7edd313ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QXNzYW5ndGhhbmclMjBNb25hc3Rlcnl8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1742096303282-30272e9b8cef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFzc2FuZ3RoYW5nJTIwTW9uYXN0ZXJ5fGVufDB8fDB8fHww"
      ]
    }
  ],
  "North": [
    {
      "id": "lachung",
      "name": "Lachung Monastery",
      "location": "Lachung, North Sikkim, India",
      "about": "Lachung Monastery, established in 1880, belongs to the Nyingma sect of Buddhism and offers stunning views of snow-capped peaks, especially during its annual mask dance festival.",
      "cover": "https://upload.wikimedia.org/wikipedia/commons/6/65/Gumpa.jpg",
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/6/65/Gumpa.jpg",
        "https://media1.thrillophilia.com/filestore/z347ve9osnv0zza40pa5mosx7jb8_1538563430_shutterstock_139477499.jpg?w=400&dpr=2",
        "https://media.istockphoto.com/id/2214084955/photo/lachung-monastery-is-a-nyingma-buddhist-gompa-in-the-lachung-valley-in-sikkim-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=CLlECOWw6JBXayMG8Fq7HuKxBqGl_ezU-yNvyXLXpLE=",
        "https://media.istockphoto.com/id/1321316778/photo/ancient-buddhist-colorful-monastery-with-cloudy-sky-from-different-angle-at-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=FFl3gC4gK1Y4gk1SYWUYYek4uLHOdHh16AgJfwCABd8="
      ]
    },
    {
      "id": "lachen",
      "name": "Lachen Monastery",
      "location": "Lachen, North Sikkim, India",
      "about": "Lachen Monastery, built in 1858, is a peaceful Nyingma monastery surrounded by alpine scenery. It plays a vital role in preserving Buddhist traditions in the remote Lachen valley.",
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pX7QZcaXd3fn397Ga1f9a6Jnd0MkE3Y8xQ&s",
      "images": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pX7QZcaXd3fn397Ga1f9a6Jnd0MkE3Y8xQ&s",
        "https://media.istockphoto.com/id/601402424/photo/aciveiro-monastery-facade-and-church-pontevedra-province-galicia-spain.webp?a=1&b=1&s=612x612&w=0&k=20&c=zYxO30k-N_WnAcn7Sz22-QXuFJpE4ncxB6nEp0M8mWQ=",
        "https://images.unsplash.com/photo-1702817451691-155b8bfe3b6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fExhY2hlbiUyME1vbmFzdGVyeXxlbnwwfHwwfHx8MA%3D%3D",
        "https://c8.alamy.com/comp/B6E7X5/prayer-flags-at-pemayangtsi-monastery-sikkim-india-B6E7X5.jpg"
      ]
    },
    {
      "id": "phodong",
      "name": "Phodong Monastery",
      "location": "Phodong, North Sikkim, India",
      "about": "Phodong Monastery, founded in the early 18th century by the 9th Karmapa, is a Kagyu monastery noted for its murals, ancient relics, and vibrant mask dance festival.",
      "cover": "https://media.istockphoto.com/id/1316703192/photo/required-apply-templatesave-as-a-templateclear-all-1-file-selected-indicates-a-required-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=xccjt5FKDNVLK2Mx9D_KUvfFFjYHWsX_hx0vTxi79lI=",
      "images": [
        "https://media.istockphoto.com/id/1316703192/photo/required-apply-templatesave-as-a-templateclear-all-1-file-selected-indicates-a-required-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=xccjt5FKDNVLK2Mx9D_KUvfFFjYHWsX_hx0vTxi79lI=",
        "https://images.unsplash.com/photo-1601121956138-78c7edd313ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGhvZG9uZyUyME1vbmFzdGVyeXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1590498418987-aa4e1e0d2b94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGhvZG9uZyUyME1vbmFzdGVyeXxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1721001746757-4e0df9a0cdff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFBob2RvbmclMjBNb25hc3Rlcnl8ZW58MHx8MHx8fDA%3D"
      ]
    },
    {
      "id": "phensang",
      "name": "Phensang Monastery",
      "location": "Phensang, North Sikkim, India",
      "about": "Phensang Monastery, established in 1721, is one of the largest Nyingma monasteries in Sikkim, hosting an annual religious festival before Losoong with colorful mask dances.",
      "cover": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/47/60/7b/entrance.jpg?w=900&h=-1&s=1",
      "images": [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/47/60/7b/entrance.jpg?w=900&h=-1&s=1",
        "https://media.istockphoto.com/id/968898100/photo/rumtek-monastery-near-gangtok-sikkim-india-2013-april-14th.jpg?s=612x612&w=0&k=20&c=0pPgihRva4sWduC7fHoTx6gAJJ9TwHKS4hj8OD342Zs=",
        "https://media.istockphoto.com/id/1407310782/photo/statue-of-a-lion-in-a-buddhist-monastery.webp?a=1&b=1&s=612x612&w=0&k=20&c=aaUxsmuQRQ3dD0Yy7Si_uv217GkrYvPDl8RTcWspKIw=",
        "https://media.istockphoto.com/id/536457347/photo/buddhist-temple.webp?a=1&b=1&s=612x612&w=0&k=20&c=2CPMDN1_Aiv9Svy7v1andlVzbUCswlG0NfcNxXsLXWA="
      ]
    }
  ]
}

export const regionToTours = {
  "East": [
    // No tours for East as requested
  ],
  "West": [
    {
      "id": "pem-heritage",
      "title": "Pemayangtse Heritage Tour",
      "time": "Tue, Thu • 11:00 AM",
      "panoramaUrl": "https://www.google.com/maps/embed?pb=!4v1758093138636!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREVoSlhucEFF!2m2!1d27.30518919282202!2d88.25156580066201!3f158.69918015177967!4f-16.974731290172656!5f0.6645501473320738",
      "about": "Explore the historic Pemayangtse Monastery, its exquisite wooden sculptures, and surrounding heritage sites while learning about Sikkim’s spiritual and cultural legacy."
    },
    {
      "id": "tashi-sunrise",
      "title": "Tashiding Sunrise Tour",
      "time": "Sat • 6:00 AM",
      "panoramaUrl": "https://www.google.com/maps/embed?pb=!4v1758094296279!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0V6djM1LUFF!2m2!1d27.307710898809!2d88.2976437708665!3f311.7220501942709!4f3.312649107981528!5f0.7820865974627469",
      "about": "Experience a breathtaking sunrise over the Himalayas at Tashiding Monastery, combined with insights into sacred rituals and local Buddhist traditions."
    }
  ],
  "South": [
    {
      "id": "namchi-culture",
      "title": "Namchi Culture Tour",
      "time": "Wed • 2:00 PM",
      "panoramaUrl":"https://www.google.com/maps/embed?pb=!4v1758094489645!6m8!1m7!1sSzykVrksLyMtI01at0AGUQ!2m2!1d27.17042855843198!2d88.36346714206266!3f294.06216!4f0!5f0.7820865974627469",
      "about": "A guided walk through Namchi’s cultural highlights, temples, and local markets — learn about regional rituals, crafts, and the Char Dham complex while enjoying panoramic hill views."
    },
    {
      "id": "ravangla-park",
      "title": "Ravangla Buddha Park Tour",
      "time": "Sun • 9:00 AM",
      "panoramaUrl": "https://www.google.com/maps/embed?pb=!4v1758093849136!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREUtSTJBbXdF!2m2!1d27.41250043052966!2d88.58361050014649!3f150.3414312405002!4f-5.952685235095231!5f0.7820865974627469",
      "about": "Visit the Buddha Park and surrounding trails; experience the giant Shakyamuni statue, serene gardens, and panoramic vistas ideal for meditation, photography, and short nature walks."
    },
    {
      "id": "temi-tea-vr",
      "title": "Temi Tea Estate VR Walk",
      "time": "Fri • 4:00 PM",
      "panoramaUrl":"https://www.google.com/maps/embed?pb=!4v1758095237312!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0szSlc0bEFF!2m2!1d27.04933418201817!2d88.2543150776408!3f193.83805049060652!4f3.6106650882440476!5f0.7820865974627469",
      "about": "A virtual stroll through Temi Tea Garden’s rolling plantations; learn tea-processing basics, local farming traditions, and enjoy sweeping views of neatly terraced tea bushes."
    }
  ],
  "North": [
    {
      "id": "lachung-prayer",
      "title": "Lachung Prayer Hall Tour",
      "time": "Daily • 8:00 AM",
      "panoramaUrl": "https://www.google.com/maps/embed?pb=!4v1758094763684!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzRqOWpJeXdF!2m2!1d27.68905688248872!2d88.74297227133621!3f260.78466479452055!4f2.3835616438356197!5f0.4000000000000002",
      "about": "Join monks at Lachung Monastery’s prayer hall, witness morning rituals, and immerse yourself in the spiritual energy of chants while surrounded by snow-clad Himalayan peaks."
    },
    {
      "id": "lachen-circuit",
      "title": "Lachen Monastic Circuit",
      "time": "Fri • 3:00 PM",
      "panoramaUrl": "https://www.google.com/maps/embed?pb=!4v1758094826977!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREV1NHJIaEFF!2m2!1d27.73222868081597!2d88.54896419435!3f172.42787!4f0!5f0.7820865974627469",
      "about": "Explore the monastic circuit of Lachen, visiting sacred halls, ancient relics, and learning about the traditions of the Nyingma sect in a serene mountain setting."
    },
    {
      "id": "phodong-courtyards",
      "title": "Phodong Courtyards 360",
      "time": "Mon • 11:00 AM",
      "panoramaUrl": "https://www.google.com/maps/embed?pb=!4v1758094058153!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREUtSTJBbXdF!2m2!1d27.41250043052966!2d88.58361050014649!3f12.41!4f0.5699999999999932!5f0.7820865974627469",
      "about": "Walk through the courtyards of Phodong Monastery, admire historic murals, and experience mask dance stories that highlight the Kagyu sect’s deep spiritual roots."
    },
    {
      "id": "phensang-trails",
      "title": "Phensang Forest Trails",
      "time": "Thu • 7:00 AM",
      "panoramaUrl": "https://www.google.com/maps/embed?pb=!4v1758095596219!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREVwdldmZ2dF!2m2!1d27.19419999688898!2d88.1182999729995!3f266.7574191122864!4f-1.7542502994061095!5f0.4000000000000002",
      "about": "Hike the peaceful forest trails surrounding Phensang Monastery, combining nature walks with visits to sacred prayer sites, and enjoy quiet reflection in lush green surroundings."
    }
  ]
}

export const regionToBookings = {
  "East": [
  {
    "id": "rumtek-360",
    "name": "Rumtek 360 Tour",
    "date": "2025-10-02",
    "image": "https://www.marinetoalpine.com/photogallery/photos/packages-86/47b1fd407b560f87c4caac6de3bf5264.webp",
    "facilities": ["Guide Service", "Photography Spots", "Tea & Snacks"]
  },
  {
    "id": "enchey-evening",
    "name": "Enchey Evening Walk",
    "date": "2025-10-05",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsr68BrozLpYH3F4Lnn1qmQe-Jkx1batfRnA&s",
    "facilities": ["Evening Prayers", "Cultural Narration", "Light Refreshments"]
  },
  {
    "id": "rumtek-360",
    "name": "Rumtek 360 Tour",
    "date": "2025-10-08",
    "image": "https://www.shutterstock.com/image-photo/rumtek-monastery-sikkim-260nw-2455618055.jpg",
    "facilities": ["Guide Service", "Photography Spots", "Tea & Snacks"]
  }
],
  "West": [
  {
    "id": "pem-heritage",
    "name": "Pemayangtse Heritage Tour",
    "date": "2025-10-04",
    "image": "https://s7ap1.scene7.com/is/image/incredibleindia/pemayangtse-monastery-pelling-sikkim-2-attr-hero?qlt=82&ts=1726656027807",
    "facilities": ["Historical Guide", "Thangka Exhibition", "Tea Service"]
  }
],
  "South": [
  {
    "id": "namchi-culture",
    "name": "Namchi Culture Tour",
    "date": "2025-10-06",
    "image": "https://www.northeast-india.in/wp-content/uploads/Chardham-Namchi-chardham.nic_.in_.jpg",
    "facilities": ["Cultural Guide", "Temple Visit", "Local Snacks"]
  },
  {
    "id": "ravangla-park",
    "name": "Ravangla Buddha Park Tour",
    "date": "2025-10-07",
    "image": "https://www.easeindiatrip.com/blog/wp-content/uploads/2025/02/Sikkim-Buddha-Park-Ravangla-Tathagata-Tsal.jpg",
    "facilities": ["Buddha Statue Visit", "Guided Meditation", "Photography Spots"]
  },
  {
    "id": "temi-tea-vr",
    "name": "Temi Tea Estate VR Walk",
    "date": "2025-10-09",
    "image": "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/12/0e504bbf8c5d26710c015fcf6d1667c9_1000x1000.jpeg",
    "facilities": ["VR Walk", "Tea Plantation Tour", "Tea Tasting"]
  },
  {
    "id": "namchi-culture",
    "name": "Namchi Culture Tour",
    "date": "2025-10-10",
    "image": "https://media2.thrillophilia.com/images/photos/000/213/083/original/1586594768_shutterstock_703357087.jpg?",
    "facilities": ["Cultural Guide", "Temple Visit", "Local Snacks"]
  },
  {
    "id": "ravangla-park",
    "name": "Ravangla Buddha Park Tour",
    "date": "2025-10-11",
    "image": "https://live.staticflickr.com/65535/49776045173_743e14cdfa_c.jpg",
    "facilities": ["Buddha Statue Visit", "Guided Meditation", "Photography Spots"]
  },

],
 "North": [
  {
    "id": "lachen-circuit",
    "name": "Lachen Monastic Circuit",
    "date": "2025-10-03",
    "image": "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/08/Lachen-Monastery-OG-Photo.jpg",
    "facilities": ["Guided Monastic Walk", "Photography Spots", "Cultural Explanation"]
  },
  {
    "id": "lachung-prayer",
    "name": "Lachung Prayer Hall Tour",
    "date": "2025-10-06",
    "image": "https://cdn1.prayagsamagam.com/media/2025/06/01221540/Lachung.webp",
    "facilities": ["Prayer Hall Visit", "Monk Interaction", "Morning Ritual Observation"]
  },
  {
    "id": "phodong-courtyards",
    "name": "Phodong Courtyards 360",
    "date": "2025-10-09",
    "image": "https://s7ap1.scene7.com/is/image/incredibleindia/Copy-of-Gangtok-A-Paradise-for-Adventure-Enthusiasts1-popular?qlt=82&ts=1742169467838",
    "facilities": ["360° Courtyard Walk", "Historic Mural Viewing", "Guided Storytelling"]
  }
]

}

export const regionToArchives = {
   "East": [
    {
      "id": "gangtok-kangyur",
      "title": "Gangtok Kanjur Palm-leaf Manuscripts",
      "img": "https://images.prismic.io/wellcomecollection/209f9b2a-ad46-4ded-b96c-b00fe53235c5_epsilon+script.jpg?w=649&auto=compress%2Cformat&rect=&q=100",
      "period": "17th–18th century CE",
      "description": "Woodblock-printed Tibetan Buddhist canon volumes preserved in Gangtok monasteries; includes colophons, lineage notes and early wooden cover art influenced by eastern Himalayan ateliers.",
      "images": [
      "https://images.prismic.io/wellcomecollection/209f9b2a-ad46-4ded-b96c-b00fe53235c5_epsilon+script.jpg?w=649&auto=compress%2Cformat&rect=&q=100",
      "https://media.istockphoto.com/id/182716291/photo/gangtok-sikkim-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=GmUixHH_fTPRbIxR5VkbydkHrpij2TXU5JhMBYnKw5U=",
      "https://img.onmanorama.com/content/dam/mm/en/kerala/top-news/images/2024/8/12/manuscripts.jpg?w=1120&h=583",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdKQHy0uma8twUn_9QFs24IDUQgCC6H2TZyw&s"
    ],
    },
    {
      "id": "enchey-ritual-texts",
      "title": "Enchey Ritual Text Compendium",
      "img": "https://m.media-amazon.com/images/I/71AMkm84GgL._UF1000,1000_QL80_.jpg",
      "period": "19th century CE",
      "description": "Liturgical manuals for masked cham dances and protector rites, annotated with performance cues, musical notations and festival calendars specific to Enchey Monastery.",
       "images": [
      "https://m.media-amazon.com/images/I/71AMkm84GgL._UF1000,1000_QL80_.jpg",
      "https://images.routledge.com/common/jackets/crclarge/978020356/9780203564240.jpg",
      "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TWCBJODRAAI6JIWCI6AXT7IERE",
      "https://media.istockphoto.com/id/1153456203/photo/old-torn-ancient-letter-with-text-vintage-sheet-of-paper-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=D7mEATnQyRG-xvCrKdRbQlw9AQa_t0kdDlvAQ1tZqio="
    ],
    }
  ],
 "West": [
  {
    "id": "pemayangtse-thangka-scrolls",
    "title": "Pemayangtse Thangka Scrolls",
    "img": "https://images.unsplash.com/photo-1574432919085-15e4f655360d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVtYXlhbmd0c2UlMjBUaGFuZ2thJTIwU2Nyb2xsc3xlbnwwfHwwfHx8MA%3D%3D",
    "period": "18th–19th century CE",
    "description": "Pigment-on-cotton scrolls depicting lineage gurus and mandalas; restoration notes document mineral pigments, silk brocades and regional iconographic conventions.",
    "images": [
      "https://images.unsplash.com/photo-1574432919085-15e4f655360d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVtYXlhbmd0c2UlMjBUaGFuZ2thJTIwU2Nyb2xsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1567599484552-0366e05921ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGVtYXlhbmd0c2UlMjBUaGFuZ2thJTIwU2Nyb2xsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1675135581864-90c05981a507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVtYXlhbmd0c2UlMjBUaGFuZ2thJTIwU2Nyb2xsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1676115388797-5f448ad78e44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGVtYXlhbmd0c2UlMjBUaGFuZ2thJTIwU2Nyb2xsc3xlbnwwfHwwfHx8MA%3D%3D"
    ]
  },
  {
    "id": "west-copper-grants",
    "title": "Copper-plate Monastic Grants",
    "img": "https://www.indianculture.gov.in/system/files/digitalFilesICWeb/ICrarebooks//moirepository/44698/nat_del-78-61-22442_01_h.jpg",
    "period": "12th–14th century CE",
    "description": "Royal edicts granting land and tax exemptions to monasteries in western Sikkim; inscriptions record patrons, boundaries and ritual obligations.",
    "images": [
      "https://www.indianculture.gov.in/system/files/digitalFilesICWeb/ICrarebooks//moirepository/44698/nat_del-78-61-22442_01_h.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZuraeBAP6OzGgb-tWoUpYBAwtwj6ctxxaA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRV7UpkhWK65VnfcBQPe9ZBISFcsKhLnH6A&s",
      "https://tharahkardu.in/wp-content/uploads/2024/11/wp-image8628569944944717918.jpg"
    ]
  }
],
  "South": [
  {
    "id": "namchi-palmleaf-sutras",
    "title": "Namchi Palm-leaf Sūtras",
    "img": "https://rubinmuseum.org/projecthimalayanart/wp-content/uploads/sites/2/related//Object-023_Fig-08-2048x632.jpg",
    "period": "15th–16th century CE",
    "description": "Gāndhārī and Sanskrit excerpts on palm-leaf with lacquered wooden covers; digitized with multi-spectral imaging for legibility and preservation.",
    "images": [
      "https://rubinmuseum.org/projecthimalayanart/wp-content/uploads/sites/2/related//Object-023_Fig-08-2048x632.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NkgagPVz3ey6TIvbd_iVbe0rvfBjbTm7OQ&s",
      "https://c8.alamy.com/comp/PCEH2C/60-astasahasrika-prajnaparamita-sutra-manuscript-two-leaves-PCEH2C.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Palm_leaf_manuscript_IMG_20210815_185730.jpg/330px-Palm_leaf_manuscript_IMG_20210815_185730.jpg"
    ]
  },
  {
    "id": "ravangla-procession-maps",
    "title": "Ravangla Procession Maps",
    "img": "https://images.unsplash.com/photo-1569998083823-139fd1a1e6c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmF2YW5nbGElMjBQcm9jZXNzaW9uJTIwTWFwc3xlbnwwfHwwfHx8MA%3D%3D",
    "period": "18th–19th century CE",
    "description": "Hand-drawn festival route charts showing ritual stations, offerings and musical ensembles; marginalia note weather omens and local sponsorships.",
    "images": [
      "https://images.unsplash.com/photo-1569998083823-139fd1a1e6c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmF2YW5nbGElMjBQcm9jZXNzaW9uJTIwTWFwc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://rubinmuseum.org/projecthimalayanart/wp-content/uploads/sites/2/essays/95/Object-095_Fig-09_LG-2048x1374.jpg",
      "https://www.team-bhp.com/forum/attachments/travelogues/1286837d1691266153t-quick-trip-darjeeling-gangtok-nathula-dajkali1.jpg",
      "https://www.team-bhp.com/forum/attachments/travelogues/1288529d1410879564-quick-trip-darjeeling-gangtok-nathula-z1.jpg"
    ]
  }
],
  "North": [
  {
    "id": "lachung-mural-fragments",
    "title": "Lachung Mural Fragments",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWw7iiMGXb2Nj9vfjOHPKZulccgria-Ngdag&s",
    "period": "17th century CE",
    "description": "Wall-painting fragments from high-altitude chapels; pigment analysis reveals mineral sources and trade links across the greater Himalaya.",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWw7iiMGXb2Nj9vfjOHPKZulccgria-Ngdag&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFW6SSaFMb_qceoaI712ewnWoSf_AQ_YHQGA&s",
      "https://images.unsplash.com/photo-1713388909992-ef0e8a5ef05f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fExhY2h1bmclMjBNdXJhbCUyMEZyYWdtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3M7kzcIBFpEDLSF8yKwRZtwgD9XWzkKvgOg&s"
    ]
  },
  {
    "id": "phodong-bronze-catalogue",
    "title": "Phodong Bronze Statuettes Catalogue",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-BtPOhdZjh6t4bQnIlHUlAuJJyhWv-qTcg&s",
    "period": "9th–12th century CE",
    "description": "Catalogue of gilt-bronze figures with inscriptional data; 3D photogrammetry provides surface detail for research and conservation planning.",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-BtPOhdZjh6t4bQnIlHUlAuJJyhWv-qTcg&s",
      "https://images.unsplash.com/photo-1695901742023-95564f17160a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGhvZG9uZyUyMEJyb256ZSUyMFN0YXR1ZXR0ZXMlMjBDYXRhbG9ndWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1696586904918-d55a0c8a6587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBob2RvbmclMjBCcm9uemUlMjBTdGF0dWV0dGVzJTIwQ2F0YWxvZ3VlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1552598442-d8a9fe79eb11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGhvZG9uZyUyMEJyb256ZSUyMFN0YXR1ZXR0ZXMlMjBDYXRhbG9ndWV8ZW58MHx8MHx8fDA%3D"
    ]
  }
]

}


export  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Monastery Festival",
      date: "October 15, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Tawang Monastery",
      image: "https://thumbs.dreamstime.com/b/masked-dance-festival-lamayuru-monastery-india-one-largest-oldest-gompas-ladakh-host-to-two-annual-festivals-61302243.jpg",
      description: "Join us for a celebration of Buddhist culture with traditional dances, music, and rituals."
    },
    {
      id: 2,
      title: "Meditation Retreat",
      date: "November 5-7, 2024",
      time: "All day",
      location: "Rumtek Monastery",
      image: "https://sikkimtourism.org/wp-content/uploads/2023/11/Meditation-Retreats-sikkim.jpg",
      description: "A three-day immersive meditation retreat guided by senior monks."
    },
    {
      id: 3,
      title: "Sacred Art Exhibition",
      date: "December 1, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Hemis Monastery",
      image: "https://plus.unsplash.com/premium_photo-1678329517720-fd3eaf9df17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2FjcmVkJTIwQXJ0JTIwRXhoaWJpdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      description: "Exhibition of rare thangka paintings and Buddhist artifacts."
    }
  ];

export  const featuredEvent = {
    title: "Buddha Purnima Celebration",
    date: "May 26, 2025",
    location: "Multiple Monasteries",
    image: "https://images.unsplash.com/photo-1589400554239-7c6cf8393a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVkZGhhfGVufDB8fDB8fHww",
    description: "The most auspicious day in the Buddhist calendar celebrating Buddha's birth, enlightenment, and death. Join special ceremonies, prayer sessions, and cultural performances across various monasteries."
  };

 export const pastEvents = [
    {
      id: 1,
      title: "Summer Dharma Teachings",
      date: "July 10-15, 2024",
      location: "Thiksey Monastery",
      image: "https://plus.unsplash.com/premium_photo-1673529438200-060770e87fe3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3VtbWVyJTIwRGhhcm1hfGVufDB8fDB8fHww"
    },
    {
      id: 2,
      title: "Cultural Heritage Day",
      date: "August 20, 2024",
      location: "Lamayuru Monastery",
      image: "https://sikkimtourism.org/wp-content/uploads/2023/06/cultural-milieu-of-sikkim.jpg"
    },
    {
      id: 3,
      title: "Monastic Life Workshop",
      date: "September 5, 2024",
      location: "Phuktal Monastery",
      image: "https://static.livebooks.com/dbade8fa1a584f62a804aa32ef9b3d86/i/b33eb7e7ca854f2a9514bfeedb143a54/1/GCuCv726vxAVM9sgguVj4g/_DSF1388-3673-3674-3675-3676.jpg"
    },
    {
      id: 4,
      title: "Traditional Music Concert",
      date: "September 18, 2024",
      location: "Diskit Monastery",
      image: "https://www.kipepeo.in/wp-content/uploads/sikkim-festival-02.jpg"
    }
  ];