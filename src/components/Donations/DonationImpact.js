'use client'


export default function DonationImpact() {
    return (
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
                  <div className="font-bold font-display-md text-display-lg text-primary mb-3">
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
    )
}