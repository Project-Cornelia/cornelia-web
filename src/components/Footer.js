'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import ContactForm from './Contact/ContactForm'
import RollText from './Motion/RollText'
import Chars from './Motion/Chars'

const explore = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/publications', label: 'Blogs' },
  { href: '/initiatives', label: 'Initiatives' },
  { href: '/resources', label: 'Resources' },
]

const more = [
  { href: '/our-work', label: 'Our Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/donations', label: 'Donate' },
  { href: '/members', label: 'Members' },
  { href: '/maintenance', label: 'Maintenance' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
]

const socials = [
  { href: 'https://www.instagram.com/project.cornelia/', label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/project-cornelia/?originalSubdomain=in', label: 'LinkedIn' },
]

function IstClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 1000)
    return () => clearInterval(id)
  }, [])
  return <span suppressHydrationWarning>{time} IST</span>
}

export default function Footer() {
  const root = useRef(null)
  const currentYear = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric' })

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.wordmark .char',
          { yPercent: 100, '--wght': 100 },
          {
            yPercent: 0,
            '--wght': 700,
            stagger: { each: 0.05, from: 'center' },
            duration: 1.6,
            ease: 'expo.out',
            scrollTrigger: { trigger: '.wordmark', start: 'top 95%' },
          }
        )
        gsap.from('.ft-inner', {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'top 30%', scrub: true },
        })
      })
      return () => mm.revert()
    },
    { scope: root }
  )

  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 2 })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer ref={root} className="relative w-full bg-ink text-bone overflow-hidden">
      <div className="ft-inner px-5 md:px-10 pt-24 md:pt-32">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/50 mb-6">Get in touch</p>
            <p className="font-display text-[clamp(2.4rem,5vw,5rem)] leading-[0.95] tracking-[-0.03em]">
              Every conversation <br />
              <span className="italic-wonk text-flare">starts with hello.</span>
            </p>
            <a
              href="mailto:contact.projectcornelia@gmail.com"
              className="inline-block mt-8 font-sans text-lg md:text-2xl link-underline"
            >
              contact.projectcornelia@gmail.com
            </a>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <ContactForm variant="footer" />
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-10 font-mono text-xs uppercase tracking-[0.14em]">
          <nav aria-label="Footer: explore">
            <p className="text-bone/40 mb-5">Explore</p>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-flare transition-colors">
                    <RollText>{l.label}</RollText>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer: more">
            <p className="text-bone/40 mb-5">More</p>
            <ul className="space-y-3">
              {more.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-flare transition-colors">
                    <RollText>{l.label}</RollText>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-bone/40 mb-5">Follow</p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-flare transition-colors">
                    <RollText>{s.label}</RollText> <span aria-hidden="true">&#8599;</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div>
              <p className="text-bone/40 mb-5">Local time</p>
              <IstClock />
            </div>
            <button onClick={toTop} className="group self-start inline-flex items-center gap-3 uppercase">
              <span className="w-10 h-10 rounded-full border border-bone/40 grid place-items-center transition-transform duration-500 group-hover:-translate-y-1 group-hover:bg-flare group-hover:border-flare group-hover:text-ink">&uarr;</span>
              <RollText>Back to top</RollText>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 px-3 md:px-6" aria-hidden="true">
        <p className="wordmark font-display text-center leading-[0.78] tracking-[-0.06em] text-[24.5vw] overflow-hidden text-bone">
          <Chars text="Cornelia" />
        </p>
      </div>

      <div className="px-5 md:px-10 py-6 border-t border-bone/10 flex flex-col md:flex-row justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/40">
        <p>&copy; {currentYear} Project Cornelia &middot; AINA Foundation. All rights reserved.</p>
        <p>Collective &middot; Criticism &middot; Conversation</p>
      </div>
    </footer>
  )
}
