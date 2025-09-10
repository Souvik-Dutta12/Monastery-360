// Researcher Dashboard JavaScript

let researchAIExpanded = false;
let currentAITab = 'analysis';
let researchChart = null;

// Initialize researcher dashboard
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔬 Monastery360 Research Dashboard Loaded');
    initializeResearchDashboard();
    setupResearchChart();
    loadResearchData();
});

// Initialize research-specific functionality
function initializeResearchDashboard() {
    // Initialize AI assistant as collapsed
    const aiBody = document.getElementById('ai-body');
    if (aiBody) {
        aiBody.style.display = 'none';
    }

    // Set up real-time research updates
    startResearchUpdates();

    // Initialize advanced search
    setupAdvancedSearch();
}

// Setup research trends chart
function setupResearchChart() {
    const ctx = document.getElementById('researchTrendsChart');
    if (!ctx) return;

    researchChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Manuscripts Analyzed',
                data: [45, 67, 89, 123, 156, 189],
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4,
                fill: true
            }, {
                label: 'Citations Generated',
                data: [12, 18, 25, 34, 42, 51],
                borderColor: '#f093fb',
                backgroundColor: 'rgba(240, 147, 251, 0.1)',
                tension: 0.4,
                fill: true
            }, {
                label: 'Collaborations',
                data: [5, 8, 12, 15, 19, 23],
                borderColor: '#4facfe',
                backgroundColor: 'rgba(79, 172, 254, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#f1f5f9'
                    }
                },
                x: {
                    grid: {
                        color: '#f1f5f9'
                    }
                }
            }
        }
    });
}

// Update research chart based on time filter
function updateResearchChart() {
    const timeFilter = document.querySelector('.time-filter').value;
    let newData, newLabels;

    switch(timeFilter) {
        case 'month':
            newLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
            newData = [
                [23, 34, 45, 52],
                [8, 12, 16, 21],
                [3, 5, 7, 9]
            ];
            break;
        case 'quarter':
            newLabels = ['Jan', 'Feb', 'Mar'];
            newData = [
                [145, 167, 189],
                [42, 48, 51],
                [18, 20, 23]
            ];
            break;
        case 'year':
            newLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
            newData = [
                [456, 623, 789, 945],
                [123, 156, 189, 234],
                [45, 56, 67, 78]
            ];
            break;
    }

    researchChart.data.labels = newLabels;
    researchChart.data.datasets[0].data = newData[0];
    researchChart.data.datasets[1].data = newData[1];
    researchChart.data.datasets[2].data = newData[2];
    researchChart.update();

    showNotification(`📊 Chart updated for ${timeFilter} view`, 'info');
}

// Load research data and statistics
function loadResearchData() {
    // Simulate loading research statistics
    const researchData = {
        manuscriptsAnalyzed: 1247,
        citationsGenerated: 89,
        publishedPapers: 15,
        activeCollaborations: 34,
        monthlyGrowth: {
            manuscripts: 23,
            citations: 12,
            papers: 2,
            collaborations: 8
        }
    };

    // Update stats with animation
    animateResearchStats(researchData);
}

// Animate research statistics
function animateResearchStats(data) {
    const stats = document.querySelectorAll('.research-stat .stat-content h3');
    const changes = document.querySelectorAll('.stat-change');

    const values = [
        data.manuscriptsAnalyzed,
        data.citationsGenerated,
        data.publishedPapers,
        data.activeCollaborations
    ];

    stats.forEach((stat, index) => {
        animateValue(stat, 0, values[index], 2000);
    });

    // Update growth indicators
    if (changes.length >= 4) {
        changes[0].textContent = `+${data.monthlyGrowth.manuscripts}% this month`;
        changes[1].textContent = `+${data.monthlyGrowth.citations}% this month`;
        changes[2].textContent = `${data.monthlyGrowth.papers} under review`;
        changes[3].textContent = `+${data.monthlyGrowth.collaborations} this quarter`;
    }
}

// Animate number values
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Category filtering
function filterByCategory(category) {
    showNotification(`🔍 Loading ${category} manuscripts...`, 'info');

    setTimeout(() => {
        showSection('manuscripts');
        showNotification(`✅ Showing ${category} collection`, 'success');
    }, 1500);
}

