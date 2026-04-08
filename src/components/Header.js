'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/images/logo.png" 
                alt="Cornelia Logo" 
                className="h-10 w-auto"
              />
              <span className="hidden sm:inline text-sm font-bold text-gray-900">Cornelia</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium hover:text-gray-600 transition-colors">
                About
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t last:rounded-b"
                >
                  About Us
                </Link>
                <Link
                  href="/our-work"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 last:rounded-b"
                >
                  Our Work
                </Link>
              </div>
            </div>

            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Blog
            </Link>

            {/* Get Involved Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium hover:text-gray-600 transition-colors">
                Get Involved
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <a
                  href="https://forms.gle/auEAXJ96GoRzLPmr9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t"
                >
                  Work with us
                </a>
                <a
                  href="https://forms.gle/dx3ERQHoTLGF1pcx8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 last:rounded-b"
                >
                  Write for us
                </a>
              </div>
            </div>

            <a
              href="https://milaap.org/fundraisers/plc-ahaana-againstacid"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Donate
            </a>

            <Link
              href="/members"
              className="px-3 py-2 text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Members
            </Link>

            <Link
              href="/initiatives"
              className="px-3 py-2 text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Initiatives
            </Link>

            <Link
              href="/resources"
              className="px-3 py-2 text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Resources
            </Link>

            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded"
            >
              Home
            </Link>

            {/* About Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('about')}
                className="w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-100 rounded flex justify-between items-center"
              >
                About
                <span className={`transform transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openDropdown === 'about' && (
                <div className="pl-4">
                  <Link
                    href="/about"
                    className="block px-3 py-2 text-sm hover:bg-gray-100 rounded"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/our-work"
                    className="block px-3 py-2 text-sm hover:bg-gray-100 rounded"
                  >
                    Our Work
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded"
            >
              Blog
            </Link>

            {/* Get Involved Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('involved')}
                className="w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-100 rounded flex justify-between items-center"
              >
                Get Involved
                <span className={`transform transition-transform ${openDropdown === 'involved' ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openDropdown === 'involved' && (
                <div className="pl-4">
                  <a
                    href="https://forms.gle/auEAXJ96GoRzLPmr9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-sm hover:bg-gray-100 rounded"
                  >
                    Work with us
                  </a>
                  <a
                    href="https://forms.gle/dx3ERQHoTLGF1pcx8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-sm hover:bg-gray-100 rounded"
                  >
                    Write for us
                  </a>
                </div>
              )}
            </div>

            <a
              href="https://milaap.org/fundraisers/plc-ahaana-againstacid"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded"
            >
              Donate
            </a>

            <Link
              href="/members"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded"
            >
              Members
            </Link>

            <Link
              href="/initiatives"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded"
            >
              Initiatives
            </Link>

            <Link
              href="/resources"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded"
            >
              Resources
            </Link>

            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
