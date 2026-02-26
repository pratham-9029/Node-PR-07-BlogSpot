📁 1. Project Structure (MVC Frontend)
Organize the project into a clean directory structure:

/assets (CSS, JS, Images)

/models (JavaScript classes defining data structures for Blogs, Users, and Categories)

/views (HTML templates/pages)

/controllers (JavaScript files to handle UI logic, event listeners, and data rendering)

🎨 2. Unified Design Theme (Strict Adherence)
Apply the following styles using Bootstrap 5 as the base:

Color Palette:


Primary Gradient: #667eea to #764ba2.


Colors: Primary #667eea, Secondary #764ba2, Accent #f093fb.


Status: Success #2ecc71, Warning #f39c12, Error #e74c3c.


Backgrounds: Surface #F8F9FF, Card BG #FFFFFF, Dark BG #1a1a2e.

Typography:


Headings: 'Playfair Display', serif.
+1


Body: 'Inter', sans-serif (16px, Line-height: 1.7).
+1

Component Rules:


Border Radius: Buttons/Inputs: 8px, Cards: 12px, Modals: 16px, Avatars: 50%.


Shadows: Card 0 2px 12px rgba(102,126,234,0.1), Navbar 0 2px 10px rgba(0,0,0,0.08).


Transitions: 0.3s ease with a 1.02 hover scale.

📄 3. Pages to Generate (Total: 20 Pages)
Create separate HTML files for each of the following pages based on the PRD:


Public: Homepage , Blog Listing (Search/Filter) , Single Blog Post , Search Results , Category Page.
+1


Auth: Registration, Login, Email Verification, Forgot Password, Reset Password.


User Dashboard: Dashboard Overview, Create Blog (with Category/Image upload UI), Edit Blog, My Blogs (List view), User Profile & Settings.


Admin Panel: Admin Dashboard, Manage Blogs (Delete/Approve), Manage Users (Edit/Ban), Manage Categories, Moderate Comments.

🛠️ Instructions
UI Style: Minimalist, clean, and professional.

Frontend Only: Use local JSON objects or arrays as "Models" to mock the data. Do not write any backend or database code.

Responsive: Ensure the Bootstrap grid makes every page mobile-friendly.

Interactivity: Use JavaScript (Controllers) to handle simple tasks like form validation and dynamic data rendering on the "My Blogs" and "Search" pages.