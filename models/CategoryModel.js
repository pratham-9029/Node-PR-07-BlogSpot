/**
 * CategoryModel — Mock category data and operations
 */
class CategoryModel {
    constructor() {
        this.categories = [
            { id: 1, name: 'Technology', slug: 'technology', icon: 'bi-cpu', color: '#667eea', description: 'Latest in tech, programming, and digital innovation', blogCount: 45 },
            { id: 2, name: 'Web Development', slug: 'web-development', icon: 'bi-code-slash', color: '#764ba2', description: 'Frontend, backend, and full-stack development tutorials', blogCount: 38 },
            { id: 3, name: 'Design', slug: 'design', icon: 'bi-palette', color: '#f093fb', description: 'UI/UX design, graphic design, and creative processes', blogCount: 28 },
            { id: 4, name: 'Data Science', slug: 'data-science', icon: 'bi-bar-chart-line', color: '#2ecc71', description: 'Machine learning, AI, and data analysis insights', blogCount: 22 },
            { id: 5, name: 'DevOps', slug: 'devops', icon: 'bi-gear', color: '#f39c12', description: 'CI/CD, cloud infrastructure, and deployment strategies', blogCount: 19 },
            { id: 6, name: 'Mobile Development', slug: 'mobile-development', icon: 'bi-phone', color: '#e74c3c', description: 'iOS, Android, and cross-platform app development', blogCount: 16 },
            { id: 7, name: 'Career', slug: 'career', icon: 'bi-briefcase', color: '#3498db', description: 'Tech career advice, interviews, and professional growth', blogCount: 14 },
            { id: 8, name: 'Productivity', slug: 'productivity', icon: 'bi-lightning', color: '#9b59b6', description: 'Tools, tips, and workflows for maximum productivity', blogCount: 11 }
        ];
    }

    getAll() { return this.categories; }
    getById(id) { return this.categories.find(c => c.id === id); }
    getBySlug(slug) { return this.categories.find(c => c.slug === slug); }
    getTotalCount() { return this.categories.length; }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CategoryModel;
}
