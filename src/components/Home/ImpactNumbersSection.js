'use client'

const stats = [
  { count: '50000+', label: 'people reached' },
  { count: '7000+', label: 'women & youth engaged' },
  { count: '50+', label: 'sessions' },
]

export default function ImpactNumbersSection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline-sm text-headline-sm text-on-surface mb-12 text-center">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-stack-md">
          {stats.map(({ count, label }) => (
            <div
              key={label}
              className="bg-surface-container border border-neutral-100 rounded-xl p-8 text-center"
            >
              <p className="font-display-lg text-display-lg text-primary mb-2">{count}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
