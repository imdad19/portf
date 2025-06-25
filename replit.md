# Portfolio Website - Imed Eddine Aouidane

## Overview

This is a modern, full-stack portfolio website for Imed Eddine Aouidane, a data science professional. The application showcases his skills, projects, and professional background through an interactive web interface with a chatbot assistant and contact form functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state, React hooks for local state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement with Vite middleware integration

### Database Design
- **Database**: PostgreSQL (Neon serverless)
- **Tables**:
  - `users`: User authentication (id, username, password)
  - `contacts`: Contact form submissions (id, name, email, company, message, createdAt)
  - `chat_messages`: Chatbot conversations (id, sessionId, message, response, createdAt)

## Key Components

### Portfolio Sections
1. **Hero Section**: Introduction with profile image and availability status
2. **About Section**: Professional background and achievements
3. **Skills Section**: Technical expertise with animated progress bars
4. **Projects Section**: Carousel showcasing key projects with technologies
5. **Contact Section**: Form for professional inquiries

### Interactive Features
- **Chatbot Widget**: AI-powered assistant using OpenAI GPT-4o for visitor engagement
- **Contact Form**: Validated form with server-side processing and email notifications
- **Particle Background**: Animated particle effects for visual appeal
- **Responsive Navigation**: Mobile-friendly navigation with smooth scrolling

### UI Components
- **Design System**: Custom dark theme with glassmorphism effects
- **Typography**: Inter font family for modern, professional appearance
- **Animations**: CSS animations for floating elements and transitions
- **Icons**: Font Awesome for consistent iconography

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. Form data validated using Zod schemas
3. Data sent to `/api/contact` endpoint
4. Server validates and stores in PostgreSQL
5. Success/error response returned to client
6. Toast notification displayed to user

### Chatbot Interaction
1. User sends message through chat widget
2. Message sent to `/api/chat` with session ID
3. Server processes message with OpenAI API
4. Response generated based on Imed's professional context
5. Conversation stored in database for session tracking
6. Real-time response displayed in chat interface

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
2. **Production Build**: 
   - Frontend: Vite builds React app to `dist/public`
   - Backend: esbuild bundles server to `dist/index.js`
3. **Database**: Drizzle migrations with `npm run db:push`

### Environment Configuration
- **Development**: PostgreSQL module in Replit environment
- **Production**: Neon serverless PostgreSQL via DATABASE_URL
- **API Keys**: OpenAI API key for chatbot functionality

### Hosting
- **Platform**: Replit with autoscale deployment
- **Port Configuration**: Internal port 5000, external port 80
- **Static Assets**: Served from `dist/public` directory
- **Server**: Express.js serving API routes and SPA fallback

## Changelog
- June 25, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.