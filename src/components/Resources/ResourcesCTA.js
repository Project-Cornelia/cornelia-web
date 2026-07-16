'use client'

export default function ResourcesCTA() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-gutter text-center">
            <div className="mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                Can't Find What You're Looking For?
              </h2>
              <div className="w-12 h-1 bg-primary mx-auto"></div>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-2xl mx-auto">
              Get in touch with our team. We're always developing new resources and would love to hear what you need.
            </p>

            <a
              href="mailto:hello@projectcornelia.org"
              className="inline-block px-8 py-3 bg-primary text-surface font-label-lg text-label-lg rounded-full hover:opacity-90 transition-all duration-300 active:scale-95 shadow-md"
            >
              Contact Us
            </a>
          </div>
        </section>
  )
}