// Insight exploration
function exploreInsight(insightType) {
    const insights = {
        'patterns': 'Opening pattern analysis visualization...',
        'connections': 'Loading monastery connection network...'
    };

    showNotification(`🧠 ${insights[insightType]}`, 'info');

    setTimeout(() => {
        showSection('ai-analysis');
        showNotification('✅ Analysis tools loaded', 'success');
    }, 1500);
}

// Advanced search functionality
function setupAdvancedSearch() {
    // Initialize search interface
    const searchResults = document.getElementById('searchResults');
    if (searchResults) {
        searchResults.innerHTML = generateSampleResults();
    }
}

function performQuickSearch() {
    const query = document.querySelector('.quick-search').value.trim();
    if (!query) return;

    showNotification(`🔍 Searching for "${query}"...`, 'info');

    setTimeout(() => {
        showSection('advanced-search');
        showNotification(`Found 47 results for "${query}"`, 'success');
    }, 1500);
}

function performAdvancedSearch() {
    // Collect filter parameters
    const filters = {
        contentTypes: Array.from(document.querySelectorAll('.checkbox-group input:checked')).map(cb => cb.closest('label').textContent.trim()),
        monastery: document.querySelector('.monastery-select').value,
        language: document.querySelector('.language-select').value,
        dateFrom: document.querySelector('.date-inputs input:first-child').value,
        dateTo: document.querySelector('.date-inputs input:last-child').value
    };

    showNotification('🔍 Performing advanced search...', 'info');

    // Simulate search process
    setTimeout(() => {
        const resultsCount = Math.floor(Math.random() * 200) + 50;
        updateSearchResults(resultsCount, filters);
        showNotification(`✅ Found ${resultsCount} results matching your criteria`, 'success');
    }, 2000);
}

function updateSearchResults(count, filters) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;

    searchResults.innerHTML = `
        <div class="search-summary">
            <p><strong>${count} results</strong> found matching your search criteria</p>
            <div class="active-filters">
                ${filters.contentTypes.map(type => `<span class="filter-tag">${type}</span>`).join('')}
                ${filters.monastery ? `<span class="filter-tag">${filters.monastery}</span>` : ''}
                ${filters.language !== 'all' ? `<span class="filter-tag">${filters.language}</span>` : ''}
            </div>
        </div>
        ${generateSearchResults(count)}
    `;
}

function generateSearchResults(count) {
    const results = [];
    const sampleResults = [
        {
            title: 'Prajnaparamita Sutra Fragment',
            monastery: 'Rumtek Monastery',
            date: '15th Century',
            language: 'Tibetan',
            type: 'Manuscript',
            relevance: 95
        },
        {
            title: 'Mandala Iconographic Study',
            monastery: 'Pemayangtse Monastery',
            date: '12th Century',
            language: 'Sanskrit',
            type: 'Mural',
            relevance: 87
        },
        {
            title: 'Monastic Rules and Regulations',
            monastery: 'Tashiding Monastery',
            date: '17th Century',
            language: 'Tibetan',
            type: 'Historical Record',
            relevance: 82
        }
    ];

    for (let i = 0; i < Math.min(count, 10); i++) {
        const result = sampleResults[i % sampleResults.length];
        results.push(`
            <div class="search-result-item" onclick="openResult('${result.title}')">
                <div class="result-header">
                    <h4>${result.title}</h4>
                    <div class="relevance-score">${result.relevance}%</div>
                </div>
                <div class="result-meta">
                    <span class="result-monastery">${result.monastery}</span>
                    <span class="result-date">${result.date}</span>
                    <span class="result-language">${result.language}</span>
                    <span class="result-type">${result.type}</span>
                </div>
                <div class="result-preview">
                    <p>This ${result.type.toLowerCase()} contains valuable insights into Buddhist philosophy and monastic practices...</p>
                </div>
                <div class="result-actions">
                    <button class="action-btn view-btn" onclick="viewResult('${result.title}')">
                        <i class="fas fa-eye"></i> View
                    </button>
                    <button class="action-btn download-btn" onclick="downloadResult('${result.title}')">
                        <i class="fas fa-download"></i> Download
                    </button>
                    <button class="action-btn cite-btn" onclick="citeResult('${result.title}')">
                        <i class="fas fa-quote-right"></i> Cite
                    </button>
                </div>
            </div>
        `);
    }

    return results.join('');
}

function generateSampleResults() {
    return generateSearchResults(5);
}

