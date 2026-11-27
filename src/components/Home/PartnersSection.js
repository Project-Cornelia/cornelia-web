'use client'

import Reveal from '@/components/motion/Reveal'
import SectionIntro from '@/components/ui/SectionIntro'
import { Button } from '@/components/ui/button'

const partners = [
  'Pink Legal (Pink Legal Panache)',
  'Breakthrough India',
  "L'Oréal Paris",
  'Hollaback! (now Right To Be)',
  'Chhanv Foundation / Sheroes Hangout',
  'Human Beings of Lucknow',
  'Think India (Tribal Rights Forum)',
  'Poems India',
  'Ahaana – For a Change',
  'Speaking Souls',
  'SABIA (Share A Book India Association)',
  'National Association for the Blind, Delhi',
  'Youth Alliance',
  'Indian School of Democracy',
  'Lokniti–CSDS',
  'NSS, Lady Shri Ram College (Ikhtiyaar Wing)',
  'BCG India',
  'Schools of Specialised Excellence (SoSE), Government of Delhi',
  'Citizens for Public Leadership (CPL)',
  'E-Summit 2023',
  'Bookosmia',
  'Qshala',
  'Central European University (Science for Society Hub)',
  'Photo Circle',
  'Queering Healthcare',
]

export default function PartnersSection() {
  const track = [...partners, ...partners]

  return (
    <section id="partners" data-chapter className="overflow-hidden bg-[#352926] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-gutter">
        <Reveal>
          <div className="grid items-end gap-6 md:grid-cols-2 md:gap-16">
            <SectionIntro eyebrow="Organisations we’ve worked with" title="Our Partners" dark />
            <p className="max-w-xl font-body-md text-base leading-relaxed text-white/65 md:justify-self-end md:text-lg">
              We’ve worked with governmental, academic and non-governmental organisations across India, Nepal and Austria.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="relative mt-10" delay={0.1} y={16}>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#352926] to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#352926] to-transparent md:w-32" />
        <div className="partners-track py-2">
          {track.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="mr-4 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 font-body-sm text-sm text-white/80"
              aria-hidden={index >= partners.length}
            >
              {name}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto mt-10 max-w-7xl px-gutter">
        <Reveal delay={0.15}>
          <div className="flex flex-col items-start justify-between gap-5 border-t border-white/15 pt-7 sm:flex-row sm:items-center">
            <p className="max-w-2xl font-body-md text-base text-white/75">
              Want to partner with us? Write to us at contact.projectcornelia@gmail.com.
            </p>
            <Button asChild size="lg" className="shrink-0 bg-surface text-primary hover:bg-primary-fixed">
              <a href="mailto:contact.projectcornelia@gmail.com">
                Write to us <span aria-hidden="true">↗</span>
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
