import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'

export async function GET() {
  try {
    await connectDB()
    const products = await Product.find({}).sort({ createdAt: -1 })
    return NextResponse.json({ success: true, products })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const body = await request.json()

    const { name, price, image, category, description } = body

    // 🔴 IMAGE REQUIRED CHECK (VERY IMPORTANT)
    if (!image) {
      return NextResponse.json(
        { success: false, error: 'Please upload image' },
        { status: 400 }
      )
    }

    const product = await Product.create({
      name,
      price,
      image,        // ✅ Cloudinary URL save hoga
      category,
      description,
    })

    return NextResponse.json(
      { success: true, product },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    )
  }
}
