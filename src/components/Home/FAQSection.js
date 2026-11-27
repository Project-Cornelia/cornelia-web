'use client'

import { useState } from 'react'
import Reveal from '@/components/motion/Reveal'
import SectionIntro from '@/components/ui/SectionIntro'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

const faqs = [
  {
    q: 'What does politics mean to you?',
    a: "For us, politics isn't limited to elections and parliament. It's about who gets to make decisions, and who gets heard, at home, in the community and in society at large. Politics shapes every part of our lives, and every woman deserves a place in that conversation.",
  },
  {
    q: 'Is Cornelia a registered entity?',
    a: 'Yes. Project Cornelia is registered as a trust under the name AINA Foundation, since 27 March 2024. We began in 2021 as a student-run club and grew into an independent organisation before registering.',
  },
  {
    q: 'Can men be a part of Project Cornelia?',
    a: 'Absolutely. Men are important allies in achieving our vision, and we encourage everyone to join our sessions, events and conversations.',
  },
  {
    q: 'What is HerMat?',
    a: 'HerMat ("her vote") is our non-partisan voter awareness campaign for women. Each session covers three questions: Why vote?, How to vote? and Who to vote for? We never tell women whom to choose; we help them make that choice for themselves. HerMat has reached women in 10 villages in Chhattisgarh and in Zamrudpur, New Delhi.',
  },
  {
    q: 'Do you only run voting and election-related sessions?',
    a: 'No. Politics is broader than that for us. HerMat focuses on voting, but our work also includes:',
    list: [
      'public lectures in India and Nepal',
      "a youth fellowship with Delhi's Schools of Specialised Excellence",
      "research on women's political participation",
      "The Constitution Land, a children's book on the Preamble",
      'fundraising for acid attack survivors',
    ],
  },
  {
    q: 'How is Project Cornelia funded?',
    a: "So far, our founding team has funded our work. We're opening a bank account and will start accepting donations soon.",
  },
  {
    q: 'Where can I see your impact and financial reports?',
    a: 'Our annual impact and financial reports, from 2021 to the present, are available here:',
    link: {
      text: 'Impact & Financial Reports',
      href: 'https://drive.google.com/drive/folders/1hmr4gYHXz6KgVPj_8Y0m5DWKijNls9wE?usp=sharing',
    },
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState('0')

  return (
    <section id="faq" data-chapter className="bg-surface px-gutter py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-36">
            <SectionIntro eyebrow="Questions, answered" title="Frequently Asked Questions" />
            <Button asChild variant="link" className="mt-7">
              <a href="mailto:contact.projectcornelia@gmail.com">
                Still curious? Write to us <span aria-hidden="true">↗</span>
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion
            type="single"
            collapsible
            value={open}
            onValueChange={setOpen}
            className="border-t border-primary/15"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={String(index)}>
                <AccordionTrigger className="gap-5 py-6">
                  <span className="font-label-md text-[11px] tabular-nums tracking-[0.15em] text-primary/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 font-headline-sm text-[1.25rem] font-semibold leading-snug text-on-surface md:text-[1.4rem]">
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-10 pr-4 md:pl-12">
                  <p className="max-w-2xl font-body-md text-base leading-relaxed text-on-surface-variant">
                    {faq.a}
                  </p>
                  {faq.list && (
                    <ul className="mt-4 space-y-2">
                      {faq.list.map((item) => (
                        <li key={item} className="flex gap-3 font-body-md text-base leading-relaxed text-on-surface-variant">
                          <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {faq.link && (
                    <Button asChild variant="link" className="mt-5">
                      <a href={faq.link.href} target="_blank" rel="noopener noreferrer">
                        {faq.link.text} <span aria-hidden="true">↗</span>
                      </a>
                    </Button>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
