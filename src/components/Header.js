'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/initiatives', label: 'Initiatives' },
  { href: '/resources', label: 'Resources' },
  { href: '/publications', label: 'Publications' },
]

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

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 40;
          background: rgba(250, 249, 245, 0.97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
        }
      `}</style>

      <header className="sticky-nav-wrapper">
        <nav className="flex items-center w-full max-w-6xl h-20 relative">
          {/* Logo */}
          <Link
            href="/"
            className="logo-container h-24 w-24 flex flex-col items-center justify-center rounded-2xl shrink-0 -mr-4 z-50"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/images/p_cornelia_logo.png"
              alt="Cornelia Logo"
              width={64}
              height={64}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation Pill */}
          <div className="glass-nav flex-grow h-16 rounded-tr-full rounded-br-full flex items-center justify-between px-6 md:px-8 shadow-sm">
            {/* Desktop nav links */}
            <div className="hidden md:flex items-center space-x-12 ml-6">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="nav-link font-body-md text-on-surface text-lg">
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="bg-primary text-surface font-body-md px-8 py-2.5 rounded-2xl hover:opacity-90 transition-all shadow-md active:scale-95 inline-block"
              >
                Get Involved
              </Link>
            </div>

            {/* Mobile: CTA + Hamburger */}
            <div className="flex md:hidden items-center gap-4 ml-auto">
              <Link
                href="/contact"
                className="bg-primary text-surface font-body-md px-5 py-2 rounded-2xl hover:opacity-90 transition-all shadow-md active:scale-95 text-sm"
                onClick={() => setIsOpen(false)}
              >
                Get Involved
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 relative"
              >
                <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu md:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
