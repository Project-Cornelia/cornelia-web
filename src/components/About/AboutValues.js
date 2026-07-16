'use client'

export default function AboutValues() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="mb-12">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                Our Values
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl">
                Grounded in feminist principles and democratic ideals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
              {[
                {
                  title: 'Collective Power',
                  description: 'We believe in the strength of women coming together to drive systemic change.',
                },
                {
                  title: 'Accountability',
                  description: 'We hold institutions accountable to women and marginalized communities.',
                },
                {
                  title: 'Innovation',
                  description: 'We employ new tools and strategies to amplify women\'s voices in policy.',
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="p-6 bg-surface rounded-lg border border-neutral-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}