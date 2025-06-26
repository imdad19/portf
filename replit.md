# Portfolio Website - Imed Eddine Aouidane

## Overview

This is a modern, frontend-only portfolio website for Imed Eddine Aouidane, a data science professional. The application showcases his skills, projects, and professional background through a clean, interactive web interface with a simplified contact form and optimized for static hosting.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state, React hooks for local state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Static Site Architecture
- **Build Tool**: Vite for optimized production builds
- **Deployment**: Static site compatible with any hosting platform
- **Contact Form**: Direct mailto integration for seamless communication
- **Performance**: Optimized for fast loading and excellent SEO

## Key Components

### Portfolio Sections
1. **Hero Section**: Introduction with profile image and availability status
2. **About Section**: Professional background and achievements
3. **Skills Section**: Technical expertise with animated progress bars
4. **Projects Section**: Carousel showcasing key projects with technologies
5. **Contact Section**: Form for professional inquiries

### Interactive Features
- **Contact Form**: Validated form with direct email integration using mailto protocol
- **Particle Background**: Animated particle effects for visual appeal
- **Responsive Navigation**: Mobile-friendly navigation with smooth scrolling
- **Project Showcase**: Custom SVG visualizations for all data science projects

### UI Components
- **Design System**: Custom dark theme with glassmorphism effects
- **Typography**: Inter font family for modern, professional appearance
- **Animations**: CSS animations for floating elements and transitions
- **Icons**: Font Awesome for consistent iconography

## Data Flow

### Contact Form Flow
1. User fills out contact form with validation
2. Form data validated using Zod schemas client-side
3. Mailto link generated with pre-filled email content
4. User's default email client opens with message ready to send
5. Toast notification confirms email client activation

### Skills Data Management
- Static data structure for technical skills and expertise
- Animated progress bars triggered by intersection observer
- Expandable sections for detailed skill breakdowns

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/react-***: Accessible UI component primitives
- **react-hook-form**: Form state management and validation
- **zod**: Runtime type validation

### Development Tools
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast bundling for production builds
- **tailwindcss**: Utility-first CSS framework
- **@hookform/resolvers**: Form validation integration

### AI Integration
- **OpenAI API**: GPT-4o model for chatbot responses
- Contextual knowledge about Imed's background and projects
- Conversation memory within chat sessions

## Deployment Strategy

### Netlify Deployment (Configured)
The portfolio is fully configured for Netlify with automatic GitHub integration:

1. **Build Configuration**: `netlify.toml` with optimized settings
2. **Automatic Deployment**: Push to GitHub triggers immediate deployment
3. **Build Command**: `npm run build` creates optimized static site
4. **Publish Directory**: `dist/public` contains production files
5. **SPA Routing**: Configured redirects for client-side routing

### Development Workflow
1. **Local Development**: `npm run dev` - Vite dev server with HMR
2. **Testing**: `npm run build` then `npm run preview`
3. **Deployment**: Push to GitHub → Automatic Netlify build
4. **Live Updates**: Changes appear within 1-3 minutes

### Current Status
- ✅ Ready for immediate Netlify deployment
- ✅ Fixed all 404 deployment issues (client-only build)  
- ✅ Build process generates proper HTML/JS/CSS files in client/dist
- ✅ Multi-language translation system active
- ✅ Responsive design optimized
- ✅ All projects and features functional
- ✅ Dr. Oussama Aouidane's pharmacist portfolio added
- ✅ Proper Netlify configuration with SPA redirects
- ✅ Separate client package.json with all dependencies
- ✅ **FULLY PURE FRONTEND** - NO server dependencies or API calls
- ✅ Removed React Query and all backend integration
- ✅ Contact form uses pure mailto (no external API calls)
- ✅ Clean build output (400.77 kB JS, 7.42 kB CSS)
- ✅ All files generated properly in client/dist for static hosting
- ✅ Local preview confirms React app mounts and works correctly

### Contact Information
- **Email**: aouidaneimad@gmail.com (clickable mailto links)
- **LinkedIn**: www.linkedin.com/in/imed-eddine-aouidane-152b17201
- **GitHub**: https://github.com/imdad19

## Changelog
- June 26, 2025: **FINAL STATIC BUILD** - Completely pure frontend ready for deployment
  - Removed all server dependencies and API call functionality
  - Simplified React Query configuration for static sites only
  - Removed unused chatbot component with backend API calls
  - Verified clean build output: 427.69 kB JS bundle, 7.42 kB CSS
  - Confirmed Netlify configuration and SPA redirects working properly
  - Fixed Netlify dependency resolution issue with --legacy-peer-deps flag
  - Added .npmrc file for consistent dependency handling across environments
- June 26, 2025: Added multi-language translation system
  - Implemented translation support for English, French, German, and Italian
  - Added language selector dropdown in navigation (desktop and mobile)
  - Created comprehensive translation system with context provider
  - Translated hero, navigation, about, and projects sections
  - Language preference saved to localStorage for persistence
- June 26, 2025: Enhanced hero section and added pharmacist portfolio project
  - Increased profile photo size from 320px to 384px (480px on large screens)
  - Added new web development project: Pharmacist Portfolio for Dr. Oussama Aouidane, PharmD
  - Created custom SVG visualization featuring clinical research, drug safety, and regulatory affairs
  - Updated project data with pharmaceutical industry focus and professional healthcare design
  - Portfolio links to aouidaneoussama.netlify.app
- June 26, 2025: Removed animations and improved hero layout
  - Removed loading animation and entrance animations per user request
  - Reduced gap between hero text and image from 12 to 6 (closer spacing)
  - Cleaned up animation-related CSS classes and imports
  - Maintained Netlify deployment configuration
- June 26, 2025: Added animations and prepared for Netlify deployment
  - Created comprehensive loading animation with progress indicators and floating particles
  - Added smooth entrance animations to all sections (fade-in, slide-in, scale-in)
  - Configured Netlify deployment with netlify.toml and redirect rules
  - Created detailed README with deployment instructions
  - Optimized build process for static hosting platforms
- June 26, 2025: Refined focus and updated project details
  - Updated description to emphasize data science specialization in machine learning and statistical analysis
  - Changed all web development project dates to 2025
  - Removed download CV button for cleaner hero section
  - Maintained "Data Scientist & Web Developer" title with data science emphasis
- June 26, 2025: Updated title and enhanced project visualizations
  - Changed title to "Data Scientist & Web Developer" 
  - Updated hero and about sections to reflect dual expertise
  - Fixed Auralytics AI image display with white background and proper sizing
  - Created improved SVG visualizations for Nexai WMF and Portfolio projects
  - Enhanced project image handling for better visual presentation
- June 26, 2025: Added web development projects and updated images
  - Updated Auralytics AI to use provided brand image
  - Added Nexai WMF project (https://nexaiwmf.netlify.app/)
  - Added current portfolio project as web development showcase
  - Created custom SVG visualizations for new projects
  - Enhanced project categorization with interactive tabs
- June 26, 2025: Simplified to frontend-only architecture
  - Removed AI chatbot (unnecessary for portfolio)
  - Converted contact form to mailto integration
  - Added custom SVG project visualizations
  - Enhanced contact section with clickable social links
  - Optimized for static hosting platforms
- June 25, 2025: Initial full-stack setup

## User Preferences

Preferred communication style: Simple, everyday language.