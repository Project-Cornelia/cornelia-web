'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end justify-center text-center px-gutter pb-24 md:pb-32 pt-24">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://i.ibb.co/67sfd5H4/Home-Hero.png"
            alt="Women collective gathering"
            fill
            className="object-cover brightness-40"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-3xl animate-fade-in-up">
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-6 leading-tight">
          Making every woman's voice central to all conversations that matter.
        </h1>
        <p className="font-body-md text-body-sm md:text-body-md text-white/90 mb-10 max-w-2xl mx-auto">
          A national collective empowering women through legal advocacy, policy reform, and grassroots dialogue.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-primary text-neutral-50 px-8 py-3 rounded-full font-label-lg text-label-lg border-2 border-primary hover:bg-transparent hover:text-white transition-all duration-300">
            Get involved
          </button>
          <button className="bg-transparent text-white px-8 py-3 rounded-full font-label-lg text-label-lg border-2 border-white hover:bg-white hover:text-primary transition-all duration-300">
            Donate to us
          </button>
        </div>
      </div>
    </section>
  )
}
