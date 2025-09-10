# Create the main CSS file
main_css = '''/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #1a365d;
    --secondary-color: #e53e3e;
    --accent-color: #38b2ac;
    --gold-color: #d69e2e;
    --text-dark: #2d3748;
    --text-light: #4a5568;
    --text-muted: #718096;
    --bg-light: #f7fafc;
    --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    --monastery-gradient: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
    --shadow-light: 0 4px 20px rgba(0, 0, 0, 0.1);
    --shadow-medium: 0 8px 40px rgba(0, 0, 0, 0.15);
    --shadow-heavy: 0 20px 60px rgba(0, 0, 0, 0.3);
    --border-radius: 12px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background: var(--bg-light);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
}

h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
}

h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
}

h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
}

p {
    margin-bottom: 1rem;
    color: var(--text-light);
}

/* Buttons */
.btn-primary {
    background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
    color: white;
    border: none;
    padding: 14px 28px;
    border-radius: var(--border-radius);
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: var(--transition);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: var(--shadow-light);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
}

.btn-secondary {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    padding: 12px 24px;
    border-radius: var(--border-radius);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-secondary:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
}

.btn-hero-primary {
    background: linear-gradient(45deg, var(--secondary-color), var(--gold-color));
    color: white;
    border: none;
    padding: 16px 32px;
    border-radius: var(--border-radius);
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 12px;
    box-shadow: var(--shadow-medium);
}

.btn-hero-primary:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: var(--shadow-heavy);
}

.btn-hero-secondary {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    padding: 16px 32px;
    border-radius: var(--border-radius);
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 12px;
}

.btn-hero-secondary:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    z-index: 1000;
    transition: var(--transition);
    box-shadow: var(--shadow-light);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
}

.logo-circle {
    width: 45px;
    height: 45px;
    background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
    box-shadow: var(--shadow-light);
}

.logo-text {
    display: flex;
    flex-direction: column;
}

.logo-main {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-color);
    line-height: 1;
}

.logo-sub {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-weight: 500;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: var(--text-dark);
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-link:hover {
    color: var(--primary-color);
}

.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 50%;
    background: var(--primary-color);
    transition: var(--transition);
}

.nav-link:hover::after {
    width: 100%;
    left: 0;
}

.nav-buttons {
    display: flex;
    gap: 1rem;
    margin-left: 1rem;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background: var(--text-dark);
    margin: 3px 0;
    transition: var(--transition);
}

/* Hero Section */
.hero {
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
}

.hero-bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(26, 54, 93, 0.8) 0%, rgba(56, 178, 172, 0.6) 100%);
    z-index: -1;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    color: white;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
}

.hero-text h1 {
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-text p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.hero-stats {
    display: flex;
    gap: 2rem;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    color: var(--gold-color);
}

.stat-label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
}

.hero-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.feature-pill {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: var(--transition);
}

.feature-pill:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(10px);
}

.feature-pill i {
    color: var(--gold-color);
    font-size: 1.2rem;
}

/* Section Headers */
.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-header h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.section-header p {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
}

/* Features Section */
.features-section {
    padding: 6rem 0;
    background: white;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: white;
    padding: 2.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-light);
    transition: var(--transition);
    border: 1px solid #e2e8f0;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-medium);
}

.feature-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.feature-icon i {
    font-size: 1.5rem;
    color: white;
}

.feature-card h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.feature-list {
    list-style: none;
    margin: 1.5rem 0;
}

.feature-list li {
    padding: 0.5rem 0;
    color: var(--text-light);
    position: relative;
    padding-left: 1.5rem;
}

.feature-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
}

.feature-btn {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: var(--border-radius);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    width: 100%;
}

.feature-btn:hover {
    background: var(--accent-color);
    transform: translateY(-2px);
}

/* Monasteries Section */
.monasteries-section {
    padding: 6rem 0;
    background: var(--bg-light);
}

.monasteries-container {
    display: grid;
    gap: 3rem;
}

.monastery-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    background: white;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-light);
    transition: var(--transition);
}

.monastery-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-medium);
}

.monastery-card:nth-child(even) {
    direction: rtl;
}

.monastery-card:nth-child(even) .monastery-content {
    direction: ltr;
}

.monastery-image {
    position: relative;
    height: 300px;
    overflow: hidden;
}

.monastery-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.monastery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(26, 54, 93, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
}

.monastery-card:hover .monastery-overlay {
    opacity: 1;
}

.monastery-card:hover .monastery-image img {
    transform: scale(1.1);
}

.tour-btn {
    background: var(--gold-color);
    color: white;
    border: none;
    padding: 16px 32px;
    border-radius: var(--border-radius);
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: var(--transition);
}

.tour-btn:hover {
    transform: scale(1.05);
}

.monastery-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.monastery-subtitle {
    color: var(--accent-color);
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 1rem;
}

.monastery-details {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.5rem;
}

.detail {
    background: var(--bg-light);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    color: var(--text-light);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.detail i {
    color: var(--accent-color);
}

.view-all-container {
    text-align: center;
    margin-top: 3rem;
}

.btn-view-all {
    background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
    color: white;
    border: none;
    padding: 16px 32px;
    border-radius: var(--border-radius);
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    transition: var(--transition);
    box-shadow: var(--shadow-medium);
}

.btn-view-all:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-heavy);
}

/* Events Section */
.events-section {
    padding: 6rem 0;
    background: white;
}

.events-scroll-container {
    position: relative;
    overflow: hidden;
}

.events-scroll {
    display: flex;
    gap: 2rem;
    overflow-x: auto;
    padding: 1rem 0;
    scroll-behavior: smooth;
}

.events-scroll::-webkit-scrollbar {
    display: none;
}

.event-card {
    flex: 0 0 300px;
    background: white;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-light);
    transition: var(--transition);
    position: relative;
}

.event-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-medium);
}

.event-status {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    z-index: 10;
}

.event-card.live .event-status {
    background: var(--secondary-color);
    color: white;
}

.event-card.upcoming .upcoming-status {
    background: var(--gold-color);
    color: white;
}

.event-card.featured .featured-status {
    background: var(--accent-color);
    color: white;
}

.event-card.workshop .workshop-status {
    background: var(--primary-color);
    color: white;
}

.event-card.ceremony .ceremony-status {
    background: #9f7aea;
    color: white;
}

.live-indicator {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    margin-right: 0.5rem;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
}

.event-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.event-content {
    padding: 1.5rem;
}

.event-content h4 {
    margin-bottom: 0.5rem;
    color: var(--primary-color);
}

.event-content p {
    color: var(--text-muted);
    margin-bottom: 1rem;
}

.event-time {
    font-size: 0.9rem;
    color: var(--text-light);
    margin-bottom: 1rem;
}

.event-btn {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: var(--border-radius);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.event-btn.join {
    background: var(--secondary-color);
    color: white;
}

.event-btn.remind {
    background: var(--gold-color);
    color: white;
}

.event-btn.book {
    background: var(--accent-color);
    color: white;
}

.event-btn.register {
    background: var(--primary-color);
    color: white;
}

.event-btn:hover {
    transform: translateY(-2px);
}

.scroll-controls {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
}

.scroll-btn {
    background: rgba(255, 255, 255, 0.9);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    pointer-events: all;
    box-shadow: var(--shadow-light);
}

.scroll-btn:hover {
    background: white;
    transform: scale(1.1);
}

.scroll-btn.left {
    margin-left: -20px;
}

.scroll-btn.right {
    margin-right: -20px;
}

/* Archives Section */
.archives-section {
    padding: 6rem 0;
    background: var(--bg-light);
}

.archives-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.archive-category {
    background: white;
    padding: 2rem;
    border-radius: var(--border-radius);
    text-align: center;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: var(--shadow-light);
    position: relative;
    overflow: hidden;
}

.archive-category::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 4px;
    background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
    transition: var(--transition);
}

.archive-category:hover::before {
    left: 0;
}

.archive-category:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-medium);
}

.archive-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    transition: var(--transition);
}

.archive-category:hover .archive-icon {
    transform: scale(1.1) rotate(10deg);
}

.archive-icon i {
    font-size: 2rem;
    color: white;
}

.archive-count {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--gold-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.9rem;
}

/* Dashboard Section */
.dashboard-section {
    padding: 6rem 0;
    background: white;
}

.dashboard-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.dashboard-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2.5rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    box-shadow: var(--shadow-light);
}

.dashboard-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: var(--shadow-heavy);
}

.dashboard-icon {
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.dashboard-icon i {
    font-size: 1.5rem;
    color: white;
}

.dashboard-features {
    list-style: none;
    margin: 1.5rem 0;
}

.dashboard-features li {
    padding: 0.5rem 0;
    position: relative;
    padding-left: 1.5rem;
}

.dashboard-features li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--gold-color);
    font-weight: bold;
}

.dashboard-btn {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    padding: 12px 24px;
    border-radius: var(--border-radius);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    width: 100%;
}

.dashboard-btn:hover {
    background: rgba(255, 255, 255, 0.3);
}

/* Footer */
.footer {
    background: var(--primary-color);
    color: white;
    padding: 4rem 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 2rem;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1rem;
}

.footer-section h4 {
    margin-bottom: 1rem;
    color: var(--gold-color);
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section ul li a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: var(--transition);
}

.footer-section ul li a:hover {
    color: white;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-links a {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    transition: var(--transition);
}

.social-links a:hover {
    background: var(--gold-color);
    transform: translateY(-2px);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.7);
}

.footer-bottom a {
    color: var(--gold-color);
    text-decoration: none;
}

/* Chatbot */
.chatbot-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 350px;
    max-height: 500px;
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-heavy);
    z-index: 1001;
    overflow: hidden;
}

.chatbot-header {
    background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
    color: white;
    padding: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.chatbot-avatar {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.chatbot-info {
    flex: 1;
}

.chatbot-name {
    font-weight: 600;
    display: block;
}

.chatbot-status {
    font-size: 0.8rem;
    opacity: 0.8;
}

.chatbot-toggle {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
}

.chatbot-body {
    height: 400px;
    display: flex;
    flex-direction: column;
}

.chatbot-messages {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
}

.chatbot-message {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.message-avatar {
    width: 30px;
    height: 30px;
    background: var(--accent-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.8rem;
    flex-shrink: 0;
}

.message-content {
    background: var(--bg-light);
    padding: 0.75rem;
    border-radius: var(--border-radius);
    flex: 1;
}

.quick-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.quick-actions button {
    background: var(--accent-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: var(--transition);
}

.quick-actions button:hover {
    background: var(--primary-color);
}

.chatbot-input {
    display: flex;
    padding: 1rem;
    border-top: 1px solid #e2e8f0;
    gap: 0.5rem;
}

.language-selector select {
    padding: 0.5rem;
    border: 1px solid #e2e8f0;
    border-radius: var(--border-radius);
    font-size: 0.8rem;
}

.chatbot-input input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: var(--border-radius);
    font-size: 0.9rem;
}

.chatbot-input button {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
}

.chatbot-input button:hover {
    background: var(--accent-color);
}

/* Modals */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 2000;
    display: none;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-heavy);
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem 1rem;
    border-bottom: 1px solid #e2e8f0;
}

.modal-close {
    background: none;
    border: none;
    font-size: 2rem;
    color: var(--text-muted);
    cursor: pointer;
    transition: var(--transition);
}

.modal-close:hover {
    color: var(--text-dark);
}

.modal-body {
    padding: 2rem;
}

.login-form, .signup-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    font-weight: 600;
    color: var(--text-dark);
}

.form-group input,
.form-group select {
    padding: 12px;
    border: 2px solid #e2e8f0;
    border-radius: var(--border-radius);
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--primary-color);
}

.checkbox-label {
    display: flex !important;
    flex-direction: row !important;
    align-items: center;
    gap: 0.5rem;
}

.modal-footer {
    text-align: center;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e2e8f0;
}

.modal-footer a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
    }
    
    .monastery-card {
        grid-template-columns: 1fr;
    }
    
    .monastery-card:nth-child(even) {
        direction: ltr;
    }
}

@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: white;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: var(--shadow-light);
        padding: 2rem 0;
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-toggle {
        display: flex;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }

    .hero-stats {
        justify-content: center;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .dashboard-cards {
        grid-template-columns: 1fr;
    }

    .chatbot-container {
        width: calc(100vw - 40px);
        right: 20px;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }

    .hero-text h1 {
        font-size: 2rem;
    }

    .nav-container {
        padding: 1rem;
    }

    .feature-card,
    .monastery-content {
        padding: 1.5rem;
    }

    .form-row {
        grid-template-columns: 1fr;
    }
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
}

.fade-in-left {
    animation: fadeInLeft 0.6s ease-out forwards;
}

.fade-in-right {
    animation: fadeInRight 0.6s ease-out forwards;
}'''

# Create styles directory and save CSS
import os
if not os.path.exists('styles'):
    os.makedirs('styles')

with open('styles/main.css', 'w', encoding='utf-8') as f:
    f.write(main_css)

print("✅ Main CSS file (styles/main.css) created successfully!")