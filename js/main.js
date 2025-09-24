// Main JavaScript for JobBoard Pro

// Comprehensive job data
const sampleJobs = [
    {
        id: 1,
        title: "Senior Software Engineer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        type: "Full Time",
        salary: "$120,000 - $150,000",
        category: "Technology",
        experience: "5-10 years",
        posted: "2 days ago",
        description: "We are looking for a Senior Software Engineer to join our growing team. You will be responsible for developing and maintaining our core platform, working with cutting-edge technologies, and collaborating with cross-functional teams to deliver high-quality software solutions.",
        companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: true,
        featured: true,
        skills: ["JavaScript", "React", "Node.js", "AWS", "Docker"],
        benefits: ["Health Insurance", "Stock Options", "Flexible Hours", "Remote Work"],
        companySize: "500+ employees",
        industry: "Technology"
    },
    {
        id: 2,
        title: "Product Manager",
        company: "InnovateLab",
        location: "New York, NY",
        type: "Full Time",
        salary: "$100,000 - $130,000",
        category: "Technology",
        experience: "3-7 years",
        posted: "1 day ago",
        description: "Join our product team to drive innovation and user experience. You will work closely with engineering, design, and business teams to define product strategy and roadmap.",
        companyLogo: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: false,
        featured: true,
        skills: ["Product Management", "Agile", "Analytics", "User Research", "Strategy"],
        benefits: ["Health Insurance", "401k", "Gym Membership", "Learning Budget"],
        companySize: "200+ employees",
        industry: "Technology"
    },
    {
        id: 3,
        title: "UX Designer",
        company: "DesignStudio",
        location: "Austin, TX",
        type: "Contract",
        salary: "$80,000 - $100,000",
        category: "Design",
        experience: "2-5 years",
        posted: "3 days ago",
        description: "Create beautiful and intuitive user experiences for our products. You will work on user research, wireframing, prototyping, and collaborating with development teams.",
        companyLogo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: true,
        featured: true,
        skills: ["Figma", "Sketch", "Adobe Creative Suite", "User Research", "Prototyping"],
        benefits: ["Flexible Schedule", "Creative Freedom", "Team Events"],
        companySize: "50+ employees",
        industry: "Design"
    },
    {
        id: 4,
        title: "Marketing Specialist",
        company: "GrowthCo",
        location: "Chicago, IL",
        type: "Full Time",
        salary: "$60,000 - $80,000",
        category: "Marketing",
        experience: "1-3 years",
        posted: "5 days ago",
        description: "Drive marketing campaigns and brand awareness initiatives. You will work on digital marketing, content creation, and social media management.",
        companyLogo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: false,
        featured: false,
        skills: ["Digital Marketing", "SEO", "Social Media", "Content Creation", "Analytics"],
        benefits: ["Health Insurance", "Performance Bonus", "Team Building"],
        companySize: "150+ employees",
        industry: "Marketing"
    },
    {
        id: 5,
        title: "Data Scientist",
        company: "DataTech",
        location: "Seattle, WA",
        type: "Full Time",
        salary: "$110,000 - $140,000",
        category: "Technology",
        experience: "3-6 years",
        posted: "1 week ago",
        description: "Analyze complex datasets to drive business insights and decisions. You will work with machine learning models, statistical analysis, and data visualization.",
        companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: true,
        featured: false,
        skills: ["Python", "R", "Machine Learning", "SQL", "Statistics"],
        benefits: ["Health Insurance", "Stock Options", "Remote Work", "Learning Budget"],
        companySize: "800+ employees",
        industry: "Technology"
    },
    {
        id: 6,
        title: "Sales Manager",
        company: "SalesPro",
        location: "Miami, FL",
        type: "Full Time",
        salary: "$90,000 - $120,000",
        category: "Sales",
        experience: "4-8 years",
        posted: "4 days ago",
        description: "Lead our sales team and drive revenue growth. You will manage a team of sales representatives and develop sales strategies.",
        companyLogo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: false,
        featured: false,
        skills: ["Sales Management", "CRM", "Lead Generation", "Team Leadership", "Negotiation"],
        benefits: ["Commission", "Car Allowance", "Health Insurance", "Flexible Schedule"],
        companySize: "120+ employees",
        industry: "Sales"
    },
    {
        id: 7,
        title: "Frontend Developer",
        company: "WebCraft",
        location: "Portland, OR",
        type: "Full Time",
        salary: "$85,000 - $110,000",
        category: "Technology",
        experience: "2-4 years",
        posted: "6 days ago",
        description: "Build responsive and interactive web applications using modern frontend technologies. You will work with React, TypeScript, and modern CSS frameworks.",
        companyLogo: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: true,
        featured: false,
        skills: ["React", "TypeScript", "CSS", "JavaScript", "Git"],
        benefits: ["Health Insurance", "Remote Work", "Flexible Hours", "Learning Budget"],
        companySize: "80+ employees",
        industry: "Technology"
    },
    {
        id: 8,
        title: "DevOps Engineer",
        company: "CloudOps",
        location: "Denver, CO",
        type: "Full Time",
        salary: "$95,000 - $125,000",
        category: "Technology",
        experience: "3-5 years",
        posted: "1 week ago",
        description: "Manage cloud infrastructure and deployment pipelines. You will work with AWS, Docker, Kubernetes, and CI/CD tools to ensure smooth deployments.",
        companyLogo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: true,
        featured: false,
        skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Linux"],
        benefits: ["Health Insurance", "Stock Options", "Remote Work", "Gym Membership"],
        companySize: "300+ employees",
        industry: "Technology"
    },
    {
        id: 9,
        title: "Financial Analyst",
        company: "FinanceFirst",
        location: "Boston, MA",
        type: "Full Time",
        salary: "$70,000 - $90,000",
        category: "Finance",
        experience: "2-4 years",
        posted: "3 days ago",
        description: "Analyze financial data and create reports for senior management. You will work on budgeting, forecasting, and financial modeling.",
        companyLogo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: false,
        featured: false,
        skills: ["Excel", "Financial Modeling", "SQL", "Power BI", "Accounting"],
        benefits: ["Health Insurance", "401k", "Bonus", "Professional Development"],
        companySize: "400+ employees",
        industry: "Finance"
    },
    {
        id: 10,
        title: "HR Business Partner",
        company: "PeopleFirst",
        location: "Phoenix, AZ",
        type: "Full Time",
        salary: "$75,000 - $95,000",
        category: "Human Resources",
        experience: "3-6 years",
        posted: "2 days ago",
        description: "Support business units with HR initiatives including recruitment, employee relations, and performance management.",
        companyLogo: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: false,
        featured: false,
        skills: ["HRIS", "Recruitment", "Employee Relations", "Performance Management", "Communication"],
        benefits: ["Health Insurance", "401k", "PTO", "Professional Development"],
        companySize: "250+ employees",
        industry: "Human Resources"
    },
    {
        id: 11,
        title: "Content Writer",
        company: "ContentCo",
        location: "Remote",
        type: "Part Time",
        salary: "$40,000 - $60,000",
        category: "Marketing",
        experience: "1-3 years",
        posted: "4 days ago",
        description: "Create engaging content for blogs, social media, and marketing materials. You will work with the marketing team to develop content strategies.",
        companyLogo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: true,
        featured: false,
        skills: ["Content Writing", "SEO", "Social Media", "WordPress", "Creative Writing"],
        benefits: ["Flexible Schedule", "Remote Work", "Creative Freedom"],
        companySize: "60+ employees",
        industry: "Marketing"
    },
    {
        id: 12,
        title: "Customer Success Manager",
        company: "SuccessHub",
        location: "Dallas, TX",
        type: "Full Time",
        salary: "$65,000 - $85,000",
        category: "Customer Service",
        experience: "2-4 years",
        posted: "5 days ago",
        description: "Ensure customer satisfaction and drive product adoption. You will work with customers to understand their needs and help them achieve their goals.",
        companyLogo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: false,
        featured: false,
        skills: ["Customer Service", "CRM", "Communication", "Problem Solving", "Analytics"],
        benefits: ["Health Insurance", "401k", "PTO", "Team Events"],
        companySize: "180+ employees",
        industry: "Customer Service"
    },
    {
        id: 13,
        title: "Mobile App Developer",
        company: "AppCraft",
        location: "Los Angeles, CA",
        type: "Full Time",
        salary: "$95,000 - $120,000",
        category: "Technology",
        experience: "3-5 years",
        posted: "1 week ago",
        description: "Develop mobile applications for iOS and Android platforms. You will work with React Native, Swift, and Kotlin to create engaging mobile experiences.",
        companyLogo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: true,
        featured: false,
        skills: ["React Native", "Swift", "Kotlin", "JavaScript", "Mobile Development"],
        benefits: ["Health Insurance", "Stock Options", "Remote Work", "Learning Budget"],
        companySize: "120+ employees",
        industry: "Technology"
    },
    {
        id: 14,
        title: "Business Development Manager",
        company: "GrowthPartners",
        location: "Atlanta, GA",
        type: "Full Time",
        salary: "$80,000 - $100,000",
        category: "Business Development",
        experience: "4-7 years",
        posted: "3 days ago",
        description: "Identify and pursue new business opportunities. You will work with potential clients and partners to expand our market reach.",
        companyLogo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: false,
        featured: false,
        skills: ["Business Development", "Sales", "Networking", "Strategy", "Communication"],
        benefits: ["Health Insurance", "Commission", "Car Allowance", "Flexible Schedule"],
        companySize: "200+ employees",
        industry: "Business Development"
    },
    {
        id: 15,
        title: "Quality Assurance Engineer",
        company: "TestPro",
        location: "Salt Lake City, UT",
        type: "Full Time",
        salary: "$70,000 - $90,000",
        category: "Technology",
        experience: "2-4 years",
        posted: "6 days ago",
        description: "Ensure software quality through testing and automation. You will work with testing frameworks and develop automated test suites.",
        companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: true,
        featured: false,
        skills: ["Selenium", "Jest", "Cypress", "Python", "Testing"],
        benefits: ["Health Insurance", "Remote Work", "Learning Budget", "Flexible Hours"],
        companySize: "100+ employees",
        industry: "Technology"
    },
    {
        id: 16,
        title: "Graphic Designer",
        company: "CreativeStudio",
        location: "Nashville, TN",
        type: "Full Time",
        salary: "$55,000 - $70,000",
        category: "Design",
        experience: "2-4 years",
        posted: "4 days ago",
        description: "Create visual designs for marketing materials, websites, and digital products. You will work with Adobe Creative Suite and modern design tools.",
        companyLogo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: false,
        featured: false,
        skills: ["Adobe Creative Suite", "Figma", "Photoshop", "Illustrator", "Design"],
        benefits: ["Health Insurance", "Creative Freedom", "Team Events", "Professional Development"],
        companySize: "40+ employees",
        industry: "Design"
    },
    {
        id: 17,
        title: "Operations Manager",
        company: "OpsFlow",
        location: "Minneapolis, MN",
        type: "Full Time",
        salary: "$85,000 - $110,000",
        category: "Operations",
        experience: "5-8 years",
        posted: "2 days ago",
        description: "Oversee daily operations and improve efficiency. You will work with cross-functional teams to optimize processes and drive operational excellence.",
        companyLogo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: false,
        featured: false,
        skills: ["Operations Management", "Process Improvement", "Leadership", "Analytics", "Project Management"],
        benefits: ["Health Insurance", "401k", "Bonus", "PTO"],
        companySize: "300+ employees",
        industry: "Operations"
    },
    {
        id: 18,
        title: "Cybersecurity Analyst",
        company: "SecureTech",
        location: "Washington, DC",
        type: "Full Time",
        salary: "$90,000 - $115,000",
        category: "Technology",
        experience: "3-6 years",
        posted: "1 week ago",
        description: "Protect our systems and data from cyber threats. You will monitor security systems, investigate incidents, and implement security measures.",
        companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: true,
        featured: false,
        skills: ["Cybersecurity", "SIEM", "Network Security", "Incident Response", "Risk Assessment"],
        benefits: ["Health Insurance", "Stock Options", "Remote Work", "Security Clearance"],
        companySize: "500+ employees",
        industry: "Technology"
    },
    {
        id: 19,
        title: "Account Executive",
        company: "SalesForce",
        location: "San Diego, CA",
        type: "Full Time",
        salary: "$75,000 - $95,000",
        category: "Sales",
        experience: "3-5 years",
        posted: "5 days ago",
        description: "Manage key client accounts and drive revenue growth. You will build relationships with clients and identify upselling opportunities.",
        companyLogo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: false,
        featured: false,
        skills: ["Account Management", "Sales", "CRM", "Relationship Building", "Negotiation"],
        benefits: ["Health Insurance", "Commission", "Car Allowance", "Flexible Schedule"],
        companySize: "1000+ employees",
        industry: "Sales"
    },
    {
        id: 20,
        title: "Research Scientist",
        company: "InnovationLab",
        location: "Cambridge, MA",
        type: "Full Time",
        salary: "$100,000 - $130,000",
        category: "Research",
        experience: "4-7 years",
        posted: "3 days ago",
        description: "Conduct research and develop new technologies. You will work on cutting-edge projects and publish research papers.",
        companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        remote: false,
        featured: false,
        skills: ["Research", "Machine Learning", "Python", "Statistics", "Publications"],
        benefits: ["Health Insurance", "Research Budget", "Conference Travel", "Flexible Schedule"],
        companySize: "200+ employees",
        industry: "Research"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load featured jobs on homepage
    if (document.getElementById('featured-jobs')) {
        loadFeaturedJobs();
    }
    
    // Initialize job search functionality
    if (document.getElementById('searchForm')) {
        initializeJobSearch();
    }
    
    // Initialize filters
    if (document.querySelector('.filter-card')) {
        initializeFilters();
    }
    
    // Initialize view toggle
    initializeViewToggle();
    
    // Initialize footer newsletter
    initializeFooterNewsletter();
});

