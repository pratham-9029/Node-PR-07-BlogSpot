/**
 * UserModel — Mock user data and operations
 */
class UserModel {
  constructor() {
    this.users = [
      {
        id: 1,
        name: 'Pratham Sharma',
        email: 'pratham@blog.com',
        username: 'pratham_dev',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pratham',
        bio: 'Full-stack developer passionate about writing clean code and sharing knowledge through technical blogs.',
        role: 'admin',
        status: 'active',
        joinedDate: '2024-01-15',
        blogCount: 24,
        followers: 1280,
        following: 340
      },
      {
        id: 2,
        name: 'Ananya Gupta',
        email: 'ananya@blog.com',
        username: 'ananya_writes',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya',
        bio: 'Creative writer and UX designer. I write about design systems, user experience, and frontend aesthetics.',
        role: 'user',
        status: 'active',
        joinedDate: '2024-03-22',
        blogCount: 18,
        followers: 890,
        following: 210
      },
      {
        id: 3,
        name: 'Rahul Verma',
        email: 'rahul@blog.com',
        username: 'rahul_tech',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
        bio: 'Backend engineer who loves databases, APIs, and cloud architecture.',
        role: 'user',
        status: 'active',
        joinedDate: '2024-05-10',
        blogCount: 12,
        followers: 560,
        following: 180
      },
      {
        id: 4,
        name: 'Priya Patel',
        email: 'priya@blog.com',
        username: 'priya_codes',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
        bio: 'Mobile app developer and tech blogger. Sharing insights on Flutter and React Native.',
        role: 'user',
        status: 'active',
        joinedDate: '2024-06-01',
        blogCount: 9,
        followers: 420,
        following: 150
      },
      {
        id: 5,
        name: 'Arjun Singh',
        email: 'arjun@blog.com',
        username: 'arjun_ml',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
        bio: 'Machine learning enthusiast and data scientist. Writing about AI, ML, and data engineering.',
        role: 'user',
        status: 'banned',
        joinedDate: '2024-07-18',
        blogCount: 6,
        followers: 310,
        following: 95
      },
      {
        id: 6,
        name: 'Neha Reddy',
        email: 'neha@blog.com',
        username: 'neha_devops',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
        bio: 'DevOps engineer sharing knowledge about CI/CD, containers, and cloud infrastructure.',
        role: 'user',
        status: 'active',
        joinedDate: '2024-08-05',
        blogCount: 14,
        followers: 670,
        following: 220
      }
    ];
    this.currentUser = this.users[0]; // Default logged-in user
  }

  getAll() { return this.users; }
  getById(id) { return this.users.find(u => u.id === id); }
  getByRole(role) { return this.users.filter(u => u.role === role); }
  getActive() { return this.users.filter(u => u.status === 'active'); }
  getBanned() { return this.users.filter(u => u.status === 'banned'); }
  getCurrentUser() { return this.currentUser; }
  getTotalCount() { return this.users.length; }
}

// Export for use across pages
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UserModel;
}
