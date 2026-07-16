'use client'

import DonationComponent1 from './DonationComponent1'
import DonationComponent2 from './DonationComponent2'

export default function DonationOptions() {
    return (
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
    )
}