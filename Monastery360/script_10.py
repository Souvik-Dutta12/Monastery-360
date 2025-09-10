# Create Admin-specific CSS
admin_css = '''/* Admin Dashboard Specific Styles */

.admin-sidebar {
    background: linear-gradient(180deg, #1a202c 0%, #2d3748 100%);
}

.admin-logo {
    background: linear-gradient(45deg, #f6ad55, #ed8936);
}

.admin-avatar {
    background: linear-gradient(45deg, #f6ad55, #ed8936);
}

.admin-header {
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    color: white;
}

.admin-header h1,
.admin-header p {
    color: white;
}

/* System Status Indicator */
.system-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    backdrop-filter: blur(10px);
}

.status-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: pulse-status 2s infinite;
}

.status-indicator.online {
    background: #48bb78;
}

.status-indicator.warning {
    background: #ed8936;
}

.status-indicator.offline {
    background: #f56565;
}

@keyframes pulse-status {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* Quick Actions in Header */
.quick-actions {
    display: flex;
    gap: 0.5rem;
}

.quick-action-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    font-size: 0.9rem;
}

.quick-action-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
}

.admin-avatar-header {
    width: 40px;
    height: 40px;
    background: rgba(246, 173, 85, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f6ad55;
    font-size: 1.2rem;
}

/* Admin Stats Grid */
.admin-stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.admin-stat {
    position: relative;
    overflow: hidden;
}

.admin-stat::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(45deg, #f6ad55, #ed8936);
}

.stat-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
}

.mini-chart {
    width: 60px;
    height: 20px;
}

.uptime-indicator {
    width: 60px;
    height: 6px;
    background: #e2e8f0;
    border-radius: 3px;
    overflow: hidden;
}

.uptime-bar {
    height: 100%;
    background: linear-gradient(45deg, #48bb78, #38a169);
    transition: width 0.3s ease;
}

.users-icon {
    background: linear-gradient(45deg, #667eea, #764ba2);
}

.content-icon {
    background: linear-gradient(45deg, #f093fb, #f5576c);
}

.performance-icon {
    background: linear-gradient(45deg, #4facfe, #00f2fe);
}

.traffic-icon {
    background: linear-gradient(45deg, #43e97b, #38f9d7);
}

/* System Overview */
.system-overview {
    grid-column: span 2;
}

.header-controls {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.time-selector {
    padding: 0.5rem;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    background: white;
    font-size: 0.9rem;
}

.system-metrics {
    padding: 1rem;
}

.metric-row {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.metric-item {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.metric-label {
    min-width: 80px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #4a5568;
}

.metric-bar {
    flex: 1;
    height: 8px;
    background: #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
}

.metric-fill {
    height: 100%;
    transition: width 0.3s ease;
}

.metric-fill.cpu {
    background: linear-gradient(45deg, #f6ad55, #ed8936);
}

.metric-fill.memory {
    background: linear-gradient(45deg, #667eea, #764ba2);
}

.metric-fill.storage {
    background: linear-gradient(45deg, #4facfe, #00f2fe);
}

.metric-fill.bandwidth {
    background: linear-gradient(45deg, #43e97b, #38f9d7);
}

.metric-value {
    min-width: 40px;
    text-align: right;
    font-weight: 600;
    font-size: 0.9rem;
    color: #2d3748;
}

/* Activity Timeline */
.activity-timeline {
    padding: 1rem;
}

.activity-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
    position: relative;
}

.activity-item:hover {
    background: #f7fafc;
}

.activity-item.critical {
    background: rgba(245, 101, 101, 0.05);
    border-left: 3px solid #f56565;
}

.activity-item.success {
    background: rgba(72, 187, 120, 0.05);
    border-left: 3px solid #48bb78;
}

.activity-item.info {
    background: rgba(66, 153, 225, 0.05);
    border-left: 3px solid #4299e1;
}

.activity-item.warning {
    background: rgba(237, 137, 54, 0.05);
    border-left: 3px solid #ed8936;
}

.activity-icon {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
}

.activity-item.critical .activity-icon {
    background: #f56565;
}

.activity-item.success .activity-icon {
    background: #48bb78;
}

.activity-item.info .activity-icon {
    background: #4299e1;
}

.activity-item.warning .activity-icon {
    background: #ed8936;
}

.activity-content {
    flex: 1;
}

.activity-content h4 {
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 0.25rem;
}

.activity-content p {
    color: #4a5568;
    margin: 0 0 0.25rem;
    line-height: 1.4;
}

.activity-content small {
    color: #718096;
    font-size: 0.8rem;
}

.activity-action {
    background: #edf2f7;
    border: none;
    color: #4a5568;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.activity-action:hover {
    background: #e2e8f0;
    color: #2d3748;
}

/* User Analytics Chart */
.analytics-chart {
    padding: 1rem;
    height: 200px;
}

.user-breakdown {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding: 1rem;
    border-top: 1px solid #e2e8f0;
}

.breakdown-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #4a5568;
}

.breakdown-color {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.breakdown-color.tourists {
    background: #667eea;
}

.breakdown-color.researchers {
    background: #f093fb;
}

.breakdown-color.admins {
    background: #4facfe;
}

/* Content Statistics */
.content-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding: 1rem;
}

.category-stat {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: #f7fafc;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.category-stat:hover {
    background: #edf2f7;
    transform: translateY(-1px);
}

.category-icon {
    width: 45px;
    height: 45px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.1rem;
}

.category-icon.manuscripts {
    background: linear-gradient(45deg, #667eea, #764ba2);
}

.category-icon.murals {
    background: linear-gradient(45deg, #f093fb, #f5576c);
}

.category-icon.photos {
    background: linear-gradient(45deg, #4facfe, #00f2fe);
}

.category-icon.audio {
    background: linear-gradient(45deg, #43e97b, #38f9d7);
}

.category-info h4 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0 0 0.25rem;
}

.category-info p {
    color: #4a5568;
    font-size: 0.9rem;
    margin: 0 0 0.25rem;
}

.category-info small {
    font-size: 0.8rem;
    font-weight: 600;
}

.category-info small.positive {
    color: #48bb78;
}

.category-info small.neutral {
    color: #ed8936;
}

/* Quick Actions Panel */
.actions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
    padding: 1rem;
}

.action-card {
    background: #f7fafc;
    border: 2px solid transparent;
    padding: 1.5rem;
    border-radius: 12px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.action-card:hover {
    border-color: #f6ad55;
    background: #fefcf4;
    transform: translateY(-2px);
}

.action-icon {
    width: 50px;
    height: 50px;
    margin: 0 auto 1rem;
    border-radius: 10px;
    background: linear-gradient(45deg, #f6ad55, #ed8936);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
}

.action-card h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 0.5rem;
}

.action-card p {
    color: #4a5568;
    font-size: 0.9rem;
    line-height: 1.4;
    margin: 0;
}

/* Security Overview */
.security-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
}

.security-status.good {
    background: rgba(72, 187, 120, 0.1);
    color: #48bb78;
}

.security-status.warning {
    background: rgba(237, 137, 54, 0.1);
    color: #ed8936;
}

.security-status.critical {
    background: rgba(245, 101, 101, 0.1);
    color: #f56565;
}

.security-metrics {
    padding: 1rem;
}

.security-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #e2e8f0;
}

.security-item:last-child {
    border-bottom: none;
}

.security-icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: linear-gradient(45deg, #f6ad55, #ed8936);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.security-info {
    flex: 1;
}

.security-info h4 {
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 0.25rem;
}

.security-info p {
    color: #4a5568;
    font-size: 0.9rem;
    margin: 0;
}

.security-progress {
    width: 100%;
    height: 6px;
    background: #e2e8f0;
    border-radius: 3px;
    overflow: hidden;
    margin-top: 0.5rem;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(45deg, #48bb78, #38a169);
    transition: width 0.3s ease;
}

.security-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
}

.security-badge.active {
    background: rgba(72, 187, 120, 0.1);
    color: #48bb78;
}

/* User Management Interface */
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e2e8f0;
}

.header-actions {
    display: flex;
    gap: 1rem;
}

.user-management-interface {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.users-filters {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    background: #f7fafc;
    border-bottom: 1px solid #e2e8f0;
}

.filter-group {
    flex: 1;
}

.user-search,
.role-filter,
.status-filter {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 0.9rem;
    background: white;
}

.users-table-container {
    overflow-x: auto;
}

.users-table {
    width: 100%;
    border-collapse: collapse;
}

.users-table th {
    background: #f7fafc;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    color: #2d3748;
    border-bottom: 1px solid #e2e8f0;
}

.users-table td {
    padding: 1rem;
    border-bottom: 1px solid #f1f5f9;
    vertical-align: middle;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.user-avatar-table {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: linear-gradient(45deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.9rem;
    flex-shrink: 0;
}

.user-details h4 {
    font-weight: 600;
    color: #1a202c;
    margin: 0 0 0.25rem;
}

.user-details p {
    color: #718096;
    font-size: 0.8rem;
    margin: 0;
}

.role-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
}

.role-badge.tourist {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
}

.role-badge.researcher {
    background: rgba(240, 147, 251, 0.1);
    color: #f093fb;
}

.role-badge.admin {
    background: rgba(246, 173, 85, 0.1);
    color: #f6ad55;
}

.status-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
}

.status-badge.active {
    background: rgba(72, 187, 120, 0.1);
    color: #48bb78;
}

.status-badge.inactive {
    background: rgba(160, 174, 192, 0.1);
    color: #a0aec0;
}

.status-badge.suspended {
    background: rgba(245, 101, 101, 0.1);
    color: #f56565;
}

.user-actions {
    display: flex;
    gap: 0.5rem;
}

.user-action-btn {
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    color: #4a5568;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.8rem;
}

.user-action-btn:hover {
    background: #edf2f7;
    color: #2d3748;
}

/* Admin Control Panel */
.admin-control-panel {
    position: fixed;
    top: 50%;
    right: -300px;
    transform: translateY(-50%);
    width: 300px;
    background: white;
    border-radius: 12px 0 0 12px;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
    z-index: 1001;
    transition: right 0.3s ease;
}

.admin-control-panel.open {
    right: 0;
}

.control-toggle {
    position: absolute;
    left: -50px;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 60px;
    background: linear-gradient(45deg, #f6ad55, #ed8936);
    border: none;
    border-radius: 12px 0 0 12px;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.control-toggle:hover {
    background: linear-gradient(45deg, #ed8936, #dd6b20);
    transform: translateY(-50%) scale(1.05);
}

.control-content {
    padding: 2rem;
    max-height: 70vh;
    overflow-y: auto;
}

.control-content h3 {
    color: #1a202c;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    text-align: center;
}

.control-section {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e2e8f0;
}

.control-section:last-child {
    border-bottom: none;
}

.control-section h4 {
    color: #2d3748;
    font-size: 1rem;
    margin-bottom: 1rem;
}

.system-toggles {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.toggle-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    background: #f7fafc;
    border-radius: 8px;
}

.toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #cbd5e0;
    transition: 0.4s;
    border-radius: 24px;
}

.toggle-slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background: white;
    transition: 0.4s;
    border-radius: 50%;
}

input:checked + .toggle-slider {
    background: #f6ad55;
}

input:checked + .toggle-slider:before {
    transform: translateX(26px);
}

.emergency-actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.emergency-btn {
    background: linear-gradient(45deg, #f56565, #e53e3e);
    color: white;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
}

.emergency-btn:hover {
    background: linear-gradient(45deg, #e53e3e, #c53030);
    transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .system-overview {
        grid-column: span 1;
    }
    
    .admin-control-panel {
        width: 280px;
        right: -280px;
    }
    
    .users-filters {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .header-actions {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .quick-actions {
        flex-wrap: wrap;
    }
    
    .actions-grid {
        grid-template-columns: 1fr;
    }
    
    .user-breakdown {
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
    }
    
    .admin-control-panel {
        width: calc(100vw - 40px);
        right: calc(-100vw + 40px);
        top: 60px;
        transform: none;
        height: calc(100vh - 80px);
    }
    
    .admin-control-panel.open {
        right: 20px;
    }
    
    .control-toggle {
        left: -45px;
        width: 45px;
        height: 50px;
    }
}'''

with open('styles/admin.css', 'w', encoding='utf-8') as f:
    f.write(admin_css)

print("✅ Admin CSS (styles/admin.css) created successfully!")