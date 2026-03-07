# 🚀 Satish Yadav - Portfolio Website

A modern, responsive portfolio website with an integrated admin panel for dynamic project management. Built with HTML, CSS, JavaScript, and powered by GitHub Pages.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://satish-yadav01.github.io/portfolio/)
[![GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-blue)](https://pages.github.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## 📋 Table of Contents

- [Features](#-features)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Admin Panel](#-admin-panel)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

### Portfolio Features
- 🎨 **Modern & Responsive Design** - Works seamlessly on all devices
- 🌟 **Smooth Animations** - WOW.js animations for engaging user experience
- 📱 **Mobile-First Approach** - Optimized for mobile, tablet, and desktop
- 🎯 **Single Page Application** - Smooth scrolling navigation
- 💼 **Professional Sections**:
  - Hero section with profile
  - About Me with skills visualization
  - Education timeline
  - Work experience timeline
  - Dynamic project carousel
  - Contact information
- 🔗 **Social Media Integration** - LinkedIn, GitHub, HackerRank links
- 📄 **Downloadable Resume** - Direct PDF download
- ⚡ **Fast Loading** - Optimized assets and minimal dependencies

### Admin Panel Features
- 🔐 **Secure Authentication** - Login system for admin access
- 🐙 **GitHub Integration** - Fetch repositories directly from GitHub API
- 📊 **Dual View Modes** - Switch between Grid and List views
- ✅ **Project Selection** - Choose which repositories to showcase
- 💾 **Local Storage** - Persistent data without backend
- 🔄 **Real-time Updates** - Changes reflect immediately on portfolio
- 📱 **Responsive Admin UI** - Manage projects from any device
- 🎨 **Bootstrap-based Design** - Clean and professional interface

---

## 🌐 Live Demo

**Portfolio**: [https://satish-yadav01.github.io/portfolio/](https://satish-yadav01.github.io/portfolio/)

**Admin Panel**: [https://satish-yadav01.github.io/portfolio/admin/](https://satish-yadav01.github.io/portfolio/admin/)

**Admin Credentials** (Demo):
- Username: `admin`
- Password: `admin123`

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Dynamic functionality
- **Bootstrap 4.3.1** - Responsive grid and components
- **jQuery 3.2.1** - DOM manipulation and animations

### Libraries & Plugins
- **WOW.js** - Scroll animations
- **Font Awesome 4.7** - Icons
- **Animate.css** - CSS animations
- **Nivo Lightbox** - Image lightbox
- **jQuery Counterup** - Animated counters
- **jQuery Easing** - Smooth scrolling

### APIs
- **GitHub REST API v3** - Fetch repository data

### Hosting
- **GitHub Pages** - Free static site hosting

---

## 📁 Project Structure

```
portfolio/
├── admin/                          # Admin Panel
│   ├── index.html                  # Admin panel HTML
│   ├── admin.css                   # Admin panel styles
│   └── admin.js                    # Admin logic & GitHub API integration
│
├── assets/                         # Static assets
│   ├── css/                        # Stylesheets
│   │   ├── style.css               # Main styles
│   │   ├── bootstrap.min.css       # Bootstrap framework
│   │   └── animate.css             # Animation styles
│   │
│   ├── js/                         # JavaScript files
│   │   ├── main.js                 # Main application logic
│   │   ├── portfolio-loader.js     # Loads projects from localStorage
│   │   ├── jquery-min.js           # jQuery library
│   │   ├── bootstrap.min.js        # Bootstrap JS
│   │   ├── wow.js                  # Scroll animations
│   │   └── [other plugins]         # Various jQuery plugins
│   │
│   ├── img/                        # Images
│   │   ├── satish-profile.png      # Profile picture
│   │   ├── favicon.png             # Site favicon
│   │   └── hackerrank.png          # HackerRank icon
│   │
│   ├── resume/                     # Resume files
│   │   └── Satish-Yadav.pdf        # Downloadable resume
│   │
│   └── fonts/                      # Icon fonts
│       └── simple-line-icons.css   # Line icons
│
├── index.html                      # Main portfolio page
├── nameAnimation.js                # Name typing animation
├── README.md                       # This file
├── ADMIN_README.md                 # Admin panel documentation
└── URL_ACCESS_GUIDE.md             # URL access guide

```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for cloning the repository)
- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Satish-yadav01/portfolio.git
   cd portfolio
   ```

2. **Open locally**
   
   **Option A: Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option B: Using Node.js**
   ```bash
   npx http-server -p 8000
   ```
   
   **Option C: Using VS Code**
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

3. **Access the portfolio**
   ```
   http://localhost:8000
   ```

4. **Access the admin panel**
   ```
   http://localhost:8000/admin
   ```

---

## 🔧 Admin Panel

The admin panel allows you to dynamically manage which GitHub repositories appear in your portfolio.

### Accessing Admin Panel

1. **From Portfolio**: Click the gear icon (⚙️) in the bottom-right corner
2. **From Navigation**: Click "ADMIN" in the navigation menu
3. **Direct URL**: Navigate to `/admin/` path

### Using the Admin Panel

#### Step 1: Login
```
Username: admin
Password: admin123
```

#### Step 2: Fetch Repositories
1. GitHub username is pre-filled: `Satish-yadav01`
2. Click **"Fetch Repositories"** button
3. Wait for repositories to load from GitHub API

#### Step 3: Select Projects
- **Grid View**: Click on repository cards to select/deselect
- **List View**: Use checkboxes to select repositories
- View repository details: name, description, language, stars

#### Step 4: Save Selection
1. Click **"Save Selected Repositories"**
2. Selected projects are saved to browser's localStorage
3. Portfolio page automatically updates with new projects

### Admin Panel Features

- **Authentication**: Secure login system
- **GitHub Integration**: Real-time repository fetching
- **Dual Views**: Grid and List visualization
- **Statistics**: Total repos and selected count
- **Persistent Storage**: Uses localStorage for data persistence
- **Responsive Design**: Works on all screen sizes

### Data Storage

The admin panel uses browser's localStorage:

```javascript
// Storage Keys
portfolio_selected_repos    // Selected repository data
portfolio_auth_token        // Authentication token
```

### Customizing Admin Credentials

Edit `admin/admin.js`:

```javascript
const ADMIN_CREDENTIALS = {
    username: 'your-username',
    password: 'your-secure-password'
};
```

⚠️ **Security Note**: For production, implement proper backend authentication with JWT tokens and secure session management.

---

## 🎨 Customization

### Personal Information

Edit `index.html` to update:

1. **Profile Information**
   ```html
   <h1>Your Name</h1>
   <p>Your Title @ <a href="company-url">Company</a></p>
   ```

2. **About Section**
   - Update profile image: `assets/img/your-profile.png`
   - Modify description text
   - Update skills and percentages

3. **Education & Experience**
   - Edit timeline items
   - Update dates, institutions, and descriptions

4. **Contact Information**
   ```html
   <p>+91-YOUR-PHONE</p>
   <p>your-email@example.com</p>
   ```

5. **Social Links**
   ```html
   <a href="your-linkedin-url"><i class="fa fa-linkedin"></i></a>
   <a href="your-github-url"><i class="fa fa-github"></i></a>
   ```

### Styling

1. **Colors**: Edit `assets/css/style.css`
   ```css
   :root {
       --primary-color: #your-color;
       --secondary-color: #your-color;
   }
   ```

2. **Fonts**: Update font imports in `index.html`

3. **Layout**: Modify Bootstrap classes in HTML

### Projects

#### Option 1: Use Admin Panel (Recommended)
- Login to admin panel
- Fetch and select GitHub repositories
- Save selection

#### Option 2: Manual Configuration
Edit `assets/js/portfolio-loader.js`:

```javascript
const FALLBACK_PROJECTS = [
    {
        id: 'project-id',
        name: 'Project Name',
        description: 'Project description',
        url: 'https://github.com/username/repo',
        language: 'JavaScript',
        stars: 10,
        icon: 'fa-code',
        delay: '0.3'
    },
    // Add more projects...
];
```

### Resume

Replace `assets/resume/Satish-Yadav.pdf` with your own resume PDF.

---

## 🌍 Deployment

### GitHub Pages (Current Setup)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin master
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Select branch: `master`
   - Select folder: `/ (root)`
   - Click "Save"

3. **Access Your Site**
   ```
   https://your-username.github.io/portfolio/
   ```

### Custom Domain (Optional)

1. **Add CNAME file**
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS**
   - Add A records pointing to GitHub Pages IPs
   - Or add CNAME record pointing to `your-username.github.io`

3. **Update GitHub Settings**
   - Go to repository Settings → Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS"

### Alternative Hosting

- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **AWS S3**: Static website hosting
- **Firebase Hosting**: Google's hosting solution

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |
| Opera   | 76+     |

**Mobile Browsers:**
- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 14+

---

## 📝 Features Breakdown

### Animations
- **WOW.js**: Scroll-triggered animations
- **Animate.css**: Pre-built animation classes
- **Custom CSS**: Smooth transitions and hover effects

### Responsive Design
- **Mobile-first approach**: Optimized for small screens
- **Bootstrap Grid**: Flexible layout system
- **Media queries**: Custom breakpoints for different devices

### Performance
- **Minified assets**: Reduced file sizes
- **Lazy loading**: Images load on demand
- **Optimized images**: Compressed for faster loading
- **CDN resources**: Fast delivery of libraries

### SEO
- **Semantic HTML**: Proper heading hierarchy
- **Meta tags**: Description and keywords
- **Alt attributes**: Image descriptions
- **Structured data**: Schema markup (can be added)

---

## ���� Troubleshooting

### Portfolio Not Loading
- Check browser console for errors (F12)
- Verify all file paths are correct
- Ensure JavaScript is enabled
- Try hard refresh (Ctrl+Shift+R)

### Admin Panel Issues
- **Login fails**: Check credentials in `admin.js`
- **Repos not loading**: Verify GitHub username
- **Changes not saving**: Check localStorage is enabled
- **API rate limit**: Wait an hour or use GitHub token

### Projects Not Displaying
- Check localStorage has data: DevTools → Application → LocalStorage
- Verify `portfolio-loader.js` is loaded
- Check browser console for errors
- Try clearing localStorage and re-selecting projects

### Styling Issues
- Clear browser cache
- Check CSS file paths
- Verify Bootstrap is loaded
- Inspect elements with DevTools

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Ideas
- Add dark mode toggle
- Implement backend authentication
- Add more animation effects
- Create project filtering by technology
- Add blog section
- Implement contact form with backend
- Add analytics integration
- Create multiple theme options

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Satish Yadav**

- 📧 Email: satishyadav.ssy02@gmail.com
- 💼 LinkedIn: [satish-yadav-905bb717a](https://www.linkedin.com/in/satish-yadav-905bb717a/)
- 🐙 GitHub: [@Satish-yadav01](https://github.com/Satish-yadav01)
- 🏆 HackerRank: [satishsy](https://www.hackerrank.com/satishsy)
- 📱 Phone: +91 7558757731

---

## 🙏 Acknowledgments

- **Bootstrap** - Responsive framework
- **Font Awesome** - Icon library
- **WOW.js** - Scroll animations
- **jQuery** - JavaScript library
- **GitHub Pages** - Free hosting
- **GitHub API** - Repository data

---

## 📊 Project Stats

- **Lines of Code**: ~3000+
- **Files**: 30+
- **Technologies**: 10+
- **Sections**: 6
- **Animations**: 20+

---

## 🔮 Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement backend API for admin panel
- [ ] Add blog section with CMS
- [ ] Create contact form with email integration
- [ ] Add project filtering and search
- [ ] Implement analytics dashboard
- [ ] Add testimonials section
- [ ] Create multiple language support
- [ ] Add project detail pages
- [ ] Implement drag-and-drop project reordering
- [ ] Add skills endorsement system
- [ ] Create downloadable portfolio PDF

---

## 📚 Documentation

- [Admin Panel Guide](ADMIN_README.md) - Detailed admin panel documentation
- [URL Access Guide](URL_ACCESS_GUIDE.md) - Understanding GitHub Pages URLs
- [GitHub Pages Docs](https://docs.github.com/en/pages) - Official documentation

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Satish Yadav](https://github.com/Satish-yadav01)

© 2022 Satish Yadav. All rights reserved.

</div>
