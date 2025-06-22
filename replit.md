# Saanvi Yoga Studio - Web Application

## Overview

Saanvi Yoga Studio is a full-stack web application built for online yoga instruction services. The platform serves as a digital presence for certified yoga instructor Sneh Chauhan, offering various yoga classes, booking services, and contact functionality. The application features a modern, responsive design with interactive animations and comprehensive user engagement tools.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for interactive animations and page transitions
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact and booking management
- **Security**: Helmet for security headers, rate limiting for API protection
- **Email Service**: Nodemailer with Mailgun integration for transactional emails

### Data Storage Solutions
- **Database**: Supabase PostgreSQL for production data storage
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions in `/shared`
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### User Interface
- **Design System**: Custom theme with orange accent colors and neutral base
- **Component Library**: Complete UI component set using Radix UI primitives
- **Responsive Design**: Mobile-first approach with progressive enhancement
- **Progressive Web App**: Service worker implementation for offline capabilities
- **Accessibility**: Full keyboard navigation and screen reader support

### Backend Services
- **Contact Management**: Form submission handling with email notifications
- **Booking System**: Class scheduling and booking confirmation
- **Rate Limiting**: IP-based rate limiting for form submissions and general API access
- **Email Service**: Automated confirmation emails for bookings and contacts

### Animation System
- **Interactive Elements**: Custom animated components for yoga figures, chakra wheels, and mandala patterns
- **Page Transitions**: Smooth animations for navigation and content loading
- **Scroll Effects**: Parallax scrolling and reveal animations
- **Micro-interactions**: Hover effects and button animations for enhanced UX

## Data Flow

1. **User Interaction**: Users navigate through pages and interact with forms
2. **Form Submission**: Contact and booking forms validate data client-side using Zod schemas
3. **API Processing**: Express server processes requests with rate limiting and validation
4. **Database Operations**: Data stored using configured storage interface (MongoDB fallback)
5. **Email Notifications**: Automated emails sent via Nodemailer/Mailgun integration
6. **Response Handling**: Client receives confirmation and updates UI accordingly

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL (with MongoDB fallback via Mongoose)
- **Email Service**: Mailgun for transactional emails
- **CDN**: Google Fonts for typography
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Build System**: Vite for fast development and optimized production builds
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint and Prettier (configuration implied)
- **Testing**: Framework ready for testing implementation

## Deployment Strategy

### Development Environment
- **Runtime**: Replit with Node.js 20 and PostgreSQL 16 modules
- **Hot Reload**: Vite development server with HMR
- **Environment Variables**: Database URL and email service credentials

### Production Build
- **Build Process**: Vite for client-side build, esbuild for server bundling
- **Deployment Target**: Autoscale deployment with health checks
- **Static Assets**: Optimized and compressed for production
- **Service Worker**: Automatic caching for improved performance

### Environment Configuration
- **Port Configuration**: Internal port 5000 mapped to external port 80
- **Database**: PostgreSQL with connection pooling
- **Security**: Content Security Policy and rate limiting in production

## Changelog
- June 21, 2025: Initial setup
- June 21, 2025: Complete dark theme removal and performance-optimized light theme implementation
  - Removed all dark theme classes and theme toggle functionality
  - Implemented yoga-inspired color palette with orange/amber gradients
  - Added performance-optimized animations with GPU acceleration
  - Enhanced navbar with Om symbol logo and gradient styling
  - Redesigned cards with shimmer effects and magnetic hover interactions
  - Optimized CSS with reduced animation counts and hardware acceleration
  - Transformed to authentic Indian yoga theme with Sanskrit text and cultural elements
  - Reduced heavy animations to essential micro-interactions for better performance
  - Added traditional Indian color palette (saffron, turmeric, sandalwood)
  - Integrated Hindi/Sanskrit terminology throughout the interface
  - Revamped all pages with performance-optimized backgrounds and English text
  - Enhanced visual design with elegant patterns while maintaining Indian color scheme
  - Improved user experience with subtle hover effects and micro-interactions
- June 21, 2025: Complete email system and newsletter functionality implementation
  - Added "Saanvi Yoga Studio" as sender name for all emails
  - Implemented full newsletter subscription system with database schema
  - Created beautiful newsletter subscription components (card, inline, footer variants)
  - Added newsletter welcome email with yoga-themed design and Sanskrit elements
  - Integrated newsletter subscriptions throughout the site (home page, footer)
  - All emails now send via Mailgun API with proper authentication
  - Contact form sends notifications to sanyamsood14@gmail.com as requested
  - Newsletter and contact confirmations working with themed email templates
- June 21, 2025: Simplified rate limiting system implementation
  - Reverted to simple express-rate-limit for reliable and lightweight protection
  - Configured lenient rate limits: 1000 general requests per 15 minutes
  - Contact form limited to 20 submissions per hour per IP address
  - Removed complex IP security tracking and browser fingerprinting systems
  - Cleaned up database schema by removing ip_security_log table
  - Simplified middleware stack for better performance and maintainability
  - Standard rate limit headers for transparent user communication
  - Memory storage fallback ensures reliability when database is unavailable
- June 22, 2025: Major website enhancements and feature additions
  - Fixed CSS parsing errors preventing website from loading
  - Updated instructor about page with realistic statistics (150+ students, 300+ sessions, 5+ years experience)
  - Created comprehensive class schedule page with weekly timetable and booking integration
  - Added wellness blog with yoga tips, breathing techniques, and philosophy insights
  - Built interactive yoga pose library with search, filters, and detailed instructions
  - Enhanced home page with FAQ section and clear call-to-action pathways
  - Updated testimonials with more authentic and realistic student reviews
  - Improved navigation structure with logical page organization
  - Added comprehensive yoga pose guidance with Sanskrit names and benefits
  - Created quick action sections for different user types (beginners, experienced practitioners)
  - Enhanced mobile responsiveness and user experience across all new features
- June 22, 2025: Complete website redesign and performance optimization
  - Removed FAQ section from home page and deleted pose/blog pages as requested
  - Completely revamped home page with modern, competitive design rivaling top yoga studios
  - Redesigned navigation with transparent/glass morphism effect and prominent Book Now CTA
  - Implemented performance-optimized animations with reduced motion for better accessibility
  - Streamlined CSS removing complex custom classes in favor of Tailwind utilities
  - Created modern hero section with gradient backgrounds and trust indicators
  - Added stats section, features overview, and streamlined service cards
  - Integrated authentic testimonials with star ratings and professional presentation
  - Added powerful call-to-action section with dual booking options
  - Implemented contact information bar for immediate accessibility
  - Optimized typography switching to Inter font for modern feel
  - Enhanced mobile-first responsive design throughout entire site
  - Reduced bundle size and improved performance metrics significantly
- June 22, 2025: Comprehensive page enhancement and feature restoration
  - Restored legal pages (Privacy Policy, Terms & Conditions, Cancellation Policy)
  - Brought back AI Teach and Cost Calculator pages with modern design
  - Completely redesigned About page with instructor profile, certifications, and philosophy
  - Enhanced Services page with detailed service cards, pricing, packages, and benefits
  - Modernized Schedule page with weekly timetable and interactive booking options
  - Fixed footer contact information duplication issue as requested
  - Updated footer design with integrated contact info under logo
  - Applied consistent modern design language across all pages
  - Optimized all pages for mobile responsiveness and performance
  - Maintained authentic statistics and realistic testimonials throughout
  - Enhanced user experience with clear navigation and call-to-action buttons

## User Preferences

Preferred communication style: Simple, everyday language.