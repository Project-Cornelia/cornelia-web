'use client'

import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '@/lib/gsap'

const WORDS = ['Collective', 'Criticism', 'Conversation']

function Row({ italic }) {
  const items = [...WORDS, ...WORDS]
  return (
    <div className="marquee-half flex shrink-0 items-center">
      {items.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className={`px-[0.35em] ${italic ? 'italic-wonk' : ''}`}>{w}</span>
          <svg viewBox="0 0 40 40" className="w-[0.55em] h-[0.55em] shrink-0" aria-hidden="true">
            <path d="M20 0 L23 17 L40 20 L23 23 L20 40 L17 23 L0 20 L17 17 Z" fill="currentColor" />
          </svg>
        </span>
      ))}
    </div>
  )
}

// Two bands crossing at an angle. Their speed and skew follow scroll velocity,
// and they reverse with the scroll direction.
export default function MarqueeBand() {
  const root = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const tracks = gsap.utils.toArray('.marquee-track', root.current)
      const state = tracks.map(() => ({ x: 0 }))
      let dir = 1
      let boost = 0
      const skewTo = gsap.quickTo(tracks, 'skewX', { duration: 0.4, ease: 'power3' })

      const st = ScrollTrigger.create({
        trigger: root.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          dir = self.direction
          const v = self.getVelocity()
          boost = Math.min(Math.abs(v) / 120, 18)
          skewTo(gsap.utils.clamp(-12, 12, v / -260))
        },
      })

      const tick = (_, dt) => {
        boost *= 0.92
        tracks.forEach((track, i) => {
          const half = track.firstElementChild.offsetWidth
          const sign = i % 2 === 0 ? -1 : 1
          state[i].x += sign * dir * (0.06 + boost * 0.02) * dt
          const x = gsap.utils.wrap(-half, 0, state[i].x)
          gsap.set(track, { x })
        })
      }
      gsap.ticker.add(tick)
      return () => {
        gsap.ticker.remove(tick)
        st.kill()
      }
    },
    { scope: root }
  )

  return (
    <section ref={root} aria-label="Our three pillars: Collective, Criticism, Conversation" className="relative z-10 py-16 md:py-24 overflow-hidden bg-bone">
      <div className="-rotate-[4deg] scale-110 bg-vermilion text-bone py-3 md:py-5 font-display text-[12vw] md:text-[7.5vw] leading-none tracking-tight shadow-[0_30px_60px_-30px_rgba(18,13,22,0.5)]">
        <div className="marquee-track flex w-max will-change-transform">
          <Row />
          <Row />
        </div>
      </div>
      <div className="rotate-[3deg] scale-110 -mt-4 md:-mt-8 bg-ink text-lilac py-3 md:py-4 font-display text-[9vw] md:text-[5vw] leading-none tracking-tight">
        <div className="marquee-track flex w-max will-change-transform">
          <Row italic />
          <Row italic />
        </div>
      </div>
    </section>
  )
}
