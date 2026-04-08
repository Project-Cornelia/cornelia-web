'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <img 
              src="/images/footer_logo.png" 
              alt="Cornelia Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-600 text-sm">
              Making every woman's voice central to all conversations that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-gray-900 transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-semibold mb-4">Subscribe to our emailing list</h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
              <button
                type="submit"
                className="w-full px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors font-semibold"
              >
                Submit
              </button>
              {subscribed && (
                <p className="text-green-600 text-xs">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          {/* Contact and Social */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Contact us:</strong>
              </p>
              <a
                href="mailto:contact@corneliafoundation.org"
                className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
              >
                contact@corneliafoundation.org
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Follow us on -</span>
              <a
                href="https://www.instagram.com/project.cornelia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                title="Instagram"
              >
                <img 
                  src="/images/instagram_icon.png" 
                  alt="Instagram" 
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/project-cornelia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                title="LinkedIn"
              >
                <img 
                  src="/images/linkedin_icon.png" 
                  alt="LinkedIn" 
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p>&copy; 2024 Project Cornelia AINA Foundation. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="/privacy" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-gray-900 transition-colors">
                Terms of Service
              </a>
              <a href="/contact" className="hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
