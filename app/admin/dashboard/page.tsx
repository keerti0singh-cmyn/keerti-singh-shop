'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  Plus,
  Edit,
  Trash2,
  LogOut,
  Upload,
  X,
  Image as ImageIcon,
} from 'lucide-react'

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
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'groceries',
    image: '',
  })

  /* ---------------- AUTH CHECK ---------------- */
  useEffect(() => {
    const adminEmail = localStorage.getItem('adminEmail')
    if (!adminEmail) {
      router.push('/admin')
      return
    }
    fetchProducts()
  }, [router])

  /* ---------------- FETCH PRODUCTS ---------------- */
  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      if (data.success) {
        setProducts(data.products)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  /* ---------------- LOGOUT ---------------- */
  const handleLogout = () => {
    localStorage.removeItem('adminEmail')
    router.push('/admin')
  }

  /* ---------------- IMAGE UPLOAD (CLOUDINARY) ---------------- */
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      alert('Image must be less than 5MB')
      return
    }

    // preview
    const reader = new FileReader()
    reader.onloadend = () => setPreviewImage(reader.result as string)
    reader.readAsDataURL(file)

    const fd = new FormData()
    fd.append('file', file)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: fd,
      })
      const data = await res.json()

      if (data.success && data.imageUrl) {
        setFormData((prev) => ({
          ...prev,
          image: data.imageUrl, // 🔥 VERY IMPORTANT
        }))
      } else {
        alert('Image upload failed')
      }
    } catch (err) {
      console.error(err)
      alert('Image upload error')
    }
  }

  /* ---------------- DELETE IMAGE (LOCAL STATE) ---------------- */
  const handleDeleteImage = () => {
    setPreviewImage(null)
    setFormData((prev) => ({ ...prev, image: '' }))
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  /* ---------------- SUBMIT PRODUCT ---------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 🔒 FINAL SAFETY CHECK
    if (!formData.image || formData.image.trim() === '') {
      alert('Please upload image')
      return
    }

    try {
      const url = editingProduct
        ? `/api/products/${editingProduct._id}`
        : '/api/products'

      const method = editingProduct ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: formData.price ? Number(formData.price) : undefined,
        }),
      })

      const data = await res.json()
      if (data.success) {
        await fetchProducts()
        handleCloseModal()
      } else {
        alert(data.error || 'Failed to save product')
      }
    } catch (err) {
      console.error(err)
      alert('Save error')
    }
  }

  /* ---------------- EDIT PRODUCT ---------------- */
  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price?.toString() || '',
      category: product.category,
      image: product.image || '', // 🔒 IMAGE PRESERVED
    })
    setPreviewImage(product.image)
    setIsModalOpen(true)
  }

  /* ---------------- DELETE PRODUCT ---------------- */
  const handleDelete = async (id: string) => {
    if (!confirm('Delete this product?')) return
    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (data.success) {
        fetchProducts()
      }
    } catch (err) {
      console.error(err)
    }
  }

  /* ---------------- CLOSE MODAL ---------------- */
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
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-gray-500">Manage Products</p>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="text-gray-600 hover:text-black">
              View Shop
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg flex gap-2"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-semibold">
            Products ({products.length})
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-orange-600 text-white px-5 py-2 rounded-lg flex gap-2"
          >
            <Plus size={18} /> Add Product
          </button>
        </div>

        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p._id} className="bg-white rounded-lg shadow">
                <div className="relative h-40">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {p.description}
                  </p>
                  {p.price && (
                    <p className="font-bold text-orange-600 mt-1">
                      ₹{p.price}
                    </p>
                  )}
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => handleEdit(p)}
                      className="flex-1 bg-blue-100 text-blue-600 py-1 rounded"
                    >
                      <Edit size={14} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="flex-1 bg-red-100 text-red-600 py-1 rounded"
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl w-full max-w-2xl p-6 space-y-4"
          >
            <h2 className="text-xl font-bold">
              {editingProduct ? 'Edit Product' : 'Add Product'}
            </h2>

            {/* IMAGE */}
            <div>
              {previewImage ? (
                <div className="relative h-56">
                  <Image
                    src={previewImage}
                    alt="Preview"
                    fill
                    className="object-contain"
                  />
                  <button
                    type="button"
                    onClick={handleDeleteImage}
                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <label className="border-dashed border-2 rounded-lg p-6 block text-center cursor-pointer">
                  <Upload className="mx-auto mb-2" />
                  Click to upload image
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>

            {/* NAME */}
            <input
              placeholder="Product name"
              className="w-full border p-2 rounded"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />

            {/* DESCRIPTION */}
            <textarea
              placeholder="Description"
              className="w-full border p-2 rounded"
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />

            {/* PRICE */}
            <input
              type="number"
              placeholder="Price"
              className="w-full border p-2 rounded"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleCloseModal}
                className="flex-1 border rounded py-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-orange-600 text-white rounded py-2"
              >
                {editingProduct ? 'Update' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
