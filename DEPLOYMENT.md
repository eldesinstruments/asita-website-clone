# Deployment Guide for ASITA Website Clone

This guide provides step-by-step instructions for deploying your ASITA website clone to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/eldesinstruments/asita-website-clone)

### Option 2: Manual Deployment via Vercel Dashboard

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Your Project**
   - Click "New Project" in your Vercel dashboard
   - Select "Import Git Repository"
   - Choose `eldesinstruments/asita-website-clone` from your GitHub repositories

3. **Configure Deployment Settings**
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `bun run build` (auto-configured)
   - **Install Command**: `bun install` (auto-configured)
   - **Output Directory**: `.next` (auto-configured)

4. **Deploy**
   - Click "Deploy"
   - Wait for the deployment to complete (~2-3 minutes)
   - Your site will be available at a unique URL like `https://asita-website-clone-abc123.vercel.app`

### Option 3: Vercel CLI Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy from your local machine**
   ```bash
   cd asita-clone
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new one
   - Confirm settings
   - Deploy

## 🌐 Deploy to Netlify

### Via Netlify Dashboard

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

2. **New Site from Git**
   - Click "New site from Git"
   - Choose GitHub
   - Select `eldesinstruments/asita-website-clone`

3. **Configure Build Settings**
   - **Build command**: `bun run build`
   - **Publish directory**: `.next`
   - **Environment variables**: None required

4. **Deploy**
   - Click "Deploy site"
   - Your site will be available at a Netlify URL

### Via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and Deploy**
   ```bash
   cd asita-clone
   bun run build
   netlify deploy --prod --dir=.next
   ```

## 📱 Deploy to GitHub Pages

1. **Enable GitHub Pages**
   - Go to your repository settings on GitHub
   - Scroll to "Pages" section
   - Select "GitHub Actions" as source

2. **Create Workflow File**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         
         - name: Setup Bun
           uses: oven-sh/setup-bun@v1
           
         - name: Install dependencies
           run: bun install
           
         - name: Build
           run: bun run build
           
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

3. **Configure Next.js for Static Export**
   Add to `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   };
   
   module.exports = nextConfig;
   ```

## 🔧 Environment Variables

The project doesn't require environment variables for basic functionality. However, if you add features that need environment variables:

### Vercel
- Add via Vercel dashboard → Project Settings → Environment Variables

### Netlify
- Add via Netlify dashboard → Site Settings → Environment Variables

### Example Environment Variables (if needed)
```bash
# Contact form (if using a service like Formspree)
NEXT_PUBLIC_FORMSPREE_ID=your_form_id

# Analytics (if using Google Analytics)
NEXT_PUBLIC_GA_ID=your_ga_id

# Any API keys for additional features
NEXT_PUBLIC_API_KEY=your_api_key
```

## 🌍 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as shown

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update your domain's DNS settings

### DNS Configuration
For both platforms, you'll typically need to:
- Add a CNAME record pointing to your platform's URL
- Or add A records for apex domains

## 📊 Performance Optimization

The project is already optimized for production with:
- ✅ Next.js static optimization
- ✅ Image optimization configured
- ✅ Framer Motion lazy loading
- ✅ Component code splitting
- ✅ CSS optimization with Tailwind

## 🔍 Post-Deployment Checklist

After deployment, verify:
- [ ] Homepage loads correctly
- [ ] All interactive features work (search, contact form, newsletter)
- [ ] Animations and transitions are smooth
- [ ] Responsive design works on mobile
- [ ] Images load properly
- [ ] Console shows no errors

## 🆘 Troubleshooting

### Build Failures
- Check build logs for specific errors
- Ensure all dependencies are properly installed
- Verify TypeScript compilation

### Runtime Errors
- Check browser console for JavaScript errors
- Verify all external image URLs are accessible
- Test interactive components

### Performance Issues
- Use Lighthouse to audit performance
- Optimize images if needed
- Check for console warnings

## 📧 Support

If you encounter issues:
1. Check the deployment platform's status page
2. Review build logs carefully
3. Test locally first: `bun dev`
4. Consult platform-specific documentation

---

**Current Repository**: [eldesinstruments/asita-website-clone](https://github.com/eldesinstruments/asita-website-clone)

**Live Demo**: Will be available after deployment ↗️