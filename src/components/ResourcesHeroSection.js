'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end justify-center text-center px-gutter pb-24 md:pb-32 pt-24">
              <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                  <Image
                    src="https://i.ibb.co/rKVv1NNT/Resources-Hero.jpg"
                    alt="Resources and knowledge"
                    fill
                    className="object-cover brightness-40"
                  />
                </div>
              </div>
    
              <div className="relative z-10 max-w-3xl animate-fade-in-up">
                <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-6 leading-tight">
                  Knowledge and Tools for Empowerment
                </h1>
                <p className="font-body-md text-body-sm md:text-body-md text-white/90 mb-10 max-w-2xl mx-auto">
                  Access our comprehensive collection of guides, toolkits, and research documents designed to empower women and amplify voices in democratic discourse.
                </p>
              </div>
            </section>
  )
}
