# Development Guide

This guide covers setup, development, and deployment of the Project Cornelia website.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- **Node.js**: 16.x or higher ([Download](https://nodejs.org/))
- **npm**: 7.x or higher (comes with Node.js)
- **Git**: For version control (optional but recommended)
- **Code Editor**: VS Code, WebStorm, or your preference

## Installation

### 1. Extract the Project

```bash
unzip cornelia-website.zip
cd cornelia-website
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies:
- Next.js 14
- React 18
- Tailwind CSS
- PostCSS and Autoprefixer

### 3. Setup Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration.

## Development

### Start Development Server

```bash
npm run dev
```

This starts the development server at `http://localhost:3000`

**Features:**
- Hot Module Reloading (HMR)
- Fast Refresh for React components
- Error overlays for quick debugging

### File Structure

```
src/
├── app/
│   ├── layout.js              # Root layout
│   ├── page.js                # Home page
│   ├── globals.css            # Global styles
│   ├── about/page.js          # About page
│   ├── our-work/page.js       # Our Work page
│   ├── blog/page.js           # Blog page
│   ├── members/page.js        # Members page
│   ├── initiatives/page.js    # Initiatives page
│   ├── resources/page.js      # Resources page
│   ├── contact/page.js        # Contact page
│   ├── privacy/page.js        # Privacy Policy
│   ├── terms/page.js          # Terms of Service
│   └── not-found.js           # 404 page
└── components/
    ├── Header.js              # Navigation header
    └── Footer.js              # Footer component
```

## Customization

### Update Website Information

**File**: `src/components/Footer.js`

```javascript
// Update email
contact@corneliafoundation.org

// Update organization name
Project Cornelia AINA Foundation
```

### Update Social Links

**File**: `src/components/Footer.js`

```javascript
// Instagram
<a href="https://www.instagram.com/your-handle/">Instagram</a>

// LinkedIn
<a href="https://www.linkedin.com/company/your-company/">LinkedIn</a>
```

### Update External Forms

**File**: Various pages

Replace Google Form links:
- Work with us: Update in `Header.js`, `page.js`
- Write for us: Update in `Header.js`, `blog/page.js`
- Donate: Update in Footer, CTA sections

### Add Images

1. Place images in `public/images/`
2. Update image paths in components

**Example**:
```javascript
<img
  src="/images/hero.jpg"
  alt="Hero image"
  className="w-full h-auto"
/>
```

### Modify Colors

**File**: `tailwind.config.js`

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#YOUR_COLOR',
        accent: '#YOUR_COLOR',
      },
    },
  },
}
```

### Add New Pages

1. Create folder in `src/app/` (e.g., `src/app/new-page/`)
2. Create `page.js` inside
3. Update navigation in `src/components/Header.js`

**Example**:
```javascript
// src/app/new-page/page.js
'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NewPage() {
  return (
    <>
      <Header />
      <main>
        {/* Your content */}
      </main>
      <Footer />
    </>
  )
}
```

## Styling

### Tailwind CSS Classes

The project uses Tailwind CSS. Common utilities:

```javascript
// Layout
className="flex items-center justify-between"
className="grid grid-cols-1 md:grid-cols-2"

// Spacing
className="p-6 mb-4 mt-8"

// Typography
className="text-xl font-bold text-gray-700"

// Colors
className="bg-black text-white"
className="hover:bg-gray-800 transition-colors"
```

### Custom Styles

**File**: `src/app/globals.css`

Add custom CSS here for components that need it.

## Building for Production

### Build

```bash
npm run build
```

This:
- Compiles Next.js
- Optimizes code
- Generates static pages where possible

### Test Production Build

```bash
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

**Automatic deployments** happen on every push to main branch.

### Environment Variables on Vercel

1. Go to Project Settings
2. Go to Environment Variables
3. Add variables from `.env.example`

### Other Deployment Options

#### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

#### AWS Amplify

1. Connect GitHub repository
2. Select project
3. Configure build settings
4. Deploy

#### Self-Hosted (Node.js)

```bash
# Install globally
npm install -g pm2

# Start with PM2
pm2 start npm --name "cornelia" -- start

# Setup auto-restart
pm2 startup
pm2 save
```

## Performance Optimization

### Images

- Use Next.js Image component
- Optimize before uploading
- Use modern formats (WebP)

### Code Splitting

- Next.js does this automatically
- Dynamic imports for large components

### CSS

- Tailwind purges unused CSS in production
- Minified automatically

## SEO

### Meta Tags

Update in `src/app/layout.js`:

```javascript
export const metadata = {
  title: 'Project Cornelia AINA Foundation',
  description: 'Your description here',
}
```

### Sitemap

Located at `public/sitemap.xml` - Update URLs before deployment.

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Dependencies Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### Styling Not Applied

- Check class names (Tailwind requires exact matches)
- Ensure file is in `src/app/` or `src/components/`
- Hard refresh browser (Ctrl+Shift+R)

## Performance Monitoring

### Lighthouse

Run in Chrome DevTools:
1. Open DevTools (F12)
2. Go to Lighthouse
3. Generate report

Aim for:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## Version Control

### Git Workflow

```bash
# Create branch
git checkout -b feature/your-feature

# Make changes
git add .
git commit -m "Add new feature"

# Push and create PR
git push origin feature/your-feature
```

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs

## Contact

For questions about this website:
- Email: contact@corneliafoundation.org
- Instagram: @project.cornelia
- LinkedIn: Project Cornelia
