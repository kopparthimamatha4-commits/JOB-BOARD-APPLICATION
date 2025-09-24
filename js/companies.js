// Companies page specific JavaScript

// Comprehensive companies data
const sampleCompanies = [
    {
        id: 1,
        name: "TechCorp Inc.",
        logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Technology",
        size: "Large",
        location: "San Francisco, CA",
        rating: 4.8,
        jobsCount: 23,
        description: "Leading technology company focused on innovative solutions that transform how businesses operate. We're building the future of work with cutting-edge AI and cloud technologies.",
        benefits: ["Health Insurance", "Remote Work", "Stock Options", "Learning Budget", "Gym Membership"],
        website: "https://techcorp.com",
        founded: 2015,
        employees: "500+",
        remote: true,
        headquarters: "San Francisco, CA",
        revenue: "$100M+",
        funding: "Series C"
    },
    {
        id: 2,
        name: "InnovateLab",
        logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Technology",
        size: "Medium",
        location: "New York, NY",
        rating: 4.6,
        jobsCount: 15,
        description: "Innovative product development company creating next-generation software solutions. We focus on user experience and cutting-edge technology to solve real-world problems.",
        benefits: ["Flexible Hours", "Learning Budget", "Gym Membership", "Stock Options", "Team Events"],
        website: "https://innovatelab.com",
        founded: 2018,
        employees: "200+",
        remote: true,
        headquarters: "New York, NY",
        revenue: "$50M+",
        funding: "Series B"
    },
    {
        id: 3,
        name: "DesignStudio",
        logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Design",
        size: "Small",
        location: "Austin, TX",
        rating: 4.9,
        jobsCount: 8,
        description: "Creative design agency specializing in digital experiences and brand identity. We help companies create memorable and impactful visual experiences.",
        benefits: ["Creative Freedom", "Team Events", "Professional Development", "Flexible Schedule", "Remote Work"],
        website: "https://designstudio.com",
        founded: 2020,
        employees: "50+",
        remote: true,
        headquarters: "Austin, TX",
        revenue: "$10M+",
        funding: "Bootstrapped"
    },
    {
        id: 4,
        name: "GrowthCo",
        logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Marketing",
        size: "Medium",
        location: "Chicago, IL",
        rating: 4.4,
        jobsCount: 12,
        description: "Digital marketing and growth hacking company helping businesses scale through data-driven marketing strategies and innovative campaigns.",
        benefits: ["Performance Bonus", "Work from Home", "Team Building", "Health Insurance", "Learning Budget"],
        website: "https://growthco.com",
        founded: 2017,
        employees: "150+",
        remote: false,
        headquarters: "Chicago, IL",
        revenue: "$25M+",
        funding: "Series A"
    },
    {
        id: 5,
        name: "DataTech",
        logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Technology",
        size: "Large",
        location: "Seattle, WA",
        rating: 4.7,
        jobsCount: 31,
        description: "Data analytics and machine learning solutions company providing AI-powered insights to help businesses make data-driven decisions.",
        benefits: ["Competitive Salary", "Stock Options", "Health & Dental", "Remote Work", "Learning Budget"],
        website: "https://datatech.com",
        founded: 2016,
        employees: "800+",
        remote: true,
        headquarters: "Seattle, WA",
        revenue: "$200M+",
        funding: "Series D"
    },
    {
        id: 6,
        name: "SalesPro",
        logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Sales",
        size: "Medium",
        location: "Miami, FL",
        rating: 4.3,
        jobsCount: 18,
        description: "Sales training and consulting services helping companies optimize their sales processes and improve team performance.",
        benefits: ["Commission", "Car Allowance", "Flexible Schedule", "Health Insurance", "Professional Development"],
        website: "https://salespro.com",
        founded: 2019,
        employees: "120+",
        remote: false,
        headquarters: "Miami, FL",
        revenue: "$15M+",
        funding: "Series A"
    },
    {
        id: 7,
        name: "HealthFirst",
        logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Healthcare",
        size: "Large",
        location: "Boston, MA",
        rating: 4.5,
        jobsCount: 45,
        description: "Healthcare technology and patient care solutions company revolutionizing healthcare delivery through innovative technology and data analytics.",
        benefits: ["Health Insurance", "Retirement Plan", "Paid Time Off", "Tuition Reimbursement", "Wellness Programs"],
        website: "https://healthfirst.com",
        founded: 2014,
        employees: "1000+",
        remote: false,
        headquarters: "Boston, MA",
        revenue: "$500M+",
        funding: "Public"
    },
    {
        id: 8,
        name: "EduTech",
        logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Education",
        size: "Medium",
        location: "Denver, CO",
        rating: 4.6,
        jobsCount: 20,
        description: "Educational technology and online learning platforms making quality education accessible to learners worldwide through innovative technology.",
        benefits: ["Tuition Reimbursement", "Summer Hours", "Team Retreats", "Health Insurance", "Remote Work"],
        website: "https://edutech.com",
        founded: 2018,
        employees: "180+",
        remote: true,
        headquarters: "Denver, CO",
        revenue: "$30M+",
        funding: "Series B"
    },
    {
        id: 9,
        name: "FinanceFirst",
        logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Finance",
        size: "Large",
        location: "Boston, MA",
        rating: 4.4,
        jobsCount: 28,
        description: "Financial services company providing innovative banking and investment solutions to individuals and businesses.",
        benefits: ["Health Insurance", "401k", "Bonus", "Professional Development", "Flexible Schedule"],
        website: "https://financefirst.com",
        founded: 2012,
        employees: "600+",
        remote: false,
        headquarters: "Boston, MA",
        revenue: "$300M+",
        funding: "Public"
    },
    {
        id: 10,
        name: "PeopleFirst",
        logo: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Human Resources",
        size: "Medium",
        location: "Phoenix, AZ",
        rating: 4.2,
        jobsCount: 14,
        description: "Human resources technology company providing comprehensive HR solutions and workforce management tools.",
        benefits: ["Health Insurance", "401k", "PTO", "Professional Development", "Team Events"],
        website: "https://peoplefirst.com",
        founded: 2019,
        employees: "250+",
        remote: false,
        headquarters: "Phoenix, AZ",
        revenue: "$20M+",
        funding: "Series A"
    },
    {
        id: 11,
        name: "ContentCo",
        logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Marketing",
        size: "Small",
        location: "Remote",
        rating: 4.7,
        jobsCount: 6,
        description: "Content marketing agency specializing in creating engaging content for digital platforms and social media.",
        benefits: ["Flexible Schedule", "Remote Work", "Creative Freedom", "Health Insurance", "Learning Budget"],
        website: "https://contentco.com",
        founded: 2021,
        employees: "60+",
        remote: true,
        headquarters: "Remote",
        revenue: "$5M+",
        funding: "Bootstrapped"
    },
    {
        id: 12,
        name: "SuccessHub",
        logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Customer Service",
        size: "Medium",
        location: "Dallas, TX",
        rating: 4.5,
        jobsCount: 16,
        description: "Customer success platform helping businesses improve customer satisfaction and retention through data-driven insights.",
        benefits: ["Health Insurance", "401k", "PTO", "Team Events", "Professional Development"],
        website: "https://successhub.com",
        founded: 2017,
        employees: "180+",
        remote: false,
        headquarters: "Dallas, TX",
        revenue: "$35M+",
        funding: "Series B"
    },
    {
        id: 13,
        name: "AppCraft",
        logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Technology",
        size: "Medium",
        location: "Los Angeles, CA",
        rating: 4.6,
        jobsCount: 22,
        description: "Mobile app development company creating innovative iOS and Android applications for startups and enterprises.",
        benefits: ["Health Insurance", "Stock Options", "Remote Work", "Learning Budget", "Flexible Hours"],
        website: "https://appcraft.com",
        founded: 2018,
        employees: "120+",
        remote: true,
        headquarters: "Los Angeles, CA",
        revenue: "$40M+",
        funding: "Series B"
    },
    {
        id: 14,
        name: "GrowthPartners",
        logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Business Development",
        size: "Medium",
        location: "Atlanta, GA",
        rating: 4.3,
        jobsCount: 11,
        description: "Business development consulting firm helping companies identify growth opportunities and expand their market reach.",
        benefits: ["Health Insurance", "Commission", "Car Allowance", "Flexible Schedule", "Professional Development"],
        website: "https://growthpartners.com",
        founded: 2016,
        employees: "200+",
        remote: false,
        headquarters: "Atlanta, GA",
        revenue: "$25M+",
        funding: "Series A"
    },
    {
        id: 15,
        name: "TestPro",
        logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Technology",
        size: "Small",
        location: "Salt Lake City, UT",
        rating: 4.4,
        jobsCount: 9,
        description: "Quality assurance and testing services company ensuring software quality through comprehensive testing and automation.",
        benefits: ["Health Insurance", "Remote Work", "Learning Budget", "Flexible Hours", "Team Events"],
        website: "https://testpro.com",
        founded: 2020,
        employees: "100+",
        remote: true,
        headquarters: "Salt Lake City, UT",
        revenue: "$8M+",
        funding: "Series A"
    },
    {
        id: 16,
        name: "CreativeStudio",
        logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Design",
        size: "Small",
        location: "Nashville, TN",
        rating: 4.8,
        jobsCount: 7,
        description: "Creative design studio specializing in brand identity, web design, and digital marketing materials for small and medium businesses.",
        benefits: ["Health Insurance", "Creative Freedom", "Team Events", "Professional Development", "Flexible Schedule"],
        website: "https://creativestudio.com",
        founded: 2019,
        employees: "40+",
        remote: false,
        headquarters: "Nashville, TN",
        revenue: "$6M+",
        funding: "Bootstrapped"
    },
    {
        id: 17,
        name: "OpsFlow",
        logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Operations",
        size: "Medium",
        location: "Minneapolis, MN",
        rating: 4.1,
        jobsCount: 13,
        description: "Operations management consulting firm helping businesses optimize their processes and improve operational efficiency.",
        benefits: ["Health Insurance", "401k", "Bonus", "PTO", "Professional Development"],
        website: "https://opsflow.com",
        founded: 2015,
        employees: "300+",
        remote: false,
        headquarters: "Minneapolis, MN",
        revenue: "$45M+",
        funding: "Series B"
    },
    {
        id: 18,
        name: "SecureTech",
        logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Technology",
        size: "Large",
        location: "Washington, DC",
        rating: 4.6,
        jobsCount: 35,
        description: "Cybersecurity company providing comprehensive security solutions to protect businesses from cyber threats and data breaches.",
        benefits: ["Health Insurance", "Stock Options", "Remote Work", "Security Clearance", "Learning Budget"],
        website: "https://securetech.com",
        founded: 2013,
        employees: "500+",
        remote: true,
        headquarters: "Washington, DC",
        revenue: "$150M+",
        funding: "Series C"
    },
    {
        id: 19,
        name: "SalesForce",
        logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Sales",
        size: "Large",
        location: "San Diego, CA",
        rating: 4.2,
        jobsCount: 42,
        description: "Sales technology company providing CRM solutions and sales automation tools to help businesses improve their sales performance.",
        benefits: ["Health Insurance", "Commission", "Car Allowance", "Flexible Schedule", "Stock Options"],
        website: "https://salesforce.com",
        founded: 2011,
        employees: "1000+",
        remote: false,
        headquarters: "San Diego, CA",
        revenue: "$400M+",
        funding: "Public"
    },
    {
        id: 20,
        name: "InnovationLab",
        logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        industry: "Research",
        size: "Medium",
        location: "Cambridge, MA",
        rating: 4.7,
        jobsCount: 18,
        description: "Research and development company conducting cutting-edge research in artificial intelligence, machine learning, and emerging technologies.",
        benefits: ["Health Insurance", "Research Budget", "Conference Travel", "Flexible Schedule", "Stock Options"],
        website: "https://innovationlab.com",
        founded: 2017,
        employees: "200+",
        remote: false,
        headquarters: "Cambridge, MA",
        revenue: "$60M+",
        funding: "Series B"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Load all companies on page load
    loadAllCompanies();
    
    // Initialize search functionality
    initializeCompanySearch();
    
    // Initialize filters
    initializeFilters();
    
    // Initialize sort functionality
    initializeSort();
});

