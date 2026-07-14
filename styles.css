/* ==========================================
   CSS VARIABLES & DESIGN SYSTEM (SDG 3 THEME)
   ========================================== */
:root {
    /* Baseline configuration for responsive text resizing */
    --base-font-size: 100%; /* Resizable */
    
    /* Normal Colors */
    --primary-color: #008080;      /* Teal/Health Green representing vitality & trust */
    --primary-hover: #006666;
    --secondary-color: #0288d1;    /* Medical Blue representing security */
    --bg-light: #f4f7f6;           /* Off-white canvas */
    --card-bg: #ffffff;            /* Crisp white cards */
    --text-dark: #2c3e50;          /* Charcoal text for high contrast readability */
    --text-muted: #7f8c8d;
    --accent-mint: #e8f5e9;        /* Soft green highlights */
    --emergency-red: #d32f2f;      /* Warning red for emergencies */
    --border-color: #e2e8f0;

    /* Transitions & Shadows */
    --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    --shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    --shadow-hover: 0 8px 24px rgba(0, 0, 0, 0.12);
    --radius: 12px;
}

/* ==========================================
   ACCESSIBILITY: HIGH CONTRAST MODE OVERRIDES
   ========================================== */
body.high-contrast {
    --primary-color: #00ffff;      /* Bright Cyan */
    --primary-hover: #00cccc;
    --secondary-color: #ffff00;    /* High-visibility Yellow */
    --bg-light: #000000;           /* Pure Black */
    --card-bg: #121212;            /* Dark Charcoal Cards */
    --text-dark: #ffffff;          /* Crisp White Text */
    --text-muted: #e2e8f0;
    --accent-mint: #1a3a2a;        /* Deep Green contrast */
    --emergency-red: #ff3333;      /* Vibrant red */
    --border-color: #ffffff;       /* Pure white lines */
}

/* ==========================================
   BASE STYLES & RESET
   ========================================== */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-size: var(--base-font-size);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: var(--bg-light);
    color: var(--text-dark);
    line-height: 1.6;
    transition: var(--transition);
}

/* Accessibility Focus Indicator (For keyboard users) */
*:focus-visible {
    outline: 4px solid var(--secondary-color) !important;
    outline-offset: 2px;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 30px auto;
    min-height: calc(100vh - 280px);
}

/* Utilities */
.hidden {
    display: none !important;
}

.text-center {
    text-align: center;
}

/* ==========================================
   ACCESSIBILITY UTILITY BAR
   ========================================== */
.a11y-bar {
    background-color: #2c3e50;
    color: #ffffff;
    padding: 8px 20px;
    font-size: 0.9rem;
    border-bottom: 2px solid var(--primary-color);
}

.a11y-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 10px;
}

.a11y-label {
    font-weight: bold;
}

.a11y-actions {
    display: flex;
    gap: 10px;
}

.btn-a11y {
    background-color: #34495e;
    color: #ffffff;
    border: 1px solid #7f8c8d;
    padding: 6px 14px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.85rem;
    transition: var(--transition);
    min-width: 38px;
    min-height: 38px; /* Accessible pointer size */
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-a11y:hover {
    background-color: var(--primary-color);
    border-color: #ffffff;
}

/* ==========================================
   HEADER & NAVIGATION STYLING
   ========================================== */
header {
    background-color: var(--card-bg);
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 100;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 20px;
}

.nav-brand {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-icon {
    font-size: 2.2rem;
}

.brand-text h1 {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--primary-color);
}

.brand-text .tagline {
    font-size: 0.85rem;
    color: var(--text-muted);
    font-weight: 500;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 10px;
}

.nav-link {
    text-decoration: none;
    color: var(--text-dark);
    font-weight: 600;
    padding: 12px 18px;
    border-radius: 8px;
    transition: var(--transition);
    min-height: 48px; /* High-touch target size */
    display: flex;
    align-items: center;
}

.nav-link:hover, .nav-link.active {
    background-color: var(--accent-mint);
    color: var(--primary-color);
}

.nav-right {
    display: flex;
    align-items: center;
    gap: 15px;
}

#welcome-message {
    font-weight: 700;
    color: var(--primary-color);
    font-size: 1rem;
}

/* ==========================================
   BUTTONS (ACCESSIBILITY COMPLIANT - 48PX MIN)
   ========================================== */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    font-size: 1.05rem;
    font-weight: 700;
    border-radius: var(--radius);
    border: none;
    cursor: pointer;
    transition: var(--transition);
    text-align: center;
    min-height: 48px; /* Age-friendly tap target */
}

.btn-primary {
    background-color: var(--primary-color);
    color: var(--card-bg);
}

.btn-primary:hover {
    background-color: var(--primary-hover);
    transform: translateY(-2px);
}

