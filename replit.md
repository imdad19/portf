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

### Build Process
1. **Development**: `npm run dev` - Vite dev server with HMR
2. **Production Build**: `npm run build` - Vite builds optimized static site to `dist/`
3. **Preview**: `npm run preview` - Preview production build locally

### Hosting Options
- **Netlify**: Drag-and-drop deployment from `dist/` folder
- **Vercel**: Connect GitHub repository for automatic deployments
- **GitHub Pages**: Direct deployment from repository
- **Any Static Host**: Upload `dist/` contents to any web server

### Contact Information
- **Email**: aouidaneimad@gmail.com (clickable mailto links)
- **LinkedIn**: www.linkedin.com/in/imed-eddine-aouidane-152b17201
- **GitHub**: https://github.com/imdad19

## Changelog
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