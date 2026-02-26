/**
 * CommentModel — Mock comment data and operations
 */
class CommentModel {
    constructor() {
        this.comments = [
            { id: 1, blogId: 1, userId: 2, text: 'Great article! The section on modular architecture really helped me rethink my project structure.', createdAt: '2025-02-21', status: 'approved', likes: 12 },
            { id: 2, blogId: 1, userId: 3, text: 'I would love to see a follow-up on micro-frontends. Any plans for that?', createdAt: '2025-02-21', status: 'approved', likes: 8 },
            { id: 3, blogId: 1, userId: 4, text: 'The performance optimization tips are gold. Bookmarked for future reference!', createdAt: '2025-02-22', status: 'approved', likes: 15 },
            { id: 4, blogId: 2, userId: 1, text: 'Flexbox and Grid explained so well. This is the best guide I have read on CSS layouts.', createdAt: '2025-02-19', status: 'approved', likes: 20 },
            { id: 5, blogId: 2, userId: 6, text: 'Could you add some examples with responsive breakpoints? That would be super helpful.', createdAt: '2025-02-19', status: 'approved', likes: 6 },
            { id: 6, blogId: 3, userId: 2, text: 'Perfect intro for beginners. The code examples make it easy to follow along.', createdAt: '2025-02-16', status: 'approved', likes: 9 },
            { id: 7, blogId: 4, userId: 1, text: 'Docker section was thorough. Kubernetes part could use more real-world examples though.', createdAt: '2025-02-13', status: 'approved', likes: 11 },
            { id: 8, blogId: 5, userId: 3, text: 'I switched from React Native to Flutter after reading this. Great comparison!', createdAt: '2025-02-11', status: 'approved', likes: 14 },
            { id: 9, blogId: 6, userId: 4, text: 'These tips helped me land my dream job. Thank you so much!', createdAt: '2025-02-09', status: 'approved', likes: 25 },
            { id: 10, blogId: 6, userId: 2, text: 'The behavioral interview section was exactly what I needed. Adding more scenarios would be great.', createdAt: '2025-02-09', status: 'approved', likes: 7 },
            { id: 11, blogId: 1, userId: 5, text: 'This is spam content trying to promote a product.', createdAt: '2025-02-23', status: 'pending', likes: 0 },
            { id: 12, blogId: 3, userId: 5, text: 'Check out my website for more ML resources! [link removed]', createdAt: '2025-02-17', status: 'flagged', likes: 0 },
            { id: 13, blogId: 7, userId: 3, text: 'I use most of these tools daily. Notion + VS Code is an unbeatable combo.', createdAt: '2025-02-06', status: 'approved', likes: 5 },
            { id: 14, blogId: 8, userId: 4, text: 'REST is great but have you considered writing about GraphQL best practices too?', createdAt: '2025-02-03', status: 'approved', likes: 10 },
            { id: 15, blogId: 11, userId: 2, text: 'Security is often overlooked. Glad someone is writing about it in depth.', createdAt: '2025-01-21', status: 'approved', likes: 8 }
        ];
    }

    getAll() { return this.comments; }
    getById(id) { return this.comments.find(c => c.id === id); }
    getByBlogId(blogId) { return this.comments.filter(c => c.blogId === blogId && c.status === 'approved'); }
    getByUserId(userId) { return this.comments.filter(c => c.userId === userId); }
    getPending() { return this.comments.filter(c => c.status === 'pending'); }
    getFlagged() { return this.comments.filter(c => c.status === 'flagged'); }
    getApproved() { return this.comments.filter(c => c.status === 'approved'); }
    getRecent(count = 5) { return this.comments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, count); }
    getTotalCount() { return this.comments.length; }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CommentModel;
}
