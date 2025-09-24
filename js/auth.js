// Authentication System for JobBoard Pro
class AuthSystem {
    constructor() {
        this.users = this.loadUsers();
        this.currentUser = this.getCurrentUser();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.checkAuthStatus();
    }

    // Load users from localStorage
    loadUsers() {
        const users = localStorage.getItem('jobboard_users');
        return users ? JSON.parse(users) : [];
    }

    // Save users to localStorage
    saveUsers() {
        localStorage.setItem('jobboard_users', JSON.stringify(this.users));
    }

    // Get current user from localStorage
    getCurrentUser() {
        const user = localStorage.getItem('jobboard_current_user');
        return user ? JSON.parse(user) : null;
    }

    // Set current user
    setCurrentUser(user) {
        this.currentUser = user;
        localStorage.setItem('jobboard_current_user', JSON.stringify(user));
    }

    // Clear current user
    clearCurrentUser() {
        this.currentUser = null;
        localStorage.removeItem('jobboard_current_user');
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.currentUser !== null;
    }

    // Setup event listeners
    setupEventListeners() {
        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        // Register form
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => this.handleRegister(e));
        }

        // Social media buttons
        this.setupSocialAuth();
    }

    // Handle login form submission
    handleLogin(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const email = e.target.querySelector('input[type="email"]').value;
        const password = e.target.querySelector('input[type="password"]').value;
        const rememberMe = e.target.querySelector('#rememberMe')?.checked || false;

        // Validate inputs
        if (!this.validateEmail(email)) {
            this.showNotification('Please enter a valid email address', 'error');
            return;
        }

        if (!password) {
            this.showNotification('Please enter your password', 'error');
            return;
        }

        // Find user
        const user = this.users.find(u => u.email === email);
        
        if (!user) {
            this.showNotification('No account found with this email address', 'error');
            return;
        }

        if (user.password !== password) {
            this.showNotification('Incorrect password', 'error');
            return;
        }

        // Login successful
        this.setCurrentUser(user);
        this.showNotification('Login successful! Redirecting...', 'success');
        
        // Redirect based on user type
        setTimeout(() => {
            if (user.accountType === 'employer') {
                window.location.href = 'employer-dashboard.html';
            } else {
                window.location.href = 'job-seeker-dashboard.html';
            }
        }, 1500);
    }

    // Handle registration form submission
    handleRegister(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const accountType = e.target.querySelector('input[name="accountType"]:checked').value;
        const firstName = e.target.querySelector('input[type="text"]').value;
        const lastName = e.target.querySelectorAll('input[type="text"]')[1].value;
        const email = e.target.querySelector('input[type="email"]').value;
        const password = e.target.querySelector('input[type="password"]').value;
        const confirmPassword = e.target.querySelectorAll('input[type="password"]')[1].value;
        const agreeTerms = e.target.querySelector('#agreeTerms').checked;

        // Validate inputs
        if (!firstName || !lastName) {
            this.showNotification('Please enter your first and last name', 'error');
            return;
        }

        if (!this.validateEmail(email)) {
            this.showNotification('Please enter a valid email address', 'error');
            return;
        }

        if (!this.validatePassword(password)) {
            this.showNotification('Password must be at least 8 characters long', 'error');
            return;
        }

        if (password !== confirmPassword) {
            this.showNotification('Passwords do not match', 'error');
            return;
        }

        if (!agreeTerms) {
            this.showNotification('Please agree to the Terms of Service and Privacy Policy', 'error');
            return;
        }

        // Check if user already exists
        if (this.users.find(u => u.email === email)) {
            this.showNotification('An account with this email already exists', 'error');
            return;
        }

        // Create new user
        const newUser = {
            id: Date.now().toString(),
            firstName,
            lastName,
            email,
            password,
            accountType,
            createdAt: new Date().toISOString(),
            profile: this.getProfileData(e.target, accountType)
        };

        // Add user to users array
        this.users.push(newUser);
        this.saveUsers();

        // Auto-login after registration
        this.setCurrentUser(newUser);
        this.showNotification('Account created successfully! Redirecting...', 'success');
        
        // Redirect based on user type
        setTimeout(() => {
            if (accountType === 'employer') {
                window.location.href = 'employer-dashboard.html';
            } else {
                window.location.href = 'job-seeker-dashboard.html';
            }
        }, 1500);
    }

    // Get profile data based on account type
    getProfileData(form, accountType) {
        if (accountType === 'job-seeker') {
            return {
                professionalTitle: form.querySelector('#jobSeekerFields input[type="text"]')?.value || '',
                experience: form.querySelector('#jobSeekerFields select')?.value || '',
                location: form.querySelectorAll('#jobSeekerFields input[type="text"]')[1]?.value || '',
                linkedinProfile: form.querySelector('#jobSeekerFields input[type="url"]')?.value || ''
            };
        } else {
            return {
                companyName: form.querySelector('#employerFields input[type="text"]')?.value || '',
                companySize: form.querySelector('#employerFields select')?.value || '',
                industry: form.querySelectorAll('#employerFields select')[1]?.value || '',
                website: form.querySelector('#employerFields input[type="url"]')?.value || ''
            };
        }
    }

    // Setup social media authentication
    setupSocialAuth() {
        // Google authentication
        const googleButtons = document.querySelectorAll('.btn-outline-secondary');
        googleButtons.forEach(button => {
            if (button.textContent.includes('Google')) {
                button.addEventListener('click', () => this.handleGoogleAuth());
            }
            if (button.textContent.includes('LinkedIn')) {
                button.addEventListener('click', () => this.handleLinkedInAuth());
            }
        });
    }

    // Handle Google authentication
    handleGoogleAuth() {
        this.showNotification('Google authentication would be implemented here. For demo purposes, creating a sample account...', 'info');
        
        // Demo Google user
        const demoUser = {
            id: 'google_' + Date.now(),
            firstName: 'Google',
            lastName: 'User',
            email: 'demo.google@example.com',
            accountType: 'job-seeker',
            createdAt: new Date().toISOString(),
            profile: {
                professionalTitle: 'Software Engineer',
                experience: '2-5',
                location: 'San Francisco, CA',
                linkedinProfile: ''
            }
        };

        // Check if user exists, if not add them
        if (!this.users.find(u => u.email === demoUser.email)) {
            this.users.push(demoUser);
            this.saveUsers();
        }

        this.setCurrentUser(demoUser);
        this.showNotification('Google authentication successful! Redirecting...', 'success');
        
        setTimeout(() => {
            window.location.href = 'job-seeker-dashboard.html';
        }, 1500);
    }

    // Handle LinkedIn authentication
    handleLinkedInAuth() {
        this.showNotification('LinkedIn authentication would be implemented here. For demo purposes, creating a sample account...', 'info');
        
        // Demo LinkedIn user
        const demoUser = {
            id: 'linkedin_' + Date.now(),
            firstName: 'LinkedIn',
            lastName: 'User',
            email: 'demo.linkedin@example.com',
            accountType: 'employer',
            createdAt: new Date().toISOString(),
            profile: {
                companyName: 'Tech Solutions Inc.',
                companySize: '51-200',
                industry: 'technology',
                website: 'https://techsolutions.com'
            }
        };

        // Check if user exists, if not add them
        if (!this.users.find(u => u.email === demoUser.email)) {
            this.users.push(demoUser);
            this.saveUsers();
        }

        this.setCurrentUser(demoUser);
        this.showNotification('LinkedIn authentication successful! Redirecting...', 'success');
        
        setTimeout(() => {
            window.location.href = 'employer-dashboard.html';
        }, 1500);
    }

    // Validate email format
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validate password strength
    validatePassword(password) {
        return password.length >= 8;
    }

    // Check authentication status and redirect if needed
    checkAuthStatus() {
        const currentPath = window.location.pathname;
        const authPages = ['/login.html', '/register.html'];
        
        // If user is logged in and on auth pages, redirect to dashboard
        if (this.isLoggedIn() && authPages.some(page => currentPath.includes(page))) {
            const user = this.getCurrentUser();
            if (user.accountType === 'employer') {
                window.location.href = 'employer-dashboard.html';
            } else {
                window.location.href = 'job-seeker-dashboard.html';
            }
        }
    }

    // Logout function
    logout() {
        this.clearCurrentUser();
        this.showNotification('You have been logged out successfully', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.auth-notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `auth-notification alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'} alert-dismissible fade show`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Get user profile
    getUserProfile() {
        return this.currentUser ? this.currentUser.profile : null;
    }

    // Update user profile
    updateUserProfile(profileData) {
        if (this.currentUser) {
            this.currentUser.profile = { ...this.currentUser.profile, ...profileData };
            this.setCurrentUser(this.currentUser);
            
            // Update in users array
            const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
            if (userIndex !== -1) {
                this.users[userIndex] = this.currentUser;
                this.saveUsers();
            }
        }
    }
}

// Initialize authentication system
const auth = new AuthSystem();

// Global functions for HTML
function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

function logout() {
    auth.logout();
}

// Export for use in other files
window.auth = auth;