// Load job categories on homepage
function loadJobCategories() {
    const categoriesContainer = document.getElementById('job-categories');
    if (!categoriesContainer) return;
    
    const categories = [
        { name: 'Technology', icon: 'fas fa-laptop-code', color: 'text-primary', count: '1,234' },
        { name: 'Healthcare', icon: 'fas fa-heartbeat', color: 'text-danger', count: '856' },
        { name: 'Finance', icon: 'fas fa-chart-line', color: 'text-success', count: '642' },
        { name: 'Education', icon: 'fas fa-graduation-cap', color: 'text-warning', count: '423' },
        { name: 'Design', icon: 'fas fa-palette', color: 'text-info', count: '312' },
        { name: 'Marketing', icon: 'fas fa-bullhorn', color: 'text-purple', count: '567' },
        { name: 'Sales', icon: 'fas fa-handshake', color: 'text-orange', count: '789' },
        { name: 'Human Resources', icon: 'fas fa-users', color: 'text-teal', count: '234' }
    ];
    
    categoriesContainer.innerHTML = categories.map(category => `
        <div class="col-lg-3 col-md-6">
            <div class="category-card text-center p-4 bg-white rounded-3 shadow-sm h-100">
                <div class="category-icon mb-3">
                    <i class="${category.icon} fa-3x ${category.color}"></i>
                </div>
                <h5 class="fw-semibold">${category.name}</h5>
                <p class="text-muted small">${category.count} jobs available</p>
            </div>
        </div>
    `).join('');
}

