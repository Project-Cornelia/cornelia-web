# Project Cornelia Website - Complete Next.js Implementation

A modern, responsive website for Project Cornelia AINA Foundation built with Next.js 14, React 18, and Tailwind CSS.

## 🌟 Features

- ✨ **Modern Design** - Clean, professional, and responsive
- 🚀 **Next.js 14** - Latest framework with App Router
- ⚡ **Fast Performance** - Optimized for speed and SEO
- 📱 **Mobile First** - Fully responsive on all devices
- 🎨 **Tailwind CSS** - Utility-first styling
- ♿ **Accessible** - WCAG compliant components
- 🔍 **SEO Optimized** - Meta tags, sitemap, robots.txt
- 📧 **Contact Form** - Functional contact page
- 🎯 **Dynamic Pages** - Easy to customize
- 🔗 **Social Integration** - Instagram, LinkedIn links
- 📊 **Analytics Ready** - Google Analytics support
- 🛡️ **Secure** - Privacy Policy & Terms of Service

## 📋 Pages Included

### Public Pages
- **Home** (`/`) - Landing page with hero, story, stats, approach, collaborators
- **About** (`/about`) - Organization mission and core values
- **Our Work** (`/our-work`) - Work overview and impact statistics
- **Blog** (`/blog`) - Blog posts and articles
- **Initiatives** (`/initiatives`) - Detailed project descriptions
- **Resources** (`/resources`) - Downloadable guides and toolkits
- **Members** (`/members`) - Team member showcase
- **Contact** (`/contact`) - Contact form and information
- **Privacy Policy** (`/privacy`) - Privacy protection information
- **Terms of Service** (`/terms`) - Legal terms
- **404** (`/not-found`) - Page not found

## 🎯 Key Sections

### Homepage Sections
1. **Hero Section** - Tagline and call-to-action
2. **Our Story** - Organization history and mission
3. **Impact Stats** - 50+ months, 7000+ impacted, ₹19,000+ fundraised
4. **Our Approach** - Three core pillars (Collective, Criticism, Conversation)
5. **Collaborators** - Partner organizations showcase
6. **Call to Action** - Join the movement buttons

## 🛠️ Tech Stack

```
Frontend Framework:  Next.js 14.0
UI Library:          React 18.2
Styling:             Tailwind CSS 3.3
CSS Processing:      PostCSS, Autoprefixer
Node:                16+ required
Package Manager:     npm 7+
```

## 📦 Installation

### Prerequisites
- Node.js 16+ ([Download](https://nodejs.org/))
- npm 7+ (comes with Node.js)
- Git (optional)

### Quick Start

```bash
# 1. Extract the project
unzip cornelia-website.zip
cd cornelia-website

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
# Build the project
npm run build

# Test production build
npm run start

# Visit http://localhost:3000
```

## 📁 Project Structure

```
cornelia-website/
├── src/
│   ├── app/
│   │   ├── page.js                 # Home page
│   │   ├── layout.js               # Root layout
│   │   ├── globals.css             # Global styles
│   │   ├── about/page.js           # About page
│   │   ├── our-work/page.js        # Our Work page
│   │   ├── blog/page.js            # Blog page
│   │   ├── initiatives/page.js     # Initiatives page
│   │   ├── resources/page.js       # Resources page
│   │   ├── members/page.js         # Members page
│   │   ├── contact/page.js         # Contact page
│   │   ├── privacy/page.js         # Privacy Policy
│   │   ├── terms/page.js           # Terms of Service
│   │   └── not-found.js            # 404 page
│   └── components/
│       ├── Header.js               # Navigation header
│       └── Footer.js               # Footer with newsletter
├── public/
│   ├── sitemap.xml                 # SEO sitemap
│   └── robots.txt                  # Search engine robots
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example                    # Environment variables template
├── README.md                       # This file
├── DEVELOPMENT.md                  # Development guide
├── DEPLOYMENT.md                   # Deployment guide
└── .gitignore
```

## 🎨 Customization Guide

### Update Organization Info

**Contact Email** - `src/components/Footer.js`
```javascript
contact@corneliafoundation.org
```

**Organization Name** - Multiple files (use Find & Replace)
```
Project Cornelia AINA Foundation
```

### Update Links

**Social Media Links** - `src/components/Footer.js`
- Instagram: https://www.instagram.com/project.cornelia/
- LinkedIn: https://www.linkedin.com/company/project-cornelia/

**External Forms** - Various pages
- Work with us: https://forms.gle/auEAXJ96GoRzLPmr9
- Write for us: https://forms.gle/dx3ERQHoTLGF1pcx8
- Donate: https://milaap.org/fundraisers/plc-ahaana-againstacid

### Add Images

1. Create folder: `public/images/`
2. Add your images
3. Update image paths in components

```javascript
<img src="/images/filename.jpg" alt="Description" />
```

### Change Colors

**File**: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      accent: '#YOUR_COLOR',
    },
  },
}
```

### Add New Pages

1. Create folder: `src/app/your-page/`
2. Create: `src/app/your-page/page.js`
3. Import Header & Footer components
4. Add to navigation in `src/components/Header.js`

## 🚀 Deployment

### Easiest: Vercel (Recommended)

```bash
# 1. Push to GitHub
git push origin main

