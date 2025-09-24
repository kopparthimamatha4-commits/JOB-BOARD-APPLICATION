// Job detail page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get job ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id');
    
    if (jobId) {
        loadJobDetails(parseInt(jobId));
        loadSimilarJobs(parseInt(jobId));
    } else {
        // Default job if no ID provided
        loadJobDetails(1);
        loadSimilarJobs(1);
    }
    
    // Initialize application form
    initializeApplicationForm();
    
    // Initialize resume upload
    initializeResumeUpload();
});

// Load job details
function loadJobDetails(jobId) {
    const job = window.JobBoard.sampleJobs.find(j => j.id === jobId);
    
    if (job) {
        // Update page title
        document.title = `${job.title} - ${job.company} - JobBoard Pro`;
        
        // Update breadcrumb
        const breadcrumb = document.querySelector('.breadcrumb-item.active');
        if (breadcrumb) {
            breadcrumb.textContent = job.title;
        }
        
        // Update job details
        updateJobDetails(job);
    } else {
        showNotification('Job not found', 'error');
    }
}

// Update job details in the DOM
function updateJobDetails(job) {
    // Update job title
    const jobTitle = document.querySelector('.job-title');
    if (jobTitle) jobTitle.textContent = job.title;
    
    // Update company info
    const jobCompany = document.querySelector('.job-company');
    if (jobCompany) jobCompany.textContent = job.company;
    
    // Update location
    const jobLocation = document.querySelector('.job-location');
    if (jobLocation) {
        jobLocation.innerHTML = `<i class="fas fa-map-marker-alt me-1"></i>${job.location}`;
    }
    
    // Update salary
    const jobSalary = document.querySelector('.job-salary');
    if (jobSalary) {
        jobSalary.innerHTML = `<span class="h4 text-primary fw-bold">${job.salary}</span><span class="text-muted">/ year</span>`;
    }
    
    // Update job type badges
    const jobType = document.querySelector('.job-type');
    if (jobType) {
        jobType.innerHTML = `
            <span class="badge bg-primary me-2">${job.type}</span>
            ${job.remote ? '<span class="badge bg-success">Remote</span>' : ''}
        `;
    }
    
    // Update company logo
    const companyLogos = document.querySelectorAll('.company-logo');
    companyLogos.forEach(logo => {
        logo.src = job.companyLogo;
        logo.alt = job.company;
    });
    
    // Update job meta
    const jobMeta = document.querySelector('.job-meta');
    if (jobMeta) {
        jobMeta.innerHTML = `
            <span class="badge bg-light text-dark me-2">
                <i class="fas fa-clock me-1"></i>${job.posted}
            </span>
            <span class="badge bg-light text-dark me-2">
                <i class="fas fa-users me-1"></i>${job.experience}
            </span>
            <span class="badge bg-light text-dark me-2">
                <i class="fas fa-graduation-cap me-1"></i>Bachelor's Degree
            </span>
            <span class="badge bg-light text-dark">
                <i class="fas fa-eye me-1"></i>234 views
            </span>
        `;
    }
}

// Load similar jobs
function loadSimilarJobs(currentJobId) {
    const currentJob = window.JobBoard.sampleJobs.find(j => j.id === currentJobId);
    const similarJobs = window.JobBoard.sampleJobs
        .filter(job => 
            job.id !== currentJobId && 
            (job.category === currentJob.category || job.type === currentJob.type)
        )
        .slice(0, 3);
    
    const similarJobsContainer = document.getElementById('similarJobs');
    if (similarJobsContainer) {
        similarJobsContainer.innerHTML = similarJobs.map(job => `
            <div class="col-md-4 mb-3">
                <div class="job-card h-100">
                    <div class="d-flex align-items-center mb-3">
                        <img src="${job.companyLogo}" alt="${job.company}" class="company-logo me-3" style="width: 40px; height: 40px; border-radius: 6px;">
                        <div>
                            <h6 class="job-title mb-1">${job.title}</h6>
                            <p class="job-company mb-0">${job.company}</p>
                        </div>
                    </div>
                    <p class="job-location mb-2">
                        <i class="fas fa-map-marker-alt me-1"></i>${job.location}
                    </p>
                    <div class="job-meta mb-3">
                        <span class="badge bg-light text-dark me-1">${job.type}</span>
                        <span class="badge bg-light text-dark">${job.salary}</span>
                    </div>
                    <a href="job-detail.html?id=${job.id}" class="btn btn-outline-primary btn-sm w-100">
                        View Details
                    </a>
                </div>
            </div>
        `).join('');
    }
}

