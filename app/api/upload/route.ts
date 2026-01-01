import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`
    const path = join(process.cwd(), 'public', 'uploads', filename)

    await writeFile(path, buffer)

    return NextResponse.json({ 
      success: true, 
      imageUrl: `/uploads/${filename}` 
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to upload image' }, { status: 500 })
  }
}
