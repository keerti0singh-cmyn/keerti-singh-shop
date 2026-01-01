# Keerti Singh Shop Website

A complete production-ready website for Keerti Singh, a local retail shop in Mauaima, Prayagraj, India. Built with Next.js, MongoDB, and Tailwind CSS.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
- [Admin Panel Usage](#admin-panel-usage)
- [Image Management Guide](#image-management-guide)
- [SEO Features](#seo-features)
- [MongoDB Atlas Setup](#mongodb-atlas-setup)
- [Vercel Deployment](#vercel-deployment)
- [Project Structure](#project-structure)

---

## ✨ Features

- **Modern, Clean Design**: Custom-designed UI, not a generic template
- **Mobile-First & Responsive**: Works perfectly on all devices
- **Fast Loading & SEO-Optimized**: Built for performance and search engines
- **Product Management**: Display products with images, descriptions, and prices
- **Admin Panel**: Secure dashboard to manage products without coding
- **Image Upload**: Easy image management through admin panel
- **Local SEO**: Schema markup, sitemap, robots.txt, NAP consistency
- **WhatsApp Integration**: Click-to-chat functionality
- **Call Buttons**: One-click calling on mobile

---

## 🛠 Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, Tailwind CSS 4
- **Backend**: Node.js API Routes, NextAuth.js
- **Database**: MongoDB Atlas (Free Tier)
- **Hosting**: Vercel (Compatible)
- **Image Handling**: Next.js Image optimization with lazy loading

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher): [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB Atlas Account**: Free account at [mongodb.com](https://www.mongodb.com/cloud/atlas)
- **Git** (optional but recommended)

---

## 💻 Local Development Setup

Follow these steps to run the website on your localhost:

### Step 1: Clone or Download the Project

```bash
cd keerti-singh-shop
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up MongoDB Atlas (First Time Only)

1. Log in to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Click &quot;Build a Database&quot;
3. Choose &quot;M0 Sandbox&quot; (Free) and click &quot;Create&quot;
4. Select a cloud provider and region closest to you
5. Create a username and password (**Note them down!**)
6. Add your IP address: Network Access → Add IP Address → Select &quot;Allow Access from Anywhere&quot;
7. Click &quot;Finish & Close&quot;
8. Click &quot;Connect&quot; → &quot;Connect your application&quot;
9. Copy the connection string

Your connection string will look like:
```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### Step 4: Configure Environment Variables

1. Create a file named `.env.local` in the project root
2. Copy the following content and fill in your details:

```env
# MongoDB Connection (Replace with your Atlas connection string)
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/keerti-singh-shop?retryWrites=true&w=majority

# NextAuth Secret (Generate a random string)
NEXTAUTH_SECRET=your-super-secret-random-key-change-this-in-production

# Admin Credentials
ADMIN_EMAIL=admin@keertisingh.com
ADMIN_PASSWORD=your-secure-password

# NextAuth URL (For local development)
NEXTAUTH_URL=http://localhost:3000
```

**Important:**
- Replace `YOUR_USERNAME` and `YOUR_PASSWORD` with your MongoDB credentials
- Generate a random `NEXTAUTH_SECRET` using: `openssl rand -base64 32` (Mac/Linux) or online generator
- Change `ADMIN_EMAIL` and `ADMIN_PASSWORD` to your preferred credentials

### Step 5: Seed the Database

This will create the admin account and sample products:

```bash
npm run seed
```

You should see:
```
✅ Admin created successfully
✅ Sample products created successfully
🎉 Database seeded successfully!
```

### Step 6: Start the Development Server

```bash
npm run dev
```

### Step 7: Access the Website

Open your browser and visit:
- **Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

**Login Credentials:**
- Email: Whatever you set in `ADMIN_EMAIL`
- Password: Whatever you set in `ADMIN_PASSWORD`

---

## 🔐 Admin Panel Usage

### Accessing the Admin Panel

1. Go to http://localhost:3000/admin
2. Enter your admin email and password
3. Click &quot;Sign In&quot;

### Managing Products

#### Add a New Product

1. Click the &quot;Add Product&quot; button (orange button in top-right)
2. A modal will appear with product form
3. Follow the steps below to add a product (see Image Management Guide)
4. Click &quot;Save Product&quot;

#### Edit a Product

1. Find the product you want to edit
2. Click the blue &quot;Edit&quot; button on the product card
3. Update any fields as needed
4. Click &quot;Update Product&quot; to save changes

#### Delete a Product

1. Find the product you want to delete
2. Click the red &quot;Delete&quot; button on the product card
3. Confirm the deletion

---

## 📸 Image Management Guide

### How Images Work in This System

**IMPORTANT: No coding required!** All image operations are done through the admin panel UI.

### Adding a Product Image

1. In the admin panel, click &quot;Add Product&quot;
2. Click the &quot;Choose Image&quot; button
3. Select an image from your computer (JPG, PNG)
4. The image will automatically upload and show a preview
5. Fill in other product details (name, description, price, category)
6. Click &quot;Save Product&quot;

**That's it!** The image is now uploaded to your website and will display on the products page.

### Changing a Product Image

1. Click &quot;Edit&quot; on the product
2. Click the &quot;Choose Image&quot; button
3. Select a new image from your computer
4. The new image will upload automatically
5. Click &quot;Update Product&quot;

The old image will be replaced with the new one.

### Deleting a Product Image

**Note: You must upload a new image to replace it - you cannot have a product without an image.**

1. Click &quot;Edit&quot; on the product
2. Click the &quot;X&quot; button on the image preview to remove the current image
3. Upload a new image using &quot;Choose Image&quot;
4. Click &quot;Update Product&quot;

### Image Requirements

- **Format**: JPG or PNG
- **Size**: Maximum 5MB
- **Recommended dimensions**: Square or 4:3 ratio (e.g., 800x600 or 1000x1000)
- **Quality**: Clear, well-lit product photos work best

### Where Are Images Stored?

Images are automatically stored in the `public/uploads/` directory. You don't need to manually manage files - the system handles everything through the admin panel.

---

## 🔍 SEO Features

This website is optimized for local SEO with the following features:

### Implemented SEO Elements

1. **Meta Tags**: Every page has proper meta titles and descriptions
2. **Open Graph Tags**: Social media preview cards
3. **Twitter Cards**: Optimized for Twitter sharing
4. **Local Business Schema (JSON-LD)**: Helps Google understand your business
5. **Sitemap.xml**: Automatically generated for search engines
6. **Robots.txt**: Guides search engine crawlers
7. **SEO-Friendly URLs**: Clean, readable URLs
8. **NAP Consistency**: Name, Address, Phone consistent across all pages
9. **Mobile Optimization**: Fully responsive design
10. **Fast Loading**: Optimized images and code splitting

### Target Keywords

- Mauaima shop
- Local shop in Prayagraj
- Shop near me
- Keerti Singh shop Mauaima

### Verifying SEO Setup

1. **Test Schema Markup**:
   - Visit https://validator.schema.org/
   - Enter your website URL
   - Check for LocalBusiness schema

2. **Test Mobile Friendliness**:
   - Visit https://search.google.com/test/mobile-friendly
   - Enter your website URL

3. **Test Page Speed**:
   - Visit https://pagespeed.web.dev/
   - Enter your website URL

4. **Check Sitemap**:
   - Visit http://localhost:3000/sitemap.xml
   - Verify all pages are listed

5. **Check Robots.txt**:
   - Visit http://localhost:3000/robots.txt
   - Verify it includes sitemap URL

### Local SEO Best Practices

After deployment, consider these additional steps:

1. **Google Business Profile**: Create or claim your business listing
2. **Local Directories**: Submit to Justdial, IndiaMART, etc.
3. **Social Media**: Create Facebook/Instagram pages for your shop
4. **Customer Reviews**: Encourage satisfied customers to leave reviews
5. **Backlinks**: Get listed in local business directories

---

## 🗄️ MongoDB Atlas Setup

### Creating a New Database

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Log in or create an account
3. Click &quot;Build a Database&quot;
4. Select &quot;M0 Sandbox&quot; (Free Tier)
5. Click &quot;Create&quot;

### Configuring Database Access

1. **Database Access** (from sidebar):
   - Click &quot;+ Create New User&quot;
   - Enter username and password (save these!)
   - Select &quot;Read and write to any database&quot;
   - Click &quot;Add User&quot;

2. **Network Access** (from sidebar):
   - Click &quot;+ Add IP Address&quot;
   - Select &quot;Allow Access from Anywhere&quot; (or add your specific IP)
   - Click &quot;Confirm&quot;

3. **Get Connection String**:
   - Click &quot;Connect&quot; on your cluster
   - Select &quot;Drivers&quot;
   - Copy the connection string
   - Replace `<password>` with your database password

### Connection String Format

```
mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/keerti-singh-shop?retryWrites=true&w=majority
```

Add this to your `.env.local` file as `MONGODB_URI`.

---

## 🚀 Vercel Deployment

Follow these step-by-step instructions to deploy your website to Vercel.

### Prerequisites

- GitHub account
- Vercel account (free)
- MongoDB Atlas account with database set up

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Initialize git in your project (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Add remote origin and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/keerti-singh-shop.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect Vercel to GitHub

1. Log in to [Vercel](https://vercel.com/)
2. Click &quot;Add New...&quot; → &quot;Project&quot;
3. Click &quot;Import&quot; next to your GitHub repository
4. Vercel will automatically detect Next.js

### Step 3: Configure Environment Variables

On the Vercel project settings page:

1. Go to &quot;Settings&quot; → &quot;Environment Variables&quot;
2. Add the following variables:

| Name | Value | Environment |
|------|-------|-------------|
| `MONGODB_URI` | Your MongoDB connection string | All |
| `NEXTAUTH_SECRET` | Your generated secret | All |
| `NEXTAUTH_URL` | Your Vercel domain | All |
| `ADMIN_EMAIL` | Your admin email | All |
| `ADMIN_PASSWORD` | Your admin password | All |

3. Click &quot;Save&quot;

**Important:**
- For `NEXTAUTH_URL`, after deployment, update it to: `https://your-project.vercel.app`
- Click &quot;Redeploy&quot; after updating `NEXTAUTH_URL`

### Step 4: Deploy

1. Click &quot;Deploy&quot; button
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site is now live at `https://your-project-name.vercel.app`

### Step 5: Seed Database on Production

Since we can't run seed scripts on Vercel directly:

1. Access your admin panel at `https://your-project.vercel.app/admin`
2. Log in with your credentials
3. The first login will automatically create the admin account
4. Use the admin panel to add products manually

**OR** (Advanced) Use MongoDB Atlas Data Explorer:
1. Go to your MongoDB Atlas dashboard
2. Click &quot;Browse Collections&quot;
3. Manually insert sample products

### Step 6: Verify Deployment

Check these items:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Products page displays
- [ ] Contact page loads
- [ ] Admin panel is accessible
- [ ] Admin login works
- [ ] Can add/edit/delete products
- [ ] Image upload works
- [ ] Mobile responsive
- [ ] sitemap.xml accessible: `https://your-domain.com/sitemap.xml`
- [ ] robots.txt accessible: `https://your-domain.com/robots.txt`

### Custom Domain (Optional)

1. Go to Vercel project → &quot;Settings&quot; → &quot;Domains&quot;
2. Enter your custom domain (e.g., `keertisinghshop.com`)
3. Follow Vercel's DNS instructions
4. Wait for DNS propagation (usually 24-48 hours)

### Post-Deployment Tasks

1. **Update Admin Credentials**: Change default password immediately
2. **Test Image Upload**: Add a test product with image
3. **Test All Features**: Ensure everything works as expected
4. **Monitor Analytics**: Set up Google Analytics if needed
5. **Submit to Search Engines**:
   - Submit sitemap to Google Search Console
   - Submit sitemap to Bing Webmaster Tools

---

## 📁 Project Structure

```
keerti-singh-shop/
├── app/                      # Next.js App Router
│   ├── admin/               # Admin panel pages
│   │   ├── page.tsx        # Admin login
│   │   └── dashboard/      # Admin dashboard
│   │       └── page.tsx
│   ├── api/                # API routes
│   │   ├── auth/           # Authentication
│   │   ├── products/       # Products CRUD
│   │   └── upload/         # Image upload
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── products/           # Products page
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── robots.ts           # Robots.txt
│   └── sitemap.ts          # Sitemap.xml
├── components/             # React components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/                    # Utility libraries
│   └── mongodb.ts          # MongoDB connection
├── models/                 # Mongoose models
│   ├── Admin.ts
│   └── Product.ts
├── public/                 # Static files
│   └── uploads/            # Uploaded images (git-ignored)
├── scripts/                # Scripts
│   └── seed.ts             # Database seed script
├── .env.local              # Environment variables (git-ignored)
├── .env.local.example      # Example environment file
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md              # This file
```

---

## 🆘 Troubleshooting

### Database Connection Issues

**Problem**: `MongoServerError: bad auth`

**Solution**:
- Check MongoDB password in `MONGODB_URI`
- Ensure user has &quot;Read and write to any database&quot; permission
- Try IP whitelist: Add `0.0.0.0/0` in Network Access

### Admin Panel Not Working

**Problem**: Cannot log in to admin panel

**Solution**:
- Check `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env.local`
- Restart development server after changing env variables
- Clear browser cache and localStorage

### Image Upload Failed

**Problem**: Image upload shows error

**Solution**:
- Check if `public/uploads/` directory exists
- Ensure image is under 5MB
- Check server console for detailed error messages

### Build Errors

**Problem**: `npm run build` fails

**Solution**:
- Delete `.next` folder and rebuild
- Ensure all dependencies are installed: `npm install`
- Check TypeScript errors: `npx tsc --noEmit`

---

## 📞 Support

For issues or questions:

1. Check this README thoroughly
2. Review console error messages
3. Check MongoDB Atlas logs
4. Verify environment variables

---

## 📄 License

This project is proprietary and confidential for Keerti Singh.

---

**Built with ❤️ for Keerti Singh Shop**
