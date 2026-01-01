import Link from 'next/link'
import { ArrowRight, Phone, MessageCircle, MapPin, Clock, Star } from 'lucide-react'

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="text-orange-600">Keerti Singh</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your trusted local retail shop in Mauaima, Prayagraj. Quality products at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2 font-semibold"
              >
                <span>View Products</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="tel:7084499198"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg border-2 border-orange-600 hover:bg-orange-50 transition-colors flex items-center justify-center space-x-2 font-semibold"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
              <p className="text-gray-600">
                We offer only the best quality products for you and your family.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local & Trusted</h3>
              <p className="text-gray-600">
                Serving the Mauaima community with trust and reliability for years.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Convenient Hours</h3>
              <p className="text-gray-600">
                Open from 8:00 AM to 5:00 PM for your shopping convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <Phone className="h-6 w-6 text-orange-600" />
                <h3 className="text-xl font-semibold">Call Us</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Give us a call for any queries or orders.
              </p>
              <a
                href="tel:7084499198"
                className="text-orange-600 font-semibold text-lg hover:text-orange-700"
              >
                7084499198
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <MessageCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-semibold">WhatsApp</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Chat with us on WhatsApp for quick responses.
              </p>
              <a
                href="https://wa.me/917084499198"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold text-lg hover:text-green-700"
              >
                Message Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Our Shop Today
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Experience quality shopping at Keerti Singh in Mauaima, Prayagraj
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.google.com/?q=Mauaima,Prayagraj,UP+EAST,India"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Get Directions
              </a>
              <Link
                href="/products"
                className="bg-orange-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-900 transition-colors text-center"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Keerti Singh',
            description: 'Local retail shop in Mauaima, Prayagraj',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Mauaima',
              addressLocality: 'Prayagraj',
              addressRegion: 'UP EAST',
              addressCountry: 'IN',
            },
            telephone: '+917084499198',
            openingHours: 'Mo-Su 08:00-17:00',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '25.4358',
              longitude: '81.8463',
            },
          }),
        }}
      />
    </>
  )
}
