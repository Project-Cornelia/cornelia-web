'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const slides = [
  {
    src: 'https://res.cloudinary.com/vbi4em8b/image/upload/v1795744540/Screenshot_From_2026-11-27_07-20-47_hkfl83.png',
    alt: 'Project Cornelia — hero image one',
  },
  {
    src: 'https://res.cloudinary.com/vbi4em8b/image/upload/v1795744538/Screenshot_From_2026-11-27_07-21-02_jia1tj.png',
    alt: 'Project Cornelia — hero image two',
  },
  {
    src: 'https://res.cloudinary.com/vbi4em8b/image/upload/v1795744538/Screenshot_From_2026-11-27_07-21-16_mbslz8.png',
    alt: 'Project Cornelia — hero image three',
  },
]

const INTERVAL_MS = 3000

export default function HeroSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex items-end justify-center text-center px-gutter pb-24 md:pb-32 pt-24">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === active ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover brightness-40"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl animate-fade-in-up">
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-6 leading-tight">
          Making every woman's voice central to all conversations that matter.
        </h1>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center justify-center bg-primary text-neutral-50 w-full sm:w-auto px-8 py-3 rounded-full font-label-lg text-label-lg border-2 border-primary hover:bg-transparent hover:text-white transition-all duration-300">
            Get involved
          </Link>
          <Link href="/donations" className="inline-flex items-center justify-center bg-transparent text-white w-full sm:w-auto px-8 py-3 rounded-full font-label-lg text-label-lg border-2 border-white hover:bg-white hover:text-primary transition-all duration-300">
            Donate to us
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
