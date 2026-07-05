'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (formData.email) {
      setSubscribed(true)
      setFormData({ ...formData, email: '' })
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <footer className="w-full bg-neutral-900 text-neutral-100 border-t border-on-secondary-fixed-variant">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-gutter py-12 md:py-16">
        {/* Brand & Info */}
        <div className="space-y-4">
          <div className="font-headline-md text-headline-md font-bold text-neutral-100 flex items-center gap-3">
            <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-1.5">
              <Image
                src="/images/p_cornelia_logo.png"
                alt="Cornelia Logo"
                width={40}
                height={40}
                className="h-20 w-20 object-contain"
              />
            </div>
            Project Cornelia
          </div>
          <p className="font-body-md text-body-md text-neutral-100/70">
            Empowering women and youth through law, policy, and democratic participation.
          </p>
            <div className="flex items-center gap-4 mt-4">
            <a href="https://www.instagram.com/project.cornelia/" target="_blank" rel="noopener noreferrer" className="text-neutral-100/60 hover:text-white transition-colors">
              <Image
                src="/images/instagram.svg"
                alt="Instagram"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </a>
            <a href="https://www.linkedin.com/company/project-cornelia/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-neutral-100/60 hover:text-white transition-colors">
              <Image
                src="/images/linkedin.svg"
                alt="LinkedIn"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-headline-sm text-headline-sm mb-6">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="text-neutral-100/70">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-neutral-100/70 hover:text-neutral-100 transition-opacity duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/initiatives" className="text-neutral-100/70 hover:text-neutral-100 transition-opacity duration-300">
                Initiatives
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-neutral-100/70 hover:text-neutral-100 transition-opacity duration-300">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/our-work" className="text-neutral-100/70 hover:text-neutral-100 transition-opacity duration-300">
                Publications
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-neutral-100/70 hover:text-neutral-100 transition-opacity duration-300">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-neutral-100/70 hover:text-neutral-100 transition-opacity duration-300">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h4 className="font-headline-sm text-headline-sm mb-6">Get in Touch</h4>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block font-label-md text-label-md text-neutral-100/50 mb-0.5">
                Name
              </label>
              <div className="border-b border-neutral-100/30">
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-none focus:ring-0 py-2 text-sm text-neutral-100 placeholder-neutral-100/30"
                />
              </div>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-neutral-100/50 mb-0.5">
                Email
              </label>
              <div className="border-b border-neutral-100/30">
                <input
                  type="email"
                  placeholder="example@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-none focus:ring-0 py-2 text-sm text-neutral-100 placeholder-neutral-100/30"
                />
              </div>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-neutral-100/50 mb-0.5">
                Message
              </label>
              <div className="border-b border-neutral-100/30">
                <textarea
                  placeholder="Your Message Here"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="1"
                  className="w-full bg-transparent border-none focus:ring-0 py-2 text-sm text-neutral-100 placeholder-neutral-100/30 resize-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-neutral-100 text-neutral-900 px-6 py-2 rounded-full font-label-lg text-label-lg hover:bg-primary-fixed transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-gutter py-6 border-t border-on-secondary-fixed-variant/20 text-center md:text-left">
        <p className="font-body-sm text-body-sm text-neutral-100/50">
          © 2026 Project Cornelia. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
