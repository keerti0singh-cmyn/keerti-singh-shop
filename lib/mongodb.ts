import 'dotenv/config'
import mongoose from 'mongoose'

/**
 * Explicit type assertion so TypeScript knows
 * this will be a string at runtime.
 */
const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not defined')
  throw new Error('MONGODB_URI missing')
}

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

/**
 * Global cache (important for Next.js hot reload)
 */
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined
}

let cached: MongooseCache

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null }
}

cached = global.mongoose

async function connectDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongooseInstance) => mongooseInstance)
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default connectDB