// Load featured jobs on homepage
function loadFeaturedJobs() {
    const featuredJobsContainer = document.getElementById('featured-jobs');
    const featuredJobs = sampleJobs.filter(job => job.featured);
    
    featuredJobsContainer.innerHTML = featuredJobs.map(job => `
        <div class="col-lg-6 col-md-6 mb-4">
            <div class="job-card">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <div class="d-flex align-items-center">
                        <img src="${job.companyLogo}" alt="${job.company}" class="company-logo me-3" style="width: 50px; height: 50px; border-radius: 8px;">
                        <div>
                            <h5 class="job-title">${job.title}</h5>
                            <p class="job-company">${job.company}</p>
                        </div>
                    </div>
                    <div class="text-end">
                        <div class="job-salary text-primary fw-bold">${job.salary}</div>
                        <div class="job-type">
                            <span class="badge bg-primary me-1">${job.type}</span>
                            ${job.remote ? '<span class="badge bg-success">Remote</span>' : ''}
                        </div>
                    </div>
                </div>
                <p class="job-location mb-3">
                    <i class="fas fa-map-marker-alt me-1"></i>${job.location}
                </p>
                <p class="job-description">${job.description}</p>
                <div class="job-meta mb-3">
                    <span class="badge bg-light text-dark me-2">${job.experience}</span>
                    <span class="badge bg-light text-dark me-2">${job.category}</span>
                    <span class="badge bg-light text-dark">${job.posted}</span>
                </div>
                <div class="job-actions">
                    <a href="job-detail.html?id=${job.id}" class="btn btn-primary btn-sm">
                        <i class="fas fa-eye me-1"></i>View Details
                    </a>
                    <button class="btn btn-outline-primary btn-sm" onclick="saveJob(${job.id})">
                        <i class="fas fa-bookmark me-1"></i>Save
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize job search functionality
function initializeJobSearch() {
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performJobSearch();
        });
    }
}

// Perform job search
function performJobSearch() {
    const jobTitle = document.getElementById('jobTitle')?.value || '';
    const location = document.getElementById('location')?.value || '';
    const category = document.getElementById('category')?.value || '';
    
    // Filter jobs based on search criteria
    let filteredJobs = sampleJobs;
    
    if (jobTitle) {
        filteredJobs = filteredJobs.filter(job => 
            job.title.toLowerCase().includes(jobTitle.toLowerCase()) ||
            job.description.toLowerCase().includes(jobTitle.toLowerCase())
        );
    }
    
    if (location) {
        filteredJobs = filteredJobs.filter(job => 
            job.location.toLowerCase().includes(location.toLowerCase())
        );
    }
    
    if (category) {
        filteredJobs = filteredJobs.filter(job => 
            job.category.toLowerCase() === category.toLowerCase()
        );
    }
    
    // Display filtered jobs
    displayJobs(filteredJobs);
}

// Display jobs in the listings
function displayJobs(jobs) {
    const jobListingsContainer = document.getElementById('jobListings');
    const jobCountElement = document.getElementById('jobCount');
    
    if (jobCountElement) {
        jobCountElement.textContent = `Showing ${jobs.length} jobs`;
    }
    
    if (jobListingsContainer) {
        jobListingsContainer.innerHTML = jobs.map(job => `
            <div class="job-card">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <div class="d-flex align-items-center">
                        <img src="${job.companyLogo}" alt="${job.company}" class="company-logo me-3" style="width: 50px; height: 50px; border-radius: 8px;">
                        <div>
                            <h5 class="job-title">${job.title}</h5>
                            <p class="job-company">${job.company}</p>
                        </div>
                    </div>
                    <div class="text-end">
                        <div class="job-salary text-primary fw-bold">${job.salary}</div>
                        <div class="job-type">
                            <span class="badge bg-primary me-1">${job.type}</span>
                            ${job.remote ? '<span class="badge bg-success">Remote</span>' : ''}
                        </div>
                    </div>
                </div>
                <p class="job-location mb-3">
                    <i class="fas fa-map-marker-alt me-1"></i>${job.location}
                </p>
                <p class="job-description">${job.description}</p>
                <div class="job-meta mb-3">
                    <span class="badge bg-light text-dark me-2">${job.experience}</span>
                    <span class="badge bg-light text-dark me-2">${job.category}</span>
                    <span class="badge bg-light text-dark">${job.posted}</span>
                </div>
                <div class="job-actions">
                    <a href="job-detail.html?id=${job.id}" class="btn btn-primary btn-sm">
                        <i class="fas fa-eye me-1"></i>View Details
                    </a>
                    <button class="btn btn-outline-primary btn-sm" onclick="saveJob(${job.id})">
                        <i class="fas fa-bookmark me-1"></i>Save
                    </button>
                    <button class="btn btn-outline-secondary btn-sm" onclick="shareJob(${job.id})">
                        <i class="fas fa-share me-1"></i>Share
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// Initialize filters
function initializeFilters() {
    const filterCheckboxes = document.querySelectorAll('.filter-card input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            applyFilters();
        });
    });
}