// Result actions
function openResult(title) {
    showNotification(`📖 Opening "${title}"...`, 'info');
    setTimeout(() => {
        window.open(`manuscript-viewer.html?title=${encodeURIComponent(title)}`, '_blank');
    }, 1000);
}

function viewResult(title) {
    showNotification(`👁️ Loading detailed view of "${title}"...`, 'info');
}

function downloadResult(title) {
    showNotification(`💾 Preparing download for "${title}"...`, 'info');
    setTimeout(() => {
        showNotification('✅ Download started', 'success');
    }, 2000);
}

function citeResult(title) {
    const citation = `${title}. Monastery360 Digital Archive. Accessed ${new Date().toLocaleDateString()}.`;

    // Copy to clipboard
    navigator.clipboard.writeText(citation).then(() => {
        showNotification('📋 Citation copied to clipboard', 'success');
    });
}

function toggleResultsView() {
    const resultsContainer = document.getElementById('searchResults');
    const toggleBtn = document.querySelector('.view-toggle i');

    if (toggleBtn.classList.contains('fa-th')) {
        toggleBtn.className = 'fas fa-list';
        resultsContainer.classList.add('list-view');
        resultsContainer.classList.remove('grid-view');
    } else {
        toggleBtn.className = 'fas fa-th';
        resultsContainer.classList.add('grid-view');
        resultsContainer.classList.remove('list-view');
    }
}

// Research AI Assistant functionality
function toggleResearchAI() {
    const aiBody = document.getElementById('ai-body');
    const aiIcon = document.getElementById('ai-icon');

    if (researchAIExpanded) {
        aiBody.style.display = 'none';
        aiIcon.className = 'fas fa-chevron-up';
        researchAIExpanded = false;
    } else {
        aiBody.style.display = 'flex';
        aiIcon.className = 'fas fa-chevron-down';
        researchAIExpanded = true;

        // Start analysis simulation if on analysis tab
        if (currentAITab === 'analysis') {
            startAnalysisSimulation();
        }
    }
}

