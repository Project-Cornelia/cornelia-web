'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

// Same figures as the About page.
const stats = [
  { value: '100', suffix: '+', label: 'Student leaders' },
  { value: '25', suffix: '+', label: 'Partner organisations' },
  { value: '15', suffix: '+', label: 'Legal cases' },
  { value: '30', suffix: '+', label: 'Policy briefs' },
]

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Odometer: each digit is a 0-9 column that rolls to its value. Columns spin
// a full extra turn first so small numbers still feel like they travelled.
function Odometer({ value }) {
  return (
    <span className="inline-flex" aria-hidden="true">
      {value.split('').map((d, i) => (
        <span key={i} className="relative inline-block h-[1em] overflow-hidden leading-none">
          <span className="odo-col block" data-target={d}>
            {[...DIGITS, ...DIGITS].map((n, j) => (
              <span key={j} className="block h-[1em] leading-none">
                {n}
              </span>
            ))}
          </span>
        </span>
      ))}
    </span>
  )
}

export default function ImpactNumbers() {
  const root = useRef(null)

  useGSAP(
    () => {
      const cols = gsap.utils.toArray('.odo-col')
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      cols.forEach((col) => {
        const target = Number(col.dataset.target) + 10
        if (reduce) {
          gsap.set(col, { yPercent: (-100 * target) / 20 })
          return
        }
        gsap.fromTo(
          col,
          { yPercent: 0 },
          {
            yPercent: (-100 * target) / 20,
            duration: 2.4,
            ease: 'expo.inOut',
            delay: Math.random() * 0.3,
            scrollTrigger: { trigger: root.current, start: 'top 65%' },
          }
        )
      })
      if (reduce) return
      gsap.from('.stat-rule', { scaleX: 0, transformOrigin: 'left', duration: 1.6, stagger: 0.12, scrollTrigger: { trigger: root.current, start: 'top 70%' } })
      gsap.from('.stat-label', { y: 20, opacity: 0, duration: 1, stagger: 0.1, scrollTrigger: { trigger: root.current, start: 'top 60%' } })
      gsap.from('.num-head .line-inner', { yPercent: 110, stagger: 0.08, scrollTrigger: { trigger: root.current, start: 'top 75%' } })
    },
    { scope: root }
  )

  return (
    <section ref={root} className="relative bg-plum text-bone px-5 md:px-10 py-28 md:py-40 overflow-hidden" aria-labelledby="numbers-title">
      <div className="absolute -right-[20vw] -top-[20vw] w-[60vw] h-[60vw] rounded-full bg-vermilion/20 blur-[120px]" aria-hidden="true" />
      <div className="relative">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/50 mb-8">(06) Powered by our community</p>
        <h2 id="numbers-title" className="num-head font-display text-[clamp(2.6rem,6vw,6.5rem)] leading-[0.92] tracking-[-0.03em] max-w-5xl mb-20 md:mb-28">
          <span className="line-mask"><span className="line-inner block">From lawyers to activists,</span></span>
          <span className="line-mask"><span className="line-inner block italic-wonk text-lilac">researchers to organisers.</span></span>
        </h2>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {stats.map((s) => (
            <li key={s.label}>
              <span className="stat-rule block h-px bg-bone/30 mb-6" />
              <p className="font-display text-[clamp(4rem,9vw,9.5rem)] leading-none tracking-[-0.04em] flex items-start tabular-nums">
                <span className="sr-only">{s.value}{s.suffix}</span>
                <Odometer value={s.value} />
                <span className="text-flare text-[0.5em] mt-[0.1em]" aria-hidden="true">{s.suffix}</span>
              </p>
              <p className="stat-label mt-4 font-mono text-[11px] md:text-xs uppercase tracking-[0.16em] text-bone/60">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
