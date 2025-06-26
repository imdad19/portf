# Imed Eddine Aouidane - Portfolio

A modern, responsive portfolio website showcasing data science expertise and web development projects.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth loading animations and transitions
- **Project Showcase**: Separate categories for web development and data science projects
- **Contact Integration**: Direct email functionality for client inquiries
- **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS animations
- **Build Tool**: Vite
- **Deployment**: Netlify-ready configuration
- **UI Components**: Radix UI primitives with custom styling

## Project Structure

```
client/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── lib/               # Data and utilities
│   └── hooks/             # Custom React hooks
├── public/                # Static assets
└── index.html            # Entry point
```

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5000 in your browser

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Netlify Deployment (Recommended)

This project is optimized for Netlify deployment with automatic configuration:

1. **Connect Repository**: Link your GitHub repository to Netlify
2. **Build Settings**: 
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Node version: 18
3. **Deploy**: Automatic deployment on every push to main branch

The `netlify.toml` file includes:
- Single Page Application (SPA) routing configuration
- Optimized build settings
- Redirect rules for client-side routing

### Alternative Hosting Platforms

**Vercel:**
1. Connect repository to Vercel
2. Build command: `npm run build`
3. Output directory: `dist/public`

**GitHub Pages:**
1. Run `npm run build` locally
2. Upload `dist/public` contents to gh-pages branch

### Build Process

The build process creates an optimized static site in the `dist/public` directory:
- Minified JavaScript and CSS
- Optimized images and assets
- Production-ready HTML

## Contact

- **Email**: aouidaneimad@gmail.com
- **LinkedIn**: [Imed Eddine Aouidane](https://www.linkedin.com/in/imed-eddine-aouidane-152b17201)
- **GitHub**: [imdad19](https://github.com/imdad19)

## License

This project is open source and available under the MIT License.