// Load all companies
function loadAllCompanies() {
    displayCompanies(sampleCompanies);
    updateCompanyCount(sampleCompanies.length);
}

// Initialize company search
function initializeCompanySearch() {
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performCompanySearch();
        });
    }
    
    // Add real-time search
    const searchInputs = ['companyName', 'location', 'industry'];
    searchInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', debounce(performCompanySearch, 300));
        }
    });
}

// Perform company search
function performCompanySearch() {
    const companyName = document.getElementById('companyName')?.value || '';
    const location = document.getElementById('location')?.value || '';
    const industry = document.getElementById('industry')?.value || '';
    const companySize = document.getElementById('companySize')?.value || '';
    const jobType = document.getElementById('jobType')?.value || '';
    const remoteWork = document.getElementById('remoteWork')?.value || '';
    const rating = document.getElementById('rating')?.value || '';
    
    let filteredCompanies = sampleCompanies;
    
    // Apply text-based filters
    if (companyName) {
        filteredCompanies = filteredCompanies.filter(company => 
            company.name.toLowerCase().includes(companyName.toLowerCase()) ||
            company.description.toLowerCase().includes(companyName.toLowerCase())
        );
    }
    
    if (location) {
        filteredCompanies = filteredCompanies.filter(company => 
            company.location.toLowerCase().includes(location.toLowerCase())
        );
    }
    
    if (industry) {
        filteredCompanies = filteredCompanies.filter(company => 
            company.industry.toLowerCase() === industry.toLowerCase()
        );
    }
    
    // Apply advanced filters
    if (companySize) {
        filteredCompanies = filteredCompanies.filter(company => {
            const size = company.size.toLowerCase();
            switch (companySize) {
                case 'startup':
                    return size === 'small';
                case 'small':
                    return size === 'small' || size === 'medium';
                case 'medium':
                    return size === 'medium';
                case 'large':
                    return size === 'large';
                default:
                    return true;
            }
        });
    }
    
    if (remoteWork) {
        filteredCompanies = filteredCompanies.filter(company => {
            switch (remoteWork) {
                case 'remote':
                    return company.remote === true;
                case 'hybrid':
                    return company.remote === true; // Simplified for demo
                case 'onsite':
                    return company.remote === false;
                default:
                    return true;
            }
        });
    }
    
    if (rating) {
        const minRating = parseFloat(rating);
        filteredCompanies = filteredCompanies.filter(company => 
            company.rating >= minRating
        );
    }
    
    // Display results
    displayCompanies(filteredCompanies);
    updateCompanyCount(filteredCompanies.length);
}

