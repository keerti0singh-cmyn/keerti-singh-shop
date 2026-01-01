import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - Keerti Singh Shop',
  description: 'Get in touch with Keerti Singh shop in Mauaima, Prayagraj. Call us at 7084499198 or WhatsApp us for quick responses.',
  keywords: ['contact Keerti Singh', 'Mauaima shop contact', 'shop phone number'],
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Get in touch with us for any queries or orders
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Give us a call for any queries or to place orders.
                    </p>
                    <a
                      href="tel:7084499198"
                      className="text-orange-600 font-bold text-xl hover:text-orange-700"
                    >
                      7084499198
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Chat with us on WhatsApp for quick responses.
                    </p>
                    <a
                      href="https://wa.me/917084499198"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-bold text-xl hover:text-green-700 inline-flex items-center space-x-2"
                    >
                      <span>Message Now</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Mauaima, Prayagraj, UP EAST, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Shop Timing
                    </h3>
                    <p className="text-gray-600">
                      8:00 AM – 5:00 PM (All Days)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Find Us on Map
              </h2>
              <div className="bg-gray-200 rounded-xl overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.9658924474236!2d81.843844!3d25.4358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992b2b0b0b0b0b0%3A0x0!2zMjXCsDI2JzEyLjkiTiA4McKwNTAnMzcuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Keerti Singh Shop Location"
                ></iframe>
              </div>
              <a
                href="https://maps.google.com/?q=Mauaima,Prayagraj,UP+EAST,India"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Shop?
          </h2>
          <p className="text-white text-xl mb-8 opacity-90">
            Visit our shop or call us to place your order
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7084499198"
              className="inline-flex items-center justify-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/917084499198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
