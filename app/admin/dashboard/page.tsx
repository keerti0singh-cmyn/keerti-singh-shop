'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, Edit, Trash2, LogOut, Upload, X, Image as ImageIcon } from 'lucide-react'

interface Product {
  _id: string
  name: string
  description: string
  price?: number
  image: string
  category: string
}

export default function AdminDashboardPage() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'groceries',
    image: '',
  })

  useEffect(() => {
    const adminEmail = localStorage.getItem('adminEmail')
    if (!adminEmail) {
      router.push('/admin')
      return
    }
    fetchProducts()
  }, [router])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      if (data.success) {
        setProducts(data.products)
      }
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminEmail')
    router.push('/admin')
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB')
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewImage(reader.result as string)
    }
    reader.readAsDataURL(file)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setFormData((prev) => ({ ...prev, image: data.imageUrl }))
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image')
    }
  }

  const handleDeleteImage = () => {
    setPreviewImage(null)
    setFormData((prev) => ({ ...prev, image: '' }))
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.image) {
      alert('Please upload an image')
      return
    }

    try {
      const url = editingProduct
        ? `/api/products/${editingProduct._id}`
        : '/api/products'
      const method = editingProduct ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: formData.price ? parseFloat(formData.price) : null,
        }),
      })

      const data = await response.json()

      if (data.success) {
        await fetchProducts()
        handleCloseModal()
      }
    } catch (error) {
      console.error('Error saving product:', error)
      alert('Failed to save product')
    }
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price?.toString() || '',
      category: product.category,
      image: product.image,
    })
    setPreviewImage(product.image)
    setIsModalOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      })
      const data = await response.json()
      if (data.success) {
        await fetchProducts()
      }
    } catch (error) {
      console.error('Error deleting product:', error)
      alert('Failed to delete product')
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingProduct(null)
    setFormData({
      name: '',
      description: '',
      price: '',
      category: 'groceries',
      image: '',
    })
    setPreviewImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm">Manage your products</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900"
            >
              View Shop
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
            <ImageIcon className="h-5 w-5 mr-2" />
            How to Manage Images (No Coding Required)
          </h2>
          <div className="text-blue-800 space-y-2 text-sm">
            <p><strong>• Add Image:</strong> Click &quot;Add Product&quot; → Click &quot;Choose Image&quot; → Select from your computer → Click &quot;Upload&quot; → Fill product details → Click &quot;Save Product&quot;</p>
            <p><strong>• Change Image:</strong> Click &quot;Edit&quot; on a product → Click &quot;Choose Image&quot; → Select new image → Click &quot;Save Product&quot;</p>
            <p><strong>• Delete Image:</strong> Click &quot;Edit&quot; → Click &quot;X&quot; on the image preview → Upload a new image → Click &quot;Save Product&quot;</p>
            <p className="text-blue-600 mt-2"><strong>Note:</strong> Images are automatically uploaded to your website. No manual file handling needed!</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Products ({products.length})
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            <Plus className="h-5 w-5" />
            <span>Add Product</span>
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No products yet</h3>
            <p className="text-gray-500 mb-4">Add your first product to get started</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Add Product
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  {product.price && (
                    <p className="text-orange-600 font-bold">
                      ₹{product.price.toFixed(2)}
                    </p>
                  )}
                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={() => handleEdit(product)}
                      className="flex-1 flex items-center justify-center space-x-1 bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="flex-1 flex items-center justify-center space-x-1 bg-red-50 text-red-600 py-2 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b sticky top-0 bg-white rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Image *
                </label>
                {previewImage ? (
                  <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={previewImage}
                      alt="Preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 672px"
                      className="object-contain"
                    />
                    <button
                      type="button"
                      onClick={handleDeleteImage}
                      className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer"
                    >
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">
                        Click to upload an image
                      </p>
                      <p className="text-gray-400 text-sm">
                        PNG, JPG up to 5MB
                      </p>
                    </label>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter product name"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter product description"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="groceries">Groceries</option>
                  <option value="household">Household</option>
                  <option value="personal-care">Personal Care</option>
                  <option value="snacks">Snacks</option>
                  <option value="stationery">Stationery</option>
                  <option value="general">General</option>
                </select>
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                  Price (₹) - Optional
                </label>
                <input
                  id="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter price"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                >
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
