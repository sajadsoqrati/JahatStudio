# Netlify Deployment Guide

## Prerequisites
- Netlify account
- Git repository with your project

## Steps to Deploy

### 1. Connect to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose your Git provider (GitHub, GitLab, etc.)
4. Select your repository

### 2. Configure Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18 (set in netlify.toml)

### 3. Environment Variables (Optional)
If you need environment variables, add them in Netlify dashboard:
- Go to Site settings > Environment variables
- Add any required variables

### 4. Deploy
- Click "Deploy site"
- Netlify will automatically build and deploy your site

## Features
- ✅ Static image serving
- ✅ Automatic HTTPS
- ✅ Global CDN

## API Endpoints (for PHP/shared hosting)
- `POST /api/contact.php` - Submit contact form
  - Place `public/api/contact.php` on your hosting

## Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## File Structure
```
├── src/                    # React source code
├── public/                 # Static assets (images, api for PHP)
│   └── api/
│       └── contact.php    # PHP contact form handler (for shared hosting)
├── netlify.toml           # Netlify configuration
└── dist/                  # Build output (generated)
``` 