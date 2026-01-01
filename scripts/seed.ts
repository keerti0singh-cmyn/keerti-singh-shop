import dotenv from 'dotenv'
dotenv.config()

import bcrypt from 'bcryptjs'
import connectDB from '../lib/mongodb'
import Product from '../models/Product'
import Admin from '../models/Admin'

async function seed() {
  try {
    // 🔍 ENV DEBUG (VERY IMPORTANT)
    console.log('ENV CHECK:', process.env.MONGODB_URI)

    await connectDB()

    const adminCount = await Admin.countDocuments()
    if (adminCount === 0) {
      const hashedPassword = await bcrypt.hash(
        process.env.ADMIN_PASSWORD || 'admin123',
        10
      )

      await Admin.create({
        email: process.env.ADMIN_EMAIL || 'admin@keertisingh.com',
        password: hashedPassword,
      })

      console.log('✅ Admin created successfully')
    } else {
      console.log('ℹ️ Admin already exists')
    }

    const productCount = await Product.countDocuments()
    if (productCount === 0) {
      const sampleProducts = [
        { name: 'Rice (Basmati)', description: 'Premium quality Basmati rice', price: 150, image: '/uploads/rice.jpg', category: 'groceries' },
        { name: 'Wheat Flour', description: 'Whole wheat flour for chapati', price: 40, image: '/uploads/wheat.jpg', category: 'groceries' },
        { name: 'Cooking Oil', description: 'Refined sunflower oil 1L', price: 180, image: '/uploads/oil.jpg', category: 'groceries' },
        { name: 'Pulses (Dal)', description: 'Mixed pulses pack 1kg', price: 120, image: '/uploads/dal.jpg', category: 'groceries' },
        { name: 'Sugar', description: 'Premium white sugar 1kg', price: 45, image: '/uploads/sugar.jpg', category: 'groceries' },
        { name: 'Salt', description: 'Iodized salt packet', price: 25, image: '/uploads/salt.jpg', category: 'groceries' },
        { name: 'Tea Powder', description: 'Premium chai tea powder', price: 350, image: '/uploads/tea.jpg', category: 'groceries' },
        { name: 'Coffee', description: 'Instant coffee powder', price: 280, image: '/uploads/coffee.jpg', category: 'groceries' },
        { name: 'Spices Pack', description: 'Assorted Indian spices', price: 200, image: '/uploads/spices.jpg', category: 'groceries' },
        { name: 'Biscuits', description: 'Assorted biscuits pack', price: 50, image: '/uploads/biscuits.jpg', category: 'snacks' },
        { name: 'Soap', description: 'Bathing soap bar', price: 45, image: '/uploads/soap.jpg', category: 'household' },
        { name: 'Detergent', description: 'Laundry detergent 1kg', price: 180, image: '/uploads/detergent.jpg', category: 'household' },
        { name: 'Toothpaste', description: 'Herbal toothpaste', price: 85, image: '/uploads/toothpaste.jpg', category: 'personal-care' },
        { name: 'Shampoo', description: 'Herbal shampoo 200ml', price: 145, image: '/uploads/shampoo.jpg', category: 'personal-care' },
        { name: 'Notebooks', description: 'Set of 5 notebooks', price: 100, image: '/uploads/notebooks.jpg', category: 'stationery' },
      ]

      await Product.insertMany(sampleProducts)
      console.log('✅ Sample products created successfully')
    } else {
      console.log('ℹ️ Products already exist')
    }

    console.log('\n🎉 Database seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seed()
