'use client'

import { useEffect, useMemo, useState } from 'react'
import ArticleList from './ArticleList'
import ResourcesFilter from './ResourcesFilter'
import WriteForUs from '../Publications/WriteForUs'
import { getTimestamp, getYear } from '@/lib/formatDate'

const ITEMS_PER_PAGE = 3

export default function ArticlesSection({
  publications = [],
  loading = false,
  title,
  description,
  emptyMessage = 'No articles have been published here yet.',
  showWriteForUs = false,
}) {
  const [activeTag, setActiveTag] = useState('All')
  const [activeYear, setActiveYear] = useState('All')
  const [sortOrder, setSortOrder] = useState('newest')
  const [currentPage, setCurrentPage] = useState(1)

  const tags = useMemo(() => {
    const uniqueTags = new Set()
    publications.forEach((publication) => {
      const publicationTags = publication.tags || []
      publicationTags.forEach((tag) => {
        if (tag) uniqueTags.add(tag)
      })
    })
    return ['All', ...Array.from(uniqueTags).sort()]
  }, [publications])

  const years = useMemo(() => {
    const uniqueYears = new Set()
    publications.forEach((publication) => {
      const year = getYear(publication.date)
      if (year) uniqueYears.add(year)
    })
    return ['All', ...Array.from(uniqueYears).sort((a, b) => Number(b) - Number(a))]
  }, [publications])

  const filteredPublications = useMemo(() => {
    const filtered = publications.filter((publication) => {
      const matchesTag = activeTag === 'All' || (publication.tags || []).includes(activeTag)
      const matchesYear = activeYear === 'All' || getYear(publication.date) === activeYear
      return matchesTag && matchesYear
    })

    return [...filtered].sort((a, b) =>
      sortOrder === 'newest'
        ? getTimestamp(b.date) - getTimestamp(a.date)
        : getTimestamp(a.date) - getTimestamp(b.date),
    )
  }, [publications, activeTag, activeYear, sortOrder])

  useEffect(() => {
    setCurrentPage(1)
  }, [activeTag, activeYear, sortOrder])

  const totalPages = Math.max(1, Math.ceil(filteredPublications.length / ITEMS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE
  const visiblePublications = filteredPublications.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <>
      <section className="max-w-7xl mx-auto px-gutter pt-section-padding-mobile md:pt-section-padding-desktop">
        <div className="max-w-3xl">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-3">
            {title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{description}</p>
        </div>
      </section>

      <section className="border-y border-neutral-100 mt-stack-lg">
        <div className="max-w-7xl mx-auto px-gutter py-6">
          <ResourcesFilter
            label="Filter by topic"
            options={tags}
            value={activeTag}
            onChange={setActiveTag}
          />

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              Year
              <select
                value={activeYear}
                onChange={(event) => setActiveYear(event.target.value)}
                className="px-3 py-2 bg-surface border border-neutral-100 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year === 'All' ? 'All years' : year}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              Sort
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
                className="px-3 py-2 bg-surface border border-neutral-100 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
              </select>
            </label>

            {!loading && (
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                {filteredPublications.length} {filteredPublications.length === 1 ? 'article' : 'articles'}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <p className="font-body-md text-on-surface-variant">Loading articles...</p>
          </div>
        ) : visiblePublications.length > 0 ? (
          <>
            <ArticleList articles={visiblePublications} />

            {totalPages > 1 && (
              <div className="mt-section-padding-mobile flex justify-center items-center gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentPage(Math.max(1, safePage - 1))}
                  disabled={safePage === 1}
                  aria-label="Previous page"
                  className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="font-label-lg text-label-lg">
                  {safePage} of {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() => setCurrentPage(Math.min(totalPages, safePage + 1))}
                  disabled={safePage === totalPages}
                  aria-label="Next page"
                  className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-16 text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">{emptyMessage}</p>
          </div>
        )}
      </section>

      {/* {showWriteForUs && <WriteForUs />} */}
    </>
  )
}
