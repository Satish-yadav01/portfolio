// Admin Credentials (Hardcoded - for demo purposes)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// Storage Keys
const STORAGE_KEYS = {
    selectedRepos: 'portfolio_selected_repos',
    authToken: 'portfolio_auth_token'
};

// State
let allRepos = [];
let selectedRepos = new Set();

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already authenticated
    if (isAuthenticated()) {
        showDashboard();
        loadSavedRepos();
    } else {
        showLoginPage();
    }

    // Event Listeners
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    document.getElementById('fetchReposBtn').addEventListener('click', fetchRepositories);
    document.getElementById('saveSelectionBtn').addEventListener('click', savSelectedRepos);
    document.getElementById('clearSelectionBtn').addEventListener('click', clearAllSelection);
});

// ==================== Authentication ====================
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');

    // Validate credentials
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        // Store auth token
        localStorage.setItem(STORAGE_KEYS.authToken, 'authenticated_' + Date.now());
        
        // Clear form
        document.getElementById('loginForm').reset();
        errorDiv.style.display = 'none';

        // Show dashboard
        showDashboard();
    } else {
        errorDiv.textContent = '❌ Invalid username or password!';
        errorDiv.style.display = 'block';
    }
}

function handleLogout() {
    localStorage.removeItem(STORAGE_KEYS.authToken);
    allRepos = [];
    selectedRepos.clear();
    showLoginPage();
}

function isAuthenticated() {
    return localStorage.getItem(STORAGE_KEYS.authToken) !== null;
}

function showLoginPage() {
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('adminDashboard').style.display = 'none';
}

function showDashboard() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
}

// ==================== GitHub API ====================
async function fetchRepositories() {
    const githubUsername = document.getElementById('githubUsername').value.trim();
    
    if (!githubUsername) {
        alert('Please enter a GitHub username');
        return;
    }

    const loader = document.getElementById('loadingSpinner');
    loader.style.display = 'block';

    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
        
        if (!response.ok) {
            throw new Error(`GitHub user not found: ${githubUsername}`);
        }

        // Sort by stars and updated date
        allRepos = await response.json();
        allRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);

        // Update count
        document.getElementById('totalRepos').textContent = allRepos.length;

        // Render repos
        renderRepositories();
        
        loader.style.display = 'none';
    } catch (error) {
        loader.style.display = 'none';
        alert(`Error fetching repositories: ${error.message}`);
        console.error('GitHub API Error:', error);
    }
}

// ==================== Rendering ====================
function renderRepositories() {
    renderGridView();
    renderListView();
}

function renderGridView() {
    const container = document.getElementById('repoGridContainer');
    container.innerHTML = '';

    allRepos.forEach((repo, index) => {
        const isSelected = selectedRepos.has(repo.name);
        
        const card = document.createElement('div');
        card.className = `col-md-4 repo-card-wrapper`;
        card.innerHTML = `
            <div class="repo-card ${isSelected ? 'selected' : ''}" data-repo-name="${repo.name}">
                <div class="repo-card-checkbox">
                    <input 
                        type="checkbox" 
                        class="repo-checkbox" 
                        data-repo-name="${repo.name}"
                        ${isSelected ? 'checked' : ''}
                    >
                </div>
                
                <h5>
                    <i class="fa fa-code-fork"></i> ${repo.name}
                </h5>
                
                <p>
                    ${repo.description || '<em class="text-muted">No description</em>'}
                </p>
                
                <div class="repo-meta">
                    ${repo.language ? `<span><i class="fa fa-code"></i> ${repo.language}</span>` : ''}
                    <span><i class="fa fa-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="fa fa-calendar"></i> ${new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>
            </div>
        `;

        container.appendChild(card);

        // Add click handler
        card.querySelector('.repo-card').addEventListener('click', function() {
            const checkbox = card.querySelector('.repo-checkbox');
            checkbox.checked = !checkbox.checked;
            updateRepoSelection(repo.name, checkbox.checked);
        });

        // Add checkbox handler
        card.querySelector('.repo-checkbox').addEventListener('change', function(e) {
            e.stopPropagation();
            updateRepoSelection(repo.name, this.checked);
        });
    });
}

