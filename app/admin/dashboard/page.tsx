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

  /* ---------- AUTH CHECK ---------- */
  useEffect(() => {
    const adminEmail = localStorage.getItem('adminEmail')
    if (!adminEmail) {
      router.push('/admin')
      return
    }
    fetchProducts()
  }, [router])

  /* ---------- FETCH PRODUCTS ---------- */
  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      if (data.success) setProducts(data.products)
    } finally {
      setLoading(false)
    }
  }

  /* ---------- LOGOUT ---------- */
  const handleLogout = () => {
    localStorage.removeItem('adminEmail')
    router.push('/admin')
  }

  /* ---------- IMAGE UPLOAD ---------- */
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => setPreviewImage(reader.result as string)
    reader.readAsDataURL(file)

    const fd = new FormData()
    fd.append('file', file)

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: fd,
    })
    const data = await res.json()

    if (data.success) {
      setFormData((prev) => ({ ...prev, image: data.imageUrl }))
    }
  }

  const handleDeleteImage = () => {
    setPreviewImage(null)
    setFormData((prev) => ({ ...prev, image: '' }))
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  /* ---------- SUBMIT (ADD / EDIT) ---------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // ✅ FINAL FIX — ADD vs EDIT IMAGE VALIDATION
    if (!formData.image && !editingProduct?.image) {
      alert('Please upload image')
      return
    }

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
      fetchProducts()
      handleCloseModal()
    }
  }

  /* ---------- EDIT ---------- */
  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price?.toString() || '',
      category: product.category,
      image: product.image, // 🔒 preserve existing image
    })
    setPreviewImage(product.image)
    setIsModalOpen(true)
  }

  /* ---------- DELETE ---------- */
  const handleDelete = async (id: string) => {
    if (!confirm('Delete product?')) return
    await fetch(`/api/products/${id}`, { method: 'DELETE' })
    fetchProducts()
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
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  /* ---------- UI ---------- */
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b p-4 flex justify-between">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button onClick={handleLogout} className="text-red-600">
          <LogOut size={16} />
        </button>
      </div>

      <div className="p-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-600 text-white px-4 py-2 rounded mb-4"
        >
          <Plus size={16} /> Add Product
        </button>

        {loading ? (
          <p>Loading…</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-4">
            {products.map((p) => (
              <div key={p._id} className="bg-white rounded shadow">
                <div className="relative h-40">
                  <Image src={p.image} alt={p.name} fill className="object-cover" />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-sm">{p.description}</p>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => handleEdit(p)}>Edit</button>
                    <button onClick={() => handleDelete(p._id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded w-full max-w-xl space-y-3">
            <h2 className="font-bold">
              {editingProduct ? 'Edit Product' : 'Add Product'}
            </h2>

            {previewImage ? (
              <div className="relative h-40">
                <Image src={previewImage} alt="preview" fill className="object-contain" />
                <button type="button" onClick={handleDeleteImage}>
                  <X />
                </button>
              </div>
            ) : (
              <label className="border p-4 block text-center cursor-pointer">
                <Upload />
                Upload Image
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            )}

            <input
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />

            <input
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />

            <div className="flex gap-2">
              <button type="button" onClick={handleCloseModal}>
                Cancel
              </button>
              <button type="submit" className="bg-orange-600 text-white px-4">
                {editingProduct ? 'Update' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
