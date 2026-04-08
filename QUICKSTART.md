# ⚡ Quick Start Guide

Get the Project Cornelia website up and running in minutes!

## 🚀 5-Minute Setup

### Step 1: Extract & Install (2 min)
```bash
# Extract the zip file
unzip cornelia-website-complete.zip
cd cornelia-website

# Install dependencies
npm install
```

### Step 2: Run Development Server (1 min)
```bash
npm run dev
```

### Step 3: Open in Browser (1 min)
Visit: **http://localhost:3000**

### Step 4: Explore Pages
- Home page - `/`
- About - `/about`
- Our Work - `/our-work`
- Blog - `/blog`
- Contact - `/contact`
- And 6 more pages!

✅ **You're live!** 🎉

---

## 🎨 5-Minute Customization

### Quick Edits

**1. Update Email Address** (1 min)
```bash
# Open: src/components/Footer.js
# Find: contact@corneliafoundation.org
# Replace with your email
```

**2. Update Organization Name** (1 min)
```bash
# Open: src/app/layout.js
# Find: "Project Cornelia AINA Foundation"
# Replace with your organization name
# Use Find & Replace for other occurrences
```

**3. Update Social Links** (1 min)
```bash
# Open: src/components/Footer.js
# Update Instagram URL
# Update LinkedIn URL
```

**4. Update External Links** (1 min)
```bash
# Open different pages and update:
# - Google Form links
# - Donation link
# - Any other external links
```

**5. Save & Refresh**
```bash
# Save all files
# Browser will auto-refresh (hot reload)
```

✅ **Basic customization done!** 🎨

---

## 📦 Deployment in 5 Minutes

### Option 1: Vercel (Easiest)

**Step 1**: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

**Step 2**: Deploy on Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

✅ **Live in minutes!** 🌐

---

### Option 2: Netlify

**Step 1**: Connect GitHub
1. Go to https://netlify.com
2. Click "Connect Git Repository"
3. Select your repo

**Step 2**: Configure & Deploy
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Click "Deploy"

✅ **Live!** 🌐

---

### Option 3: Local Testing First

**Before deploying**, test locally:

```bash
# Build for production
npm run build

# Run production build
npm run start

# Visit http://localhost:3000
```

If everything looks good, then deploy!

---

## 📋 Checklist

- [ ] Extracted files
- [ ] Ran `npm install`
- [ ] Started dev server: `npm run dev`
- [ ] Opened http://localhost:3000
- [ ] Updated email address
- [ ] Updated organization name
- [ ] Updated social media links
- [ ] Updated external form links
- [ ] Ready to deploy!

---

## 🔗 Important Files to Edit

### Content & Links
- `src/app/page.js` - Home page content
- `src/app/about/page.js` - About page
- `src/app/our-work/page.js` - Our work
- `src/components/Header.js` - Navigation & forms
- `src/components/Footer.js` - Footer & email

### Configuration
- `.env.local` - Environment variables
- `tailwind.config.js` - Colors & styling
- `public/sitemap.xml` - SEO sitemap

---

## 🆘 Common Issues & Solutions

### "npm command not found"
**Solution**: Install Node.js from https://nodejs.org/

### "Port 3000 already in use"
**Solution**: 
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### "Styling looks broken"
**Solution**:
```bash
# Clear cache and restart
rm -rf .next
npm run dev

# Hard refresh browser (Ctrl+Shift+R)
```

### "Can't find module"
**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

---

## 📱 Browser Testing

After running `npm run dev`, open:

- **Desktop**: http://localhost:3000
- **Mobile**: Use Chrome DevTools (F12) → Toggle Device Toolbar
- **Tablet**: Use Chrome DevTools → Select Tablet

Test:
- ✅ Navigation menu
- ✅ Mobile hamburger menu
- ✅ Contact form
- ✅ All links work
- ✅ Images display

---

## 🚀 Deploy Production Build

### Test Production Build First
```bash
# Create production build
npm run build

# Run production version
npm run start

# Test at http://localhost:3000
```

### Then Deploy
When ready, use Vercel/Netlify (5 minutes)

---

## 📚 Learn More

- **Setup Details** → Read `README.md`
- **Customization** → Read `DEVELOPMENT.md`
- **Deployment** → Read `DEPLOYMENT.md`
- **Features** → Read `FEATURES.md`

---

## 🎯 Your Website is Ready!

### What You Have:
✅ 11 fully functional pages
✅ Mobile responsive design
✅ Contact form
✅ Blog section
✅ Team showcase
✅ Professional styling
✅ SEO optimized
✅ Easy to customize
✅ Ready to deploy

### What's Next:
1. ✏️ Edit content with your information
2. 🖼️ Add your images
3. 🎨 Customize colors (optional)
4. 🚀 Deploy to the internet
5. 📊 Set up analytics
6. 📧 Configure email notifications

---

## 💡 Pro Tips

1. **Use VS Code** - Better code editor experience
2. **Use Git** - Version control for your changes
3. **Test on Mobile** - Use Chrome DevTools
4. **Backup Content** - Keep important content saved
5. **Monitor Analytics** - Track visitor behavior

---

## ✨ That's It!

You now have a professional, modern website ready to go!

- **Questions?** See the documentation files
- **Need help?** Check troubleshooting section
- **Want to customize more?** Read DEVELOPMENT.md

**Let's go live! 🚀**

---

**Next Command**: `npm run dev` → Open http://localhost:3000
