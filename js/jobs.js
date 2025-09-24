// Jobs page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Load all jobs on page load
    loadAllJobs();
    
    // Initialize search functionality
    initializeJobSearch();
    
    // Initialize filters
    initializeFilters();
    
    // Initialize pagination
    initializePagination();
    
    // Initialize view toggle
    initializeViewToggle();
});

// Load all jobs
function loadAllJobs() {
    const allJobs = window.JobBoard.sampleJobs;
    displayJobs(allJobs);
    updateJobCount(allJobs.length);
}

// Initialize job search
function initializeJobSearch() {
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performJobSearch();
        });
    }
    
    // Add real-time search
    const searchInputs = ['jobTitle', 'location', 'category'];
    searchInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', debounce(performJobSearch, 300));
        }
    });
}

// Perform job search with advanced filters
function performJobSearch() {
    const jobTitle = document.getElementById('jobTitle')?.value || '';
    const location = document.getElementById('location')?.value || '';
    const category = document.getElementById('category')?.value || '';
    const jobType = document.getElementById('jobType')?.value || '';
    const experience = document.getElementById('experience')?.value || '';
    const salary = document.getElementById('salary')?.value || '';
    const postedDate = document.getElementById('postedDate')?.value || '';
    
    let filteredJobs = window.JobBoard.sampleJobs;
    
    // Apply text-based filters
    if (jobTitle) {
        filteredJobs = filteredJobs.filter(job => 
            job.title.toLowerCase().includes(jobTitle.toLowerCase()) ||
            job.description.toLowerCase().includes(jobTitle.toLowerCase()) ||
            job.company.toLowerCase().includes(jobTitle.toLowerCase())
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
    
    // Apply advanced filters
    if (jobType) {
        filteredJobs = filteredJobs.filter(job => 
            job.type.toLowerCase() === jobType.toLowerCase()
        );
    }
    
    if (experience) {
        filteredJobs = filteredJobs.filter(job => {
            const jobExp = job.experience.toLowerCase();
            switch (experience) {
                case 'entry':
                    return jobExp.includes('0-1') || jobExp.includes('1-2');
                case 'mid':
                    return jobExp.includes('3-5') || jobExp.includes('2-5');
                case 'senior':
                    return jobExp.includes('5-10') || jobExp.includes('6-10');
                case 'executive':
                    return jobExp.includes('10+') || jobExp.includes('15+');
                default:
                    return true;
            }
        });
    }
    
    if (salary) {
        filteredJobs = filteredJobs.filter(job => {
            const jobSalary = job.salary.replace(/[$,]/g, '');
            const salaryRange = salary.split('-');
            
            if (salaryRange.length === 2) {
                const min = parseInt(salaryRange[0]);
                const max = parseInt(salaryRange[1]);
                // This is a simplified check - in reality you'd parse the salary range
                return true; // For demo purposes
            } else if (salary === '100000+') {
                return jobSalary.includes('100') || jobSalary.includes('150');
            }
            return true;
        });
    }
    
    if (postedDate) {
        const daysAgo = parseInt(postedDate);
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - daysAgo);
        
        filteredJobs = filteredJobs.filter(job => {
            // This is simplified - in reality you'd have actual posting dates
            return true;
        });
    }
    
    // Apply sidebar filters
    const sidebarFilters = getSidebarFilters();
    filteredJobs = applySidebarFilters(filteredJobs, sidebarFilters);
    
    // Display results
    displayJobs(filteredJobs);
    updateJobCount(filteredJobs.length);
}

// Get sidebar filter values
function getSidebarFilters() {
    const filters = {
        jobType: [],
        experience: [],
        salary: [],
        companySize: []
    };
    
    document.querySelectorAll('.filter-card input[type="checkbox"]:checked').forEach(checkbox => {
        const filterSection = checkbox.closest('.filter-section');
        const sectionTitle = filterSection.querySelector('h6').textContent.toLowerCase();
        
        if (sectionTitle.includes('job type')) {
            filters.jobType.push(checkbox.value);
        } else if (sectionTitle.includes('experience')) {
            filters.experience.push(checkbox.value);
        } else if (sectionTitle.includes('salary')) {
            filters.salary.push(checkbox.value);
        } else if (sectionTitle.includes('company size')) {
            filters.companySize.push(checkbox.value);
        }
    });
    
    return filters;
}

// Apply sidebar filters
function applySidebarFilters(jobs, filters) {
    let filteredJobs = jobs;
    
    if (filters.jobType.length > 0) {
        filteredJobs = filteredJobs.filter(job => 
            filters.jobType.includes(job.type.toLowerCase())
        );
    }
    
    if (filters.experience.length > 0) {
        filteredJobs = filteredJobs.filter(job => {
            const jobExp = job.experience.toLowerCase();
            return filters.experience.some(exp => {
                switch (exp) {
                    case 'entry':
                        return jobExp.includes('0-1') || jobExp.includes('1-2');
                    case 'mid':
                        return jobExp.includes('3-5') || jobExp.includes('2-5');
                    case 'senior':
                        return jobExp.includes('5-10') || jobExp.includes('6-10');
                    default:
                        return false;
                }
            });
        });
    }
    
    return filteredJobs;
}

// Initialize filters
function initializeFilters() {
    const filterCheckboxes = document.querySelectorAll('.filter-card input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            performJobSearch();
        });
    });
}

