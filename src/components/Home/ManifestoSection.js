'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import RollText from '@/components/Motion/RollText'

// From Cornelia's own "about us" copy. Highlighted words light up in vermilion.
const TEXT =
  'Project Cornelia is a women-led organisation that strives for the active participation of every woman in the democratic discourse of this country. What began as a student-run club is now an independent organisation, the AINA Foundation.'
const HIGHLIGHT = new Set(['women-led', 'every', 'woman', 'democratic', 'student-run', 'independent'])

export default function ManifestoSection() {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.mf-word',
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: 'none',
            scrollTrigger: { trigger: '.mf-text', start: 'top 80%', end: 'bottom 45%', scrub: true },
          }
        )
        gsap.from('.mf-side', {
          opacity: 0,
          y: 40,
          stagger: 0.12,
          scrollTrigger: { trigger: root.current, start: 'top 70%' },
        })
      })
      return () => mm.revert()
    },
    { scope: root }
  )

  return (
    <section ref={root} className="relative bg-bone text-ink px-5 md:px-10 py-28 md:py-44" aria-labelledby="manifesto-title">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3 flex md:flex-col justify-between gap-6">
          <p className="mf-side font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">(03) Who we are</p>
          <div className="mf-side hidden md:block w-28 h-28 rounded-full bg-[conic-gradient(from_90deg,#E8401F,#C7B5FF,#FFB23F,#E8401F)] animate-[spin_14s_linear_infinite] [mask:radial-gradient(circle,transparent_42%,#000_43%)]" aria-hidden="true" />
        </div>
        <div className="md:col-span-9">
          <h2 id="manifesto-title" className="sr-only">Who we are</h2>
          <p className="mf-text font-display text-[clamp(1.9rem,4.4vw,4.6rem)] leading-[1.08] tracking-[-0.02em]">
            {TEXT.split(' ').map((w, i) => {
              const bare = w.replace(/[.,]/g, '').toLowerCase()
              const hl = HIGHLIGHT.has(bare)
              return (
                <span key={i} className={`mf-word inline ${hl ? 'italic-wonk text-vermilion' : ''}`}>
                  {w}{' '}
                </span>
              )
            })}
          </p>
          <div className="mf-side mt-12 flex flex-wrap items-center gap-8">
            <Link href="/about" className="group inline-flex items-center gap-4 font-mono text-xs uppercase tracking-[0.16em]">
              <span className="w-12 h-12 rounded-full bg-ink text-bone grid place-items-center transition-transform duration-500 group-hover:rotate-[-45deg] group-hover:bg-vermilion">
                &rarr;
              </span>
              <RollText>Read our story</RollText>
            </Link>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">Legal empowerment &middot; Policy research &middot; Community building &middot; Youth leadership</p>
          </div>
        </div>
      </div>
    </section>
  )
}
