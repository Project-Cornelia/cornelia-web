'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-7xl md:text-8xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors"
              >
                Go Home
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-black text-black font-semibold rounded hover:bg-black hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="/our-work"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Our Work
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/initiatives"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Initiatives
              </Link>
              <Link
                href="/resources"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/members"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Members
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
