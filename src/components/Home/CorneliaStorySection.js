'use client'

import Reveal from '@/components/motion/Reveal'
import ParallaxImage from '@/components/motion/ParallaxImage'
import SectionIntro from '@/components/ui/SectionIntro'

const paragraphs = [
  "Project Cornelia takes its name from Cornelia Sorabji, a woman who refused to accept the boundaries drawn around her. She became the first woman to study law at Oxford and one of India's first women lawyers, at a time when women were largely shut out of legal and public life.",
  "Cornelia spent her life bringing law within reach of women who had no one to speak for them—advising women living in seclusion, arguing for women's education, and widening the door for those who would follow. Her quiet defiance is the inheritance we carry: the belief that women do not need permission to speak, lead, or reshape the rules that govern their lives.",
]

export default function CorneliaStorySection() {
  return (
    <section id="cornelia" data-chapter className="bg-surface px-gutter py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
        <Reveal className="relative" y={36}>
          <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[2rem] border-l border-t border-primary/30" aria-hidden="true" />
          <ParallaxImage
            src="https://res.cloudinary.com/vbi4em8b/image/upload/v1795744983/Screenshot_From_2026-11-27_07-47-40_a9kbyi.png"
            alt="Cornelia Sorabji, the inspiration behind Project Cornelia’s name"
            className="aspect-[4/3] rounded-[1.75rem] bg-surface-container shadow-soft"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute -bottom-5 right-5 rounded-2xl bg-primary px-5 py-4 text-white shadow-lift md:right-8">
            <p className="font-label-lg text-[10px] uppercase tracking-[0.2em] text-white/60">Our namesake</p>
            <p className="mt-1 font-headline-sm text-xl">Cornelia Sorabji</p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <SectionIntro
            chapter="04"
            eyebrow="Our name"
            title="Why are we called Cornelia?"
          />
          <div className="mt-7 space-y-5 border-l border-primary/20 pl-6">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-body-md text-base leading-[1.8] text-on-surface-variant md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