.btn-secondary {
    background-color: var(--border-color);
    color: var(--text-dark);
    border: 2px solid transparent;
}

.btn-secondary:hover {
    background-color: #cbd5e1;
    border-color: var(--text-dark);
}

.btn-emergency {
    background-color: var(--emergency-red);
    color: white;
    font-weight: 800;
    border: none;
    padding: 10px 24px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(211, 47, 47, 0.3);
    transition: var(--transition);
    min-height: 48px;
}

.btn-emergency:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 14px rgba(211, 47, 47, 0.5);
}

.btn-block {
    display: flex;
    width: 100%;
}

.divider {
    text-align: center;
    margin: 20px 0;
    position: relative;
}

.divider::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1.5px;
    background-color: var(--border-color);
    z-index: 1;
}

.divider span {
    background-color: var(--card-bg);
    padding: 0 15px;
    font-size: 0.85rem;
    color: var(--text-muted);
    position: relative;
    z-index: 2;
    font-weight: 700;
}

/* ==========================================
   CARDS & GRIDS
   ========================================== */
.card {
    background-color: var(--card-bg);
    border-radius: var(--radius);
    padding: 30px;
    box-shadow: var(--shadow);
    border: 2px solid var(--border-color);
    transition: var(--transition);
}

.card-interactive {
    cursor: pointer;
    border: 2px solid var(--border-color);
}

.card-interactive:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-color);
}

.card-icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 15px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
}

.grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

/* ==========================================
   AUTHENTICATION VIEW (SIGN IN / SIGN UP)
   ========================================== */
.auth-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 65vh;
}

.auth-card {
    background-color: var(--card-bg);
    width: 100%;
    max-width: 460px;
    padding: 40px;
    border-radius: var(--radius);
    box-shadow: var(--shadow-hover);
    border: 2px solid var(--border-color);
}

.auth-header {
    text-align: center;
    margin-bottom: 25px;
}

.logo-large {
    font-size: 4rem;
}

.auth-header h2 {
    color: var(--primary-color);
    margin-top: 10px;
}

.auth-header p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

.auth-tabs {
    display: flex;
    margin-bottom: 25px;
    border-bottom: 3px solid var(--border-color);
}

.auth-tab {
    flex: 1;
    background: none;
    border: none;
    padding: 15px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    color: var(--text-muted);
    transition: var(--transition);
    min-height: 48px;
}

.auth-tab.active {
    color: var(--primary-color);
    border-bottom: 4px solid var(--primary-color);
}

.privacy-note-sm {
    font-size: 0.8rem;
    color: var(--text-muted);
    text-align: center;
    margin-top: 20px;
}

/* ==========================================
   FORMS & INPUTS
   ========================================== */
.form-group {
    margin-bottom: 25px;
}

.form-group label {
    display: block;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 1rem;
}

.form-control {
    width: 100%;
    padding: 14px 18px;
    font-size: 1.05rem;
    border-radius: 8px;
    border: 2px solid var(--border-color);
    background-color: var(--bg-light);
    color: var(--text-dark);
    transition: var(--transition);
    min-height: 48px;
}