// Apply filters
function applyFilters() {
    const selectedFilters = {
        jobType: [],
        experience: [],
        salary: [],
        companySize: []
    };
    
    // Collect selected filters
    document.querySelectorAll('.filter-card input[type="checkbox"]:checked').forEach(checkbox => {
        const filterType = checkbox.closest('.filter-section').querySelector('h6').textContent.toLowerCase();
        if (filterType.includes('job type')) {
            selectedFilters.jobType.push(checkbox.value);
        } else if (filterType.includes('experience')) {
            selectedFilters.experience.push(checkbox.value);
        } else if (filterType.includes('salary')) {
            selectedFilters.salary.push(checkbox.value);
        } else if (filterType.includes('company size')) {
            selectedFilters.companySize.push(checkbox.value);
        }
    });
    
    // Filter jobs based on selected filters
    let filteredJobs = sampleJobs;
    
    if (selectedFilters.jobType.length > 0) {
        filteredJobs = filteredJobs.filter(job => 
            selectedFilters.jobType.includes(job.type.toLowerCase())
        );
    }
    
    // Display filtered results
    displayJobs(filteredJobs);
}

// Clear all filters
function clearFilters() {
    document.querySelectorAll('.filter-card input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset form fields
    const form = document.getElementById('searchForm');
    if (form) {
        form.reset();
    }
    
    // Show all jobs
    displayJobs(sampleJobs);
}

// Initialize view toggle
function initializeViewToggle() {
    const listViewBtn = document.getElementById('listView');
    const gridViewBtn = document.getElementById('gridView');
    const jobListings = document.getElementById('jobListings');
    
    if (listViewBtn && gridViewBtn && jobListings) {
        listViewBtn.addEventListener('click', function() {
            this.classList.add('active');
            gridViewBtn.classList.remove('active');
            jobListings.classList.remove('row');
            jobListings.classList.add('list-view');
        });
        
        gridViewBtn.addEventListener('click', function() {
            this.classList.add('active');
            listViewBtn.classList.remove('active');
            jobListings.classList.remove('list-view');
            jobListings.classList.add('row');
        });
    }
}

// Save job function
function saveJob(jobId) {
    const job = sampleJobs.find(j => j.id === jobId);
    if (job) {
        // In a real application, this would save to localStorage or send to server
        const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
        if (!savedJobs.find(j => j.id === jobId)) {
            savedJobs.push(job);
            localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
            showNotification('Job saved successfully!', 'success');
        } else {
            showNotification('Job already saved!', 'info');
        }
    }
}

// Share job function
function shareJob(jobId) {
    const job = sampleJobs.find(j => j.id === jobId);
    if (job) {
        const shareUrl = `${window.location.origin}/job-detail.html?id=${jobId}`;
        const shareText = `Check out this job: ${job.title} at ${job.company}`;
        
        if (navigator.share) {
            navigator.share({
                title: job.title,
                text: shareText,
                url: shareUrl
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(`${shareText} - ${shareUrl}`).then(() => {
                showNotification('Job link copied to clipboard!', 'success');
            });
        }
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Utility functions
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatSalary(min, max) {
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
}

// Initialize footer newsletter
function initializeFooterNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Simulate newsletter subscription
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                this.reset();
            } else {
                showNotification('Please enter a valid email address', 'error');
            }
        });
    }
}

// Export functions for use in other scripts
window.JobBoard = {
    sampleJobs,
    loadFeaturedJobs,
    performJobSearch,
    displayJobs,
    applyFilters,
    clearFilters,
    saveJob,
    shareJob,
    showNotification
};
