import { formatDate } from '@/lib/formatDate'

export default function ResearchReport({ article }) {
  const { title, subtitle, excerpt, aiNote, pdfUrl, authors = [], date } = article

  return (
    <article className="mx-auto max-w-3xl px-gutter pt-20 pb-section-padding-desktop">
      {/* Title block */}
      <header className="text-center">
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 font-headline-sm text-headline-sm text-on-surface-variant">
            {subtitle}
          </p>
        )}
        {date && (
          <span className="mt-4 inline-block font-body-md text-body-md text-primary/60 italic">
            {formatDate(date)}
          </span>
        )}
      </header>

      {/* Abstract */}
      {excerpt && (
        <section className="mt-12">
          <p className="whitespace-pre-line font-body-lg text-body-lg leading-relaxed text-on-surface">
            {excerpt}
          </p>
        </section>
      )}

      {/* AI disclosure note */}
      {aiNote && (
        <p className="mt-8 border-l-4 border-primary/30 pl-6 font-body-md text-body-md italic leading-relaxed text-on-surface-variant">
          {aiNote}
        </p>
      )}

      {/* PDF button */}
      {pdfUrl && (
        <div className="mt-12">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-label-lg text-label-lg text-surface transition-colors hover:bg-primary/90"
          >
            Read the full report
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      )}

      {/* Authors */}
      {authors.length > 0 && (
        <section className="mt-16 border-t border-neutral-100 pt-12">
          <h2 className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
            Authors
          </h2>
          <div className="mt-8 flex flex-col gap-8">
            {authors.map((author, index) => (
              <div key={`${author.name}-${index}`}>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{author.name}</h3>
                {author.bio && (
                  <p className="mt-2 whitespace-pre-line font-body-md text-body-md leading-relaxed text-on-surface-variant">
                    {author.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
