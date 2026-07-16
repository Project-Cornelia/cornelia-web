'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">
        {/* Page Header */}
        <section className="bg-surface-container-low pt-40 pb-12 px-gutter">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
              Get In Touch
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Have questions or want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-2">Email</h3>
                  <a
                    href="mailto:contact.projectcornelia@gmail.com"
                    className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors"
                  >
                    contact.projectcornelia@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-2">Location</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Delhi University<br />New Delhi, India
                  </p>
                </div>

                <div>
                  <h3 className="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-3">Follow Us</h3>
                  <div className="flex gap-6">
                    <a
                      href="https://www.instagram.com/project.cornelia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body-md text-on-surface-variant hover:text-primary transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/company/project-cornelia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body-md text-on-surface-variant hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="bg-surface-container border border-neutral-100 rounded-xl p-6">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Response Time</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    We typically respond within 2–3 business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm variant="full" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
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
      </main>
      <Footer />
    </>
  )
}
