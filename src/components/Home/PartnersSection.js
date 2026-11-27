'use client'

const partners = [
  'Pink Legal (Pink Legal Panache)',
  'Breakthrough India',
  "L'Oréal Paris",
  'Hollaback! (now Right To Be)',
  'Chhanv Foundation / Sheroes Hangout',
  'Human Beings of Lucknow',
  'Think India (Tribal Rights Forum)',
  'Poems India',
  'Ahaana – For a Change',
  'Speaking Souls',
  'SABIA (Share A Book India Association)',
  'National Association for the Blind, Delhi',
  'Youth Alliance',
  'Indian School of Democracy',
  'Lokniti–CSDS',
  'NSS, Lady Shri Ram College (Ikhtiyaar Wing)',
  'BCG India',
  'Schools of Specialised Excellence (SoSE), Government of Delhi',
  'Citizens for Public Leadership (CPL)',
  'E-Summit 2023',
  'Bookosmia',
  'Qshala',
  'Central European University (Science for Society Hub)',
  'Photo Circle',
  'Queering Healthcare',
]

export default function PartnersSection() {
  const track = [...partners, ...partners]

  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-surface">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
          Our Partners
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          We’ve worked with governmental, academic and non-governmental organisations across
          India, Nepal and Austria.
        </p>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="partners-track">
          {track.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="mr-6 whitespace-nowrap rounded-full border border-neutral-100 bg-surface px-6 py-3 font-body-md text-on-surface-variant shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 text-center">
        <a
          href="mailto:contact.projectcornelia@gmail.com"
          className="inline-block bg-primary text-neutral-50 px-8 py-4 rounded-full font-label-lg text-label-lg hover:opacity-90 transition-all duration-300 max-w-full text-center leading-relaxed"
        >
          Want to partner with us? Write to us at contact.projectcornelia@gmail.com
        </a>
      </div>
    </section>
  )
}
