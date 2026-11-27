'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What does politics mean to you?',
    a: "For us, politics isn't limited to elections and parliament. It's about who gets to make decisions, and who gets heard, at home, in the community and in society at large. Politics shapes every part of our lives, and every woman deserves a place in that conversation.",
  },
  {
    q: 'Is Cornelia a registered entity?',
    a: "Yes. Project Cornelia is registered as a trust under the name AINA Foundation, since 27 March 2024. We began in 2021 as a student-run club and grew into an independent organisation before registering.",
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
      'The Constitution Land, a children\'s book on the Preamble',
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
  const [open, setOpen] = useState(0)

  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-surface-container-low">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div
                key={faq.q}
                className="rounded-xl border border-neutral-100 bg-surface overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{faq.q}</h3>
                  <span
                    className={`shrink-0 text-2xl text-primary leading-none transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {faq.a}
                    </p>
                    {faq.list && (
                      <ul className="mt-4 space-y-2 list-disc pl-5">
                        {faq.list.map((item) => (
                          <li
                            key={item}
                            className="font-body-md text-body-md text-on-surface-variant"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {faq.link && (
                      <a
                        href={faq.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block font-label-lg text-label-lg text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
                      >
                        {faq.link.text}
                      </a>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
