import { Phone, MessageCircle, MapPin, Clock, Users, Heart, Award } from 'lucide-react'

export const metadata = {
  title: 'About Us - Keerti Singh Shop',
  description: 'Learn about Keerti Singh, your trusted local retail shop in Mauaima, Prayagraj. Serving the community with quality products and excellent service.',
  keywords: ['about Keerti Singh', 'local shop history', 'Mauaima shop'],
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            About Keerti Singh
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Your trusted local retail shop serving Mauaima, Prayagraj with dedication and commitment
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Keerti Singh has been serving the Mauaima community with dedication and passion. We understand the importance of quality products in daily life and strive to provide the best for our customers.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Located in the heart of Mauaima, Prayagraj, we offer a wide range of products including groceries, household items, personal care products, and stationery at competitive prices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to customer satisfaction and quality has made us a trusted name in the local community. We believe in building lasting relationships with our customers through honest business practices and excellent service.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Shop Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">Mauaima, Prayagraj, UP EAST, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:7084499198" className="text-orange-600 hover:text-orange-700">
                      7084499198
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <a
                      href="https://wa.me/917084499198"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Shop Timing</h4>
                    <p className="text-gray-600">8:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product is carefully selected to meet our high standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are our priority. We listen to your needs and strive to exceed your expectations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We are proud to be part of the Mauaima community and actively contribute to its growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience quality shopping at Keerti Singh
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7084499198"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/917084499198"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
