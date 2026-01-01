import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Keerti Singh</h3>
            <p className="text-gray-400 mb-4">
              Your trusted local retail shop in Mauaima, Prayagraj. Quality products at affordable prices.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/917084499198"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:7084499198"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Mauaima, Prayagraj, UP EAST, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href="tel:7084499198" className="text-gray-400 hover:text-white transition-colors">
                  7084499198
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">
                  8:00 AM – 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Keerti Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
