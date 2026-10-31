'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '@/lib/gsap'
import Chars from '@/components/Motion/Chars'
import Magnetic from '@/components/Motion/Magnetic'
import VoiceField from './VoiceField'

const HERO_IMAGE = 'https://res.cloudinary.com/vbi4em8b/image/upload/v1784192079/AT7_7795_ql3qo9.webp'

export default function HeroSection({ play }) {
  const root = useRef(null)
  const pillRef = useRef(null)
  const revealRef = useRef(null)
  const energy = useRef(0)

  // Scroll: the photo pill inside "central" opens up until it fills the
  // screen while the words around it are pushed out to the edges.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const section = root.current
        const insetFromPill = () => {
          const s = section.getBoundingClientRect()
          const p = pillRef.current.getBoundingClientRect()
          const top = p.top - s.top
          const left = p.left - s.left
          const right = s.right - p.right
          const bottom = s.bottom - p.bottom
          return `inset(${top}px ${right}px ${bottom}px ${left}px round ${p.height / 2}px)`
        }

        gsap.set(revealRef.current, { clipPath: insetFromPill })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=170%',
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        })

        tl.fromTo(revealRef.current, { clipPath: insetFromPill }, { clipPath: 'inset(0px 0px 0px 0px round 0px)', ease: 'power2.inOut', duration: 1 }, 0)
          .fromTo('.hero-photo', { scale: 1.45 }, { scale: 1, ease: 'none', duration: 1 }, 0)
          .to('.hero-line-1', { xPercent: -60, opacity: 0, ease: 'power2.in', duration: 0.6 }, 0)
          .to('.hero-w-woman', { xPercent: -120, opacity: 0, ease: 'power2.in', duration: 0.6 }, 0)
          .to('.hero-w-voice', { xPercent: 120, opacity: 0, ease: 'power2.in', duration: 0.6 }, 0)
          .to('.hero-w-central', { xPercent: -80, opacity: 0, ease: 'power2.in', duration: 0.6 }, 0.05)
          .to('.hero-sub, .hero-meta', { y: 80, opacity: 0, ease: 'power2.in', duration: 0.4 }, 0)
          .to('.hero-field', { opacity: 0, duration: 0.5 }, 0.1)
          .from('.hero-reveal-line', { yPercent: 110, stagger: 0.06, duration: 0.35, ease: 'power3.out' }, 0.72)
          .from('.hero-reveal-cta', { y: 30, opacity: 0, duration: 0.25 }, 0.85)
      })
      return () => mm.revert()
    },
    { scope: root }
  )

  // Intro: plays once the preloader has lifted.
  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        energy.current = 1
        return
      }
      if (!play) {
        gsap.set('.hero-title .char, .hero-sub .char', { yPercent: 115 })
        gsap.set(pillRef.current, { width: 0 })
        gsap.set('.hero-meta', { opacity: 0 })
        return
      }
      const syncPhotoToPill = () => {
        const s = root.current.getBoundingClientRect()
        const p = pillRef.current.getBoundingClientRect()
        gsap.set(revealRef.current, {
          clipPath: `inset(${p.top - s.top}px ${s.right - p.right}px ${s.bottom - p.bottom}px ${p.left - s.left}px round ${p.height / 2}px)`,
        })
      }
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.to(energy, { current: 1, duration: 2.4, ease: 'power2.out' }, 0)
        .fromTo('.hero-title .char', { yPercent: 115, rotate: 8, '--wght': 200 }, { yPercent: 0, rotate: 0, '--wght': 560, duration: 1.4, stagger: 0.022 }, 0.1)
        .fromTo(pillRef.current, { width: 0 }, { width: '1.55em', duration: 1.4, ease: 'expo.inOut', onUpdate: syncPhotoToPill }, 0.5)
        .fromTo('.hero-sub .char', { yPercent: 110 }, { yPercent: 0, duration: 1.1, stagger: 0.012 }, 0.7)
        .fromTo('.hero-meta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, 1)
        .add(() => ScrollTrigger.refresh(), 1.9)

      // "voice" never quite sits still: it breathes like someone about to speak.
      gsap.to('.hero-w-voice .char', {
        '--wght': 820,
        '--soft': 100,
        duration: 1.6,
        ease: 'sine.inOut',
        stagger: { each: 0.12, repeat: -1, yoyo: true },
        delay: 2,
      })
    },
    { scope: root, dependencies: [play] }
  )

  return (
    <section
      ref={root}
      className="hero relative h-[100svh] min-h-[620px] bg-ink text-bone overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="hero-field absolute inset-0">
        <VoiceField energyRef={energy} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(18,13,22,0.85)_100%)]" />
      </div>

      <div className="relative z-20 h-full flex flex-col justify-center px-5 md:px-10 pt-20 pointer-events-none">
        <h1
          id="hero-title"
          aria-label="Making every woman's voice central to all conversations that matter."
          className="hero-title font-display leading-[0.92] tracking-[-0.035em] text-[clamp(3.1rem,11.2vw,13rem)]"
        >
          <span className="line-mask hero-line-1">
            <Chars text="Making every" />
          </span>
          <span className="line-mask md:pl-[8vw]">
            <span className="hero-w-woman inline-block">
              <Chars text="woman's" />
            </span>{' '}
            <span className="hero-w-voice inline-block italic text-flare">
              <Chars text="voice" />
            </span>
          </span>
          <span className="line-mask flex items-center">
            <span className="hero-w-central inline-block">
              <Chars text="central" />
            </span>
            <span
              ref={pillRef}
              aria-hidden="true"
              className="hero-pill inline-block h-[0.72em] w-[1.55em] ml-[0.18em] rounded-full shrink-0"
            />
          </span>
        </h1>

        <p className="hero-sub mt-6 md:mt-8 md:pl-[8vw] font-display italic text-[clamp(1.25rem,2.6vw,2.6rem)] text-bone/80 overflow-hidden">
          <Chars text="to all conversations that matter." />
        </p>

        <div className="absolute left-5 right-5 md:left-10 md:right-10 bottom-6 md:bottom-10 flex items-end justify-between gap-6">
          <p className="hero-meta max-w-sm font-mono text-[11px] md:text-xs uppercase tracking-[0.14em] leading-relaxed text-bone/60">
            A national collective empowering women through legal advocacy, policy reform, and grassroots dialogue.
          </p>
          <div className="hero-meta hidden sm:flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/60">
            <span className="relative block w-px h-12 bg-bone/20 overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-1/2 bg-flare animate-[scrollcue_1.8s_cubic-bezier(0.76,0,0.24,1)_infinite]" />
            </span>
            Scroll to the centre
          </div>
        </div>
      </div>

      {/* Photo layer: clipped to the pill at first, then to the full screen. */}
      <div ref={revealRef} className="absolute inset-0 z-10 overflow-hidden [clip-path:inset(50%_50%_50%_50%)]">
        <img src={HERO_IMAGE} alt="Women of the Cornelia collective gathered together" className="hero-photo absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />
        <div className="absolute inset-x-5 md:inset-x-10 bottom-10 md:bottom-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="font-display text-[clamp(1.8rem,4.6vw,4.8rem)] leading-[1] tracking-tight max-w-5xl text-bone">
            <span className="line-mask"><span className="hero-reveal-line block">A national collective</span></span>
            <span className="line-mask"><span className="hero-reveal-line block">empowering <em className="italic-wonk text-flare">women</em> through</span></span>
            <span className="line-mask"><span className="hero-reveal-line block">law, policy &amp; dialogue.</span></span>
          </p>
          <div className="hero-reveal-cta flex flex-wrap gap-3 shrink-0">
            <Magnetic>
              <Link href="/contact" className="inline-flex items-center gap-3 bg-flare text-ink rounded-full px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] hover:bg-bone transition-colors">
                Get involved <span aria-hidden="true">&rarr;</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/donations" className="inline-flex items-center gap-3 border border-bone/60 text-bone rounded-full px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] hover:bg-bone hover:text-ink transition-colors">
                Donate to us
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  )
}
