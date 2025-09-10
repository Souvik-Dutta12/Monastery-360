# Create Admin-specific JavaScript
admin_js = '''// Admin Dashboard JavaScript

let controlPanelOpen = false;
let userAnalyticsChart = null;
let systemCharts = {};

// Initialize admin dashboard
document.addEventListener('DOMContentLoaded', function() {
    console.log('👑 Monastery360 Admin Dashboard Loaded');
    initializeAdminDashboard();
    setupAdminCharts();
    loadSystemMetrics();
    loadUserData();
    startSystemMonitoring();
});

// Initialize admin-specific functionality
function initializeAdminDashboard() {
    // Initialize control panel as closed
    const controlContent = document.getElementById('controlContent');
    if (controlContent) {
        controlContent.style.display = 'none';
    }
    
    // Setup real-time system monitoring
    updateSystemStatus();
    
    // Initialize user management table
    populateUsersTable();
    
    // Add admin-specific event listeners
    setupAdminEventListeners();
}

// Setup admin charts and visualizations
function setupAdminCharts() {
    setupUserAnalyticsChart();
    setupMiniCharts();
}

// Setup user analytics chart
function setupUserAnalyticsChart() {
    const ctx = document.getElementById('userAnalyticsChart');
    if (!ctx) return;
    
    userAnalyticsChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Tourists', 'Researchers', 'Admins'],
            datasets: [{
                data: [67, 28, 5],
                backgroundColor: [
                    '#667eea',
                    '#f093fb',
                    '#4facfe'
                ],
                borderWidth: 0,
                hoverBackgroundColor: [
                    '#5a67d8',
                    '#e879f9',
                    '#4299e1'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            cutout: '60%'
        }
    });
}

// Setup mini charts for stats
function setupMiniCharts() {
    const chartConfigs = {
        usersChart: {
            data: [23, 45, 67, 89, 102, 127],
            color: '#667eea'
        },
        contentChart: {
            data: [34, 56, 78, 92, 108, 125],
            color: '#f093fb'
        },
        trafficChart: {
            data: [12, 28, 45, 67, 89, 112],
            color: '#43e97b'
        }
    };
    
    Object.entries(chartConfigs).forEach(([chartId, config]) => {
        const ctx = document.getElementById(chartId);
        if (ctx) {
            systemCharts[chartId] = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['', '', '', '', '', ''],
                    datasets: [{
                        data: config.data,
                        borderColor: config.color,
                        backgroundColor: config.color + '20',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            display: false
                        },
                        y: {
                            display: false
                        }
                    },
                    elements: {
                        point: {
                            radius: 0
                        }
                    }
                }
            });
        }
    });
}

// Load system metrics and statistics
function loadSystemMetrics() {
    // Simulate loading system data
    const systemData = {
        totalUsers: 2847,
        digitalAssets: 15394,
        systemUptime: 99.8,
        monthlyVisitors: 45200,
        weeklyUserGrowth: 127,
        dailyContentAdditions: 89,
        uptimeStatus: 'excellent',
        visitorGrowth: 12.3
    };
    
    // Animate the statistics
    animateAdminStats(systemData);
    
    // Update system metrics bars
    updateSystemMetrics();
}

// Animate admin statistics
function animateAdminStats(data) {
    const stats = document.querySelectorAll('.admin-stat .stat-content h3');
    
    const values = [
        data.totalUsers,
        data.digitalAssets,
        data.systemUptime,
        data.monthlyVisitors / 1000 // Convert to K format
    ];
    
    const formatters = [
        (val) => val.toLocaleString(),
        (val) => val.toLocaleString(),
        (val) => val.toFixed(1) + '%',
        (val) => val.toFixed(1) + 'K'
    ];
    
    stats.forEach((stat, index) => {
        animateValue(stat, 0, values[index], 2000, formatters[index]);
    });
}

// Animate number values with custom formatter
function animateValue(element, start, end, duration, formatter = (val) => Math.floor(val).toLocaleString()) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = formatter(end);
            clearInterval(timer);
        } else {
            element.textContent = formatter(current);
        }
    }, 16);
}

// Update system metrics bars
function updateSystemMetrics() {
    const metrics = {
        cpu: { value: 65, element: document.querySelector('.metric-fill.cpu') },
        memory: { value: 78, element: document.querySelector('.metric-fill.memory') },
        storage: { value: 45, element: document.querySelector('.metric-fill.storage') },
        bandwidth: { value: 32, element: document.querySelector('.metric-fill.bandwidth') }
    };
    
    Object.entries(metrics).forEach(([key, metric]) => {
        if (metric.element) {
            setTimeout(() => {
                metric.element.style.width = metric.value + '%';
            }, 500);
        }
    });
}

// Update system charts
function updateSystemCharts() {
    const timeRange = document.querySelector('.time-selector').value;
    
    // Generate new data based on time range
    const dataRanges = {
        '24h': {
            labels: Array.from({length: 24}, (_, i) => i + 'h'),
            multiplier: 1
        },
        '7d': {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            multiplier: 7
        },
        '30d': {
            labels: Array.from({length: 30}, (_, i) => i + 1),
            multiplier: 30
        }
    };
    
    const range = dataRanges[timeRange];
    
    // Update mini charts with new data
    Object.values(systemCharts).forEach(chart => {
        chart.data.labels = range.labels;
        chart.data.datasets[0].data = generateRandomData(range.labels.length, range.multiplier);
        chart.update();
    });
    
    showNotification(`📊 Charts updated for ${timeRange} view`, 'info');
}

// Generate random data for charts
function generateRandomData(length, multiplier) {
    return Array.from({length}, () => Math.floor(Math.random() * 100 * multiplier));
}

// User Management Functions
function loadUserData() {
    populateUsersTable();
}

function populateUsersTable() {
    const tableBody = document.getElementById('usersTableBody');
    if (!tableBody) return;
    
    const sampleUsers = [
        {
            id: 1,
            name: 'John Smith',
            email: 'john.smith@example.com',
            role: 'researcher',
            status: 'active',
            lastActive: '2 hours ago',
            avatar: 'JS'
        },
        {
            id: 2,
            name: 'Sarah Chen',
            email: 'sarah.chen@example.com',
            role: 'tourist',
            status: 'active',
            lastActive: '1 day ago',
            avatar: 'SC'
        },
        {
            id: 3,
            name: 'Michael Patel',
            email: 'michael.patel@example.com',
            role: 'admin',
            status: 'active',
            lastActive: '5 minutes ago',
            avatar: 'MP'
        },
        {
            id: 4,
            name: 'Emily Johnson',
            email: 'emily.johnson@example.com',
            role: 'researcher',
            status: 'inactive',
            lastActive: '1 week ago',
            avatar: 'EJ'
        },
        {
            id: 5,
            name: 'David Wilson',
            email: 'david.wilson@example.com',
            role: 'tourist',
            status: 'suspended',
            lastActive: '2 weeks ago',
            avatar: 'DW'
        }
    ];
    
    tableBody.innerHTML = sampleUsers.map(user => `
        <tr>
            <td>
                <div class="user-info">
                    <div class="user-avatar-table">
                        ${user.avatar}
                    </div>
                    <div class="user-details">
                        <h4>${user.name}</h4>
                        <p>${user.email}</p>
                    </div>
                </div>
            </td>
            <td>
                <span class="role-badge ${user.role}">${capitalizeFirst(user.role)}</span>
            </td>
            <td>
                <span class="status-badge ${user.status}">${capitalizeFirst(user.status)}</span>
            </td>
            <td>${user.lastActive}</td>
            <td>
                <div class="user-actions">
                    <button class="user-action-btn" onclick="editUser(${user.id})" title="Edit User">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="user-action-btn" onclick="viewUserDetails(${user.id})" title="View Details">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="user-action-btn" onclick="deleteUser(${user.id})" title="Delete User">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// User management actions
function addNewUser() {
    showNotification('👤 Opening new user creation form...', 'info');
    // In a real implementation, this would open a modal or navigate to a form
    setTimeout(() => {
        showNotification('✅ User creation form ready', 'success');
    }, 1500);
}

function editUser(userId) {
    showNotification(`✏️ Opening edit form for user ID: ${userId}`, 'info');
    setTimeout(() => {
        showNotification('✅ User edit form loaded', 'success');
    }, 1000);
}

function viewUserDetails(userId) {
    showNotification(`👁️ Loading details for user ID: ${userId}`, 'info');
    setTimeout(() => {
        showNotification('✅ User details loaded', 'success');
    }, 1000);
}

function deleteUser(userId) {
    if (confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
        showNotification(`🗑️ Deleting user ID: ${userId}`, 'warning');
        setTimeout(() => {
            showNotification('✅ User deleted successfully', 'success');
            populateUsersTable(); // Refresh the table
        }, 1500);
    }
}

function exportUserData() {
    showNotification('📊 Preparing user data export...', 'info');
    setTimeout(() => {
        showNotification('✅ User data exported to CSV', 'success');
        // Simulate file download
        const link = document.createElement('a');
        link.download = 'monastery360_users_export.csv';
        link.click();
    }, 2000);
}

// Filter functions
function filterUsers() {
    const searchTerm = document.querySelector('.user-search').value.toLowerCase();
    const rows = document.querySelectorAll('#usersTableBody tr');
    
    rows.forEach(row => {
        const userName = row.querySelector('.user-details h4').textContent.toLowerCase();
        const userEmail = row.querySelector('.user-details p').textContent.toLowerCase();
        
        if (userName.includes(searchTerm) || userEmail.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function filterByRole() {
    const selectedRole = document.querySelector('.role-filter').value;
    const rows = document.querySelectorAll('#usersTableBody tr');
    
    rows.forEach(row => {
        const roleElement = row.querySelector('.role-badge');
        const userRole = roleElement.textContent.toLowerCase();
        
        if (selectedRole === 'all' || userRole === selectedRole) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function filterByStatus() {
    const selectedStatus = document.querySelector('.status-filter').value;
    const rows = document.querySelectorAll('#usersTableBody tr');
    
    rows.forEach(row => {
        const statusElement = row.querySelector('.status-badge');
        const userStatus = statusElement.textContent.toLowerCase();
        
        if (selectedStatus === 'all' || userStatus === selectedStatus) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Quick actions
function addNewContent() {
    showNotification('📁 Opening content upload interface...', 'info');
    setTimeout(() => {
        showNotification('✅ Content upload ready', 'success');
    }, 1500);
}

function manageUsers() {
    showSection('user-management');
    showNotification('👥 Loading user management interface...', 'info');
}

function systemMaintenance() {
    showNotification('🔧 Initializing system maintenance tools...', 'info');
    setTimeout(() => {
        showNotification('✅ Maintenance tools ready', 'success');
    }, 2000);
}

function generateReports() {
    showNotification('📊 Generating comprehensive system reports...', 'info');
    setTimeout(() => {
        showNotification('✅ Reports generated and ready for download', 'success');
    }, 3000);
}

// Activity handling
function handleAlert(alertType) {
    const alertActions = {
        'memory-high': 'Investigating high memory usage...',
        'disk-space': 'Analyzing disk space usage...',
        'security-threat': 'Initiating security protocol...'
    };
    
    showNotification(`🚨 ${alertActions[alertType] || 'Handling alert...'}`, 'warning');
    
    setTimeout(() => {
        showNotification('✅ Alert resolved successfully', 'success');
    }, 2500);
}

function scheduleMaintenanceReminder() {
    showNotification('⏰ Maintenance reminder set', 'info');
    
    // Simulate scheduling
    setTimeout(() => {
        showNotification('🔔 You will be notified 1 hour before maintenance', 'success');
    }, 1000);
}

// System operations
function performBackup() {
    showNotification('💾 Starting system backup...', 'info');
    
    // Simulate backup progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            clearInterval(interval);
            showNotification('✅ System backup completed successfully', 'success');
        } else {
            showNotification(`💾 Backup in progress... ${Math.floor(progress)}%`, 'info');
        }
    }, 1000);
}

function deployUpdates() {
    if (confirm('This will deploy pending updates to the system. Continue?')) {
        showNotification('🚀 Deploying system updates...', 'info');
        
        setTimeout(() => {
            showNotification('✅ Updates deployed successfully', 'success');
            updateSystemStatus();
        }, 3000);
    }
}

// Control panel functions
function toggleControlPanel() {
    const controlPanel = document.getElementById('controlPanel');
    const controlContent = document.getElementById('controlContent');
    
    controlPanelOpen = !controlPanelOpen;
    
    if (controlPanelOpen) {
        controlPanel.classList.add('open');
        controlContent.style.display = 'block';
    } else {
        controlPanel.classList.remove('open');
        setTimeout(() => {
            controlContent.style.display = 'none';
        }, 300);
    }
}

function toggleMaintenanceMode() {
    const isEnabled = event.target.checked;
    
    if (isEnabled) {
        if (confirm('This will put the system in maintenance mode and restrict user access. Continue?')) {
            showNotification('🔧 Maintenance mode enabled', 'warning');
            updateSystemStatus('maintenance');
        } else {
            event.target.checked = false;
        }
    } else {
        showNotification('✅ Maintenance mode disabled', 'success');
        updateSystemStatus('online');
    }
}

function toggleDebugMode() {
    const isEnabled = event.target.checked;
    
    if (isEnabled) {
        showNotification('🐛 Debug mode enabled', 'info');
        console.log('Debug mode activated - detailed logging enabled');
    } else {
        showNotification('✅ Debug mode disabled', 'success');
        console.log('Debug mode deactivated');
    }
}

function emergencyShutdown() {
    if (confirm('EMERGENCY SHUTDOWN: This will immediately shut down all services. Are you absolutely sure?')) {
        if (confirm('This action cannot be undone remotely. You will need physical access to restart. Proceed?')) {
            showNotification('🚨 EMERGENCY SHUTDOWN INITIATED', 'error');
            
            setTimeout(() => {
                document.body.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: center; height: 100vh; background: #1a202c; color: white; flex-direction: column; font-family: 'Poppins', sans-serif;">
                        <div style="text-align: center;">
                            <h1 style="font-size: 3rem; margin-bottom: 1rem;">🔴 SYSTEM SHUTDOWN</h1>
                            <p style="font-size: 1.2rem; margin-bottom: 2rem;">Monastery360 services have been shut down</p>
                            <p style="color: #a0aec0;">Contact system administrator for restart</p>
                        </div>
                    </div>
                `;
            }, 3000);
        }
    }
}

function clearCache() {
    if (confirm('This will clear all system caches. This may temporarily slow down the system. Continue?')) {
        showNotification('🧹 Clearing system cache...', 'info');
        
        setTimeout(() => {
            showNotification('✅ System cache cleared successfully', 'success');
        }, 2000);
    }
}

// System monitoring
function updateSystemStatus(status = 'online') {
    const statusElement = document.querySelector('.system-status span');
    const indicatorElement = document.querySelector('.status-indicator');
    
    const statuses = {
        'online': { text: 'All Systems Online', class: 'online' },
        'maintenance': { text: 'Maintenance Mode', class: 'warning' },
        'offline': { text: 'System Offline', class: 'offline' }
    };
    
    const currentStatus = statuses[status];
    if (statusElement && indicatorElement && currentStatus) {
        statusElement.textContent = currentStatus.text;
        indicatorElement.className = `status-indicator ${currentStatus.class}`;
    }
}

function startSystemMonitoring() {
    // Simulate real-time system metrics updates
    setInterval(() => {
        updateMetricsInRealTime();
    }, 5000);
    
    // Check for system alerts
    setInterval(() => {
        checkSystemAlerts();
    }, 10000);
    
    // Update charts periodically
    setInterval(() => {
        updateMiniChartsData();
    }, 30000);
}

function updateMetricsInRealTime() {
    const metrics = [
        { selector: '.metric-fill.cpu', max: 100 },
        { selector: '.metric-fill.memory', max: 100 },
        { selector: '.metric-fill.bandwidth', max: 100 }
    ];
    
    metrics.forEach(metric => {
        const element = document.querySelector(metric.selector);
        if (element) {
            const currentWidth = parseInt(element.style.width) || 0;
            const variation = (Math.random() - 0.5) * 10; // ±5% variation
            const newWidth = Math.max(0, Math.min(metric.max, currentWidth + variation));
            
            element.style.width = newWidth + '%';
            
            // Update corresponding metric value
            const valueElement = element.closest('.metric-item')?.querySelector('.metric-value');
            if (valueElement) {
                valueElement.textContent = Math.floor(newWidth) + '%';
            }
        }
    });
}

function checkSystemAlerts() {
    // Simulate random system alerts
    if (Math.random() > 0.9) { // 10% chance of alert
        const alerts = [
            { type: 'info', message: '📊 Daily backup completed successfully' },
            { type: 'warning', message: '⚠️ High CPU usage detected on server 2' },
            { type: 'success', message: '✅ Security scan completed - no threats found' },
            { type: 'info', message: '🔄 System cache automatically cleared' }
        ];
        
        const alert = alerts[Math.floor(Math.random() * alerts.length)];
        showNotification(alert.message, alert.type);
    }
}

function updateMiniChartsData() {
    Object.values(systemCharts).forEach(chart => {
        // Shift data and add new point
        const data = chart.data.datasets[0].data;
        data.shift();
        data.push(Math.floor(Math.random() * 150));
        chart.update('none'); // No animation for smooth real-time updates
    });
}

// Setup admin event listeners
function setupAdminEventListeners() {
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'b':
                    e.preventDefault();
                    performBackup();
                    break;
                case 'u':
                    e.preventDefault();
                    showSection('user-management');
                    break;
                case 'p':
                    e.preventDefault();
                    toggleControlPanel();
                    break;
            }
        }
    });
    
    // Auto-refresh user table
    setInterval(() => {
        if (currentSection === 'user-management') {
            // In a real app, this would fetch fresh data
            console.log('Refreshing user data...');
        }
    }, 60000); // Every minute
}

// Initialize admin dashboard
console.log('👑 Admin Dashboard functionality loaded and ready!');
console.log('🔑 Keyboard shortcuts: Ctrl+B (Backup), Ctrl+U (Users), Ctrl+P (Control Panel)');

// Admin notification system (enhanced)
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.admin-notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `admin-notification notification-${type}`;
    
    const colors = {
        'success': '#48bb78',
        'error': '#f56565',
        'info': '#4299e1',
        'warning': '#ed8936'
    };
    
    const icons = {
        'success': 'fas fa-check-circle',
        'error': 'fas fa-exclamation-circle',
        'info': 'fas fa-info-circle',
        'warning': 'fas fa-exclamation-triangle'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                <i class="${icons[type]}"></i>
            </div>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 80px;
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
        display: flex;
        align-items: center;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    
    // Add notification styles
    const notificationCSS = `
        .notification-content {
            display: flex;
            align-items: center;
            gap: 1rem;
            width: 100%;
        }
        
        .notification-icon {
            font-size: 1.2rem;
        }
        
        .notification-message {
            flex: 1;
            font-weight: 600;
        }
        
        .notification-close {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            transition: background-color 0.3s ease;
        }
        
        .notification-close:hover {
            background: rgba(255, 255, 255, 0.3);
        }
    `;
    
    if (!document.getElementById('admin-notification-styles')) {
        const style = document.createElement('style');
        style.id = 'admin-notification-styles';
        style.textContent = notificationCSS;
        document.head.appendChild(style);
    }
    
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
    }, type === 'error' ? 6000 : 4000); // Errors stay longer
}'''

with open('js/admin.js', 'w', encoding='utf-8') as f:
    f.write(admin_js)

print("✅ Admin JavaScript (js/admin.js) created successfully!")