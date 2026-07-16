'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-surface-tint bg-surface-container-low py-12 md:py-16 px-gutter">
          <div className="bg-surface-tint h-32 md:h-40"></div>
          <div className="max-w-7xl mx-auto">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-surface mb-4">Resources</h1>
            <p className="font-body-md text-body-md text-surface-dim">
              Making every woman's voice central to all conversations that matter.
            </p>
          </div>
        </section>
  )
}
