'use client'

import Header from '@/components/Header'
import DonationsHeroSection from '@/components/DonationsHeroSection'
import DonationComponent1 from '@/components/DonationComponent1'
import DonationComponent2 from '@/components/DonationComponent2'
import Footer from '@/components/Footer'

export default function Donations() {
  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">
        <DonationsHeroSection />

        {/* Donation Options */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                Ways to Give
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
                Choose the option that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
              <DonationComponent1 />
              <DonationComponent2 />
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low px-gutter">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12 text-center">
              Your Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
              {[
                {
                  amount: '₹500',
                  impact: 'Supports legal literacy workshops for 10 women',
                },
                {
                  amount: '₹2,000',
                  impact: 'Funds policy research and advocacy initiatives',
                },
                {
                  amount: '₹5,000',
                  impact: 'Supports a full-time team member for a month',
                },
              ].map((item) => (
                <div
                  key={item.amount}
                  className="p-8 bg-surface rounded-lg border border-neutral-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
                >
                  <div className="font-display-md text-display-md text-primary mb-3">
                    {item.amount}
                  </div>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    {item.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Is my donation tax-deductible?',
                  answer: 'Project Cornelia is a registered non-profit organization. Please consult your tax advisor regarding tax deductibility of donations.',
                },
                {
                  question: 'Can I set up a monthly donation?',
                  answer: 'Yes! Our monthly membership option allows you to contribute regularly and become a sustained supporter of our mission.',
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major payment methods through Razorpay, including credit/debit cards, UPI, net banking, and digital wallets.',
                },
              ].map((item) => (
                <div
                  key={item.question}
                  className="p-6 bg-surface-container-low rounded-lg border border-neutral-100"
                >
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                    {item.question}
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    {item.answer}
                  </p>
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
