'use client'

import { initiativeStatusStyles } from './initiativeStatusStyles'

const richTextClasses =
  'font-body-lg text-body-lg text-on-surface leading-[1.8] [&_a]:text-primary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-primary/30 [&_blockquote]:pl-6 [&_blockquote]:italic [&_h2]:mt-14 [&_h2]:mb-6 [&_h2]:font-headline-sm [&_h2]:text-headline-sm [&_h2]:text-on-surface [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:font-headline-sm [&_h3]:text-[24px] [&_h3]:text-on-surface [&_li]:mb-3 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-6 [&_strong]:font-semibold [&_strong]:text-on-surface [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6'

function Badges({ category, status, className }) {
  return (
    <div className={className}>
      <span className="inline-block rounded-full bg-primary px-3 py-1 font-label-md text-label-md text-surface">
        {category}
      </span>
      <span
        className={`inline-block rounded-full px-3 py-1 font-label-md text-label-md ${
          initiativeStatusStyles[status] || 'bg-surface-container-high text-on-surface-variant'
        }`}
      >
        {status}
      </span>
    </div>
  )
}

export default function InitiativeCard({ initiative, isExpanded, onToggle }) {
  const cardId = `initiative-${initiative.id}`
  const glance = initiative.atAGlance ?? []
  const hasRichDetails = Boolean(initiative.content)
  const hasLegacyDetails = Boolean(initiative.fullDescription)

  if (isExpanded) {
    return (
      <article
        id={cardId}
        className="scroll-mt-40 motion-safe:animate-fade-in rounded-xl border border-neutral-100 bg-surface p-6 shadow-sm md:p-12"
      >
        <header className="mx-auto max-w-3xl text-center">
          <div className="text-5xl">{initiative.emoji || '📌'}</div>
          <Badges
            category={initiative.category}
            status={initiative.status}
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
          />
          <h3 className="mt-6 font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
            {initiative.title}
          </h3>
          <p className="mt-8 whitespace-pre-line font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            {initiative.description}
          </p>
        </header>

        {glance.length > 0 && (
          <dl className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-x-12 gap-y-8 border-y border-neutral-100 py-8 text-center">
            {glance.map((stat, index) => (
              <div key={`${stat.value}-${index}`} className="min-w-[8rem]">
                <dt className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-headline-md text-headline-md text-primary">{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {hasRichDetails && (
          <div className="mx-auto mt-12 max-w-3xl">
            <div
              className={richTextClasses}
              dangerouslySetInnerHTML={{ __html: initiative.content }}
            />
          </div>
        )}

        {!hasRichDetails && hasLegacyDetails && (
          <div className="mx-auto mt-12 max-w-3xl">
            <p className="whitespace-pre-line font-body-lg text-body-lg leading-[1.8] text-on-surface">
              {initiative.fullDescription}
            </p>
          </div>
        )}

        {initiative.impact && (
          <div className="mx-auto mt-12 max-w-3xl rounded-xl border-l-4 border-primary bg-surface-container-high p-6 md:p-8">
            <p className="font-label-md text-label-md font-semibold uppercase tracking-wider text-on-surface-variant">
              Impact
            </p>
            <p className="mt-2 font-headline-sm text-headline-sm font-bold text-on-surface">
              {initiative.impact}
            </p>
          </div>
        )}

        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-10">
          <div className="flex gap-4">
            <div className="h-2.5 w-2.5 rounded-full bg-neutral-100"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-neutral-100"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-neutral-100"></div>
          </div>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded="true"
            aria-controls={cardId}
            className="rounded-full border border-primary px-8 py-3 font-label-lg text-label-lg text-primary transition-colors hover:bg-primary hover:text-surface"
          >
            Close article
          </button>
        </div>
      </article>
    )
  }

  return (
    <article
      id={cardId}
      className="group scroll-mt-40 flex h-full flex-col rounded-xl border border-neutral-100 bg-surface-container p-stack-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="text-4xl">{initiative.emoji || '📌'}</div>
        <Badges
          category={initiative.category}
          status={initiative.status}
          className="flex flex-col items-end gap-2"
        />
      </div>

      <h3 className="mb-3 font-headline-sm text-headline-sm text-on-surface transition-colors group-hover:text-primary">
        {initiative.title}
      </h3>

      <p className="line-clamp-4 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
        {initiative.description}
      </p>

      {glance.length > 0 && (
        <dl className="mt-5 grid grid-cols-2 gap-2">
          {glance.slice(0, 4).map((stat, index) => (
            <div
              key={`${stat.value}-${index}`}
              className="rounded-lg border border-neutral-100 bg-surface-container-high p-3"
            >
              <dt className="line-clamp-2 font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
                {stat.label}
              </dt>
              <dd className="mt-1 font-headline-sm text-[18px] font-bold text-on-surface">{stat.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {initiative.impact && (
        <div className="mt-3 rounded-lg border border-neutral-100 bg-surface-container-high p-4">
          <p className="font-label-md text-label-md font-semibold uppercase tracking-wider text-on-surface-variant">
            Impact
          </p>
          <p className="mt-1 font-headline-sm text-[18px] font-bold text-on-surface">
            {initiative.impact}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded="false"
        aria-controls={cardId}
        className="mt-auto flex w-full items-center justify-center gap-2 pt-6 font-label-lg text-label-lg text-primary transition-colors hover:text-primary/80"
      >
        Read more
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </article>
  )
}
