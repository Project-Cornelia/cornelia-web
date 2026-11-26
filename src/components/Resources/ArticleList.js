'use client'

import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/formatDate'
import { getArticleHref } from '@/lib/resourceSections'

export default function ArticleList({ articles = [] }) {
  return (
    <div className="flex flex-col gap-stack-lg">
      {articles.map((article) => {
        const isResearch = article.section === 'research-reports'
        const href = getArticleHref(article)
        const ctaLabel = isResearch ? 'Read the full report' : 'Read full article'

        return (
          <article
            key={article.id ?? article.slug}
            className="border-b border-neutral-100 pb-stack-lg"
          >
            <Link href={href} className="group grid grid-cols-1 md:grid-cols-12 gap-stack-md">
              <div className="md:col-span-4 relative overflow-hidden bg-surface-variant h-64">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-container-low to-surface-container-high">
                    <span className="font-headline-md text-headline-md text-primary/30">Cornelia</span>
                  </div>
                )}
              </div>

              <div className="md:col-span-8 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                    {article.category}
                  </span>
                  <span className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em]">
                    {formatDate(article.date)}
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-stack-sm group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-md leading-relaxed">
                  {article.excerpt}
                </p>

                {article.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-stack-md">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-[11px] uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>

            <div className="mt-stack-md flex flex-wrap items-center gap-4">
              <Link
                href={href}
                className="flex items-center gap-2 text-primary font-label-lg text-label-lg group/link"
              >
                {ctaLabel}
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {isResearch && article.pdfUrl && (
                <a
                  href={article.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 font-label-md text-label-md text-primary transition-colors hover:bg-primary hover:text-surface"
                >
                  Open PDF
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </article>
        )
      })}
    </div>
  )
}
