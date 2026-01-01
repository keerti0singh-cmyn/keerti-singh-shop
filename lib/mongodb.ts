import 'dotenv/config'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not defined')
  process.exit(1)
}

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
  if (cached!.conn) return cached!.conn

  if (!cached!.promise) {
    cached!.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => mongoose)
  }

  cached!.conn = await cached!.promise
  return cached!.conn
}

export default connectDB
