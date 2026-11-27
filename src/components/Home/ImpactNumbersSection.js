'use client'

import AnimatedNumber from '@/components/motion/AnimatedNumber'
import Reveal from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import SectionIntro from '@/components/ui/SectionIntro'

const stats = [
  { count: '50000+', label: 'people reached' },
  { count: '7000+', label: 'women & youth engaged' },
  { count: '50+', label: 'sessions' },
]

export default function ImpactNumbersSection() {
  return (
    <section id="impact" data-chapter className="bg-surface px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.5fr] lg:gap-16">
          <Reveal>
            <SectionIntro eyebrow="The change so far" title="Our Impact" />
          </Reveal>

          <Stagger className="grid gap-7 sm:grid-cols-3 sm:gap-0">
            {stats.map(({ count, label }) => (
              <StaggerItem
                key={label}
                className="border-t border-primary/20 pt-5 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-1 sm:first:border-l-0 sm:first:pl-0"
              >
                <AnimatedNumber
                  value={count}
                  className="block font-display-lg text-[3rem] font-medium leading-none tracking-[-0.035em] text-primary md:text-[3.6rem]"
                />
                <h3 className="mt-4 max-w-[12rem] font-body-md text-base font-semibold leading-snug text-on-surface">
                  {label}
                </h3>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
