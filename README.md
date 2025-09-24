# JobBoard Pro - Job Board Application Frontend

A modern, responsive job board application built with HTML, CSS, JavaScript, and Bootstrap 5. This frontend provides a complete user experience for both job seekers and employers.

## 🚀 Features

### For Job Seekers
- **Job Search & Filtering**: Advanced search with multiple filters (location, category, salary, experience level)
- **Job Listings**: Beautiful job cards with company information, salary, and job details
- **Job Details**: Comprehensive job posting pages with application forms
- **User Dashboard**: Track applications, saved jobs, and job alerts
- **Profile Management**: Complete profile setup with skills and experience
- **Resume Upload**: Drag-and-drop resume upload functionality
- **Job Alerts**: Set up personalized job notifications

### For Employers
- **Employer Dashboard**: Comprehensive dashboard with job management tools
- **Job Posting**: Easy job creation with detailed forms
- **Application Management**: Track and manage job applications
- **Candidate Search**: Find and connect with potential candidates
- **Analytics**: View job performance and application statistics
- **Company Profile**: Showcase company information and culture

### General Features
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Search & Filter**: Advanced search capabilities with real-time filtering
- **User Authentication**: Login and registration system
- **Company Directory**: Browse and discover companies
- **About Page**: Learn about the platform and team

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with CSS variables and modern features
- **JavaScript (ES6+)**: Interactive functionality and data management
- **Bootstrap 5**: Responsive framework and components
- **Font Awesome**: Icons and visual elements
- **Google Fonts**: Inter font family for typography

## 📁 Project Structure

```
frontend/
├── index.html              # Homepage
├── jobs.html              # Job listings page
├── job-detail.html        # Individual job details
├── login.html             # User login
├── register.html          # User registration
├── employer-dashboard.html # Employer dashboard
├── job-seeker-dashboard.html # Job seeker dashboard
├── companies.html         # Company directory
├── about.html             # About page
├── css/
│   └── style.css          # Custom styles
├── js/
│   ├── main.js            # Main JavaScript functionality
│   ├── jobs.js            # Job search and filtering
│   ├── job-detail.js      # Job detail page functionality
│   └── companies.js       # Company directory functionality
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A local web server (optional but recommended)

### Installation

1. **Clone or download** the project files to your local machine

2. **Start a local server** (choose one method):
   
   **Option 1: Python (if installed)**
   ```bash
   python -m http.server 8000
   ```
   
   **Option 2: Node.js (if installed)**
   ```bash
   npx http-server -p 8000
   ```
   
   **Option 3: Live Server (VS Code extension)**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

3. **Open your browser** and navigate to:
   - `http://localhost:8000` - Homepage
   - `http://localhost:8000/jobs.html` - Job listings
   - `http://localhost:8000/employer-dashboard.html` - Employer dashboard
   - `http://localhost:8000/job-seeker-dashboard.html` - Job seeker dashboard

## 📱 Pages Overview

### Public Pages
- **Homepage** (`index.html`): Hero section, featured jobs, categories, and statistics
- **Job Listings** (`jobs.html`): Advanced job search with filters and sorting
- **Job Detail** (`job-detail.html`): Complete job posting with application form
- **Companies** (`companies.html`): Company directory with filtering
- **About** (`about.html`): Company information and team
- **Login** (`login.html`): User authentication
- **Register** (`register.html`): User registration (job seekers & employers)

### Dashboard Pages
- **Employer Dashboard** (`employer-dashboard.html`): Job management, applications, analytics
- **Job Seeker Dashboard** (`job-seeker-dashboard.html`): Applications, saved jobs, recommendations

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#2563eb)
- **Secondary**: Slate (#64748b)
- **Success**: Green (#10b981)
- **Warning**: Amber (#f59e0b)
- **Danger**: Red (#ef4444)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Cards**: Modern card design with hover effects
- **Buttons**: Consistent button styling with hover animations
- **Forms**: Clean form design with validation states
- **Navigation**: Responsive navigation with mobile menu
- **Modals**: Bootstrap modals for forms and interactions

## 🔧 Customization

### CSS Variables
The project uses CSS custom properties for easy theming:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #64748b;
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --danger-color: #ef4444;
    --light-color: #f8fafc;
    --dark-color: #1e293b;
    --border-radius: 0.75rem;
    --box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}
```

### JavaScript Data
Sample data is stored in `js/main.js` and can be easily modified or replaced with API calls.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Future Enhancements

- **Backend Integration**: Connect to a real API
- **User Authentication**: Implement actual login/logout
- **File Upload**: Real file upload functionality
- **Real-time Updates**: WebSocket integration
- **Advanced Search**: Elasticsearch integration
- **Email Notifications**: Email service integration
- **Payment Integration**: Stripe for premium features
- **Mobile App**: React Native or Flutter app

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email support@jobboardpro.com or create an issue in the repository.

---

**Made with ❤️ for job seekers and employers**
