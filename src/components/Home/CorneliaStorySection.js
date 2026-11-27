'use client'

import Image from 'next/image'

const paragraphs = [
  "Project Cornelia takes its name from Cornelia Sorabji, a woman who refused to accept the boundaries drawn around her. She became the first woman to study law at Oxford and one of India's first women lawyers, at a time when women were largely shut out of legal and public life.",
  "Cornelia spent her life bringing law within reach of women who had no one to speak for them—advising women living in seclusion, arguing for women's education, and widening the door for those who would follow. Her quiet defiance is the inheritance we carry: the belief that women do not need permission to speak, lead, or reshape the rules that govern their lives.",
]

export default function CorneliaStorySection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-100">
          <Image
            src="https://res.cloudinary.com/vbi4em8b/image/upload/v1795744983/Screenshot_From_2026-11-27_07-47-40_a9kbyi.png"
            alt="Why we are called Cornelia"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-3 font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary">
            Our Name
          </p>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
            Why are we called Cornelia
          </h2>
          <div className="mt-6 space-y-5">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-body-md text-body-md leading-relaxed text-on-surface-variant"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
