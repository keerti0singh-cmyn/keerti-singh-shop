import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import connectDB from '@/lib/mongodb'
import Admin from '@/models/Admin'

export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const { email, password } = await request.json()

    const admin = await Admin.findOne({ email })
    if (!admin) {
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 })
    }

    const isValidPassword = await bcrypt.compare(password, admin.password)
    if (!isValidPassword) {
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 })
    }

    return NextResponse.json({ 
      success: true, 
      email: admin.email,
      message: 'Login successful' 
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Login failed' }, { status: 500 })
  }
}

export async function GET() {
  try {
    await connectDB()
    const adminCount = await Admin.countDocuments()
    const hasAdmin = adminCount > 0
    return NextResponse.json({ success: true, hasAdmin })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to check admin' }, { status: 500 })
  }
}