// Initialize filters
function initializeFilters() {
    const filterInputs = ['companySize', 'jobType', 'remoteWork', 'rating'];
    filterInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('change', function() {
                performCompanySearch();
            });
        }
    });
}

// Initialize sort functionality
function initializeSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortCompanies(this.value);
        });
    }
}

// Sort companies
function sortCompanies(sortBy) {
    let companies = [...sampleCompanies];
    
    switch (sortBy) {
        case 'name':
            companies.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'jobs':
            companies.sort((a, b) => b.jobsCount - a.jobsCount);
            break;
        case 'rating':
            companies.sort((a, b) => b.rating - a.rating);
            break;
        case 'size':
            const sizeOrder = { 'Small': 1, 'Medium': 2, 'Large': 3 };
            companies.sort((a, b) => sizeOrder[a.size] - sizeOrder[b.size]);
            break;
        default:
            break;
    }
    
    displayCompanies(companies);
    updateCompanyCount(companies.length);
}

// Display companies
function displayCompanies(companies) {
    const companiesContainer = document.getElementById('companiesList');
    
    if (companiesContainer) {
        companiesContainer.innerHTML = companies.map(company => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card company-card h-100">
                    <div class="card-body p-4">
                        <div class="d-flex align-items-center mb-3">
                            <img src="${company.logo}" alt="${company.name}" class="company-logo me-3" style="width: 60px; height: 60px; border-radius: 8px;">
                            <div class="flex-grow-1">
                                <h5 class="fw-bold mb-1">${company.name}</h5>
                                <div class="d-flex align-items-center mb-1">
                                    <span class="text-warning me-1">
                                        ${generateStars(company.rating)}
                                    </span>
                                    <span class="text-muted small">${company.rating}</span>
                                </div>
                                <p class="text-muted small mb-0">${company.industry} • ${company.size}</p>
                            </div>
                        </div>
                        
                        <p class="text-muted mb-3">${company.description}</p>
                        
                        <div class="company-meta mb-3">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="text-muted small">
                                    <i class="fas fa-map-marker-alt me-1"></i>${company.location}
                                </span>
                                <span class="text-muted small">
                                    <i class="fas fa-users me-1"></i>${company.employees}
                                </span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="text-muted small">
                                    <i class="fas fa-briefcase me-1"></i>${company.jobsCount} open jobs
                                </span>
                                <span class="text-muted small">
                                    <i class="fas fa-calendar me-1"></i>Founded ${company.founded}
                                </span>
                            </div>
                        </div>
                        
                        <div class="benefits mb-3">
                            <div class="d-flex flex-wrap gap-1">
                                ${company.benefits.slice(0, 3).map(benefit => 
                                    `<span class="badge bg-light text-dark">${benefit}</span>`
                                ).join('')}
                            </div>
                        </div>
                        
                        <div class="d-flex gap-2">
                            <a href="company-profile.html?id=${company.id}" class="btn btn-primary btn-sm flex-grow-1">
                                <i class="fas fa-eye me-1"></i>View Company
                            </a>
                            <a href="jobs.html?company=${company.name}" class="btn btn-outline-primary btn-sm">
                                <i class="fas fa-briefcase me-1"></i>Jobs
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Update company count
function updateCompanyCount(count) {
    const companyCountElement = document.getElementById('companyCount');
    if (companyCountElement) {
        companyCountElement.textContent = `Showing ${count} companies`;
    }
}

// Apply filters function (called from main.js)
function applyFilters() {
    performCompanySearch();
}

// Clear filters function (called from main.js)
function clearFilters() {
    // Clear all form inputs
    document.querySelectorAll('input[type="text"], select').forEach(input => {
        input.value = '';
    });
    
    // Reset to show all companies
    loadAllCompanies();
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS for company cards
const style = document.createElement('style');
style.textContent = `
    .company-card {
        transition: all 0.3s ease;
        border: 1px solid #e2e8f0;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    }
    
    .company-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    
    .company-meta {
        background: #f8fafc;
        padding: 0.75rem;
        border-radius: 0.5rem;
    }
    
    .benefits .badge {
        font-size: 0.7rem;
        padding: 0.25rem 0.5rem;
    }
`;
document.head.appendChild(style);
