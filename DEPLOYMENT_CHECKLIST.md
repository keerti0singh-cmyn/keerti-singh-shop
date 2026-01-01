# ✅ Deployment Checklist

Use this checklist before and after deploying your website to ensure everything is working correctly.

## Pre-Deployment Checklist

- [ ] MongoDB Atlas database is set up
- [ ] Database user has &quot;Read and write to any database&quot; permission
- [ ] IP whitelist is configured (0.0.0.0/0 for Vercel)
- [ ] `.env.local` file is configured with all required variables
- [ ] Admin email and password are set
- [ ] NEXTAUTH_SECRET is a strong, random string
- [ ] All dependencies are installed (`npm install`)
- [ ] Project builds successfully locally (`npm run build`)
- [ ] Website runs without errors on localhost (`npm run dev`)
- [ ] Admin panel login works locally
- [ ] Can add/edit/delete products locally
- [ ] Image upload works locally
- [ ] All pages load correctly
- [ ] Responsive design works on mobile/tablet
- [ ] All navigation links work

## GitHub Setup

- [ ] Repository created on GitHub
- [ ] `.gitignore` includes `.env.local` and `public/uploads`
- [ ] Code is pushed to GitHub
- [ ] `.env.local.example` is committed (for reference)
- [ ] Sensitive files are NOT in the repository

## Vercel Deployment Setup

- [ ] Vercel account is created
- [ ] GitHub repository is connected to Vercel
- [ ] Project is imported in Vercel
- [ ] All environment variables are added in Vercel settings:
  - [ ] `MONGODB_URI`
  - [ ] `NEXTAUTH_SECRET`
  - [ ] `NEXTAUTH_URL`
  - [ ] `ADMIN_EMAIL`
  - [ ] `ADMIN_PASSWORD`
- [ ] Build completes without errors
- [ ] Website is deployed successfully

## Post-Deployment Verification

### Basic Functionality

- [ ] Homepage loads correctly at deployed URL
- [ ] Navigation menu works
- [ ] About page loads
- [ ] Products page loads
- [ ] Contact page loads
- [ ] Footer displays correct information
- [ ] WhatsApp link works
- [ ] Call button works on mobile

### Admin Panel

- [ ] Admin panel is accessible
- [ ] Login works with correct credentials
- [ ] Can view all products
- [ ] Can add a new product
- [ ] Image upload works
- [ ] Can edit existing products
- [ ] Can delete products
- [ ] Product changes reflect on the website immediately

### SEO Features

- [ ] sitemap.xml is accessible: `your-domain.com/sitemap.xml`
- [ ] robots.txt is accessible: `your-domain.com/robots.txt`
- [ ] Meta titles and descriptions are correct
- [ ] Open Graph tags are working (test with Facebook debugger)
- [ ] Local Business schema is present (view page source)
- [ ] Google Maps embed works on contact page

### Performance & Responsiveness

- [ ] Website loads quickly (under 3 seconds)
- [ ] Images load with lazy loading
- [ ] Website is fully responsive
  - [ ] Works on mobile phones
  - [ ] Works on tablets
  - [ ] Works on desktops
- [ ] Text is readable on all devices
- [ ] Buttons are clickable on mobile

### Cross-Browser Testing

- [ ] Works on Google Chrome
- [ ] Works on Mozilla Firefox
- [ ] Works on Safari (if available)
- [ ] Works on Edge

## Security Checks

- [ ] Admin credentials are not default/guessable
- [ ] NEXTAUTH_SECRET is strong and unique
- [ ] MongoDB connection is secure (SSL/TLS)
- [ ] No sensitive data is exposed in frontend code
- [ ] Admin panel routes are protected

## Additional Optimization (Optional)

- [ ] Google Analytics is set up
- [ ] Google Search Console is configured
- [ ] Custom domain is set up
- [ ] SSL certificate is active (automatic with Vercel)
- [ ] Google Business Profile is created
- [ ] Website is submitted to local directories
- [ ] Social media pages are created

## Final Acceptance

- [ ] Client has reviewed the website
- [ ] All client feedback is addressed
- [ ] Contact information is accurate
- [ ] Business details are correct
- [ ] No broken links
- [ ] No console errors
- [ ] Website meets all requirements

## Troubleshooting Notes

**Common Issues:**

1. **Build fails on Vercel**:
   - Check environment variables are set correctly
   - Verify MongoDB connection string is correct
   - Check build logs for specific errors

2. **Admin panel not accessible**:
   - Clear browser cache
   - Check localStorage (may have stale data)
   - Verify admin credentials in env variables

3. **Images not loading**:
   - Ensure `public/uploads/` is properly configured
   - Check image file sizes
   - Verify upload API is working

4. **Database connection errors**:
   - Verify MongoDB IP whitelist includes Vercel IPs (0.0.0.0/0)
   - Check database user permissions
   - Ensure connection string is correct

---

## Contact Information

For support or questions:

- **Project Location**: `C:\Users\hp\keerti-singh-shop`
- **Main Documentation**: `README.md`
- **Quick Start**: `QUICKSTART.md`
- **Deployment Guide**: Section in `README.md`

---

**Last Updated**: {Date}
**Deployed By**: {Your Name}
**Status**: Ready for Production ✅
