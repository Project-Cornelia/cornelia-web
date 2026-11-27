'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { editorialEase } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/button'

const slides = [
  {
    src: 'https://res.cloudinary.com/vbi4em8b/image/upload/v1795744540/Screenshot_From_2026-11-27_07-20-47_hkfl83.png',
    alt: 'Project Cornelia community gathering',
  },
  {
    src: 'https://res.cloudinary.com/vbi4em8b/image/upload/v1795744538/Screenshot_From_2026-11-27_07-21-02_jia1tj.png',
    alt: 'A Project Cornelia conversation in progress',
  },
  {
    src: 'https://res.cloudinary.com/vbi4em8b/image/upload/v1795744538/Screenshot_From_2026-11-27_07-21-16_mbslz8.png',
    alt: 'Members of the Project Cornelia collective',
  },
]

const INTERVAL_MS = 3000

export default function HeroSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (paused || reduceMotion) return undefined
    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % slides.length)
    }, INTERVAL_MS)
    return () => window.clearTimeout(timer)
  }, [active, paused, reduceMotion])

  const entrance = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.85, delay, ease: editorialEase },
    }),
  }

  return (
    <section
      id="hero"
      data-chapter
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-neutral-900 px-gutter pb-10 pt-36 text-white md:pb-12"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: index === active ? 1 : 0,
              scale: index === active ? 1 : 1.045,
            }}
            transition={{
              opacity: { duration: reduceMotion ? 0 : 0.9, ease: 'easeInOut' },
              scale: { duration: reduceMotion ? 0 : 4.8, ease: 'linear' },
            }}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-neutral-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/35 to-neutral-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/45 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          custom={0.2}
          variants={entrance}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          className="mb-6 flex items-center gap-3 font-label-lg text-[11px] uppercase tracking-[0.24em] text-white/70"
        >
          <span className="h-px w-10 bg-white/50" />
          Project Cornelia · AINA Foundation
        </motion.div>

        <motion.h1
          custom={0.32}
          variants={entrance}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          className="max-w-4xl font-display-lg text-[clamp(2.75rem,5.4vw,5rem)] font-medium leading-[1.02] tracking-[-0.025em] text-white"
        >
          Collective.Conversation. Criticism.
        </motion.h1>

        <motion.div
          custom={0.46}
          variants={entrance}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="group bg-surface text-primary hover:bg-primary-fixed">
            <Link href="/contact">
              Get involved
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/45 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-primary"
          >
            <Link href="/donations">Donate</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-12 flex items-end justify-between gap-6 border-t border-white/20 pt-5"
        >
          <div className="flex items-center gap-4">
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setPaused((current) => !current)}
              aria-label={paused ? 'Resume automatic slideshow' : 'Pause automatic slideshow'}
              className="rounded-full border border-white/30 text-xs text-white/75 hover:bg-white hover:text-primary"
            >
              <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
            </Button>
            <span className="font-label-lg text-[11px] tabular-nums tracking-[0.18em] text-white/60">
              {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2" aria-label="Choose hero image">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={index === active}
                  className="group flex h-8 items-center"
                >
                  <span
                    className={`block h-[3px] rounded-full transition-all duration-500 ${
                      index === active ? 'w-10 bg-white' : 'w-5 bg-white/35 group-hover:bg-white/70'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })}
            className="group hidden items-center gap-3 font-label-lg text-[11px] uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-white sm:flex"
          >
            Begin the journey
            <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-transform group-hover:translate-y-1">↓</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
