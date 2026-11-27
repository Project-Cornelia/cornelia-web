'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/initiatives', label: 'Initiatives' },
  { href: '/resources', label: 'Resources' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setIsOpen(false), [pathname])

  useEffect(() => {
    if (!isOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.15 }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav
          aria-label="Main navigation"
          className={`flex h-16 w-full max-w-6xl items-center justify-between rounded-full border py-2 pl-3 pr-2 backdrop-blur-xl transition-all duration-300 md:pl-4 ${
            scrolled
              ? 'border-primary/10 bg-surface/90 shadow-soft'
              : 'border-white/40 bg-surface/80 shadow-sm'
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Project Cornelia home">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
              <Image src="/images/p_cornelia_logo.png" alt="" width={38} height={38} priority />
            </span>
            <span className="hidden font-headline-sm text-[1.25rem] font-semibold text-on-surface sm:block">
              Project Cornelia
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative py-2 font-label-lg text-[13px] transition-colors ${
                    active ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-x-0 -bottom-0.5 mx-auto h-1 w-1 rounded-full bg-primary"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden rounded-full px-6 sm:inline-flex">
              <Link href="/contact">Get Involved</Link>
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full transition-colors hover:bg-primary/5 md:hidden"
            >
              <span className={`block h-0.5 w-5 bg-on-surface transition-all duration-300 ${isOpen ? 'translate-y-1 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-on-surface transition-all duration-300 ${isOpen ? '-translate-y-1 -rotate-45' : ''}`} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-surface/95 px-8 backdrop-blur-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <p className="mb-8 font-label-lg text-[11px] uppercase tracking-[0.22em] text-primary">Explore Cornelia</p>
            <div className="flex flex-col">
              {navLinks.map(({ href, label }, index) => (
                <motion.div
                  key={href}
                  initial={reduceMotion ? false : { opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.06 }}
                >
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-5 border-b border-primary/15 py-5 font-headline-lg text-4xl text-on-surface"
                  >
                    <span className="font-label-md text-[11px] text-primary/60">0{index + 1}</span>
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-8 w-fit">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Get Involved ↗
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
