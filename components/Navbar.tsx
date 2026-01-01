'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingCart className="h-8 w-8 text-orange-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Keerti Singh</h1>
              <p className="text-xs text-gray-500">Your Local Shop</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Admin
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="block py-2 text-gray-700 hover:text-orange-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
            <a
              href="tel:7084499198"
              className="flex items-center space-x-2 text-orange-600 font-medium"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now: 7084499198</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