function renderListView() {
    const tbody = document.getElementById('repoTableBody');
    tbody.innerHTML = '';

    allRepos.forEach((repo) => {
        const isSelected = selectedRepos.has(repo.name);
        
        const row = document.createElement('tr');
        row.className = isSelected ? 'table-active' : '';
        row.innerHTML = `
            <td>
                <div class="custom-checkbox">
                    <input 
                        type="checkbox" 
                        class="repo-checkbox" 
                        data-repo-name="${repo.name}"
                        ${isSelected ? 'checked' : ''}
                    >
                    <span class="checkmark"></span>
                </div>
            </td>
            <td>
                <strong>
                    <i class="fa fa-github"></i> ${repo.name}
                </strong>
            </td>
            <td>
                ${repo.description || '<em class="text-muted">No description</em>'}
            </td>
            <td>
                ${repo.language ? `<span class="badge badge-info">${repo.language}</span>` : '<span class="text-muted">-</span>'}
            </td>
            <td>
                <i class="fa fa-star text-warning"></i> ${repo.stargazers_count}
            </td>
        `;

        tbody.appendChild(row);

        // Add checkbox handler
        row.querySelector('.repo-checkbox').addEventListener('change', function() {
            updateRepoSelection(repo.name, this.checked);
            row.classList.toggle('table-active');
        });
    });
}

// ==================== Selection Management ====================
function updateRepoSelection(repoName, isSelected) {
    if (isSelected) {
        selectedRepos.add(repoName);
    } else {
        selectedRepos.delete(repoName);
    }
    
    // Update count
    document.getElementById('selectedCount').textContent = selectedRepos.size;
    
    // Update visual state in grid
    const repoCard = document.querySelector(`[data-repo-name="${repoName}"]`);
    if (repoCard) {
        repoCard.classList.toggle('selected', isSelected);
    }
}

function clearAllSelection() {
    selectedRepos.clear();
    document.querySelectorAll('.repo-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });
    document.querySelectorAll('.repo-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelectorAll('tr').forEach(row => {
        row.classList.remove('table-active');
    });
    document.getElementById('selectedCount').textContent = '0';
}

function savSelectedRepos() {
    if (selectedRepos.size === 0) {
        alert('Please select at least one repository!');
        return;
    }

    // Get full repo data for selected repos
    const selectedRepoData = allRepos.filter(repo => selectedRepos.has(repo.name));

    // Format data for portfolio
    const portfolioRepos = selectedRepoData.map((repo, index) => ({
        id: repo.name.replace(/[^a-z0-9]/gi, '').toLowerCase(),
        name: repo.name,
        description: repo.description || 'A GitHub project',
        url: repo.html_url,
        language: repo.language || 'JavaScript',
        stars: repo.stargazers_count,
        icon: getIconForLanguage(repo.language),
        delay: (index * 0.3).toFixed(1)
    }));

    // Save to localStorage
    localStorage.setItem(STORAGE_KEYS.selectedRepos, JSON.stringify(portfolioRepos));

    // Show success message
    const successMsg = document.getElementById('successMessage');
    successMsg.style.display = 'block';
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 3000);

    console.log('Repositories saved:', portfolioRepos);
    alert(`✅ ${selectedRepoData.length} repositories saved successfully!\n\nVisit your portfolio to see the updated projects.`);
}

function loadSavedRepos() {
    const saved = localStorage.getItem(STORAGE_KEYS.selectedRepos);
    if (saved) {
        try {
            const repos = JSON.parse(saved);
            const repoNames = repos.map(r => r.name);
            selectedRepos = new Set(repoNames);
            document.getElementById('selectedCount').textContent = selectedRepos.size;
        } catch (e) {
            console.error('Error loading saved repos:', e);
        }
    }
}

// ==================== Utilities ====================
function getIconForLanguage(language) {
    const iconMap = {
        'JavaScript': 'fa-code',
        'Python': 'fa-code',
        'Java': 'fa-code',
        'C++': 'fa-code',
        'HTML': 'fa-code',
        'CSS': 'fa-code',
        'PHP': 'fa-code',
        'Ruby': 'fa-code',
        'Go': 'fa-code',
        'Rust': 'fa-code',
    };

    return iconMap[language] || 'fa-github';
}

// Auto-fetch repos on page load if already authenticated
window.addEventListener('load', function() {
    if (isAuthenticated() && allRepos.length === 0) {
        // Optionally auto-fetch: uncomment if desired
        // fetchRepositories();
    }
});
