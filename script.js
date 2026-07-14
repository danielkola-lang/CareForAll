// ==========================================
// MOCK DATA & APP STATE
// ==========================================

// 1. Mock Healthcare Facilities
const facilities = [
    { id: 1, name: "City Central Hospital", type: "hospital", address: "101 Medical Way, Downtown", phone: "555-0199" },
    { id: 2, name: "Green Valley Community Clinic", type: "clinic", address: "404 Meadow Lane, Eastside", phone: "555-0122" },
    { id: 3, name: "Sunset Family Practice", type: "clinic", address: "808 Pine Street, Westside", phone: "555-0143" },
    { id: 4, name: "Wellness Center Pharmacy", type: "pharmacy", address: "12 Main Street, Uptown", phone: "555-0181" },
    { id: 5, name: "Care & Cure Pharmacy", type: "pharmacy", address: "305 Maple Avenue, Southside", phone: "555-0155" },
    { id: 6, name: "St. Jude Pediatric Hospital", type: "hospital", address: "707 Hope Boulevard, Downtown", phone: "555-0177" }
];

// 2. Verified Health Tips Hub Data
const healthTips = {
    diseases: {
        title: "🦠 Preventative Health Tips",
        tips: [
            "Keep immunizations up to date. Vaccines prevent deadly diseases like Influenza, Polio, and Measles.",
            "Wash hands thoroughly for at least 20 seconds with soap and water to curb germ spread.",
            "Schedule an annual wellness checkup even if you feel completely healthy.",
            "Avoid sharing personal hygiene products (razors, toothbrushes) to limit infection risk."
        ]
    },
    nutrition: {
        title: "🥗 Nutrition & Diet Tips",
        tips: [
            "Eat a diverse palette of colorful fruits and vegetables every single day.",
            "Limit consumption of ultra-processed sugars and salt to guard your heart and kidneys.",
            "Stay thoroughly hydrated. Aim to drink 8-10 cups of pure water daily.",
            "Include whole grains (brown rice, oats) to sustain long-term energy and keep digestion healthy."
        ]
    },
    exercise: {
        title: "🏃‍♂️ Fitness & Activity Tips",
        tips: [
            "Aim for a minimum of 150 minutes of moderate cardiovascular physical activity weekly.",
            "Take 5-minute active stretching breaks for every hour of sitting or desk work.",
            "Build muscle strength! Perform strength exercises at least two days a week.",
            "Use stairs instead of the elevator whenever it is safe to increase passive daily exercise."
        ]
    },
    mental: {
        title: "🧠 Mental Well-being Tips",
        tips: [
            "Establish consistent, restful sleep patterns (7-9 hours per night) to reset brain health.",
            "Dedicate 10 minutes daily to mindfulness, meditation, or silent screen-free downtime.",
            "Maintain social contacts; laughing and speaking with close friends naturally lowers stress hormones.",
            "Never hesitate to reach out to a professional counselor or hotline if you feel overwhelmed."
        ]
    }
};

// 3. Application State Containers
let bookedAppointments = [];
let medicineReminders = [];
let loggedInUser = null;
let currentFontScale = 100; // stored in %

// ==========================================
// DOM ELEMENT SELECTORS
// ==========================================

// Layout Elements
const mainHeader = document.getElementById("main-header");
const sections = document.querySelectorAll(".app-section");
const navLinks = document.querySelectorAll(".nav-link");
const quickCards = document.querySelectorAll(".card-interactive");

// Accessibility Controllers
const btnDecreaseText = document.getElementById("btn-decrease-text");
const btnIncreaseText = document.getElementById("btn-increase-text");
const btnToggleContrast = document.getElementById("btn-toggle-contrast");

// Auth Section
const authSection = document.getElementById("auth-section");
const tabLogin = document.getElementById("tab-login");
const tabSignup = document.getElementById("tab-signup");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const guestBtn = document.getElementById("guest-btn");
const welcomeMsg = document.getElementById("welcome-message");
const logoutBtn = document.getElementById("logout-btn");

// Locator Section
const facilityFilter = document.getElementById("facility-filter");
const facilitySearch = document.getElementById("facility-search");
const locatorList = document.getElementById("locator-list");

// Booking Section
const bookingForm = document.getElementById("booking-form");
const bookFacilitySelect = document.getElementById("book-facility");
const appointmentsList = document.getElementById("appointments-list");

// Reminders Section
const reminderForm = document.getElementById("reminder-form");
const remindersList = document.getElementById("reminders-list");

// Health Tips Section
const tipsTabs = document.querySelectorAll(".tips-tab");
const tipsDisplayArea = document.getElementById("tips-display-area");

// Modal Elements
const emergencyBtn = document.getElementById("emergency-btn");
const emergencyModal = document.getElementById("emergency-modal");
const closeModal = document.getElementById("close-modal");

// Action Confirmation Modal Elements
const confirmModal = document.getElementById("confirm-modal");
const confirmModalTitle = document.getElementById("confirm-modal-title");
const confirmModalMessage = document.getElementById("confirm-modal-message");
const btnConfirmOk = document.getElementById("btn-confirm-ok");
const closeConfirmModal = document.getElementById("close-confirm-modal");

