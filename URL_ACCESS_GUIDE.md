# Portfolio Admin Panel Access Guide

## Current URL Structure

Your GitHub Pages site is hosted from the `portfolio` repository, which means:

- **Main Portfolio**: `https://satish-yadav01.github.io/portfolio/`
- **Admin Panel**: `https://satish-yadav01.github.io/portfolio/admin/`

## Why `https://satish-yadav01.github.io/admin` Doesn't Work

GitHub Pages URL structure works as follows:
- `https://username.github.io/` → requires a repo named `username.github.io`
- `https://username.github.io/repo-name/` → requires a repo named `repo-name`

Since your repository is named `portfolio`, the base URL is `/portfolio/`, and all paths are relative to that.

## Changes Made

### 1. Updated Admin Link in Navigation
Added an "ADMIN" link to the main portfolio navigation bar that points to `./admin/`

### 2. Updated Floating Admin Button
Modified the floating admin button (gear icon) in `portfolio-loader.js` to use the relative path `./admin/` instead of the absolute path `/portfolio/admin/`

### 3. How to Access Admin Panel

You can now access the admin panel in three ways:

1. **From Navigation Bar**: Click the "ADMIN" link in the top navigation
2. **From Floating Button**: Click the gear icon (⚙️) in the bottom-right corner
3. **Direct URL**: Navigate to `https://satish-yadav01.github.io/portfolio/admin/`

## Admin Panel Credentials

- **Username**: `admin`
- **Password**: `admin123`

## Alternative: Create Separate Admin Repository

If you want `https://satish-yadav01.github.io/admin` to work, you would need to:

1. Create a new repository named `admin`
2. Move the admin files to that repository
3. Enable GitHub Pages for the new repository

However, this is not necessary since the admin panel is already accessible at the current URL.

## Files Modified

1. `/index.html` - Added admin link to navigation
2. `/assets/js/portfolio-loader.js` - Updated admin button link to use relative path

## Deployment

Changes have been committed and pushed to GitHub. The updates should be live on GitHub Pages within a few minutes.
