import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IProduct extends Document {
  name: string
  description: string
  price?: number
  image: string
  category: string
  createdAt: Date
  updatedAt: Date
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
      trim: true,
    },
    price: {
      type: Number,
      default: null,
    },
    image: {
      type: String,
      required: [true, 'Product image is required'],
    },
    category: {
      type: String,
      default: 'general',
    },
  },
  {
    timestamps: true,
  }
)

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema)

export default Product