// Initialize application form
function initializeApplicationForm() {
    const applicationForm = document.getElementById('applicationForm');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitApplication();
        });
    }
}

// Submit application
function submitApplication() {
    const formData = new FormData(document.getElementById('applicationForm'));
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'resume'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        const input = document.querySelector(`[name="${field}"]`) || document.querySelector(`#${field}`);
        if (input && !input.value.trim()) {
            isValid = false;
            input.classList.add('is-invalid');
        } else if (input) {
            input.classList.remove('is-invalid');
        }
    });
    
    if (!isValid) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Application submitted successfully! We\'ll get back to you soon.', 'success');
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('applyModal'));
    if (modal) {
        modal.hide();
    }
    
    // Reset form
    document.getElementById('applicationForm').reset();
}

// Initialize resume upload
function initializeResumeUpload() {
    const resumeUpload = document.querySelector('.resume-upload');
    const fileInput = document.getElementById('resumeFile');
    
    if (resumeUpload && fileInput) {
        // Click to upload
        resumeUpload.addEventListener('click', function() {
            fileInput.click();
        });
        
        // Handle file selection
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                handleFileUpload(file);
            }
        });
        
        // Drag and drop
        resumeUpload.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('dragover');
        });
        
        resumeUpload.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.classList.remove('dragover');
        });
        
        resumeUpload.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('dragover');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFileUpload(files[0]);
            }
        });
    }
}

// Handle file upload
function handleFileUpload(file) {
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
        showNotification('Please upload a PDF, DOC, or DOCX file', 'error');
        return;
    }
    
    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
        showNotification('File size must be less than 5MB', 'error');
        return;
    }
    
    // Update UI
    const resumeUpload = document.querySelector('.resume-upload');
    if (resumeUpload) {
        resumeUpload.innerHTML = `
            <i class="fas fa-check-circle fa-2x text-success mb-2"></i>
            <p class="mb-1 text-success fw-semibold">File uploaded successfully!</p>
            <p class="text-muted small">${file.name}</p>
            <button class="btn btn-sm btn-outline-danger" onclick="removeFile()">Remove</button>
        `;
    }
    
    showNotification('Resume uploaded successfully!', 'success');
}

// Remove uploaded file
function removeFile() {
    const resumeUpload = document.querySelector('.resume-upload');
    const fileInput = document.getElementById('resumeFile');
    
    if (resumeUpload) {
        resumeUpload.innerHTML = `
            <i class="fas fa-cloud-upload-alt fa-2x text-primary mb-2"></i>
            <p class="mb-1">Click to upload resume</p>
            <p class="text-muted small">PDF, DOC, DOCX (Max 5MB)</p>
        `;
    }
    
    if (fileInput) {
        fileInput.value = '';
    }
}

// Quick apply function
function quickApply() {
    const fileInput = document.getElementById('resumeFile');
    if (!fileInput.files[0]) {
        showNotification('Please upload your resume first', 'error');
        return;
    }
    
    // Simulate quick apply
    showNotification('Quick application submitted! We\'ll review your resume and get back to you.', 'success');
}

// Save job function
function saveJob() {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = parseInt(urlParams.get('id')) || 1;
    
    window.JobBoard.saveJob(jobId);
}

// Share job function
function shareJob() {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = parseInt(urlParams.get('id')) || 1;
    
    window.JobBoard.shareJob(jobId);
}

// Show notification
function showNotification(message, type = 'info') {
    // Use the notification function from main.js
    if (window.JobBoard && window.JobBoard.showNotification) {
        window.JobBoard.showNotification(message, type);
    } else {
        // Fallback notification
        alert(message);
    }
}

// Initialize job alerts form
document.addEventListener('DOMContentLoaded', function() {
    const jobAlertsForm = document.querySelector('.job-alerts-card form');
    if (jobAlertsForm) {
        jobAlertsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const jobTitle = this.querySelector('input[type="text"]').value;
            const location = this.querySelectorAll('input[type="text"]')[1].value;
            const email = this.querySelector('input[type="email"]').value;
            
            if (!email) {
                showNotification('Please enter your email address', 'error');
                return;
            }
            
            showNotification('Job alert created successfully! You\'ll receive notifications about matching jobs.', 'success');
            this.reset();
        });
    }
});
