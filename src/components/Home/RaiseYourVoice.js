'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import Chars from '@/components/Motion/Chars'
import Magnetic from '@/components/Motion/Magnetic'

// The closing call. Letters get heavier and lift as the pointer nears them:
// the closer you come, the louder the word gets.
export default function RaiseYourVoice() {
  const root = useRef(null)

  useGSAP(
    () => {
      const chars = gsap.utils.toArray('.cta-title .char')
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          chars,
          { yPercent: 120, '--wght': 200 },
          {
            yPercent: 0,
            '--wght': 380,
            stagger: 0.03,
            duration: 1.4,
            ease: 'expo.out',
            scrollTrigger: { trigger: root.current, start: 'top 65%' },
          }
        )
        gsap.from('.cta-foot', { opacity: 0, y: 30, stagger: 0.1, scrollTrigger: { trigger: root.current, start: 'top 50%' } })
      })

      mm.add('(hover: hover) and (prefers-reduced-motion: no-preference)', () => {
        const setters = chars.map((c) => ({
          el: c,
          w: gsap.quickTo(c, '--wght', { duration: 0.5, ease: 'power3' }),
          y: gsap.quickTo(c, 'y', { duration: 0.6, ease: 'power3' }),
        }))
        const onMove = (e) => {
          setters.forEach(({ el, w, y }) => {
            const r = el.getBoundingClientRect()
            const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2))
            const k = Math.max(0, 1 - d / 420)
            w(380 + k * 520)
            y(-k * 24)
          })
        }
        const onLeave = () => setters.forEach(({ w, y }) => (w(380), y(0)))
        root.current.addEventListener('pointermove', onMove)
        root.current.addEventListener('pointerleave', onLeave)
        return () => {
          root.current?.removeEventListener('pointermove', onMove)
          root.current?.removeEventListener('pointerleave', onLeave)
        }
      })

      return () => mm.revert()
    },
    { scope: root }
  )

  return (
    <section ref={root} className="relative bg-vermilion text-ink px-5 md:px-10 pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden" aria-labelledby="cta-title">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 mb-10">(08) Your turn</p>
      <h2
        id="cta-title"
        aria-label="Raise your voice."
        className="cta-title font-display leading-[0.85] tracking-[-0.045em] text-[clamp(4.2rem,17vw,19rem)]"
      >
        <span className="line-mask"><Chars text="Raise your" /></span>
        <span className="line-mask italic text-bone"><Chars text="voice." /></span>
      </h2>

      <div className="mt-14 md:mt-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <p className="cta-foot max-w-md text-lg md:text-xl leading-relaxed">
          Volunteer, write for us, partner with us or give. <strong className="font-semibold">&#8377;500 supports legal literacy workshops for 10 women.</strong>
        </p>
        <div className="cta-foot flex flex-wrap gap-3">
          <Magnetic>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-ink text-bone rounded-full px-8 py-5 font-mono text-xs uppercase tracking-[0.14em] hover:bg-bone hover:text-ink transition-colors duration-300">
              Get involved <span aria-hidden="true">&rarr;</span>
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/donations" className="inline-flex items-center gap-3 border border-ink rounded-full px-8 py-5 font-mono text-xs uppercase tracking-[0.14em] hover:bg-ink hover:text-bone transition-colors duration-300">
              Donate to us
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  )
}
