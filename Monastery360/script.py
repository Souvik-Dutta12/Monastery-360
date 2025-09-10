# Create the main landing page HTML
landing_html = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monastery360 - Digital Heritage Platform for Sikkim's Monasteries</title>
    <link rel="stylesheet" href="styles/main.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <div class="logo-circle">
                    <i class="fas fa-dharmachakra"></i>
                </div>
                <div class="logo-text">
                    <span class="logo-main">Monastery360</span>
                    <span class="logo-sub">Digital Heritage Platform</span>
                </div>
            </div>
            
            <div class="nav-menu" id="nav-menu">
                <a href="#home" class="nav-link">Home</a>
                <a href="#features" class="nav-link">Features</a>
                <a href="#monasteries" class="nav-link">Monasteries</a>
                <a href="#archives" class="nav-link">Archives</a>
                <a href="#events" class="nav-link">Events</a>
                <a href="#about" class="nav-link">About</a>
                <div class="nav-buttons">
                    <button class="btn-secondary" onclick="openLogin()">Login</button>
                    <button class="btn-primary" onclick="openSignup()">Get Started</button>
                </div>
            </div>
            
            <div class="nav-toggle" id="nav-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-background">
            <div class="hero-overlay"></div>
            <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Sikkim Monastery" class="hero-bg-img">
        </div>
        
        <div class="hero-content">
            <div class="hero-text" data-aos="fade-up">
                <h1>Experience Sikkim's Sacred Heritage Digitally</h1>
                <p>Explore 200+ monasteries through immersive 360° virtual tours, discover ancient manuscripts, and connect with living Buddhist traditions from anywhere in the world.</p>
                <div class="hero-buttons">
                    <button class="btn-hero-primary" onclick="startVirtualTour()">
                        <i class="fas fa-vr-cardboard"></i>
                        Start Virtual Tour
                    </button>
                    <button class="btn-hero-secondary" onclick="exploreMap()">
                        <i class="fas fa-map-marked-alt"></i>
                        Explore Map
                    </button>
                </div>
                <div class="hero-stats" data-aos="fade-up" data-aos-delay="200">
                    <div class="stat">
                        <span class="stat-number">200+</span>
                        <span class="stat-label">Monasteries</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">10M+</span>
                        <span class="stat-label">Virtual Visitors</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">15</span>
                        <span class="stat-label">Languages</span>
                    </div>
                </div>
            </div>
            
            <div class="hero-features" data-aos="fade-left" data-aos-delay="300">
                <div class="feature-pill">
                    <i class="fas fa-globe"></i>
                    <span>360° Virtual Reality</span>
                </div>
                <div class="feature-pill">
                    <i class="fas fa-robot"></i>
                    <span>AI Cultural Guide</span>
                </div>
                <div class="feature-pill">
                    <i class="fas fa-archive"></i>
                    <span>Digital Archives</span>
                </div>
                <div class="feature-pill">
                    <i class="fas fa-calendar-alt"></i>
                    <span>Live Events</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Key Features Section -->
    <section id="features" class="features-section">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <h2>Revolutionary Digital Heritage Experience</h2>
                <p>Cutting-edge technology meets ancient wisdom to preserve and showcase Sikkim's monastery heritage</p>
            </div>
            
            <div class="features-grid">
                <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="feature-icon">
                        <i class="fas fa-vr-cardboard"></i>
                    </div>
                    <h3>360° Virtual Tours</h3>
                    <p>Immersive VR experiences allowing you to walk through monastery halls, prayer rooms, and sacred spaces with photorealistic detail.</p>
                    <ul class="feature-list">
                        <li>High-resolution panoramic views</li>
                        <li>Interactive hotspots</li>
                        <li>Multi-language narration</li>
                        <li>VR headset compatibility</li>
                    </ul>
                    <button class="feature-btn" onclick="openVirtualTours()">Experience Now</button>
                </div>
                
                <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="feature-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <h3>AI Cultural Guide</h3>
                    <p>Intelligent assistant providing personalized recommendations and answering questions about Buddhist culture and history.</p>
                    <ul class="feature-list">
                        <li>Smart recommendations</li>
                        <li>15+ language support</li>
                        <li>Cultural context explanations</li>
                        <li>Personalized learning paths</li>
                    </ul>
                    <button class="feature-btn" onclick="openAIGuide()">Chat with Guide</button>
                </div>
                
                <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="feature-icon">
                        <i class="fas fa-archive"></i>
                    </div>
                    <h3>Digital Archives</h3>
                    <p>Comprehensive collection of ancient manuscripts, murals, and historical documents preserved in high-resolution digital format.</p>
                    <ul class="feature-list">
                        <li>Rare manuscript scans</li>
                        <li>AI-powered search</li>
                        <li>Historical timeline</li>
                        <li>Scholarly annotations</li>
                    </ul>
                    <button class="feature-btn" onclick="openArchives()">Explore Archives</button>
                </div>
                
                <div class="feature-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="feature-icon">
                        <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <h3>Interactive Map</h3>
                    <p>Smart mapping system with geo-tagged monastery locations, travel routes, and integrated tourism services.</p>
                    <ul class="feature-list">
                        <li>GPS navigation</li>
                        <li>Route optimization</li>
                        <li>Local transport booking</li>
                        <li>Nearby attractions</li>
                    </ul>
                    <button class="feature-btn" onclick="openMap()">View Map</button>
                </div>
                
                <div class="feature-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="feature-icon">
                        <i class="fas fa-headphones"></i>
                    </div>
                    <h3>Smart Audio Guides</h3>
                    <p>Location-based audio narration using Bluetooth beacons and GPS, available offline for remote areas.</p>
                    <ul class="feature-list">
                        <li>Bluetooth beacon integration</li>
                        <li>Offline capability</li>
                        <li>Multi-language audio</li>
                        <li>Automatic location detection</li>
                    </ul>
                    <button class="feature-btn" onclick="downloadApp()">Download App</button>
                </div>
                
                <div class="feature-card" data-aos="fade-up" data-aos-delay="600">
                    <div class="feature-icon">
                        <i class="fas fa-calendar-alt"></i>
                    </div>
                    <h3>Cultural Calendar</h3>
                    <p>Real-time events, festivals, and ritual schedules with booking options for tourists and cultural enthusiasts.</p>
                    <ul class="feature-list">
                        <li>Live event streaming</li>
                        <li>Festival bookings</li>
                        <li>Ritual participation</li>
                        <li>Cultural workshops</li>
                    </ul>
                    <button class="feature-btn" onclick="openCalendar()">View Events</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Monasteries Showcase -->
    <section id="monasteries" class="monasteries-section">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <h2>Discover Sacred Monasteries</h2>
                <p>Journey through Sikkim's most revered spiritual sites</p>
            </div>
            
            <div class="monasteries-container">
                <div class="monastery-card" data-aos="fade-right">
                    <div class="monastery-image">
                        <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Rumtek Monastery">
                        <div class="monastery-overlay">
                            <button class="tour-btn" onclick="startTour('rumtek')">
                                <i class="fas fa-play"></i>
                                Virtual Tour
                            </button>
                        </div>
                    </div>
                    <div class="monastery-content">
                        <h3>Rumtek Monastery</h3>
                        <p class="monastery-subtitle">The Dharmachakra Centre</p>
                        <p>The largest monastery in Sikkim, seat of the 16th Karmapa. Famous for its golden stupa and precious relics.</p>
                        <div class="monastery-details">
                            <span class="detail"><i class="fas fa-calendar"></i> Founded: 1966</span>
                            <span class="detail"><i class="fas fa-mountain"></i> Altitude: 1,550m</span>
                            <span class="detail"><i class="fas fa-users"></i> 300+ Monks</span>
                        </div>
                    </div>
                </div>
                
                <div class="monastery-card" data-aos="fade-left">
                    <div class="monastery-image">
                        <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pemayangtse Monastery">
                        <div class="monastery-overlay">
                            <button class="tour-btn" onclick="startTour('pemayangtse')">
                                <i class="fas fa-play"></i>
                                Virtual Tour
                            </button>
                        </div>
                    </div>
                    <div class="monastery-content">
                        <h3>Pemayangtse Monastery</h3>
                        <p class="monastery-subtitle">Perfect Sublime Lotus</p>
                        <p>One of the oldest monasteries, offering panoramic views of Kanchenjunga and housing rare Buddhist artifacts.</p>
                        <div class="monastery-details">
                            <span class="detail"><i class="fas fa-calendar"></i> Founded: 1705</span>
                            <span class="detail"><i class="fas fa-mountain"></i> Altitude: 2,085m</span>
                            <span class="detail"><i class="fas fa-crown"></i> Royal Monastery</span>
                        </div>
                    </div>
                </div>
                
                <div class="monastery-card" data-aos="fade-right">
                    <div class="monastery-image">
                        <img src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tashiding Monastery">
                        <div class="monastery-overlay">
                            <button class="tour-btn" onclick="startTour('tashiding')">
                                <i class="fas fa-play"></i>
                                Virtual Tour
                            </button>
                        </div>
                    </div>
                    <div class="monastery-content">
                        <h3>Tashiding Monastery</h3>
                        <p class="monastery-subtitle">Sacred Hill of Glory</p>
                        <p>Known for its holy water ceremonies and the sacred Bhumchu festival celebrated every year.</p>
                        <div class="monastery-details">
                            <span class="detail"><i class="fas fa-calendar"></i> Founded: 1641</span>
                            <span class="detail"><i class="fas fa-mountain"></i> Altitude: 1,465m</span>
                            <span class="detail"><i class="fas fa-droplet"></i> Holy Water Site</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="view-all-container" data-aos="fade-up">
                <button class="btn-view-all" onclick="viewAllMonasteries()">
                    <span>View All 200+ Monasteries</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </section>

    <!-- Live Events Section -->
    <section id="events" class="events-section">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <h2>Live Cultural Events</h2>
                <p>Experience authentic Buddhist ceremonies and festivals in real-time</p>
            </div>
            
            <div class="events-scroll-container" data-aos="fade-up">
                <div class="events-scroll">
                    <div class="event-card live">
                        <div class="event-status">
                            <span class="live-indicator"></span>
                            LIVE NOW
                        </div>
                        <img src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Morning Prayer">
                        <div class="event-content">
                            <h4>Morning Prayer Ceremony</h4>
                            <p>Rumtek Monastery</p>
                            <div class="event-time">Started 45 min ago</div>
                            <button class="event-btn join" onclick="joinLive('morning-prayer')">Join Live</button>
                        </div>
                    </div>
                    
                    <div class="event-card upcoming">
                        <div class="event-status upcoming-status">
                            <i class="fas fa-clock"></i>
                            UPCOMING
                        </div>
                        <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Butter Lamp Festival">
                        <div class="event-content">
                            <h4>Butter Lamp Festival</h4>
                            <p>Pemayangtse Monastery</p>
                            <div class="event-time">Today 6:00 PM</div>
                            <button class="event-btn remind" onclick="setReminder('butter-lamp')">Set Reminder</button>
                        </div>
                    </div>
                    
                    <div class="event-card featured">
                        <div class="event-status featured-status">
                            <i class="fas fa-star"></i>
                            FEATURED
                        </div>
                        <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Losar Festival">
                        <div class="event-content">
                            <h4>Losar New Year</h4>
                            <p>Multiple Monasteries</p>
                            <div class="event-time">Feb 10-12, 2024</div>
                            <button class="event-btn book" onclick="bookEvent('losar')">Book Experience</button>
                        </div>
                    </div>
                    
                    <div class="event-card workshop">
                        <div class="event-status workshop-status">
                            <i class="fas fa-graduation-cap"></i>
                            WORKSHOP
                        </div>
                        <img src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Meditation Workshop">
                        <div class="event-content">
                            <h4>Meditation Workshop</h4>
                            <p>Tashiding Monastery</p>
                            <div class="event-time">This Saturday</div>
                            <button class="event-btn register" onclick="registerWorkshop('meditation')">Register</button>
                        </div>
                    </div>
                    
                    <div class="event-card ceremony">
                        <div class="event-status ceremony-status">
                            <i class="fas fa-bell"></i>
                            CEREMONY
                        </div>
                        <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Blessing Ceremony">
                        <div class="event-content">
                            <h4>Blessing Ceremony</h4>
                            <p>Enchey Monastery</p>
                            <div class="event-time">Tomorrow 10:00 AM</div>
                            <button class="event-btn join" onclick="joinCeremony('blessing')">Join Online</button>
                        </div>
                    </div>
                </div>
                
                <div class="scroll-controls">
                    <button class="scroll-btn left" onclick="scrollEvents('left')">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="scroll-btn right" onclick="scrollEvents('right')">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Digital Archives -->
    <section id="archives" class="archives-section">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <h2>Digital Archives</h2>
                <p>Explore ancient manuscripts, historical documents, and sacred art</p>
            </div>
            
            <div class="archives-grid" data-aos="fade-up">
                <div class="archive-category" onclick="openArchiveCategory('manuscripts')">
                    <div class="archive-icon">
                        <i class="fas fa-scroll"></i>
                    </div>
                    <h3>Ancient Manuscripts</h3>
                    <p>500+ digitized manuscripts</p>
                    <div class="archive-count">500+</div>
                </div>
                
                <div class="archive-category" onclick="openArchiveCategory('murals')">
                    <div class="archive-icon">
                        <i class="fas fa-palette"></i>
                    </div>
                    <h3>Sacred Murals</h3>
                    <p>High-resolution artwork scans</p>
                    <div class="archive-count">1200+</div>
                </div>
                
                <div class="archive-category" onclick="openArchiveCategory('photos')">
                    <div class="archive-icon">
                        <i class="fas fa-camera"></i>
                    </div>
                    <h3>Historical Photos</h3>
                    <p>Century-old documentation</p>
                    <div class="archive-count">800+</div>
                </div>
                
                <div class="archive-category" onclick="openArchiveCategory('audio')">
                    <div class="archive-icon">
                        <i class="fas fa-music"></i>
                    </div>
                    <h3>Chants & Prayers</h3>
                    <p>Traditional audio recordings</p>
                    <div class="archive-count">300+</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Dashboard Access Section -->
    <section class="dashboard-section">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <h2>Access Your Dashboard</h2>
                <p>Choose your role to access specialized features and content</p>
            </div>
            
            <div class="dashboard-cards" data-aos="fade-up">
                <div class="dashboard-card" onclick="accessDashboard('user')">
                    <div class="dashboard-icon">
                        <i class="fas fa-user"></i>
                    </div>
                    <h3>Tourist Dashboard</h3>
                    <p>Plan visits, book tours, and access virtual experiences</p>
                    <ul class="dashboard-features">
                        <li>Virtual monastery tours</li>
                        <li>Travel planning tools</li>
                        <li>Event bookings</li>
                        <li>Cultural guide</li>
                    </ul>
                    <button class="dashboard-btn">Access Dashboard</button>
                </div>
                
                <div class="dashboard-card" onclick="accessDashboard('researcher')">
                    <div class="dashboard-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3>Researcher Dashboard</h3>
                    <p>Advanced search, analysis tools, and academic resources</p>
                    <ul class="dashboard-features">
                        <li>Advanced archive search</li>
                        <li>Academic publications</li>
                        <li>Data visualization</li>
                        <li>Research collaboration</li>
                    </ul>
                    <button class="dashboard-btn">Access Dashboard</button>
                </div>
                
                <div class="dashboard-card" onclick="accessDashboard('admin')">
                    <div class="dashboard-icon">
                        <i class="fas fa-cog"></i>
                    </div>
                    <h3>Admin Dashboard</h3>
                    <p>Manage content, monitor analytics, and oversee operations</p>
                    <ul class="dashboard-features">
                        <li>Content management</li>
                        <li>User analytics</li>
                        <li>System monitoring</li>
                        <li>Role management</li>
                    </ul>
                    <button class="dashboard-btn">Access Dashboard</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <div class="logo-circle">
                            <i class="fas fa-dharmachakra"></i>
                        </div>
                        <div class="logo-text">
                            <span class="logo-main">Monastery360</span>
                            <span class="logo-sub">Digital Heritage Platform</span>
                        </div>
                    </div>
                    <p>Preserving and showcasing Sikkim's monastery heritage through cutting-edge digital technology.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Features</h4>
                    <ul>
                        <li><a href="#" onclick="openVirtualTours()">Virtual Tours</a></li>
                        <li><a href="#" onclick="openAIGuide()">AI Cultural Guide</a></li>
                        <li><a href="#" onclick="openArchives()">Digital Archives</a></li>
                        <li><a href="#" onclick="openMap()">Interactive Map</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Dashboards</h4>
                    <ul>
                        <li><a href="#" onclick="accessDashboard('user')">Tourist Dashboard</a></li>
                        <li><a href="#" onclick="accessDashboard('researcher')">Researcher Dashboard</a></li>
                        <li><a href="#" onclick="accessDashboard('admin')">Admin Dashboard</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Contact</h4>
                    <ul>
                        <li><i class="fas fa-envelope"></i> info@monastery360.com</li>
                        <li><i class="fas fa-phone"></i> +91-3592-123456</li>
                        <li><i class="fas fa-map-marker-alt"></i> Gangtok, Sikkim</li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 Monastery360. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
            </div>
        </div>
    </footer>

    <!-- AI Chatbot -->
    <div class="chatbot-container" id="chatbot">
        <div class="chatbot-header" onclick="toggleChatbot()">
            <div class="chatbot-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="chatbot-info">
                <span class="chatbot-name">Cultural Guide AI</span>
                <span class="chatbot-status">Online • 15 languages</span>
            </div>
            <button class="chatbot-toggle">
                <i class="fas fa-chevron-up" id="chatbot-icon"></i>
            </button>
        </div>
        
        <div class="chatbot-body" id="chatbot-body">
            <div class="chatbot-messages" id="chatbot-messages">
                <div class="chatbot-message bot">
                    <div class="message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content">
                        <p>Namaste! I'm your AI Cultural Guide. I can help you explore Sikkim's monasteries, explain Buddhist traditions, and assist with planning your spiritual journey. How can I help you today?</p>
                        <div class="quick-actions">
                            <button onclick="sendQuickMessage('Tell me about Rumtek Monastery')">About Rumtek</button>
                            <button onclick="sendQuickMessage('Plan a 3-day monastery tour')">Plan Tour</button>
                            <button onclick="sendQuickMessage('What festivals are happening soon?')">Upcoming Events</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="chatbot-input">
                <div class="language-selector">
                    <select id="chatbot-language">
                        <option value="en">English</option>
                        <option value="hi">हिन्दी</option>
                        <option value="ne">नेपाली</option>
                        <option value="si">සිංහල</option>
                        <option value="bo">བོད་ཡིག</option>
                    </select>
                </div>
                <input type="text" id="chatbot-input" placeholder="Ask me anything about monasteries...">
                <button onclick="sendMessage()">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Login Modal -->
    <div class="modal-overlay" id="loginModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Sign In to Monastery360</h2>
                <button class="modal-close" onclick="closeModal('loginModal')">&times;</button>
            </div>
            <div class="modal-body">
                <form class="login-form">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" required>
                    </div>
                    <div class="form-group">
                        <label for="role">Role</label>
                        <select id="role" required>
                            <option value="">Select your role</option>
                            <option value="user">Tourist</option>
                            <option value="researcher">Researcher</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit" class="btn-primary" onclick="handleLogin(event)">Sign In</button>
                </form>
                <p class="modal-footer">Don't have an account? <a href="#" onclick="switchToSignup()">Sign up here</a></p>
            </div>
        </div>
    </div>

    <!-- Signup Modal -->
    <div class="modal-overlay" id="signupModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Join Monastery360</h2>
                <button class="modal-close" onclick="closeModal('signupModal')">&times;</button>
            </div>
            <div class="modal-body">
                <form class="signup-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" required>
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="signupEmail">Email</label>
                        <input type="email" id="signupEmail" required>
                    </div>
                    <div class="form-group">
                        <label for="signupPassword">Password</label>
                        <input type="password" id="signupPassword" required>
                    </div>
                    <div class="form-group">
                        <label for="signupRole">I am a</label>
                        <select id="signupRole" required>
                            <option value="">Select your role</option>
                            <option value="user">Tourist/Visitor</option>
                            <option value="researcher">Researcher/Academic</option>
                            <option value="admin">Monastery Administrator</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="checkbox-label">
                            <input type="checkbox" required>
                            I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                        </label>
                    </div>
                    <button type="submit" class="btn-primary" onclick="handleSignup(event)">Create Account</button>
                </form>
                <p class="modal-footer">Already have an account? <a href="#" onclick="switchToLogin()">Sign in here</a></p>
            </div>
        </div>
    </div>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="js/main.js"></script>
</body>
</html>'''

# Save the landing page
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(landing_html)

print("✅ Landing page (index.html) created successfully!")