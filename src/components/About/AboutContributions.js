'use client'

export default function AboutContributions() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="mb-12">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                Powered By Our Community
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl">
                From lawyers to activists, researchers to organizers—women leading change
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-md">
              {[
                { label: 'Student Leaders', count: '100+' },
                { label: 'Partner Organizations', count: '25+' },
                { label: 'Legal Cases', count: '15+' },
                { label: 'Policy Briefs', count: '30+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display-lg text-display-lg text-primary mb-2">
                    {stat.count}
                  </div>
                  <p className="font-body-md text-on-surface-variant">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}