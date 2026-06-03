'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <style>{`
        .glass-nav {
          background: rgba(250, 249, 245, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .logo-container {
          background-color: #f5f4f0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          z-index: 10;
        }

        .nav-link {
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #785249;
        }

        .sticky-nav-wrapper {
          position: fixed;
          top: 2rem;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          justify-content: center;
          padding: 0 1rem;
        }
      `}</style>

      <header className="sticky-nav-wrapper">
        <nav className="flex items-center w-full max-w-6xl h-20 relative">
          {/* Logo Section */}
          <Link href="/" className="logo-container h-24 w-24 flex flex-col items-center justify-center rounded-2xl shrink-0 -mr-4">
            <Image
              src="/images/cornelia_logo.png"
              alt="Cornelia Logo"
              width={64}
              height={64}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation Pill */}
          <div className="glass-nav flex-grow h-16 rounded-tr-full rounded-br-full flex items-center justify-between px-8 shadow-sm">
            {/* Navigation Links Group */}
            <div className="hidden md:flex items-center space-x-12 ml-6">
              <Link href="/" className="nav-link font-body-md text-on-surface text-lg">
                Home
              </Link>
              <Link href="/about" className="nav-link font-body-md text-on-surface text-lg">
                About
              </Link>
              <Link href="/resources" className="nav-link font-body-md text-on-surface text-lg">
                Resources
              </Link>
              <Link href="/publications" className="nav-link font-body-md text-on-surface text-lg">
                Publications
              </Link>
            </div>

            {/* CTA Button */}
            <div className="flex items-center">
              <Link href="/contact" className="bg-primary text-surface font-body-md px-8 py-2.5 rounded-2xl hover:opacity-90 transition-all shadow-md active:scale-95 inline-block">
                Get Involved
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

