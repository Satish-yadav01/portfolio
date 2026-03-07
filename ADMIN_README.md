# Portfolio Admin Panel

A dynamic portfolio management system that allows you to manage GitHub repositories directly from a beautiful admin dashboard.

## Features

✅ **User Authentication** - Secure login with hardcoded credentials (for demo)  
✅ **GitHub Integration** - Fetch repositories directly from GitHub API  
✅ **Grid & List View** - Switch between different visualization modes  
✅ **Repository Selection** - Select which projects to feature in your portfolio  
✅ **Local Storage** - Persistent data storage in browser  
✅ **Real-time Updates** - Changes instantly update your portfolio  
✅ **Responsive Design** - Works on all devices  

---

## Quick Start

### 1. Access Admin Panel

Open your portfolio and look for the **gear icon (⚙️)** in the bottom-right corner, or navigate directly to:

```
http://localhost:8000/admin
```



### 3. Fetch Your Repositories

1. The GitHub username is pre-filled: `Satish-yadav01`
2. Click **"Fetch Repositories"** button
3. Wait for repositories to load

### 4. Select Projects

Choose which repositories to feature in your portfolio:
- **Grid View**: Click on cards to select
- **List View**: Use checkboxes to select

### 5. Save Selection

Click **"Save Selected Repositories"** to update your portfolio.

Your changes will instantly appear on the main portfolio page!

---

## File Structure

```
portfolio/
├── admin/
│   ├── index.html          # Admin panel HTML
│   ├── admin.css           # Admin styling
│   └── admin.js            # Admin logic & GitHub API
├── assets/
│   └── js/
│       └── portfolio-loader.js    # Loads saved repos
└── index.html              # Main portfolio page
```

---

## How It Works

### Data Flow

```
GitHub API
    ↓
Admin Panel (Fetch & Select)
    ↓
localStorage (portfolio_selected_repos)
    ↓
Portfolio Page (Display)
```

### LocalStorage Keys

- `portfolio_selected_repos` - Stores selected repositories
- `portfolio_auth_token` - Stores authentication state

---

## Customization

### Change Admin Credentials

Edit `admin/admin.js`:

```javascript
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};
```

### Change GitHub Username

In admin panel, update the GitHub username field before fetching repositories.

### Fallback Projects

If no repositories are saved, the portfolio shows fallback projects defined in `portfolio-loader.js`:

```javascript
const FALLBACK_PROJECTS = [
    // Add your default projects here
];
```

---

## GitHub API

The admin panel uses the **GitHub REST API v3** to fetch repositories.

### API Endpoint

```
GET https://api.github.com/users/{username}/repos
```

### Rate Limits

- **Unauthenticated**: 60 requests/hour
- **Authenticated**: 5,000 requests/hour

### No Authentication Required

✅ Public repositories can be fetched without authentication  
✅ No tokens needed for public GitHub API calls  

---

## Security Notes

⚠️ **For Development Only**

The current admin panel stores credentials in JavaScript. For production, use:
- Backend authentication with JWT tokens
- Secure session management
- Environment variables for credentials
- HTTPS encryption

---

## Browser Compatibility

✅ Chrome/Edge 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Mobile browsers (Chrome, Safari)  

---

## Features Explained

### Grid View

- Visual card-based layout
- Hover effects for better UX
- Click to select/deselect
- Shows repo description, language, and stars

### List View

- Table-based layout
- Better for many repositories
- Custom checkboxes
- Sortable columns (optional enhancement)

### Repository Information Displayed

- **Name** - Repository name
- **Description** - First line of repo description
- **Language** - Primary programming language
- **Stars** - Number of GitHub stars

---

## Troubleshooting

### "GitHub user not found"

- Verify the GitHub username is correct
- Check internet connection
- GitHub username is case-sensitive

### Repositories not saving

- Check browser's localStorage is enabled
- Try clearing browser cache
- Ensure JavaScript is enabled

### Admin login not working

- Check username and password are correct
- Clear browser cache and cookies
- Try incognito/private mode

### Portfolio not updating

- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Check if localStorage has data saved
- Open browser DevTools → Application → LocalStorage

---

## Future Enhancements

🚀 Add portfolio title/description editing  
🚀 Reorder projects via drag-and-drop  
🚀 Custom project icons  
🚀 Dark mode for admin panel  
🚀 Backend authentication  
🚀 Multiple portfolio versions  
🚀 Analytics/views tracking  

---

## Support

For issues or questions about the admin panel, check:
- Browser Console (F12) for errors
- GitHub API documentation: https://docs.github.com/en/rest
- Portfolio project repository

---

**Created with ❤️ for your portfolio**
