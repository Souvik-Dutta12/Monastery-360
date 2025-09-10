# Create the main JavaScript file
main_js = '''// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Global variables
let chatbotExpanded = false;
let currentUser = null;

// Navigation functionality
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Hero section functions
function startVirtualTour() {
    showNotification('🎯 Launching Virtual Tour Experience...', 'success');
    setTimeout(() => {
        // In a real implementation, this would open the VR tour
        window.open('virtual-tour.html', '_blank');
    }, 1000);
}

function exploreMap() {
    showNotification('🗺️ Opening Interactive Monastery Map...', 'info');
    setTimeout(() => {
        window.open('map.html', '_blank');
    }, 1000);
}

// Feature functions
function openVirtualTours() {
    showNotification('🏛️ Opening Virtual Tours Portal...', 'success');
    setTimeout(() => {
        window.location.href = 'virtual-tours.html';
    }, 1000);
}

function openAIGuide() {
    toggleChatbot();
    showNotification('🤖 AI Cultural Guide activated!', 'info');
}

function openArchives() {
    showNotification('📚 Accessing Digital Archives...', 'success');
    setTimeout(() => {
        window.location.href = 'archives.html';
    }, 1000);
}

function openMap() {
    showNotification('🗺️ Loading Interactive Map...', 'info');
    setTimeout(() => {
        window.location.href = 'map.html';
    }, 1000);
}

function downloadApp() {
    showNotification('📱 Preparing Audio Guide App Download...', 'success');
    // In a real implementation, this would trigger app download
}

function openCalendar() {
    showNotification('📅 Opening Cultural Calendar...', 'info');
    setTimeout(() => {
        window.location.href = 'events.html';
    }, 1000);
}

// Monastery tour functions
function startTour(monastery) {
    const monasteryNames = {
        'rumtek': 'Rumtek Monastery',
        'pemayangtse': 'Pemayangtse Monastery',
        'tashiding': 'Tashiding Monastery'
    };
    
    showNotification(`🎭 Starting ${monasteryNames[monastery]} Virtual Tour...`, 'success');
    setTimeout(() => {
        window.open(`virtual-tour.html?monastery=${monastery}`, '_blank');
    }, 1000);
}

function viewAllMonasteries() {
    showNotification('🏛️ Loading All Monastery Profiles...', 'info');
    setTimeout(() => {
        window.location.href = 'monasteries.html';
    }, 1000);
}

// Events scroll functionality
function scrollEvents(direction) {
    const scrollContainer = document.querySelector('.events-scroll');
    const scrollAmount = 320; // Card width + gap
    
    if (direction === 'left') {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Event functions
function joinLive(eventId) {
    showNotification('🔴 Connecting to Live Event Stream...', 'success');
    setTimeout(() => {
        window.open(`live-event.html?event=${eventId}`, '_blank');
    }, 1000);
}

function setReminder(eventId) {
    showNotification('⏰ Event reminder set successfully!', 'success');
    // In a real implementation, this would set a calendar reminder
}

function bookEvent(eventId) {
    showNotification('🎫 Opening Event Booking Portal...', 'info');
    setTimeout(() => {
        window.location.href = `booking.html?event=${eventId}`;
    }, 1000);
}

function registerWorkshop(workshopId) {
    showNotification('📚 Opening Workshop Registration...', 'success');
    setTimeout(() => {
        window.location.href = `workshop.html?id=${workshopId}`;
    }, 1000);
}

function joinCeremony(ceremonyId) {
    showNotification('🙏 Joining Online Ceremony...', 'info');
    setTimeout(() => {
        window.open(`ceremony.html?id=${ceremonyId}`, '_blank');
    }, 1000);
}

// Archive functions
function openArchiveCategory(category) {
    const categories = {
        'manuscripts': 'Ancient Manuscripts',
        'murals': 'Sacred Murals',
        'photos': 'Historical Photos',
        'audio': 'Chants & Prayers'
    };
    
    showNotification(`📖 Opening ${categories[category]} Archive...`, 'info');
    setTimeout(() => {
        window.location.href = `archives.html?category=${category}`;
    }, 1000);
}

// Dashboard access functions
function accessDashboard(role) {
    if (!currentUser) {
        openLogin();
        return;
    }
    
    const dashboards = {
        'user': 'Tourist Dashboard',
        'researcher': 'Researcher Dashboard',
        'admin': 'Admin Dashboard'
    };
    
    showNotification(`🔐 Accessing ${dashboards[role]}...`, 'success');
    setTimeout(() => {
        window.location.href = `dashboard-${role}.html`;
    }, 1000);
}

// Modal functions
function openLogin() {
    document.getElementById('loginModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function openSignup() {
    document.getElementById('signupModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

function switchToSignup() {
    closeModal('loginModal');
    openSignup();
}

function switchToLogin() {
    closeModal('signupModal');
    openLogin();
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modals = ['loginModal', 'signupModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (e.target === modal) {
            closeModal(modalId);
        }
    });
});

// Login form handler
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    
    if (!email || !password || !role) {
        showNotification('❌ Please fill in all fields', 'error');
        return;
    }
    
    // Simulate login process
    showNotification('🔐 Signing you in...', 'info');
    
    setTimeout(() => {
        currentUser = {
            email: email,
            role: role,
            name: email.split('@')[0]
        };
        
        showNotification('✅ Login successful! Welcome back!', 'success');
        closeModal('loginModal');
        
        // Redirect to appropriate dashboard
        setTimeout(() => {
            window.location.href = `dashboard-${role}.html`;
        }, 1500);
        
    }, 2000);
}

// Signup form handler
function handleSignup(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const role = document.getElementById('signupRole').value;
    const termsAccepted = document.querySelector('input[type="checkbox"]').checked;
    
    if (!firstName || !lastName || !email || !password || !role) {
        showNotification('❌ Please fill in all fields', 'error');
        return;
    }
    
    if (!termsAccepted) {
        showNotification('❌ Please accept the Terms of Service', 'error');
        return;
    }
    
    // Simulate signup process
    showNotification('🔐 Creating your account...', 'info');
    
    setTimeout(() => {
        currentUser = {
            email: email,
            role: role,
            name: firstName + ' ' + lastName
        };
        
        showNotification('🎉 Account created successfully! Welcome to Monastery360!', 'success');
        closeModal('signupModal');
        
        // Redirect to appropriate dashboard
        setTimeout(() => {
            window.location.href = `dashboard-${role}.html`;
        }, 1500);
        
    }, 2000);
}

// Chatbot functionality
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
    }
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    addChatMessage('user', message);
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const responses = [
            "That's a fascinating question about Buddhist culture! Let me help you explore that...",
            "I'd be happy to guide you through the spiritual significance of that monastery.",
            "Based on your interests, I recommend starting with our virtual tour feature.",
            "The history of that particular tradition dates back centuries. Would you like to know more?",
            "I can help you plan the perfect monastery pilgrimage route through Sikkim."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addChatMessage('bot', randomResponse);
        
    }, 1500);
}

function sendQuickMessage(message) {
    addChatMessage('user', message);
    
    setTimeout(() => {
        let response = '';
        
        if (message.includes('Rumtek')) {
            response = "Rumtek Monastery is the largest monastery in Sikkim and the main seat of the Kagyu lineage of Tibetan Buddhism. Built in the 1960s, it houses the precious Black Crown and other sacred relics of the Karmapa lineage.";
        } else if (message.includes('tour')) {
            response = "I'd recommend a 3-day tour starting with Rumtek Monastery (Day 1), followed by Pemayangtse and Tashiding (Day 2), and ending with Enchey Monastery and local cultural experiences (Day 3). Would you like me to create a detailed itinerary?";
        } else if (message.includes('festivals')) {
            response = "Exciting events coming up! The Butter Lamp Festival at Pemayangtse is today at 6 PM, and we have the Losar New Year celebrations from Feb 10-12. I can help you book tickets or set reminders!";
        }
        
        addChatMessage('bot', response);
    }, 1000);
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
document.getElementById('chatbot-input')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#4299e1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        transform: translateX(400px);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
        backdrop-filter: blur(20px);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 4000);
}

// Initialize chatbot as collapsed
document.addEventListener('DOMContentLoaded', function() {
    const chatbotBody = document.getElementById('chatbot-body');
    if (chatbotBody) {
        chatbotBody.style.display = 'none';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-bg-img');
    
    if (heroBackground) {
        const rate = scrolled * -0.5;
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Auto-play events scroll
let eventsAutoScroll = setInterval(() => {
    const scrollContainer = document.querySelector('.events-scroll');
    if (scrollContainer && !document.hidden) {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        if (scrollContainer.scrollLeft >= maxScroll) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            scrollContainer.scrollBy({ left: 320, behavior: 'smooth' });
        }
    }
}, 5000);

// Pause auto-scroll when user interacts with events
document.querySelector('.events-scroll')?.addEventListener('mouseenter', () => {
    clearInterval(eventsAutoScroll);
});

document.querySelector('.events-scroll')?.addEventListener('mouseleave', () => {
    eventsAutoScroll = setInterval(() => {
        const scrollContainer = document.querySelector('.events-scroll');
        if (scrollContainer && !document.hidden) {
            const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            
            if (scrollContainer.scrollLeft >= maxScroll) {
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: 320, behavior: 'smooth' });
            }
        }
    }, 5000);
});

// Loading states for buttons
function addLoadingState(button, originalText) {
    button.disabled = true;
    button.innerHTML = `
        <div class="loading-spinner"></div>
        Loading...
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .loading-spinner {
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top: 2px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            display: inline-block;
            margin-right: 8px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    if (!document.querySelector('[data-loading-styles]')) {
        style.setAttribute('data-loading-styles', 'true');
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        button.disabled = false;
        button.innerHTML = originalText;
    }, 2000);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏛️ Monastery360 Digital Heritage Platform Loaded');
    
    // Add welcome animation to hero
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroText.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 500);
    }
    
    // Add staggered animation to feature pills
    const featurePills = document.querySelectorAll('.feature-pill');
    featurePills.forEach((pill, index) => {
        pill.style.opacity = '0';
        pill.style.transform = 'translateX(30px)';
        
        setTimeout(() => {
            pill.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            pill.style.opacity = '1';
            pill.style.transform = 'translateX(0)';
        }, 1000 + (index * 200));
    });
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('🙏 Welcome to Monastery360! Explore Sikkim\\'s spiritual heritage digitally.', 'info');
    }, 2000);
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key closes modals
    if (e.key === 'Escape') {
        const modals = ['loginModal', 'signupModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal && modal.style.display === 'flex') {
                closeModal(modalId);
            }
        });
        
        // Close chatbot if open
        if (chatbotExpanded) {
            toggleChatbot();
        }
    }
    
    // Ctrl/Cmd + K opens search (chatbot)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (!chatbotExpanded) {
            toggleChatbot();
        }
        document.getElementById('chatbot-input')?.focus();
    }
});

// Print page info to console for developers
console.log(`
🏛️ MONASTERY360 - Digital Heritage Platform
===============================================
🌟 Features Available:
   • 360° Virtual Reality Tours
   • AI Cultural Guide (Chatbot)
   • Interactive Monastery Map  
   • Digital Archives Access
   • Live Cultural Events
   • Smart Audio Navigation
   • Multi-role Dashboards

🔧 Developer Commands:
   • Press ESC to close modals/chatbot
   • Press Ctrl+K to open AI guide
   • All functions logged to console

📱 Responsive Design: Mobile, Tablet, Desktop
🌐 Browser Support: Chrome, Firefox, Safari, Edge
===============================================
`);'''

# Create js directory and save JavaScript
import os
if not os.path.exists('js'):
    os.makedirs('js')

with open('js/main.js', 'w', encoding='utf-8') as f:
    f.write(main_js)

print("✅ Main JavaScript file (js/main.js) created successfully!")