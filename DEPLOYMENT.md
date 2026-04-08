# Deployment Guide

This guide covers deploying the Project Cornelia website to various platforms.

## Quick Start Deployment

### Option 1: Vercel (Easiest)

**Time**: 5 minutes

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Connect GitHub** account
3. **Import project** from your GitHub repository
4. **Click Deploy** - Done! 🎉

**Your site goes live at**: `your-project.vercel.app`

**Custom Domain**:
1. Go to Project Settings
2. Domains → Add Domain
3. Point your domain DNS to Vercel
4. Deploy

### Option 2: Netlify

**Time**: 10 minutes

1. **Sign up** at [netlify.com](https://netlify.com)
2. **Connect GitHub**
3. **Select repository**
4. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. **Deploy**

### Option 3: AWS Amplify

**Time**: 15 minutes

1. **Sign up** at [aws.amazon.com/amplify](https://aws.amazon.com/amplify)
2. **Connect GitHub**
3. **Select repository**
4. **Review build settings** (should auto-detect)
5. **Deploy**

## Environment Variables

### On Vercel

```
Dashboard → Settings → Environment Variables

Add:
NEXT_PUBLIC_SITE_NAME = "Project Cornelia AINA Foundation"
NEXT_PUBLIC_CONTACT_EMAIL = "contact@corneliafoundation.org"
NEXT_PUBLIC_INSTAGRAM_URL = "https://www.instagram.com/project.cornelia/"
NEXT_PUBLIC_LINKEDIN_URL = "https://www.linkedin.com/company/project-cornelia/"
NEXT_PUBLIC_WORK_WITH_US_FORM = "https://forms.gle/..."
NEXT_PUBLIC_WRITE_FOR_US_FORM = "https://forms.gle/..."
NEXT_PUBLIC_DONATE_LINK = "https://milaap.org/..."
```

## Custom Domain Setup

### On Vercel

```
1. Go to Project Settings
2. Domains
3. Add domain: cornelia-foundation.org
4. Update DNS records at your registrar

CNAME Record:
Name: www
Value: cname.vercel-dns.com

Root Domain (@):
A Record: 76.76.19.131
AAAA Record: 2604:4880:0:20::6c6d:1301
```

### DNS Providers

**GoDaddy**:
- DNS Management → Add CNAME

**Namecheap**:
- Domain List → DNS → Add CNAME Record

**CloudFlare**:
- DNS → Add CNAME/A Records

## Pre-Deployment Checklist

- [ ] Updated `.env.local` with correct values
- [ ] Updated `public/sitemap.xml` with correct domain
- [ ] Updated metadata in `src/app/layout.js`
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] All images are in `public/` folder
- [ ] Contact form is configured (if using)
- [ ] Social media links are correct
- [ ] All external links work

## Production Build Optimization

### Before Deployment

```bash
# Test production build locally
npm run build
npm run start

# Visit http://localhost:3000 to verify
```

### Optimize Images

1. Compress images before uploading
2. Use modern formats (WebP)
3. Example tools:
   - TinyPNG: https://tinypng.com
   - ImageOptim: https://imageoptim.com

### Performance Check

```bash
# Build analysis
npm run build

# Check bundle size
npx next/bundle-analyzer
```

## Monitoring & Analytics

### Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get measurement ID (G-XXXXXXXXXX)
3. Install `next-google-analytics`

```bash
npm install next-google-analytics
```

4. Update `src/app/layout.js`

### Vercel Analytics

Automatically enabled on Vercel. View at:
```
Dashboard → Analytics
```

### Error Monitoring

Consider adding Sentry for error tracking:

```bash
npm install @sentry/nextjs
```

## SSL/HTTPS

- Vercel: Automatic (all domains)
- Netlify: Automatic (all domains)
- AWS Amplify: Automatic (all domains)

## Database (If Needed)

For contact form submissions:

### Option 1: Firebase

```bash
npm install firebase
```

### Option 2: MongoDB

```bash
npm install mongodb
```

### Option 3: Supabase

```bash
npm install @supabase/supabase-js
```

## Email Configuration

For contact form replies:

### SendGrid

```bash
npm install @sendgrid/mail
```

### Resend

```bash
npm install resend
```

### Gmail (SMTP)

Use SMTP credentials in environment variables.

## Backup & Recovery

### GitHub Backup

Your code is automatically backed up on GitHub:

```bash
# Clone latest version
git clone https://github.com/username/cornelia-website.git
```

### Database Backup

If using a database, enable automatic backups:
- **Vercel**: Automatic
- **Firebase**: Automatic
- **MongoDB**: Atlas automatic backups
- **Supabase**: Daily backups

## Post-Deployment

### Verify Website

```
1. Visit your domain
2. Test all navigation links
3. Check forms work
4. Verify images load
5. Test on mobile
6. Check SEO in Google Search Console
```

### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → Your domain
3. Verify ownership
4. Submit `sitemap.xml`
5. Monitor performance

### Cloudflare (Optional, for extra performance)

1. Sign up at [cloudflare.com](https://cloudflare.com)
2. Add site
3. Update nameservers at registrar
4. Enable caching/compression

## Continuous Deployment

Both Vercel and Netlify support:

- **Auto-deploy on push**: Every code push auto-deploys
- **Preview deployments**: PR preview URLs
- **Rollback**: One-click rollback to previous version

## Scaling

As traffic grows:

1. Vercel automatically scales (no action needed)
2. Monitor analytics
3. Optimize slow pages
4. Consider CDN (Cloudflare)

## Troubleshooting Deployment

### Build Fails

```bash
# Clear cache
npm run build

# Check for errors
npm run lint
```

### Environment Variables Not Working

```
1. Verify .env.local syntax
2. Prefix variables with NEXT_PUBLIC_ (client-side)
3. Redeploy after changes
4. Check in deployment logs
```

### Styling Not Loading

```
1. Rebuild: npm run build
2. Clear browser cache
3. Check Tailwind config
4. Verify CSS imports
```

### Images Not Showing

```
1. Verify images in public/ folder
2. Check image paths (use /images/filename)
3. Rebuild and redeploy
```

## Support

- **Vercel Support**: https://vercel.com/help
- **Netlify Support**: https://docs.netlify.com
- **AWS Support**: https://console.aws.amazon.com/support

## Cost Estimates

| Platform | Price | Features |
|----------|-------|----------|
| Vercel | Free | Generous free tier, $20+/month for advanced |
| Netlify | Free | Generous free tier, $19+/month for advanced |
| AWS Amplify | Free | Free tier then $0.50-$2/GB bandwidth |
| Self-Hosted | $5+/month | DigitalOcean, Linode |

## Next Steps

1. ✅ Deploy website
2. ✅ Set up custom domain
3. ✅ Add to Google Search Console
4. ✅ Set up analytics
5. ✅ Configure contact form
6. ✅ Add SSL certificate
7. ✅ Monitor performance
8. ✅ Plan content updates
