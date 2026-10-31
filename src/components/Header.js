'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import RollText from '@/components/Motion/RollText'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/publications', label: 'Blogs' },
  { href: '/initiatives', label: 'Initiatives' },
  { href: '/resources', label: 'Resources' },
]

const menuLinks = [
  ...navLinks,
  { href: '/donations', label: 'Donate' },
  { href: '/contact', label: 'Contact' },
]

const socials = [
  { href: 'https://www.instagram.com/project.cornelia/', label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/project-cornelia/?originalSubdomain=in', label: 'LinkedIn' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const logoRef = useRef(null)
  const navRef = useRef(null)
  const overlayRef = useRef(null)
  const tl = useRef(null)

  // Hide on scroll down, reveal on scroll up.
  useGSAP(() => {
    const targets = [logoRef.current, navRef.current]
    gsap.from(targets, { yPercent: -120, duration: 1.4, ease: 'expo.out', delay: 0.4 })
    let hidden = false
    const setHidden = (next) => {
      if (next === hidden) return
      hidden = next
      gsap.to(targets, { yPercent: next ? -130 : 0, duration: 0.6, ease: 'power3.out', overwrite: 'auto' })
    }
    const st = ScrollTrigger.create({
      start: 120,
      end: 'max',
      onUpdate: (self) => setHidden(self.direction === 1),
      onLeaveBack: () => setHidden(false),
    })
    return () => st.kill()
  })

  // Fullscreen menu: a circle grows out of the menu button, then each link
  // rises out of its own mask.
  useGSAP(
    () => {
      const overlay = overlayRef.current
      tl.current = gsap
        .timeline({ paused: true })
        .set(overlay, { visibility: 'visible' })
        .to(overlay, {
          clipPath: 'circle(150% at calc(100% - 64px) 44px)',
          duration: 1.1,
          ease: 'expo.inOut',
        })
        .from('.menu-link-inner', { yPercent: 110, rotate: 4, stagger: 0.05, duration: 1, ease: 'expo.out' }, '-=0.45')
        .from('.menu-meta', { opacity: 0, y: 20, stagger: 0.06, duration: 0.8 }, '-=0.8')
    },
    { scope: overlayRef }
  )

  useEffect(() => {
    if (!tl.current) return
    if (isOpen) {
      tl.current.timeScale(1).play()
      window.__lenis?.stop()
    } else {
      tl.current.timeScale(1.6).reverse()
      window.__lenis?.start()
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <Link
        ref={logoRef}
        href="/"
        aria-label="Project Cornelia home"
        className="site-logo left-4 md:left-8 top-4 md:top-5 h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-bone shadow-[0_8px_30px_rgba(18,13,22,0.18)] grid place-items-center overflow-hidden"
        onClick={() => setIsOpen(false)}
      >
        {/* Crop the PNG to just the emblem; the wordmark sits below it in the file. */}
        <span
          aria-hidden="true"
          className="block w-full h-full bg-no-repeat"
          style={{ backgroundImage: 'url(/images/p_cornelia_logo.png)', backgroundSize: '165%', backgroundPosition: '50% 33%' }}
        />
      </Link>

      <header ref={navRef} className="site-nav">
        <nav className="flex items-center h-[88px] md:h-24 pl-24 md:pl-32 pr-4 md:pr-8" aria-label="Primary">
          <Link href="/" className="hidden sm:block font-display italic-wonk text-xl tracking-tight">
            Project Cornelia
          </Link>

          <ul className="hidden xl:flex items-center gap-9 mx-auto font-mono text-[12px] uppercase tracking-[0.14em]">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} aria-current={pathname === href ? 'page' : undefined} className="relative">
                  <RollText>{label}</RollText>
                  {pathname === href && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-auto xl:ml-0 flex items-center gap-3 md:gap-5">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 border border-white/70 rounded-full px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-white hover:text-black transition-colors duration-300"
            >
              <RollText>Get involved</RollText>
            </Link>
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="site-menu"
              className="group flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.14em]"
            >
              <span className="hidden sm:inline">
                <RollText>{isOpen ? 'Close' : 'Menu'}</RollText>
              </span>
              <span className="relative w-11 h-11 rounded-full border border-white/70 grid place-items-center">
                <span
                  className={`absolute w-4 h-px bg-white transition-transform duration-500 ${
                    isOpen ? 'rotate-45' : '-translate-y-[3px] group-hover:-translate-y-[4px]'
                  }`}
                />
                <span
                  className={`absolute w-4 h-px bg-white transition-transform duration-500 ${
                    isOpen ? '-rotate-45' : 'translate-y-[3px] group-hover:translate-y-[4px]'
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <div
        id="site-menu"
        ref={overlayRef}
        className="menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!isOpen}
        data-lenis-prevent
      >
        <div className="h-full overflow-y-auto px-6 md:px-16 pt-32 pb-10 flex flex-col">
          <div className="grid lg:grid-cols-12 gap-10 flex-1">
            <ul className="lg:col-span-8 flex flex-col justify-center">
              {menuLinks.map(({ href, label }, i) => (
                <li key={href} className="overflow-hidden border-b border-bone/10">
                  <Link
                    href={href}
                    tabIndex={isOpen ? 0 : -1}
                    onClick={() => setIsOpen(false)}
                    className="menu-link-inner group flex items-baseline gap-6 py-2 md:py-3"
                  >
                    <span className="font-mono text-xs text-bone/40 w-8">0{i + 1}</span>
                    <span className="font-display text-[13vw] md:text-[7.2vw] lg:text-[5.6vw] leading-[0.95] tracking-tight transition-all duration-500 group-hover:text-flare group-hover:translate-x-4 [font-variation-settings:'SOFT'_0,'WONK'_0] group-hover:[font-variation-settings:'SOFT'_100,'WONK'_1] group-hover:italic">
                      {label}
                    </span>
                    {pathname === href && <span className="w-3 h-3 rounded-full bg-flare self-center" />}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="lg:col-span-4 flex flex-col justify-end gap-8">
              <p className="menu-meta font-display italic-wonk text-2xl md:text-3xl leading-snug text-bone/90">
                Making every woman&apos;s voice central to all conversations that matter.
              </p>
              <div className="menu-meta font-mono text-xs uppercase tracking-[0.14em] text-bone/50 space-y-2">
                <p>Collective &middot; Criticism &middot; Conversation</p>
                <a href="mailto:contact.projectcornelia@gmail.com" tabIndex={isOpen ? 0 : -1} className="block text-bone link-underline w-fit">
                  contact.projectcornelia@gmail.com
                </a>
              </div>
              <div className="menu-meta flex gap-6 font-mono text-xs uppercase tracking-[0.14em]">
                {socials.map((s) => (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" tabIndex={isOpen ? 0 : -1} className="hover:text-flare transition-colors">
                    <RollText>{s.label}</RollText>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