.form-control:focus {
    outline: none;
    border-color: var(--primary-color);
    background-color: var(--card-bg);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

/* ==========================================
   HOME / DASHBOARD
   ========================================== */
.hero {
    background-color: var(--accent-mint);
    padding: 40px;
    border-radius: var(--radius);
    margin-bottom: 45px;
    border-left: 8px solid var(--primary-color);
    border-top: 2px solid var(--border-color);
    border-right: 2px solid var(--border-color);
    border-bottom: 2px solid var(--border-color);
}

.hero h2 {
    color: var(--primary-color);
    margin-bottom: 15px;
    font-size: 2rem;
}

.hero p {
    font-size: 1.15rem;
}

/* ==========================================
   HEALTHCARE LOCATOR
   ========================================== */
.section-header {
    margin-bottom: 35px;
    border-bottom: 3px solid var(--border-color);
    padding-bottom: 15px;
}

.section-header h2 {
    color: var(--primary-color);
    font-size: 1.8rem;
}

.filter-controls {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 25px;
    margin-bottom: 35px;
}

.facility-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.badge {
    display: inline-block;
    padding: 6px 14px;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 15px;
    width: max-content;
}

.badge-hospital { background-color: #ffebee; color: #c62828; }
.badge-clinic { background-color: #e3f2fd; color: #1565c0; }
.badge-pharmacy { background-color: #e8f5e9; color: #2e7d32; }

/* ==========================================
   APPOINTMENT BOOKING & REMINDERS
   ========================================== */
.booking-container, .reminder-container {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 40px;
    align-items: start;
}

.form-card {
    background-color: var(--card-bg);
}

.appointments-list-container, .reminders-list-container {
    background-color: var(--card-bg);
    border-radius: var(--radius);
    padding: 30px;
    border: 2px solid var(--border-color);
    min-height: 250px;
}

.appointments-list-container h3, .reminders-list-container h3 {
    margin-bottom: 20px;
    color: var(--primary-color);
    border-bottom: 2px dashed var(--border-color);
    padding-bottom: 15px;
    font-size: 1.4rem;
}

.empty-text {
    color: var(--text-muted);
    text-align: center;
    margin-top: 50px;
    font-style: italic;
    font-size: 1.1rem;
}

.scheduled-item, .reminder-item {
    background: var(--bg-light);
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 15px;
    border-left: 6px solid var(--secondary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
}

.reminder-item {
    border-left-color: var(--primary-color);
}

.scheduled-details h4, .reminder-details h4 {
    font-size: 1.15rem;
    color: var(--text-dark);
    margin-bottom: 5px;
}

.scheduled-details p, .reminder-details p {
    font-size: 0.95rem;
    color: var(--text-muted);
}

/* Bigger, easier-to-click Cancel Button */
.btn-delete {
    background: none;
    border: none;
    color: var(--emergency-red);
    font-size: 2rem;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    transition: var(--transition);
    min-width: 48px;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-delete:hover {
    background-color: #ffebee;
}

/* ==========================================
   HEALTH TIPS HUB
   ========================================== */
.tips-layout {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 30px;
    align-items: start;
}

.tips-tabs {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.tips-tab {
    background-color: var(--card-bg);
    border: 2px solid var(--border-color);
    padding: 18px;
    border-radius: var(--radius);
    text-align: left;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
    min-height: 48px;
}

.tips-tab:hover, .tips-tab.active {
    background-color: var(--primary-color);
    color: var(--card-bg);
    border-color: var(--primary-color);
}

.tips-content {
    min-height: 280px;
}

.tips-content h3 {
    color: var(--primary-color);
    margin-bottom: 20px;
    font-size: 1.5rem;
}

.tips-list {
    list-style-position: inside;
}

.tips-list li {
    margin-bottom: 15px;
    font-size: 1.1rem;
}

/* ==========================================
   INTERACTIVE AGE-FRIENDLY CONFIRMATION MODALS
   ========================================== */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
}

.modal-content {
    background-color: var(--card-bg);
    width: 90%;
    max-width: 550px;
    padding: 40px;
    border-radius: var(--radius);
    position: relative;
    box-shadow: var(--shadow-hover);
    border: 2px solid var(--border-color);
}

.confirm-icon {
    font-size: 4rem;
    margin-bottom: 15px;
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 2.5rem;
    cursor: pointer;
    color: var(--text-muted);
    transition: var(--transition);
    min-width: 48px;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close-btn:hover {
    color: var(--emergency-red);
}

.emergency-title {
    color: var(--emergency-red);
    font-size: 2rem;
    margin-bottom: 10px;
}

.emergency-warning {
    color: var(--text-dark);
    font-weight: 700;
    margin-bottom: 30px;
}

.emergency-numbers {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.emergency-card {
    background-color: #ffebee;
    border: 2px solid #ffcdd2;
    padding: 20px;
    border-radius: 8px;
}

.emergency-card h3 {
    color: #b71c1c;
    font-size: 1.25rem;
}

.phone-num {
    font-size: 2.2rem;
    font-weight: 800;
    color: #b71c1c;
    margin-top: 5px;
}

/* Toast Notifications */
#toast-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
}

.toast {
    background-color: var(--primary-color);
    color: var(--card-bg);
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    margin-top: 10px;
    font-weight: 700;
    border: 2px solid var(--border-color);
    animation: slideIn 0.3s forwards, fadeOut 0.3s 3.7s forwards;
}

@keyframes slideIn {
    from { transform: translateX(120%); }
    to { transform: translateX(0); }
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}

/* ==========================================
   FOOTER
   ========================================== */
footer {
    background-color: #2c3e50;
    color: white;
    padding: 40px 20px;
    margin-top: 60px;
    font-size: 0.95rem;
    border-top: 4px solid var(--primary-color);
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}

.privacy-disclaimer {
    color: #bdc3c7;
    margin-top: 15px;
    font-size: 0.85rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

/* ==========================================
   RESPONSIVE DESIGN (MOBILE ADAPTATION)
   ========================================== */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
    .nav-links {
        flex-wrap: wrap;
        justify-content: center;
    }
    .filter-controls {
        grid-template-columns: 1fr;
    }
    .booking-container, .reminder-container, .tips-layout {
        grid-template-columns: 1fr;
    }
}
