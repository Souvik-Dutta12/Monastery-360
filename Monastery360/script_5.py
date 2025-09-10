# Create dashboard-specific JavaScript
dashboard_js = '''// Dashboard-specific JavaScript functionality

let sidebarCollapsed = false;
let currentSection = 'overview';
let chatbotExpanded = false;

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏛️ Monastery360 Tourist Dashboard Loaded');
    initializeDashboard();
    loadUserData();
    startRealTimeUpdates();
});

// Initialize dashboard functionality
function initializeDashboard() {
    // Set initial active section
    showSection('overview');
    
    // Initialize chatbot as collapsed
    const chatbotBody = document.getElementById('chatbot-body');
    if (chatbotBody) {
        chatbotBody.style.display = 'none';
    }
    
    // Add loading animations
    addFadeInAnimations();
    
    // Set up real-time updates
    updateWeather();
    updateNotifications();
}

// Sidebar functionality
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebarCollapsed = !sidebarCollapsed;
    
    if (sidebarCollapsed) {
        sidebar.classList.add('collapsed');
    } else {
        sidebar.classList.remove('collapsed');
    }
    
    // Store preference
    localStorage.setItem('sidebarCollapsed', sidebarCollapsed);
}

// Section navigation
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.classList.add('fade-in');
    }
    
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeNavItem = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
    
    // Update page title and subtitle
    updatePageHeader(sectionName);
    
    currentSection = sectionName;
    
    // Load section-specific content
    loadSectionContent(sectionName);
}

// Update page header based on section
function updatePageHeader(sectionName) {
    const titleElement = document.getElementById('page-title');
    const subtitleElement = document.getElementById('page-subtitle');
    
    const sectionData = {
        'overview': {
            title: 'Dashboard Overview',
            subtitle: 'Your spiritual journey at a glance'
        },
        'virtual-tours': {
            title: '360° Virtual Tours',
            subtitle: 'Immersive monastery experiences'
        },
        'map': {
            title: 'Interactive Map',
            subtitle: 'Navigate Sikkim\\'s sacred sites'
        },
        'events': {
            title: 'Live Cultural Events',
            subtitle: 'Join ceremonies and festivals'
        },
        'itinerary': {
            title: 'My Itinerary',
            subtitle: 'Plan your spiritual journey'
        },
        'bookings': {
            title: 'My Bookings',
            subtitle: 'Manage your reservations'
        },
        'favorites': {
            title: 'Favorite Places',
            subtitle: 'Your saved monasteries and experiences'
        },
        'archives': {
            title: 'Digital Archives',
            subtitle: 'Explore ancient manuscripts and artifacts'
        },
        'audio-guide': {
            title: 'Audio Guides',
            subtitle: 'Narrated tours and cultural insights'
        },
        'cultural-guide': {
            title: 'Cultural Learning',
            subtitle: 'Deepen your understanding of Buddhist traditions'
        }
    };
    
    const data = sectionData[sectionName] || sectionData['overview'];
    
    if (titleElement) titleElement.textContent = data.title;
    if (subtitleElement) subtitleElement.textContent = data.subtitle;
}

// Load section-specific content
function loadSectionContent(sectionName) {
    switch(sectionName) {
        case 'virtual-tours':
            loadVirtualTours();
            break;
        case 'map':
            loadInteractiveMap();
            break;
        case 'events':
            loadLiveEvents();
            break;
        case 'itinerary':
            loadItinerary();
            break;
        case 'bookings':
            loadBookings();
            break;
        case 'favorites':
            loadFavorites();
            break;
        case 'archives':
            loadArchives();
            break;
        case 'audio-guide':
            loadAudioGuides();
            break;
        case 'cultural-guide':
            loadCulturalGuide();
            break;
        default:
            break;
    }
}

// Load user data and preferences
function loadUserData() {
    // Simulate loading user data
    const userData = {
        name: 'Tourist User',
        role: 'Explorer',
        visitedMonasteries: 12,
        totalTourTime: '24h',
        eventsBooked: 3,
        favoritesSaved: 8
    };
    
    // Update stats
    updateDashboardStats(userData);
    
    // Load sidebar preference
    const savedSidebarState = localStorage.getItem('sidebarCollapsed');
    if (savedSidebarState === 'true') {
        toggleSidebar();
    }
}

// Update dashboard statistics
function updateDashboardStats(userData) {
    const stats = document.querySelectorAll('.stat-content h3');
    if (stats.length >= 4) {
        stats[0].textContent = userData.visitedMonasteries;
        stats[1].textContent = userData.totalTourTime;
        stats[2].textContent = userData.eventsBooked;
        stats[3].textContent = userData.favoritesSaved;
    }
}

// Virtual Tours functionality
function startTour(monasteryId) {
    showNotification(`🎭 Starting ${getMonasteryName(monasteryId)} Virtual Tour...`, 'success');
    
    // Add loading state
    setTimeout(() => {
        // In a real implementation, this would open the VR tour
        window.open(`virtual-tour.html?monastery=${monasteryId}`, '_blank');
    }, 1500);
}

function getMonasteryName(monasteryId) {
    const names = {
        'rumtek': 'Rumtek Monastery',
        'pemayangtse': 'Pemayangtse Monastery',
        'tashiding': 'Tashiding Monastery',
        'enchey': 'Enchey Monastery'
    };
    return names[monasteryId] || 'Monastery';
}

// Event functionality
function joinLiveEvent(eventId) {
    showNotification('🔴 Connecting to live event...', 'info');
    setTimeout(() => {
        showNotification('✅ Connected! Enjoy the ceremony.', 'success');
        // In real implementation, would open live stream
        window.open(`live-event.html?event=${eventId}`, '_blank');
    }, 2000);
}

function setReminder(eventId) {
    showNotification('⏰ Reminder set successfully!', 'success');
    
    // Add to user\\'s reminders (simulate)
    const reminders = JSON.parse(localStorage.getItem('eventReminders') || '[]');
    reminders.push({
        eventId: eventId,
        timestamp: Date.now(),
        reminderTime: Date.now() + (2 * 60 * 60 * 1000) // 2 hours from now
    });
    localStorage.setItem('eventReminders', JSON.stringify(reminders));
}

// Booking functionality
function bookTransport() {
    showNotification('🚗 Opening transport booking...', 'info');
    setTimeout(() => {
        window.open('booking.html?type=transport', '_blank');
    }, 1000);
}

function bookStay() {
    showNotification('🏠 Finding available homestays...', 'info');
    setTimeout(() => {
        window.open('booking.html?type=homestay', '_blank');
    }, 1000);
}

function bookGuide() {
    showNotification('👨‍🏫 Connecting with local guides...', 'info');
    setTimeout(() => {
        window.open('booking.html?type=guide', '_blank');
    }, 1000);
}

// Load section content functions
function loadVirtualTours() {
    // Create additional tour cards if section doesn\\'t have content
    const toursSection = document.getElementById('virtual-tours-section');
    if (toursSection && !toursSection.querySelector('.tours-grid .tour-card')) {
        const toursGrid = toursSection.querySelector('.tours-grid');
        if (toursGrid) {
            toursGrid.innerHTML = generateVirtualToursHTML();
        }
    }
}

function generateVirtualToursHTML() {
    const tours = [
        {
            id: 'rumtek',
            name: 'Rumtek Monastery',
            subtitle: 'The Dharmachakra Centre',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            duration: '45 min',
            rating: '4.9',
            reviews: '2.3k',
            features: ['VR Ready', '8 Languages', 'Audio Guide'],
            badge: 'Premium'
        },
        {
            id: 'pemayangtse',
            name: 'Pemayangtse Monastery',
            subtitle: 'Perfect Sublime Lotus',
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            duration: '35 min',
            rating: '4.8',
            reviews: '1.8k',
            features: ['360° Views', '5 Languages', 'Historical Context'],
            badge: 'Featured'
        },
        {
            id: 'tashiding',
            name: 'Tashiding Monastery',
            subtitle: 'Sacred Hill of Glory',
            image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            duration: '30 min',
            rating: '4.7',
            reviews: '1.2k',
            features: ['Sacred Ceremonies', '6 Languages', 'Interactive Map'],
            badge: 'Popular'
        },
        {
            id: 'enchey',
            name: 'Enchey Monastery',
            subtitle: 'Solitary Temple',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            duration: '25 min',
            rating: '4.6',
            reviews: '900',
            features: ['City Views', '4 Languages', 'Modern Features'],
            badge: 'New'
        }
    ];
    
    return tours.map(tour => `
        <div class="tour-card ${tour.badge.toLowerCase()}" onclick="startTour('${tour.id}')">
            <div class="tour-image">
                <img src="${tour.image}" alt="${tour.name}">
                <div class="tour-overlay">
                    <button class="play-btn">
                        <i class="fas fa-play"></i>
                    </button>
                </div>
                <div class="tour-badge ${tour.badge.toLowerCase()}-badge">${tour.badge}</div>
            </div>
            <div class="tour-content">
                <h3>${tour.name}</h3>
                <p>${tour.subtitle} • ${tour.duration} experience</p>
                <div class="tour-features">
                    ${tour.features.map(feature => `<span class="feature"><i class="fas fa-check"></i> ${feature}</span>`).join('')}
                </div>
                <div class="tour-rating">
                    <div class="stars">★★★★★</div>
                    <span>(${tour.rating} • ${tour.reviews} reviews)</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Weather and notifications
function updateWeather() {
    // Simulate weather API call
    const weather = {
        location: 'Gangtok',
        temperature: '18°C',
        condition: 'Sunny',
        icon: 'fas fa-sun'
    };
    
    const weatherWidget = document.querySelector('.weather-widget span');
    if (weatherWidget) {
        weatherWidget.textContent = `${weather.location}: ${weather.temperature}`;
    }
}

function updateNotifications() {
    // Simulate notifications
    const notificationBadge = document.querySelector('.notification-badge');
    if (notificationBadge) {
        // Could update with real notification count
        notificationBadge.textContent = '3';
    }
}

function toggleNotifications() {
    showNotification('📢 Notifications panel opened', 'info');
    // In real implementation, would show notifications dropdown
}

// Help and support
function openHelp() {
    showNotification('❓ Opening help center...', 'info');
    setTimeout(() => {
        window.open('help.html', '_blank');
    }, 1000);
}

// Chatbot functionality (enhanced for dashboard)
function toggleChatbot() {
    const chatbotBody = document.getElementById('chatbot-body');
    const chatbotIcon = document.getElementById('chatbot-icon');
    
    if (chatbotExpanded) {
        chatbotBody.style.display = 'none';
        chatbotIcon.className = 'fas fa-chevron-up';
        chatbotExpanded = false;
    } else {
        chatbotBody.style.display = 'flex';
        chatbotIcon.className = 'fas fa-chevron-down';
        chatbotExpanded = true;
        
        // Focus on input when opening
        setTimeout(() => {
            document.getElementById('chatbot-input')?.focus();
        }, 100);
    }
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    addChatMessage('user', message);
    input.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate AI response with context awareness
    setTimeout(() => {
        hideTypingIndicator();
        
        let response = generateContextualResponse(message);
        addChatMessage('bot', response);
        
    }, 1500 + Math.random() * 1000); // Vary response time
}

function generateContextualResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Context-aware responses based on current section
    if (currentSection === 'virtual-tours' && (lowerMessage.includes('tour') || lowerMessage.includes('visit'))) {
        return "I see you\\'re exploring virtual tours! I recommend starting with Rumtek Monastery - it\\'s our most comprehensive VR experience. Would you like me to suggest a tour sequence based on your interests?";
    }
    
    if (currentSection === 'events' && (lowerMessage.includes('event') || lowerMessage.includes('festival'))) {
        return "Great timing! There\\'s a live Morning Prayer session happening right now at Rumtek, and the Butter Lamp Festival is starting at 6 PM today at Pemayangtse. Would you like me to help you join or set reminders?";
    }
    
    if (lowerMessage.includes('weather') || lowerMessage.includes('visit') || lowerMessage.includes('travel')) {
        return "Perfect weather for monastery visits today! It\\'s sunny and 18°C in Gangtok. I can help you plan a route that considers travel time and current conditions. Which monasteries interest you most?";
    }
    
    if (lowerMessage.includes('book') || lowerMessage.includes('transport') || lowerMessage.includes('stay')) {
        return "I can help you book everything for your monastery journey! We have partnerships with local transport services, authentic homestays near monasteries, and certified cultural guides. What would you like to arrange first?";
    }
    
    // General responses
    const responses = [
        "Based on your activity, I notice you\\'ve been exploring Tibetan Buddhist traditions. Would you like me to recommend some related experiences?",
        "I can see you\\'re interested in Sikkim\\'s monasteries. Each has unique features - shall I create a personalized tour recommendation for you?",
        "Your spiritual journey is taking shape nicely! I can help optimize your itinerary based on opening hours, travel distances, and special ceremonies.",
        "I have access to real-time information about all monastery activities. What specific aspect of Buddhist culture would you like to explore?",
        "Let me help you discover hidden gems in Sikkim\\'s monastery heritage. Are you more interested in architecture, spiritual practices, or historical significance?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatbot-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-message bot typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="typing-animation">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Add typing animation styles
    if (!document.getElementById('typing-styles')) {
        const style = document.createElement('style');
        style.id = 'typing-styles';
        style.textContent = `
            .typing-animation {
                display: flex;
                gap: 4px;
                padding: 8px 0;
            }
            .typing-animation span {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #38b2ac;
                animation: typing 1.4s infinite ease-in-out;
            }
            .typing-animation span:nth-child(2) { animation-delay: 0.2s; }
            .typing-animation span:nth-child(3) { animation-delay: 0.4s; }
            @keyframes typing {
                0%, 60%, 100% { opacity: 0.3; transform: scale(0.8); }
                30% { opacity: 1; transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function addChatMessage(sender, message) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${sender}`;
    
    if (sender === 'user') {
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
            </div>
            <div class="message-avatar user-avatar">
                <i class="fas fa-user"></i>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p>${message}</p>
            </div>
        `;
    }
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Enter key support for chatbot
document.addEventListener('keydown', function(e) {
    if (e.target.id === 'chatbot-input' && e.key === 'Enter') {
        sendMessage();
    }
});

// Real-time updates
function startRealTimeUpdates() {
    // Update live events status
    setInterval(updateLiveEvents, 30000); // Every 30 seconds
    
    // Update weather
    setInterval(updateWeather, 300000); // Every 5 minutes
    
    // Check for new notifications
    setInterval(checkNotifications, 60000); // Every minute
}

function updateLiveEvents() {
    // Simulate live event updates
    const liveEvents = document.querySelectorAll('.event-item.live');
    liveEvents.forEach(event => {
        const timeElement = event.querySelector('small');
        if (timeElement && timeElement.textContent.includes('Started')) {
            // Update time display
            const currentTime = timeElement.textContent;
            const minutes = parseInt(currentTime.match(/\\d+/)[0]) + 1;
            timeElement.textContent = `Started ${minutes} min ago`;
        }
    });
}

function checkNotifications() {
    // Check for reminder notifications
    const reminders = JSON.parse(localStorage.getItem('eventReminders') || '[]');
    const now = Date.now();
    
    reminders.forEach(reminder => {
        if (now >= reminder.reminderTime && !reminder.notified) {
            showNotification('🔔 Event reminder: Your booked event is starting soon!', 'info');
            reminder.notified = true;
        }
    });
    
    localStorage.setItem('eventReminders', JSON.stringify(reminders));
}

// Utility functions
function addFadeInAnimations() {
    const elements = document.querySelectorAll('.stat-card, .dashboard-card, .tour-card');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function logout() {
    showNotification('👋 Signing you out...', 'info');
    setTimeout(() => {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('sidebarCollapsed');
        window.location.href = 'index.html';
    }, 1500);
}

// Notification system (enhanced)
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const colors = {
        'success': '#48bb78',
        'error': '#f56565',
        'info': '#4299e1',
        'warning': '#ed8936'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        background: ${colors[type]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        transform: translateX(400px);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 4000);
}

// Initialize on load
console.log('🎯 Dashboard functionality loaded and ready!');'''

with open('js/dashboard.js', 'w', encoding='utf-8') as f:
    f.write(dashboard_js)

print("✅ Dashboard JavaScript (js/dashboard.js) created successfully!")