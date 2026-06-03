'use client'

export default function WriteForUs() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-gutter text-center">
        <div className="mb-stack-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Want to Write for Us?
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto"></div>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-2xl mx-auto leading-relaxed">
          We're always looking for insightful pieces on women, law, policy, and social change. If you have a story or perspective to share, we'd love to hear from you!
        </p>

        <a
          href="https://forms.gle/dx3ERQHoTLGF1pcx8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-primary text-surface font-label-lg text-label-lg rounded-full hover:opacity-90 transition-all duration-300 active:scale-95 shadow-md"
        >
          Submit Your Article
        </a>
      </div>
    </section>
  )
}