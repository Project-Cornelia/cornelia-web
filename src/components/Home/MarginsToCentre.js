'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

// The issues Cornelia works on, taken from its own reports and pages.
const ISSUES = [
  'Domestic violence',
  'Street harassment',
  'Rights of acid attack survivors',
  'Legal literacy',
  'Policy reform',
  'Democratic participation',
  'Gender equity',
  'Financial autonomy',
  'Safety in public spaces',
  'Youth leadership',
  'Grassroots dialogue',
  'Legal advocacy',
]

// Spread the phrases around an ellipse with a little jitter so it reads as
// scattered, not geometric.
const placed = ISSUES.map((label, i) => {
  const angle = (i / ISSUES.length) * Math.PI * 2 + (i % 2 ? 0.18 : -0.12)
  const ring = i % 3 === 0 ? 1.08 : i % 3 === 1 ? 0.9 : 1
  return {
    label,
    x: Math.cos(angle) * 40 * ring, // vw
    y: Math.sin(angle) * 36 * ring, // vh
    rot: ((i * 37) % 14) - 7,
    serif: i % 4 === 1,
  }
})

// Defined at module scope: a component declared inside render would remount
// on every parent render and drop the GSAP state applied to its nodes.
function Words({ text, className }) {
  return (
    <span className={className}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.06em]">
          <span className="char-w inline-block">{w}&nbsp;</span>
        </span>
      ))}
    </span>
  )
}

export default function MarginsToCentre() {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const phrases = gsap.utils.toArray('.issue')
        const lines = gsap.utils.toArray('.issue-line')

        phrases.forEach((el, i) => {
          const p = placed[i]
          gsap.set(el, { xPercent: -50, yPercent: -50, x: `${p.x}vw`, y: `${p.y}vh`, rotate: p.rot })
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=220%',
            scrub: 1.2,
            pin: true,
          },
        })

        tl.from(phrases, { opacity: 0, scale: 0.6, x: (i) => `${placed[i].x * 1.5}vw`, y: (i) => `${placed[i].y * 1.5}vh`, stagger: 0.03, duration: 0.5, ease: 'power2.out' }, 0)
          .from('.margins-a .char-w', { yPercent: 110, stagger: 0.04, duration: 0.4 }, 0.1)
          .fromTo(lines, { strokeDashoffset: 1 }, { strokeDashoffset: 0, stagger: 0.03, duration: 0.6, ease: 'none' }, 0.5)
          .to(phrases, {
            x: 0,
            y: 0,
            rotate: 0,
            scale: 0.15,
            opacity: 0,
            stagger: { each: 0.05, from: 'random' },
            duration: 0.9,
            ease: 'power3.in',
          }, 1.1)
          .to(lines, { opacity: 0, duration: 0.4 }, 1.6)
          .to('.margins-a .char-w', { yPercent: -110, stagger: 0.03, duration: 0.4, ease: 'power2.in' }, 1.5)
          .fromTo('.centre-core', { scale: 0 }, { scale: 0.35, duration: 0.5, ease: 'back.out(2)' }, 1.6)
          .fromTo('.centre-pulse', { scale: 0.2, opacity: 0.9 }, { scale: 1.4, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power1.out' }, 1.65)
          .to('.centre-core', { scale: 1, duration: 0.6, ease: 'power3.inOut' }, 2.05)
          .from('.margins-b .char-w', { yPercent: 110, stagger: 0.05, duration: 0.5 }, 2.3)
          .from('.margins-foot', { opacity: 0, y: 30, duration: 0.4 }, 2.55)
          .to({}, { duration: 0.3 })
      })

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.utils.toArray('.issue').forEach((el, i) => {
          const p = placed[i]
          gsap.set(el, { xPercent: -50, yPercent: -50, x: `${p.x * 0.8}vw`, y: `${p.y * 0.8}vh`, rotate: p.rot })
        })
      })

      return () => mm.revert()
    },
    { scope: root }
  )

  return (
    <section ref={root} className="relative h-[100svh] min-h-[600px] bg-bone text-ink overflow-hidden" aria-labelledby="margins-title">
      <div className="absolute top-24 md:top-28 left-5 md:left-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
        (02) Why we exist
      </div>

      {/* Connection lines from each issue to the centre */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-50 -50 100 100" preserveAspectRatio="none" aria-hidden="true">
        {placed.map((p, i) => (
          <line
            key={i}
            className="issue-line"
            x1={p.x}
            y1={p.y}
            x2="0"
            y2="0"
            stroke="#E8401F"
            strokeOpacity="0.35"
            strokeWidth="1"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      <ul aria-label="Issues we work on" className="absolute inset-0">
        {placed.map((p, i) => (
          <li
            key={p.label}
            className={`issue absolute left-1/2 top-1/2 whitespace-nowrap ${
              p.serif
                ? 'font-display italic-wonk text-[clamp(1.1rem,2.2vw,2.2rem)] text-vermilion'
                : 'font-mono text-[10px] md:text-xs uppercase tracking-[0.16em] text-ink/70 border border-ink/15 rounded-full px-3 py-1.5 bg-bone/80'
            }`}
          >
            {p.label}
          </li>
        ))}
      </ul>

      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="relative grid place-items-center">
          <span className="centre-pulse absolute w-[60vmin] h-[60vmin] rounded-full border-2 border-vermilion" />
          <span className="centre-pulse absolute w-[60vmin] h-[60vmin] rounded-full border-2 border-vermilion" />
          {/* At scale 1 this disc is big enough to flood the whole viewport. */}
          <span className="centre-core absolute w-[300vmax] h-[300vmax] rounded-full bg-vermilion scale-0" />
          <h2 id="margins-title" className="relative grid text-center font-display leading-[0.95] tracking-[-0.03em] text-[clamp(2.6rem,7.5vw,8.5rem)] px-4">
            <Words text="From the margins," className="margins-a block [grid-area:1/1]" />
            <Words text="to the centre." className="margins-b block [grid-area:1/1] italic-wonk text-bone" />
          </h2>
        </div>
      </div>

      <p className="margins-foot absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-[min(90vw,34rem)] text-center font-sans text-base md:text-lg text-bone">
        We bring the issues women live with every day into the rooms where decisions get made.
      </p>
    </section>
  )
}
