/**
 * BlogModel — Mock blog post data and operations
 */
class BlogModel {
    constructor() {
        this.blogs = [
            {
                id: 1,
                title: 'Building Scalable Web Applications with Modern JavaScript',
                slug: 'building-scalable-web-apps',
                excerpt: 'Learn the essential patterns and practices for building web applications that scale gracefully as your user base grows.',
                content: `<p>Building scalable web applications is one of the most important skills a modern developer can possess. In this comprehensive guide, we'll explore the patterns and practices that make applications resilient and performant.</p>
        <h3>Why Scalability Matters</h3>
        <p>As your user base grows, your application needs to handle increased load without degrading performance. This means thinking about scalability from day one, not as an afterthought.</p>
        <h3>Key Patterns</h3>
        <p>There are several key patterns to consider: modular architecture, lazy loading, efficient state management, and optimized rendering. Let's dive into each of these in detail.</p>
        <blockquote>"The best architectures are built with change in mind." — Martin Fowler</blockquote>
        <p>When designing your frontend, component-based architecture is essential. Each component should be self-contained, reusable, and testable. Tools like React, Vue, and even vanilla Web Components make this achievable.</p>
        <h3>Performance Optimization</h3>
        <p>Performance is not just about speed — it's about user experience. Implement code splitting, optimize images, use efficient caching strategies, and monitor real user metrics to understand how your application performs in the wild.</p>`,
                image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
                categoryId: 2,
                authorId: 1,
                status: 'published',
                featured: true,
                createdAt: '2025-02-20',
                readTime: '8 min',
                views: 2840,
                likes: 186,
                commentsCount: 24,
                tags: ['JavaScript', 'Web Dev', 'Architecture']
            },
            {
                id: 2,
                title: 'The Complete Guide to CSS Grid and Flexbox Layouts',
                slug: 'css-grid-flexbox-guide',
                excerpt: 'Master the two most powerful CSS layout systems and learn when to use each one for optimal results.',
                content: `<p>CSS Grid and Flexbox have revolutionized how we build layouts on the web. Understanding when and how to use each is crucial for modern web development.</p>
        <h3>Flexbox: One-Dimensional Layouts</h3>
        <p>Flexbox excels at distributing space along a single axis. Use it for navigation bars, card rows, centering content, and any layout that flows in one direction.</p>
        <h3>CSS Grid: Two-Dimensional Layouts</h3>
        <p>Grid is perfect for complex, two-dimensional layouts. Think page layouts, image galleries, and dashboards. It gives you precise control over both rows and columns simultaneously.</p>`,
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
                categoryId: 3,
                authorId: 2,
                status: 'published',
                featured: true,
                createdAt: '2025-02-18',
                readTime: '12 min',
                views: 3210,
                likes: 245,
                commentsCount: 31,
                tags: ['CSS', 'Design', 'Layout']
            },
            {
                id: 3,
                title: 'Introduction to Machine Learning with Python',
                slug: 'intro-machine-learning-python',
                excerpt: 'A beginner-friendly introduction to machine learning concepts using Python and popular libraries.',
                content: `<p>Machine learning is transforming industries, and Python is the language of choice for ML practitioners. This guide will get you started with the fundamentals.</p>
        <h3>What is Machine Learning?</h3>
        <p>Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.</p>`,
                image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
                categoryId: 4,
                authorId: 5,
                status: 'published',
                featured: false,
                createdAt: '2025-02-15',
                readTime: '10 min',
                views: 1890,
                likes: 142,
                commentsCount: 18,
                tags: ['Python', 'Machine Learning', 'AI']
            },
            {
                id: 4,
                title: 'Docker and Kubernetes: A Practical DevOps Guide',
                slug: 'docker-kubernetes-devops',
                excerpt: 'Learn how to containerize applications with Docker and orchestrate them with Kubernetes in production.',
                content: `<p>Containerization has become the standard for deploying modern applications. This guide covers Docker fundamentals and Kubernetes orchestration.</p>`,
                image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop',
                categoryId: 5,
                authorId: 6,
                status: 'published',
                featured: false,
                createdAt: '2025-02-12',
                readTime: '15 min',
                views: 2150,
                likes: 178,
                commentsCount: 22,
                tags: ['Docker', 'Kubernetes', 'DevOps']
            },
            {
                id: 5,
                title: 'React Native vs Flutter: Which One Should You Choose?',
                slug: 'react-native-vs-flutter',
                excerpt: 'A detailed comparison of the two most popular cross-platform mobile development frameworks.',
                content: `<p>Choosing between React Native and Flutter is one of the most common decisions mobile developers face. Both have strengths and tradeoffs.</p>`,
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
                categoryId: 6,
                authorId: 4,
                status: 'published',
                featured: true,
                createdAt: '2025-02-10',
                readTime: '11 min',
                views: 2670,
                likes: 201,
                commentsCount: 35,
                tags: ['React Native', 'Flutter', 'Mobile']
            },
            {
                id: 6,
                title: 'How to Ace Your Technical Interview in 2025',
                slug: 'ace-technical-interview-2025',
                excerpt: 'Proven strategies and tips to prepare for and excel in software engineering technical interviews.',
                content: `<p>Technical interviews can be daunting, but with the right preparation strategy, you can significantly improve your chances of success.</p>`,
                image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop',
                categoryId: 7,
                authorId: 3,
                status: 'published',
                featured: false,
                createdAt: '2025-02-08',
                readTime: '7 min',
                views: 4120,
                likes: 312,
                commentsCount: 48,
                tags: ['Career', 'Interview', 'Tips']
            },
            {
                id: 7,
                title: 'The Ultimate Productivity Stack for Developers',
                slug: 'productivity-stack-developers',
                excerpt: 'Discover the tools, habits, and workflows that top developers use to stay productive and focused.',
                content: `<p>Productivity isn't about working more hours — it's about working smarter. Here are the tools and techniques that make the biggest difference.</p>`,
                image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop',
                categoryId: 8,
                authorId: 2,
                status: 'published',
                featured: false,
                createdAt: '2025-02-05',
                readTime: '6 min',
                views: 1560,
                likes: 98,
                commentsCount: 12,
                tags: ['Productivity', 'Tools', 'Workflow']
            },
            {
                id: 8,
                title: 'Understanding REST API Design Best Practices',
                slug: 'rest-api-design-best-practices',
                excerpt: 'Learn the principles and patterns that make REST APIs intuitive, consistent, and developer-friendly.',
                content: `<p>A well-designed API is a joy to work with. Let's explore the best practices that separate great APIs from mediocre ones.</p>`,
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
                categoryId: 1,
                authorId: 3,
                status: 'published',
                featured: false,
                createdAt: '2025-02-02',
                readTime: '9 min',
                views: 1980,
                likes: 156,
                commentsCount: 19,
                tags: ['API', 'REST', 'Backend']
            },
            {
                id: 9,
                title: 'Advanced TypeScript Patterns You Should Know',
                slug: 'advanced-typescript-patterns',
                excerpt: 'Deep dive into TypeScript generics, conditional types, mapped types, and other advanced patterns.',
                content: `<p>TypeScript has become the standard for building type-safe JavaScript applications. Mastering its advanced features can dramatically improve your code quality.</p>`,
                image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
                categoryId: 2,
                authorId: 1,
                status: 'draft',
                featured: false,
                createdAt: '2025-01-28',
                readTime: '14 min',
                views: 0,
                likes: 0,
                commentsCount: 0,
                tags: ['TypeScript', 'JavaScript', 'Patterns']
            },
            {
                id: 10,
                title: 'Building a Design System from Scratch',
                slug: 'building-design-system',
                excerpt: 'A step-by-step guide to creating a comprehensive design system that scales across your organization.',
                content: `<p>Design systems are the foundation of consistent, efficient UI development. Here's how to build one that actually gets adopted.</p>`,
                image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop',
                categoryId: 3,
                authorId: 2,
                status: 'pending',
                featured: false,
                createdAt: '2025-01-25',
                readTime: '13 min',
                views: 0,
                likes: 0,
                commentsCount: 0,
                tags: ['Design System', 'UI', 'Components']
            },
            {
                id: 11,
                title: 'Securing Your Node.js Applications',
                slug: 'securing-nodejs-applications',
                excerpt: 'Essential security practices every Node.js developer should implement to protect their applications.',
                content: `<p>Security is not optional. Learn the critical steps to protect your Node.js applications from common vulnerabilities.</p>`,
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
                categoryId: 1,
                authorId: 6,
                status: 'published',
                featured: false,
                createdAt: '2025-01-20',
                readTime: '10 min',
                views: 1340,
                likes: 112,
                commentsCount: 15,
                tags: ['Security', 'Node.js', 'Backend']
            },
            {
                id: 12,
                title: 'Getting Started with Cloud Computing on AWS',
                slug: 'cloud-computing-aws',
                excerpt: 'A beginner-friendly introduction to Amazon Web Services and cloud computing fundamentals.',
                content: `<p>Cloud computing has transformed how we build and deploy applications. AWS is the market leader, and this guide will help you get started.</p>`,
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
                categoryId: 5,
                authorId: 6,
                status: 'published',
                featured: false,
                createdAt: '2025-01-15',
                readTime: '11 min',
                views: 1780,
                likes: 134,
                commentsCount: 20,
                tags: ['AWS', 'Cloud', 'Infrastructure']
            }
        ];
    }

