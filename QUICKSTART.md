# 🚀 Quick Start Guide

This is a condensed version of the full README. For detailed instructions, see [README.md](./README.md).

## Fast Setup (5 Minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up MongoDB
- Go to [MongoDB Atlas](https://cloud.mongodb.com/) and create a free account
- Create a free M0 Sandbox cluster
- Add database user (remember username/password)
- Allow access from anywhere (IP: 0.0.0.0/0)
- Copy connection string

### 3. Create .env.local File
Create `.env.local` in project root:

```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/keerti-singh-shop?retryWrites=true&w=majority
NEXTAUTH_SECRET=generate-random-string-here
ADMIN_EMAIL=admin@keertisingh.com
ADMIN_PASSWORD=your-secure-password
NEXTAUTH_URL=http://localhost:3000
```

### 4. Seed Database
```bash
npm run seed
```

### 5. Run Development Server
```bash
npm run dev
```

### 6. Access
- **Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

## Admin Login

- Email: What you set in `ADMIN_EMAIL`
- Password: What you set in `ADMIN_PASSWORD`

## Managing Products

1. Login to admin panel
2. Click &quot;Add Product&quot;
3. Upload image from your computer (no coding!)
4. Fill product details
5. Click &quot;Save Product&quot;

**That's it!** Your product is now live.

## Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

For detailed instructions, see the main [README.md](./README.md).
