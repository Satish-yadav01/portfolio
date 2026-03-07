// Portfolio Loader - Loads projects from Admin Panel
// This script runs before main.js to populate the carousel

const STORAGE_KEY = 'portfolio_selected_repos';

// Fallback projects (if nothing is selected in admin)
const FALLBACK_PROJECTS = [
    {
        id: 'ebank',
        name: 'E-Bank',
        description: 'Console-based banking system demonstrating simple banking operations with account management.',
        url: 'https://github.com/Satish-yadav01/E-Bank',
        language: 'Java',
        stars: 5,
        icon: 'fa-credit-card',
        delay: '0.3'
    },
    {
        id: 'blogrestapi',
        name: 'Blog REST API',
        description: 'Full-featured REST API built with Spring Boot, Hibernate, and MySQL with authentication.',
        url: 'https://github.com/Satish-yadav01/blog-rest-api',
        language: 'Java',
        stars: 12,
        icon: 'fa-download',
        delay: '0.6'
    },
    {
        id: 'chatapp',
        name: 'Chat Application',
        description: 'Real-time chat application with group messaging, authentication, and user management.',
        url: 'https://chat-application-satishyadav.herokuapp.com/',
        language: 'JavaScript',
        stars: 8,
        icon: 'fa-comments',
        delay: '0.9'
    }
];

// Create project card HTML
function createProjectCard(project, delay) {
    const icon = project.icon || 'fa-github';
    
    const descriptionLines = project.description.split('\n');
    const displayDesc = descriptionLines[0].substring(0, 150) + 
                        (project.description.length > 150 ? '...' : '');

    return `
        <div class="project-card-container wow fadeInDown mix web desktop" data-wow-delay="${delay}s">
            <div class="card shadow" style="width: 18rem;">
                <i class="fa ${icon} text-center large"></i>
                <div class="card-body">
                    <h5 class="card-title bolder">${project.name}</h5>
                    <p class="card-text" style="color: rgb(77, 100, 202);">
                        ${displayDesc}
                    </p>
                    <div class="project-meta mb-2">
                        ${project.language ? `<span><i class="fa fa-code"></i> ${project.language}</span>` : ''}
                        <span><i class="fa fa-star"></i> ${project.stars}</span>
                    </div>
                    <a href="${project.url}" target="_blank" class="btn btn-dark">View Project</a>
                </div>
            </div>
        </div>
    `;
}

// Load and render projects
function loadPortfolioProjects() {
    const carousel = document.getElementById('projectCarousel');
    
    if (!carousel) {
        console.warn('Project carousel not found');
        return;
    }

    let projects = [];

    // Try to load from localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    console.log('Checking localStorage for key:', STORAGE_KEY);
    console.log('Saved data:', saved);
    
    if (saved) {
        try {
            projects = JSON.parse(saved);
            console.log(`✓ Loaded ${projects.length} projects from admin panel`);
        } catch (e) {
            console.error('Error parsing saved projects:', e);
            projects = FALLBACK_PROJECTS;
        }
    } else {
        console.log('No saved projects found, using fallback projects');
        projects = FALLBACK_PROJECTS;
    }

    // Clear existing content
    carousel.innerHTML = '';

    // Render each project
    if (projects.length === 0) {
        projects = FALLBACK_PROJECTS;
    }

    projects.forEach((project, index) => {
        const delay = project.delay || (index * 0.3).toFixed(1);
        const html = createProjectCard(project, delay);
        carousel.innerHTML += html;
    });

    console.log('Projects rendered:', projects.length);

    // Initialize carousel buttons if not already done
    initializeCarousel();
}

// Initialize carousel navigation
function initializeCarousel() {
    const projectCarousel = document.getElementById('projectCarousel');
    const prevBtn = document.getElementById('prevProjectBtn');
    const nextBtn = document.getElementById('nextProjectBtn');

    if (!projectCarousel || !prevBtn || !nextBtn) {
        console.warn('Carousel elements not found');
        return;
    }

    // Check if already initialized
    if (projectCarousel.dataset.initialized) {
        return;
    }

    // Remove old listeners
    const newPrevBtn = prevBtn.cloneNode(true);
    const newNextBtn = nextBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);

    const newPrevBtn2 = document.getElementById('prevProjectBtn');
    const newNextBtn2 = document.getElementById('nextProjectBtn');

    // Function to calculate scroll amount dynamically
    function getScrollAmount() {
        const firstCard = projectCarousel.querySelector('.project-card-container');
        if (!firstCard) return 340;
        
        const cardWidth = firstCard.offsetWidth;
        const styles = window.getComputedStyle(projectCarousel);
        const gap = parseFloat(styles.gap) || 30;
        
        return cardWidth + gap;
    }

    // Handle previous button click
    newPrevBtn2.addEventListener('click', function() {
        projectCarousel.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });

    // Handle next button click
    newNextBtn2.addEventListener('click', function() {
        projectCarousel.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });

    // Check if carousel can scroll and disable buttons accordingly
    function updateButtonStates() {
        const isAtStart = projectCarousel.scrollLeft === 0;
        const isAtEnd = projectCarousel.scrollLeft >= (projectCarousel.scrollWidth - projectCarousel.clientWidth - 10);
        
        newPrevBtn2.disabled = isAtStart;
        newNextBtn2.disabled = isAtEnd;
    }

    // Update on scroll
    projectCarousel.addEventListener('scroll', updateButtonStates);
    
    // Initial state
    setTimeout(updateButtonStates, 100);

    // Update on window resize
    window.addEventListener('resize', updateButtonStates);

    projectCarousel.dataset.initialized = 'true';
}

// Run when DOM is ready
function initializePortfolio() {
    loadPortfolioProjects();
    
    // Also add an admin link in the footer
    const footer = document.querySelector('.container-fluid.bg-dark');
    if (footer && !document.querySelector('.admin-link')) {
        const adminLink = document.createElement('div');
        adminLink.className = 'admin-link';
        adminLink.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 999;';
        adminLink.innerHTML = `
            <a href="./admin/" 
               class="btn btn-sm btn-primary" 
               style="border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; font-size: 20px; text-decoration: none;"
               title="Admin Panel">
                <i class="fa fa-cog"></i>
            </a>
        `;
        document.body.appendChild(adminLink);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    initializePortfolio();
}