// Toast Notification
const toastContainer = document.getElementById("toast-container");


// ==========================================
// ACCESSIBILITY LOGIC (SIZES & CONTRAST)
// ==========================================

btnIncreaseText.addEventListener("click", () => {
    if (currentFontScale < 140) {
        currentFontScale += 10;
        document.documentElement.style.setProperty('--base-font-size', currentFontScale + '%');
        showToast(`Text size increased to ${currentFontScale}%`);
    }
});

btnDecreaseText.addEventListener("click", () => {
    if (currentFontScale > 80) {
        currentFontScale -= 10;
        document.documentElement.style.setProperty('--base-font-size', currentFontScale + '%');
        showToast(`Text size decreased to ${currentFontScale}%`);
    }
});

btnToggleContrast.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
    const isActive = document.body.classList.contains("high-contrast");
    showToast(isActive ? "High Contrast Mode Active" : "Normal Contrast Active");
});


// ==========================================
// NAVIGATION & AUTHENTICATION ROUTING
// ==========================================

// State Routing View Changer
function updateAuthState() {
    if (loggedInUser) {
        authSection.classList.add("hidden");
        mainHeader.classList.remove("hidden");
        welcomeMsg.textContent = `Hello, ${loggedInUser}!`;
        navigateTo("home-section");
    } else {
        authSection.classList.remove("hidden");
        mainHeader.classList.add("hidden");
    }
}

function navigateTo(sectionId) {
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove("hidden");
        } else {
            section.classList.add("hidden");
        }
    });

    navLinks.forEach(link => {
        if (link.getAttribute("data-section") === sectionId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Bind Navigation Links
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo(link.getAttribute("data-section"));
    });
});

// Bind Quick Dashboard Card items
quickCards.forEach(card => {
    card.addEventListener("click", () => {
        navigateTo(card.getAttribute("data-target"));
    });
    // Accessible Keyboard 'Enter' Activation
    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            navigateTo(card.getAttribute("data-target"));
        }
    });
});

// Authentication Panel Tabbing
tabLogin.addEventListener("click", () => {
    tabLogin.classList.add("active");
    tabSignup.classList.remove("active");
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
});

tabSignup.addEventListener("click", () => {
    tabSignup.classList.add("active");
    tabLogin.classList.remove("active");
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
});

// Form Submissions
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    loggedInUser = email.split('@')[0];
    showActionConfirmation("Secure Access Approved", `Welcome back, ${loggedInUser}! CareForAll is ready to manage your safety.`);
    updateAuthState();
});

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signup-name").value;
    loggedInUser = name;
    showActionConfirmation("Account Activated!", `Welcome to CareForAll, ${name}. Your medical workspace has been built locally.`);
    updateAuthState();
});

guestBtn.addEventListener("click", () => {
    loggedInUser = "Guest Explorer";
    showToast("Welcome! Exploring as Guest.");
    updateAuthState();
});

logoutBtn.addEventListener("click", () => {
    loggedInUser = null;
    showToast("Logged out successfully.");
    updateAuthState();
    loginForm.reset();
    signupForm.reset();
});


// ==========================================
// FEATURE 1: HEALTHCARE LOCATOR LOGIC
// ==========================================

function renderFacilities() {
    locatorList.innerHTML = "";
    const filterValue = facilityFilter.value;
    const searchValue = facilitySearch.value.toLowerCase().trim();
    
    // Joint filter criteria: filter dropdown AND match dynamic typed query text
    const filtered = facilities.filter(facility => {
        const matchesCategory = (filterValue === "all" || facility.type === filterValue);
        const matchesSearch = facility.name.toLowerCase().includes(searchValue) || 
                              facility.address.toLowerCase().includes(searchValue);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        locatorList.innerHTML = "<p class='empty-text'>No matching facilities found. Try adjusting your search query.</p>";
        return;
    }

    filtered.forEach(facility => {
        const card = document.createElement("div");
        card.className = "card facility-card";
        
        card.innerHTML = `
            <div>
                <span class="badge badge-${facility.type}">${facility.type}</span>
                <h3>${facility.name}</h3>
                <p>📍 ${facility.address}</p>
            </div>
            <div style="margin-top: 15px;">
                <p><strong>📞 Phone contact:</strong> ${facility.phone}</p>
                <button class="btn btn-secondary btn-block" style="margin-top: 15px;" onclick="quickBookSelected('${facility.name}')">Book Appointment</button>
            </div>
        `;
        locatorList.appendChild(card);
    });
}

// Bind typing actions in search bar
facilitySearch.addEventListener("input", renderFacilities);
facilityFilter.addEventListener("change", renderFacilities);

function populateBookingOptions() {
    bookFacilitySelect.innerHTML = '<option value="">-- Choose a Facility --</option>';
    facilities.forEach(fac => {
        const opt = document.createElement("option");
        opt.value = fac.name;
        opt.textContent = fac.name;
        bookFacilitySelect.appendChild(opt);
    });
}


// ==========================================
// FEATURE 2: APPOINTMENT BOOKING LOGIC
// ==========================================

function quickBookSelected(facilityName) {
    navigateTo("booking-section");
    bookFacilitySelect.value = facilityName;
}

bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const facility = bookFacilitySelect.value;
    const date = document.getElementById("book-date").value;
    const time = document.getElementById("book-time").value;
    const reason = document.getElementById("book-reason").value;

    const newAppointment = {
        id: Date.now(),
        facility,
        date,
        time,
        reason
    };

    bookedAppointments.push(newAppointment);
    renderAppointments();
    bookingForm.reset();
    
    // Highly visual confirmation alert overlay
    showActionConfirmation(
        "Appointment Confirmed! 📅", 
        `Your visit to ${facility} has been scheduled for ${date} at ${time}. Please arrive 10 minutes early.`
    );
});

