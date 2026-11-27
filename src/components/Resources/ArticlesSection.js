'use client'

import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ResourcesFilter from './ResourcesFilter'
import ResourcesGrid from './ResourcesGrid'
import { Button } from '@/components/ui/button'
import { formatDate, getTimestamp, getYear } from '@/lib/formatDate'
import { getArticleHref } from '@/lib/resourceSections'

const ITEMS_PER_PAGE = 3

export default function ArticlesSection({
  publications = [],
  loading = false,
  title,
  description,
  emptyMessage = 'No articles have been published here yet.',
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

  const visibleResources = visiblePublications.map((publication) => {
    const isResearch = publication.section === 'research-reports'
    return {
      ...publication,
      description: publication.excerpt,
      cover: publication.image,
      year: Number(getYear(publication.date)) || null,
      meta: formatDate(publication.date),
      type: isResearch ? 'Report' : 'Article',
      emoji: isResearch ? '📄' : '✍️',
      href: getArticleHref(publication),
      external: false,
      linkLabel: isResearch ? 'Read report' : 'Read article',
      secondaryHref: isResearch ? publication.pdfUrl : '',
      secondaryLabel: 'Open PDF',
    }
  })

  const selectClass = 'rounded-lg border border-input bg-card px-3 py-2 font-body-sm text-sm text-on-surface outline-none focus:ring-2 focus:ring-ring'

  return (
    <div className="bg-surface">
      <section className="mx-auto max-w-7xl px-gutter pb-8 pt-16 md:pb-10 md:pt-20">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 font-body-sm text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
            The resource library
          </p>
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">{title}</h2>
          <p className="mt-4 max-w-2xl font-body-md text-body-md leading-relaxed text-on-surface-variant">
            {description}
          </p>
        </div>
      </section>

      {!loading && publications.length > 0 && (
        <section aria-label={`Filter ${title}`} className="relative z-20 px-gutter md:sticky md:top-24">
          <div className="mx-auto max-w-7xl rounded-xl border border-primary/15 bg-card/95 p-4 shadow-sm backdrop-blur-md md:p-5">
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-primary/10 pb-3">
              <p className="font-body-sm text-xs font-semibold uppercase tracking-[0.18em] text-primary">Filter the library</p>
              <output aria-live="polite" aria-atomic="true" className="flex shrink-0 items-baseline gap-1.5 text-on-surface-variant">
                <span className="font-headline-sm text-xl text-primary">{filteredPublications.length}</span>
                <span className="font-body-sm text-xs">{filteredPublications.length === 1 ? 'article' : 'articles'}</span>
              </output>
            </div>
            <div className="grid min-w-0 gap-4 lg:grid-cols-2 lg:gap-6">
              <ResourcesFilter label="Topic" options={tags} value={activeTag} onChange={setActiveTag} />
              <div className="flex flex-wrap items-end gap-3 lg:justify-end">
                <label className="flex flex-col gap-1.5 font-body-sm text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
                  Year
                  <select value={activeYear} onChange={(event) => setActiveYear(event.target.value)} className={selectClass}>
                    {years.map((year) => (
                      <option key={year} value={year}>{year === 'All' ? 'All years' : year}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1.5 font-body-sm text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
                  Sort
                  <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} className={selectClass}>
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </section>
      )}

      <ResourcesGrid loading={loading} filteredResources={visibleResources} emptyMessage={emptyMessage} />

      {!loading && totalPages > 1 && (
        <div className="mx-auto -mt-8 flex max-w-7xl items-center justify-center gap-4 px-gutter pb-16 md:pb-24">
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            onClick={() => setCurrentPage(Math.max(1, safePage - 1))}
            disabled={safePage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft />
          </Button>
          <span className="font-label-lg text-label-lg">{safePage} of {totalPages}</span>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            onClick={() => setCurrentPage(Math.min(totalPages, safePage + 1))}
            disabled={safePage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  )
}
