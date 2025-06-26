# Netlify Deployment Guide

Your portfolio is fully configured for Netlify deployment with automatic GitHub integration.

## Quick Setup

### 1. GitHub Repository
- Push your code to a GitHub repository
- Ensure all changes are committed and pushed

### 2. Netlify Deployment
1. Go to [netlify.com](https://www.netlify.com/) and sign in
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your portfolio repository
5. Build settings will auto-configure from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
   - **Node version**: 18

### 3. Automatic Updates
Once connected:
- Any push to your main/master branch automatically triggers a new build
- Changes appear live within 1-3 minutes
- You get email notifications of successful/failed deployments

## Current Features Ready for Deployment

✅ **Multi-language support** (English, French, German, Italian)
✅ **Responsive design** for all devices
✅ **Larger profile photo** in hero section
✅ **Pharmacist portfolio project** for Dr. Oussama Aouidane
✅ **Translation system** with localStorage persistence
✅ **Contact form** with email integration
✅ **Project categorization** (Web Dev / Data Science)
✅ **Optimized build process** for static hosting

## Build Configuration

The `netlify.toml` file includes:
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

## Update Workflow

1. Make changes to your code locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Netlify automatically builds and deploys
5. Live site updates within minutes

Your portfolio will be available at: `https://your-site-name.netlify.app`