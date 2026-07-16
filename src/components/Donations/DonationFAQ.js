'use client'


export default function DonationFAQ() {
    return (
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
    )
}