function renderAppointments() {
    appointmentsList.innerHTML = "";

    if (bookedAppointments.length === 0) {
        appointmentsList.innerHTML = `<p class="empty-text">No upcoming appointments scheduled yet.</p>`;
        return;
    }

    bookedAppointments.forEach(appt => {
        const item = document.createElement("div");
        item.className = "scheduled-item";
        item.innerHTML = `
            <div class="scheduled-details">
                <h4>${appt.facility}</h4>
                <p>🗓️ ${appt.date} at ⏰ ${appt.time}</p>
                <p><strong>Notes:</strong> ${appt.reason}</p>
            </div>
            <button class="btn-delete" onclick="cancelAppointment(${appt.id})" title="Cancel Booking">&times;</button>
        `;
        appointmentsList.appendChild(item);
    });
}

function cancelAppointment(id) {
    bookedAppointments = bookedAppointments.filter(appt => appt.id !== id);
    renderAppointments();
    showToast("Appointment canceled.");
}


// ==========================================
// FEATURE 3: MEDICINE & VACCINE REMINDERS
// ==========================================

reminderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("reminder-name").value;
    const type = document.getElementById("reminder-type").value;
    const time = document.getElementById("reminder-time").value;

    const newReminder = {
        id: Date.now(),
        name,
        type,
        time
    };

    medicineReminders.push(newReminder);
    renderReminders();
    reminderForm.reset();

    showActionConfirmation(
        "Alarm Active! 🔔", 
        `We will keep watch. A daily reminder alert has been set for ${name} at ${time}.`
    );
});

function renderReminders() {
    remindersList.innerHTML = "";

    if (medicineReminders.length === 0) {
        remindersList.innerHTML = `<p class="empty-text">No reminders configured.</p>`;
        return;
    }

    medicineReminders.forEach(reminder => {
        const item = document.createElement("div");
        item.className = "reminder-item";
        item.innerHTML = `
            <div class="reminder-details">
                <h4>${reminder.name}</h4>
                <p>🔔 ${reminder.type} — Scheduled daily at: <strong>${reminder.time}</strong></p>
            </div>
            <button class="btn-delete" onclick="removeReminder(${reminder.id})" title="Delete Reminder">&times;</button>
        `;
        remindersList.appendChild(item);
    });
}

function removeReminder(id) {
    medicineReminders = medicineReminders.filter(rem => rem.id !== id);
    renderReminders();
    showToast("Reminder removed.");
}


// ==========================================
// FEATURE 4: EDUCATIONAL HEALTH TIPS HUB
// ==========================================

function loadTips(category) {
    const data = healthTips[category];
    if (!data) return;

    tipsTabs.forEach(tab => {
        if (tab.getAttribute("data-category") === category) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    let tipsHTML = `<h3>${data.title}</h3><ul class="tips-list">`;
    data.tips.forEach(tip => {
        tipsHTML += `<li>${tip}</li>`;
    });
    tipsHTML += `</ul>`;

    tipsDisplayArea.innerHTML = tipsHTML;
}

tipsTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        loadTips(tab.getAttribute("data-category"));
    });
});


// ==========================================
// EMERGENCY & CONFIRMATION MODALS DIALOGS
// ==========================================

// Emergency modal open/close
emergencyBtn.addEventListener("click", () => {
    emergencyModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    emergencyModal.classList.add("hidden");
});

// Success Confirmation Modal Action Trigger
function showActionConfirmation(title, message) {
    confirmModalTitle.textContent = title;
    confirmModalMessage.textContent = message;
    confirmModal.classList.remove("hidden");
}

function hideConfirmModal() {
    confirmModal.classList.add("hidden");
}

btnConfirmOk.addEventListener("click", hideConfirmModal);
closeConfirmModal.addEventListener("click", hideConfirmModal);

// Close modals when user clicks grey background
window.addEventListener("click", (e) => {
    if (e.target === emergencyModal) {
        emergencyModal.classList.add("hidden");
    }
    if (e.target === confirmModal) {
        confirmModal.classList.add("hidden");
    }
});


// ==========================================
// DISCREET TOAST ALERTS
// ==========================================

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 4000);
}


// ==========================================
// APP INITIALIZATION
// ==========================================

function initApp() {
    renderFacilities();
    populateBookingOptions();
    renderAppointments();
    renderReminders();
    loadTips("diseases"); 
    updateAuthState();   
}

initApp();
