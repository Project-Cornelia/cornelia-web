'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import RollText from '@/components/Motion/RollText'

const formatDate = (d) => {
  if (!d) return ''
  const date = new Date(d)
  if (Number.isNaN(date.getTime())) return String(d)
  return date.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })
}

// Editorial list. On desktop a preview card trails the cursor, tilting with
// its velocity and swapping image per row.
export default function FeaturedPublicationsSection({ publications = [] }) {
  const root = useRef(null)
  const preview = useRef(null)
  const [active, setActive] = useState(-1)
  const items = publications.slice(0, 4)

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [items.length])

  useGSAP(
    () => {
      if (!items.length) return
      gsap.from('.pub-row', {
        y: 60,
        opacity: 0,
        stagger: 0.08,
        duration: 1.2,
        scrollTrigger: { trigger: '.pub-list', start: 'top 80%' },
      })
      gsap.from('.pub-head .line-inner', { yPercent: 110, stagger: 0.08, scrollTrigger: { trigger: root.current, start: 'top 75%' } })

      const card = preview.current
      if (!card) return
      // Stack the preview images vertically; the active row slides its image into view.
      gsap.set(card.querySelectorAll('.pv-img'), { yPercent: (i) => i * 100 })
      if (window.matchMedia('(hover: none)').matches) return
      const xTo = gsap.quickTo(card, 'x', { duration: 0.6, ease: 'power3' })
      const yTo = gsap.quickTo(card, 'y', { duration: 0.6, ease: 'power3' })
      const rTo = gsap.quickTo(card, 'rotation', { duration: 0.8, ease: 'power3' })
      let lastX = 0
      const onMove = (e) => {
        const r = root.current.getBoundingClientRect()
        xTo(e.clientX - r.left)
        yTo(e.clientY - r.top)
        rTo(gsap.utils.clamp(-14, 14, (e.clientX - lastX) * 0.6))
        lastX = e.clientX
      }
      root.current.addEventListener('pointermove', onMove)
      return () => root.current?.removeEventListener('pointermove', onMove)
    },
    { scope: root, dependencies: [items.length] }
  )

  useEffect(() => {
    const card = preview.current
    if (!card) return
    gsap.to(card, {
      scale: active >= 0 ? 1 : 0,
      opacity: active >= 0 ? 1 : 0,
      duration: 0.6,
      ease: active >= 0 ? 'expo.out' : 'power3.in',
      overwrite: 'auto',
    })
    if (active >= 0) {
      gsap.to(card.querySelectorAll('.pv-img'), {
        yPercent: (i) => (i - active) * 100,
        duration: 0.8,
        ease: 'expo.out',
        overwrite: 'auto',
      })
    }
  }, [active])

  if (items.length === 0) return null

  return (
    <section ref={root} className="relative bg-bone text-ink px-5 md:px-10 py-28 md:py-40" aria-labelledby="research-title">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-20">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50 mb-6">(07) Featured research</p>
          <h2 id="research-title" className="pub-head font-display text-[clamp(2.8rem,6vw,6.5rem)] leading-[0.92] tracking-[-0.03em]">
            <span className="line-mask"><span className="line-inner block">Read the</span></span>
            <span className="line-mask"><span className="line-inner block italic-wonk text-vermilion">conversation.</span></span>
          </h2>
        </div>
        <Link href="/publications" className="group inline-flex items-center gap-4 font-mono text-xs uppercase tracking-[0.16em] shrink-0">
          <RollText>All publications</RollText>
          <span className="w-12 h-12 rounded-full border border-ink grid place-items-center transition-all duration-500 group-hover:bg-ink group-hover:text-bone group-hover:rotate-[-45deg]">&rarr;</span>
        </Link>
      </div>

      <ul className="pub-list border-t border-ink/15" onPointerLeave={() => setActive(-1)}>
        {items.map((p, i) => (
          <li key={p.id ?? p.slug} className="pub-row border-b border-ink/15">
            <Link
              href={`/publications/${p.slug}`}
              data-cursor="Read"
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(-1)}
              className="group relative grid grid-cols-12 items-center gap-4 py-7 md:py-10 overflow-hidden"
            >
              <span className="absolute inset-0 bg-ink origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" aria-hidden="true" />
              <span className="relative col-span-2 md:col-span-1 font-mono text-xs text-ink/40 group-hover:text-bone/50 transition-colors duration-500">0{i + 1}</span>
              <span className="relative col-span-10 md:col-span-7 font-display text-2xl md:text-[clamp(1.8rem,3.2vw,3.4rem)] leading-[1.05] tracking-[-0.02em] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-bone group-hover:translate-x-4 group-hover:italic">
                {p.title}
              </span>
              <span className="relative col-start-3 md:col-start-auto col-span-5 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.16em] text-vermilion group-hover:text-flare">{p.category}</span>
              <span className="relative col-span-5 md:col-span-2 text-right font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50 group-hover:text-bone/60 transition-colors duration-500">{formatDate(p.date)}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Cursor-following preview, desktop only */}
      <div
        ref={preview}
        aria-hidden="true"
        className="hidden md:block pointer-events-none absolute left-0 top-0 z-20 w-[22vw] max-w-[360px] aspect-[4/5] -ml-[11vw] -mt-[14vw] rounded-2xl overflow-hidden shadow-2xl opacity-0 scale-0"
      >
        {items.map((p, i) => (
          <div key={i} className="pv-img absolute inset-0">
            {p.image ? (
              <img src={p.image} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-vermilion" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
