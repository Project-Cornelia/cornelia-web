'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactInfo from '@/components/Contact/ContactInfo'
import ContactForm from '@/components/Contact/ContactForm'
import ContactHero from '@/components/Contact/ContactHero'
import ContactFAQ from '@/components/Contact/ContactFAQ'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">

        <ContactHero />

        {/* Contact Section */}

        <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

            {/* Contact Info */}
            <ContactInfo />

            {/* Contact Form */}
            <div>
              <ContactForm variant="full" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <ContactFAQ />
        
      </main>
      <Footer />
    </>
  )
}