function switchAITab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.ai-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[onclick="switchAITab('${tabName}')"]`).classList.add('active');

    // Update tab content
    document.querySelectorAll('.ai-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');

    currentAITab = tabName;

    // Initialize tab-specific content
    if (tabName === 'analysis' && researchAIExpanded) {
        startAnalysisSimulation();
    }
}

function startAnalysisSimulation() {
    const progressBar = document.querySelector('.analysis-progress .progress');
    if (!progressBar) return;

    let progress = 73;
    const interval = setInterval(() => {
        progress += Math.random() * 3;
        if (progress > 100) {
            progress = 100;
            clearInterval(interval);
            showNotification('🎯 Analysis complete! New insights available.', 'success');
        }
        progressBar.style.width = `${progress}%`;
        document.querySelector('.analysis-progress span:last-child').textContent = `${Math.floor(progress)}%`;
    }, 500);
}

function sendAIMessage() {
    const input = document.getElementById('ai-input');
    const message = input.value.trim();

    if (!message) return;

    addAIMessage('user', message);
    input.value = '';

    // Show typing indicator
    showAITyping();

    // Generate research-specific AI response
    setTimeout(() => {
        hideAITyping();
        const response = generateResearchAIResponse(message);
        addAIMessage('bot', response);
    }, 1500);
}

function generateResearchAIResponse(message) {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('pattern') || lowerMessage.includes('analyze')) {
        return "I've identified several interesting patterns in your recent manuscript analysis. There's a recurring iconographic motif appearing in 73% of the 15th-century texts from Rumtek. Would you like me to generate a detailed pattern analysis report?";
    }

    if (lowerMessage.includes('connection') || lowerMessage.includes('relationship')) {
        return "Based on the current dataset, I've found potential connections between 5 different monasteries through shared textual traditions. The connection strength analysis shows Rumtek and Pemayangtse have 89% similarity in their manuscript collections. Shall I create a network visualization?";
    }

    if (lowerMessage.includes('citation') || lowerMessage.includes('reference')) {
        return "I can help you generate properly formatted citations for any manuscript in our database. I also track citation impact - your recent paper on Tibetan iconography has been cited 12 times this month. Would you like a citation report?";
    }

    if (lowerMessage.includes('collaboration') || lowerMessage.includes('colleague')) {
        return "I see you're working on Buddhist manuscript analysis. Dr. John Smith at Harvard is researching similar topics and has complementary expertise in Tibetan linguistics. Dr. Li Chen from Beijing has a 94% research interest overlap with your current project. Should I facilitate an introduction?";
    }

    const responses = [
        "I can help you identify research gaps in your current manuscript analysis. Based on your work patterns, I suggest exploring the connection between 13th-century tantric texts and monastery architectural designs.",
        "Your research methodology is showing excellent results. The AI pattern recognition has improved 23% since last month. Would you like me to suggest new analytical approaches?",
        "I notice you've been working extensively with Prajnaparamita texts. There's a newly digitized collection from Tashiding that shares similar characteristics. Shall I add it to your research queue?",
        "Based on current trends in Buddhist studies, your research on digital preservation methods is highly relevant. I can help you identify potential publication opportunities.",
        "I've processed 1,247 manuscripts in your current project. The data suggests three main research themes emerging. Would you like me to generate a thematic analysis report?"
    ];

    return responses[Math.floor(Math.random() * responses.length)];
}

function showAITyping() {
    const messagesContainer = document.getElementById('ai-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message bot typing-indicator';
    typingDiv.id = 'ai-typing-indicator';
    typingDiv.innerHTML = `
        <div class="typing-animation">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideAITyping() {
    const typingIndicator = document.getElementById('ai-typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function addAIMessage(sender, message) {
    const messagesContainer = document.getElementById('ai-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${sender}`;
    messageDiv.innerHTML = `<p>${message}</p>`;

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Enter key support for AI chat
document.addEventListener('keydown', function(e) {
    if (e.target.id === 'ai-input' && e.key === 'Enter') {
        sendAIMessage();
    }
});

// Real-time research updates
function startResearchUpdates() {
    // Update analysis progress
    setInterval(updateAnalysisProgress, 10000); // Every 10 seconds

    // Check for new insights
    setInterval(checkForInsights, 30000); // Every 30 seconds

    // Update collaboration status
    setInterval(updateCollaborationStatus, 60000); // Every minute
}

function updateAnalysisProgress() {
    // Simulate ongoing analysis updates
    const progressBars = document.querySelectorAll('.category-progress .progress-bar');
    progressBars.forEach(bar => {
        const currentWidth = parseInt(bar.style.width) || 0;
        const newWidth = Math.min(currentWidth + Math.random() * 2, 100);
        bar.style.width = `${newWidth}%`;
    });
}

function checkForInsights() {
    // Simulate new AI insights
    if (Math.random() > 0.8) { // 20% chance
        showNotification('🧠 New AI insight generated! Check the insights panel.', 'info');
    }
}

function updateCollaborationStatus() {
    // Simulate collaboration updates
    const collaborationBadges = document.querySelectorAll('.collaboration-badge');
    // Could update collaboration status here
}

// Initialize researcher dashboard
console.log('🔬 Research Dashboard functionality loaded and ready!');

// Add CSS for search results
const searchResultsCSS = `
.search-summary {
    background: #f7fafc;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.active-filters {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
    flex-wrap: wrap;
}

.filter-tag {
    background: #667eea;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
}

.search-result-item {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.search-result-item:hover {
    border-color: #667eea;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);
}

.result-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
}

.result-header h4 {
    color: #1a365d;
    font-weight: 600;
    margin: 0;
}

.relevance-score {
    background: #48bb78;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
}

.result-meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
}

.result-meta span {
    font-size: 0.8rem;
    color: #718096;
}

.result-preview p {
    color: #4a5568;
    line-height: 1.5;
    margin-bottom: 1rem;
}

.result-actions {
    display: flex;
    gap: 0.5rem;
}

.action-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.view-btn {
    background: #667eea;
    color: white;
}

.download-btn {
    background: #48bb78;
    color: white;
}

.cite-btn {
    background: #ed8936;
    color: white;
}

.action-btn:hover {
    transform: translateY(-1px);
}

.typing-animation {
    display: flex;
    gap: 4px;
    padding: 0.5rem;
}

.typing-animation span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #667eea;
    animation: typing 1.4s infinite ease-in-out;
}

.typing-animation span:nth-child(2) { animation-delay: 0.2s; }
.typing-animation span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing {
    0%, 60%, 100% { opacity: 0.3; transform: scale(0.8); }
    30% { opacity: 1; transform: scale(1); }
}
`;

// Add the CSS to the page
const style = document.createElement('style');
style.textContent = searchResultsCSS;
document.head.appendChild(style);