// Initialize pagination
function initializePagination() {
    const paginationContainer = document.getElementById('pagination');
    if (paginationContainer) {
        // This would be implemented with actual pagination logic
        // For now, we'll show a simple pagination
        paginationContainer.innerHTML = `
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item active">
                <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        `;
    }
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

// Display jobs with current view mode
function displayJobs(jobs) {
    const jobListingsContainer = document.getElementById('jobListings');
    const isListView = jobListingsContainer.classList.contains('list-view');
    
    if (jobListingsContainer) {
        if (isListView) {
            jobListingsContainer.innerHTML = jobs.map(job => createJobCard(job, 'list')).join('');
        } else {
            jobListingsContainer.innerHTML = jobs.map(job => createJobCard(job, 'grid')).join('');
        }
    }
}

// Create job card HTML
function createJobCard(job, view = 'grid') {
    if (view === 'list') {
        return `
            <div class="col-12 mb-3">
                <div class="job-card">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="${job.companyLogo}" alt="${job.company}" class="img-fluid rounded" style="width: 60px; height: 60px;">
                        </div>
                        <div class="col-md-6">
                            <h5 class="job-title mb-1">${job.title}</h5>
                            <p class="job-company mb-1">${job.company}</p>
                            <p class="job-location mb-0">
                                <i class="fas fa-map-marker-alt me-1"></i>${job.location}
                            </p>
                        </div>
                        <div class="col-md-2 text-center">
                            <div class="job-salary text-primary fw-bold">${job.salary}</div>
                            <div class="job-type">
                                <span class="badge bg-primary me-1">${job.type}</span>
                                ${job.remote ? '<span class="badge bg-success">Remote</span>' : ''}
                            </div>
                        </div>
                        <div class="col-md-2 text-end">
                            <div class="job-actions">
                                <a href="job-detail.html?id=${job.id}" class="btn btn-primary btn-sm mb-1 d-block">
                                    <i class="fas fa-eye me-1"></i>View
                                </a>
                                <button class="btn btn-outline-primary btn-sm d-block w-100" onclick="saveJob(${job.id})">
                                    <i class="fas fa-bookmark me-1"></i>Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        return `
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
                        <button class="btn btn-outline-secondary btn-sm" onclick="shareJob(${job.id})">
                            <i class="fas fa-share me-1"></i>Share
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

// Update job count
function updateJobCount(count) {
    const jobCountElement = document.getElementById('jobCount');
    if (jobCountElement) {
        jobCountElement.textContent = `Showing ${count} jobs`;
    }
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

// Apply filters function (called from main.js)
function applyFilters() {
    performJobSearch();
}

// Clear filters function (called from main.js)
function clearFilters() {
    // Clear all form inputs
    document.querySelectorAll('input[type="text"], input[type="email"], select').forEach(input => {
        input.value = '';
    });
    
    // Clear all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset to show all jobs
    loadAllJobs();
}

// Sort jobs
function sortJobs(sortBy) {
    let jobs = [...window.JobBoard.sampleJobs];
    
    switch (sortBy) {
        case 'date':
            // Sort by posted date (newest first)
            jobs.sort((a, b) => {
                const dateA = new Date(a.posted);
                const dateB = new Date(b.posted);
                return dateB - dateA;
            });
            break;
        case 'salary':
            // Sort by salary (highest first)
            jobs.sort((a, b) => {
                const salaryA = parseInt(a.salary.replace(/[$,]/g, '').split('-')[0]);
                const salaryB = parseInt(b.salary.replace(/[$,]/g, '').split('-')[0]);
                return salaryB - salaryA;
            });
            break;
        case 'company':
            // Sort by company name
            jobs.sort((a, b) => a.company.localeCompare(b.company));
            break;
        case 'relevance':
        default:
            // Default sorting (already sorted by relevance)
            break;
    }
    
    displayJobs(jobs);
    updateJobCount(jobs.length);
}

// Initialize sort functionality
document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortJobs(this.value);
        });
    }
});
