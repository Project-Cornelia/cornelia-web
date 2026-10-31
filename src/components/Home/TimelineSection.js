'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

const milestones = [
  { year: '2020', title: 'The movement begins', text: 'The Movement Begins as a university-based advocacy group.' },
  { year: '2021', title: 'A manifesto', text: 'Published first collective manifesto on gender equity in policy.' },
  { year: '2022', title: 'Three pillars', text: 'Launched the Three Pillars initiative across five major cities.' },
  { year: '2023', title: 'A national voice', text: 'Recognized as a leading national voice in democratic participation.' },
]

// Desktop: the section pins and the track slides sideways; each outlined
// year fills with colour as it passes the middle. Mobile: a vertical stack.
export default function TimelineSection() {
  const root = useRef(null)
  const track = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        const distance = () => track.current.scrollWidth - window.innerWidth

        const slide = gsap.to(track.current, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        })

        gsap.to('.tl-progress', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: () => `+=${distance()}`, scrub: true, invalidateOnRefresh: true },
        })

        gsap.utils.toArray('.tl-panel').forEach((panel) => {
          gsap.fromTo(
            panel.querySelector('.tl-fill'),
            { clipPath: 'inset(100% 0% 0% 0%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              ease: 'none',
              scrollTrigger: { trigger: panel, containerAnimation: slide, start: 'left 85%', end: 'center 50%', scrub: true },
            }
          )
          gsap.from(panel.querySelectorAll('.tl-copy'), {
            y: 60,
            opacity: 0,
            stagger: 0.08,
            ease: 'expo.out',
            duration: 1.2,
            scrollTrigger: { trigger: panel, containerAnimation: slide, start: 'left 60%', toggleActions: 'play none none reverse' },
          })
          gsap.to(panel.querySelector('.tl-year'), {
            xPercent: -14,
            ease: 'none',
            scrollTrigger: { trigger: panel, containerAnimation: slide, start: 'left right', end: 'right left', scrub: true },
          })
        })
      })

      mm.add('(max-width: 767px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray('.tl-panel').forEach((panel) => {
          gsap.fromTo(
            panel.querySelector('.tl-fill'),
            { clipPath: 'inset(100% 0% 0% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: { trigger: panel, start: 'top 85%', end: 'top 35%', scrub: true } }
          )
        })
      })

      return () => mm.revert()
    },
    { scope: root }
  )

  return (
    <section ref={root} id="our-past" className="relative bg-ink text-bone overflow-hidden md:h-[100svh]" aria-labelledby="story-title">
      <div ref={track} className="flex flex-col md:flex-row md:h-full md:w-max will-change-transform">
        <div className="md:w-[46vw] shrink-0 px-5 md:px-10 pt-28 pb-12 md:py-0 flex flex-col justify-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/50 mb-8">(04) Our story</p>
          <h2 id="story-title" className="font-display text-[clamp(3rem,7vw,8rem)] leading-[0.9] tracking-[-0.03em]">
            A student <br />
            movement, <br />
            <span className="italic-wonk text-flare">grown up.</span>
          </h2>
          <p className="mt-8 max-w-md text-lg text-bone/70">Born as a student-led movement, growing into a national women&apos;s collective.</p>
          <p className="hidden md:flex mt-12 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/40">
            Keep scrolling <span aria-hidden="true" className="inline-block animate-[nudge_1.6s_ease-in-out_infinite]">&rarr;</span>
          </p>
        </div>

        <ol className="flex flex-col md:flex-row">
          {milestones.map((m, i) => (
            <li key={m.year} className="tl-panel relative md:w-[62vw] lg:w-[52vw] shrink-0 px-5 md:px-10 py-14 md:py-0 flex flex-col justify-center border-t md:border-t-0 md:border-l border-bone/10">
              <div className="relative tl-year font-display leading-[0.8] tracking-[-0.05em] text-[34vw] md:text-[22vw] select-none" aria-hidden="true">
                <span className="text-outline">{m.year}</span>
                <span className="tl-fill absolute inset-0 text-flare italic-wonk">{m.year}</span>
              </div>
              <div className="mt-6 md:mt-10 md:ml-[4vw] max-w-md">
                <p className="tl-copy font-mono text-[11px] uppercase tracking-[0.18em] text-lilac mb-3">
                  <span className="sr-only">{m.year}: </span>Chapter 0{i + 1}
                </p>
                <h3 className="tl-copy font-display text-3xl md:text-4xl mb-3">{m.title}</h3>
                <p className="tl-copy text-bone/70 text-lg leading-relaxed">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="hidden md:block w-[20vw] shrink-0" aria-hidden="true" />
      </div>

      <div className="hidden md:block absolute left-10 right-10 bottom-10 h-px bg-bone/15" aria-hidden="true">
        <div className="tl-progress h-full bg-flare origin-left scale-x-0" />
      </div>
    </section>
  )
}
