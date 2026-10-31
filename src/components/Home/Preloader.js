'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { gsap, prefersReducedMotion } from '@/lib/gsap'

// "Voice" in Hindi, Tamil, Bengali, Kannada, Malayalam, Gujarati, Punjabi,
// Urdu and Telugu before landing on English: one word, many voices.
const VOICES = ['आवाज़', 'குரல்', 'কণ্ঠস্বর', 'ಧ್ವನಿ', 'ശബ്ദം', 'અવાજ', 'ਆਵਾਜ਼', 'آواز', 'స్వరం']
const SEEN_KEY = 'cornelia:intro-seen'

export default function Preloader({ onComplete }) {
  const root = useRef(null)
  const wordRef = useRef(null)
  const countRef = useRef(null)
  const [done, setDone] = useState(false)

  useLayoutEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === '1'
    } catch {}

    if (seen || prefersReducedMotion()) {
      setDone(true)
      onComplete?.()
      return
    }

    window.__lenis?.stop()
    const counter = { v: 0 }
    const word = wordRef.current
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          try {
            sessionStorage.setItem(SEEN_KEY, '1')
          } catch {}
          window.__lenis?.start()
          setDone(true)
        },
      })

      tl.to(counter, {
        v: 100,
        duration: 2.2,
        ease: 'power2.inOut',
        onUpdate: () => {
          countRef.current.textContent = String(Math.round(counter.v)).padStart(3, '0')
        },
      })

      VOICES.forEach((v, i) => {
        tl.call(() => (word.textContent = v), null, 0.12 + i * 0.2)
      })
      tl.call(
        () => {
          word.textContent = 'voice.'
          word.classList.add('is-final')
        },
        null,
        0.12 + VOICES.length * 0.2
      )
      tl.fromTo(word, { scale: 0.9 }, { scale: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' }, '<')
      tl.to('.pre-meta', { opacity: 0, duration: 0.4 }, '+=0.35')
      tl.add(() => onComplete?.(), '-=0.1')
      tl.to(root.current, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 1.1,
        ease: 'expo.inOut',
      }, '<')
      tl.to(word, { yPercent: -60, opacity: 0, duration: 0.8, ease: 'expo.in' }, '<')
    }, root)

    return () => ctx.revert()
    // onComplete is a stable callback from the page; run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (done) return null

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="fixed inset-0 z-[99] bg-ink text-bone flex items-center justify-center [clip-path:inset(0%_0%_0%_0%)]"
    >
      <span
        ref={wordRef}
        className="preloader-word font-display text-[18vw] md:text-[12vw] leading-none tracking-tight"
      >
        &nbsp;
      </span>
      <div className="pre-meta absolute left-5 md:left-10 bottom-6 md:bottom-10 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/50 leading-relaxed">
        Project Cornelia
        <br />
        AINA Foundation
      </div>
      <div className="pre-meta absolute right-5 md:right-10 bottom-6 md:bottom-10 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/50 text-right leading-relaxed">
        Every voice
        <br />
        <span ref={countRef} className="text-flare">000</span>
      </div>
    </div>
  )
}
