'use client'

import Image from 'next/image'

export default function DonationsHeroSection() {
  return (
    <section className="relative min-h-screen flex items-end justify-center text-center px-gutter pb-24 md:pb-32 pt-24">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://i.ibb.co/XfZFbBzg/About-Hero.jpg"
            alt="Supporting women's empowerment"
            fill
            className="object-cover brightness-40"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 max-w-3xl animate-fade-in-up">
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-6 leading-tight">
          Support Our Mission
        </h1>
        <p className="font-body-md text-body-sm md:text-body-md text-white/90 max-w-2xl mx-auto">
          Your contribution helps Project Cornelia amplify women's voices, advance policy reform, and build grassroots power for systemic change.
        </p>
      </div>
    </section>
  )
}