# 2. Go to https://vercel.com
# 3. Click "Import Project"
# 4. Select your repository
# 5. Click "Deploy"
```

**Your site goes live instantly!** ✨

### Alternative Platforms

- **Netlify** - GitHub integration, auto-deploy
- **AWS Amplify** - AWS ecosystem
- **Self-hosted** - Any Node.js server (DigitalOcean, Heroku, etc.)

See `DEPLOYMENT.md` for detailed instructions.

## 📚 Available Scripts

```bash
# Development
npm run dev          # Start dev server on :3000

# Production
npm run build        # Build for production
npm run start        # Run production server
npm run lint         # Run ESLint

# Analysis
npm run analyze      # Analyze bundle size
```

## 🔍 SEO & Performance

### Included SEO Features
- ✅ Meta tags and descriptions
- ✅ Sitemap (`public/sitemap.xml`)
- ✅ Robots.txt (`public/robots.txt`)
- ✅ Open Graph tags
- ✅ Mobile responsive
- ✅ Fast Core Web Vitals

### Performance Tips
- Images are optimized
- Code splitting automatic
- CSS minification automatic
- Static generation where possible

### Check Performance
```bash
# Run Lighthouse audit
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Analyze page load"
```

Target scores: 90+ for all metrics

## 📧 Contact Form Setup

The contact form is fully functional with client-side validation.

To add email notifications, install:

```bash
npm install @sendgrid/mail
# or
npm install resend
```

Then configure in `src/app/contact/page.js`

## 🔐 Security

- SSL/TLS automatic (on Vercel, Netlify, AWS)
- Environment variables in `.env.local`
- No sensitive data in code
- Privacy Policy included
- Terms of Service included

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
lsof -ti:3000 | xargs kill -9
# or use different port
npm run dev -- -p 3001
```

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styling Not Applied
- Clear browser cache (Ctrl+Shift+Del)
- Rebuild: `npm run build`
- Check Tailwind class names

### Build Errors
```bash
rm -rf .next
npm run build
```

## 📖 Documentation

- **`README.md`** - This file
- **`DEVELOPMENT.md`** - Development setup and customization
- **`DEPLOYMENT.md`** - Deployment to various platforms
- **`package.json`** - Dependencies and scripts
- **`.env.example`** - Environment variables template

## 🔗 Useful Links

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

### Hosting
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify)

### Tools
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web Vitals](https://web.dev/vitals/)

## 💡 Tips & Best Practices

### Content Updates
1. Edit content directly in page files
2. No database needed
3. Use Markdown for blog posts
4. Store images in `public/` folder

### SEO Optimization
1. Update meta tags in `layout.js`
2. Use descriptive image alt text
3. Add keywords naturally
4. Submit sitemap to Google Search Console

### Performance
1. Compress images before uploading
2. Use WebP format where supported
3. Minimize JavaScript
4. Enable caching

### Security
1. Keep dependencies updated: `npm update`
2. Don't commit `.env` files
3. Use HTTPS always
4. Regular security audits

## 📄 License

© 2024 Project Cornelia AINA Foundation. All rights reserved.

## 👥 Support & Contact

- **Email**: contact@corneliafoundation.org
- **Instagram**: [@project.cornelia](https://www.instagram.com/project.cornelia/)
- **LinkedIn**: [Project Cornelia](https://www.linkedin.com/company/project-cornelia/)

## 🎯 Roadmap

Future enhancements planned:
- [ ] Blog with dynamic content
- [ ] Member authentication
- [ ] Event calendar
- [ ] Donation integration
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Comment system for blog

## 🤝 Contributing

Found a bug or have a suggestion? Please create an issue or submit a pull request.

## ✨ Credits

Built with ❤️ using Next.js, React, and Tailwind CSS.

---

**Ready to deploy?** See `DEPLOYMENT.md` for step-by-step instructions.

**Want to customize?** See `DEVELOPMENT.md` for detailed guides.

**Questions?** Contact us at contact@corneliafoundation.org