    getAll() { return this.blogs; }
    getById(id) { return this.blogs.find(b => b.id === id); }
    getBySlug(slug) { return this.blogs.find(b => b.slug === slug); }
    getPublished() { return this.blogs.filter(b => b.status === 'published'); }
    getFeatured() { return this.blogs.filter(b => b.featured && b.status === 'published'); }
    getDrafts() { return this.blogs.filter(b => b.status === 'draft'); }
    getPending() { return this.blogs.filter(b => b.status === 'pending'); }
    getByCategory(categoryId) { return this.blogs.filter(b => b.categoryId === categoryId && b.status === 'published'); }
    getByAuthor(authorId) { return this.blogs.filter(b => b.authorId === authorId); }
    getRecent(count = 6) { return this.getPublished().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, count); }
    getMostViewed(count = 5) { return this.getPublished().sort((a, b) => b.views - a.views).slice(0, count); }
    search(query) {
        const q = query.toLowerCase();
        return this.getPublished().filter(b =>
            b.title.toLowerCase().includes(q) ||
            b.excerpt.toLowerCase().includes(q) ||
            b.tags.some(t => t.toLowerCase().includes(q))
        );
    }
    getTotalCount() { return this.blogs.length; }
    getPublishedCount() { return this.getPublished().length; }
    getTotalViews() { return this.blogs.reduce((sum, b) => sum + b.views, 0); }
    getTotalLikes() { return this.blogs.reduce((sum, b) => sum + b.likes, 0); }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BlogModel;
}
