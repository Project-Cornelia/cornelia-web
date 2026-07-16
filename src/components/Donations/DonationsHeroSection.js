'use client'

import Image from 'next/image'

export default function DonationsHeroSection() {
  return (
    <section className="bg-surface-tint bg-surface-container-low py-12 md:py-16 px-gutter">
          <div className="bg-surface-tint h-32 md:h-40"></div>
          <div className="max-w-7xl mx-auto">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-surface mb-4">Support Our Mission</h1>
            <p className="font-body-md text-body-md text-surface-dim">
              Your contribution helps Project Cornelia amplify women's voices, advance policy reform, and build grassroots power for systemic change.
            </p>
          </div>
        </section>
  )
}
