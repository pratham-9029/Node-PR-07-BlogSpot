/**
 * MainController — Shared UI logic across all pages
 * Handles navbar, footer, form validation, search, and utility functions
 */

// ── Helpers ──
function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

function timeAgo(dateStr) {
    const now = new Date();
    const date = new Date(dateStr);
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return diffDays + ' days ago';
    if (diffDays < 30) return Math.floor(diffDays / 7) + ' weeks ago';
    if (diffDays < 365) return Math.floor(diffDays / 30) + ' months ago';
    return Math.floor(diffDays / 365) + ' years ago';
}

function truncate(str, length = 120) {
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
}

function getUrlParam(key) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
}

// ── Global Model Instances ──
const userModel = new UserModel();
const blogModel = new BlogModel();
const categoryModel = new CategoryModel();
const commentModel = new CommentModel();

// ── Navbar Active Link ──
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-custom .nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// ── Navbar Scroll Effect ──
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar-custom');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255,255,255,0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255,255,255,0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
        }
    });
}

// ── Form Validation ──
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    let isValid = true;
    const inputs = form.querySelectorAll('[required]');

    inputs.forEach(input => {
        clearError(input);
        if (!input.value.trim()) {
            showError(input, 'This field is required');
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            showError(input, 'Please enter a valid email address');
            isValid = false;
        } else if (input.type === 'password' && input.value.length < 8) {
            showError(input, 'Password must be at least 8 characters');
            isValid = false;
        }
    });

    // Password match check
    const password = form.querySelector('#password');
    const confirmPassword = form.querySelector('#confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    }

    return isValid;
}

function showError(input, message) {
    input.classList.add('is-invalid');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = message;
    input.parentNode.appendChild(errorDiv);
}

function clearError(input) {
    input.classList.remove('is-invalid');
    const existing = input.parentNode.querySelector('.invalid-feedback');
    if (existing) existing.remove();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── Toast Notifications ──
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const icons = { success: 'bi-check-circle-fill', error: 'bi-x-circle-fill', warning: 'bi-exclamation-triangle-fill', info: 'bi-info-circle-fill' };
    const toast = document.createElement('div');
    toast.className = `alert alert-custom alert-${type}-custom slide-up`;
    toast.innerHTML = `<i class="bi ${icons[type] || icons.info}"></i> ${message}`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ── Blog Card HTML Generator ──
function createBlogCard(blog) {
    const author = userModel.getById(blog.authorId);
    const category = categoryModel.getById(blog.categoryId);
    return `
    <div class="col-md-6 col-lg-4 fade-in">
      <div class="card-custom blog-card">
        <div style="position:relative; overflow:hidden;">
          <span class="blog-category">${category ? category.name : 'Uncategorized'}</span>
          <img src="${blog.image}" class="card-img-top" alt="${blog.title}" loading="lazy">
        </div>
        <div class="card-body">
          <div class="blog-meta">
            <img src="${author ? author.avatar : ''}" alt="${author ? author.name : 'Author'}" class="avatar-sm avatar">
            <span>${author ? author.name : 'Anonymous'}</span>
            <span>•</span>
            <span>${formatDate(blog.createdAt)}</span>
          </div>
          <h5 class="blog-title"><a href="single-blog.html?id=${blog.id}">${blog.title}</a></h5>
          <p class="blog-excerpt">${blog.excerpt}</p>
          <div class="blog-footer">
            <div class="blog-stats">
              <span><i class="bi bi-eye"></i> ${formatNumber(blog.views)}</span>
              <span><i class="bi bi-heart"></i> ${formatNumber(blog.likes)}</span>
              <span><i class="bi bi-chat"></i> ${blog.commentsCount}</span>
            </div>
            <span class="text-small text-muted-custom"><i class="bi bi-clock"></i> ${blog.readTime}</span>
          </div>
        </div>
      </div>
    </div>`;
}

// ── Sidebar Dashboard Link Management ──
function setSidebarActive() {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// ── Mobile Sidebar Toggle ──
function toggleSidebar() {
    const sidebar = document.querySelector('.dashboard-sidebar');
    if (sidebar) sidebar.classList.toggle('show');
}

// ── Search Handler ──
function handleSearch(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
            }
        }
    });
}

// ── Pagination (simple) ──
function renderPagination(container, totalItems, currentPage, itemsPerPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) return;

    let html = '<nav><ul class="pagination pagination-custom justify-content-center">';
    html += `<li class="page-item ${currentPage === 1 ? 'disabled' : ''}"><a class="page-link" href="#" data-page="${currentPage - 1}"><i class="bi bi-chevron-left"></i></a></li>`;

    for (let i = 1; i <= totalPages; i++) {
        html += `<li class="page-item ${i === currentPage ? 'active' : ''}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
    }

    html += `<li class="page-item ${currentPage === totalPages ? 'disabled' : ''}"><a class="page-link" href="#" data-page="${currentPage + 1}"><i class="bi bi-chevron-right"></i></a></li>`;
    html += '</ul></nav>';

    const el = document.getElementById(container);
    if (el) el.innerHTML = html;
}

// ── Init on DOM Ready ──
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavLink();
    initNavbarScroll();
    setSidebarActive();
});
