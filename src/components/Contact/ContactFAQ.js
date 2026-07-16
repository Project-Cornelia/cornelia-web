'use client'

export default function ContactFAQ() {
  return (

            <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low px-gutter">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-headline-lg text-headline-sm md:text-headline-md text-on-surface mb-12 text-center">
                        Frequently Asked Questions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md max-w-4xl mx-auto">
                        {[
                            { q: 'How can I get involved?', a: 'Fill out our "Work with us" form on the Get Involved page to explore collaboration opportunities.' },
                            { q: 'How can I contribute financially?', a: 'Donate through our Milaap fundraiser page which supports acid attack survivors.' },
                            { q: 'Can I write for your blog?', a: 'Yes! Fill out our "Write for us" form and share your insights on women, law, and policy.' },
                            { q: 'How often do you respond?', a: 'We aim to respond to all inquiries within 2–3 business days.' },
                        ].map(({ q, a }) => (
                            <div key={q} className="bg-surface border border-neutral-100 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{q}</h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{a}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                    </section>
  )
}