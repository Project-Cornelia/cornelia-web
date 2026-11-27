'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

function viewModel(resource) {
  const numericYear = Number(resource.year)
  return {
    ...resource,
    href: resource.href || resource.downloadUrl || '#',
    external: resource.external ?? true,
    linkLabel: resource.linkLabel || 'Download',
    secondaryHref: resource.secondaryHref || '',
    secondaryLabel: resource.secondaryLabel || 'Open PDF',
    description: resource.description || resource.excerpt || '',
    cover: resource.cover || resource.image || null,
    year: Number.isFinite(numericYear) && numericYear > 0 ? numericYear : null,
  }
}

function itemKey(resource, index) {
  return resource.id ?? `${resource.title}-${resource.href}-${index}`
}

function hasYear(resource) {
  return Number.isFinite(resource.year)
}

function archiveGroups(resources, groupByYear) {
  if (!groupByYear) return [{ key: 'all', label: null, resources }]

  const years = new Map()
  const undated = []
  resources.forEach((resource) => {
    if (!hasYear(resource)) {
      undated.push(resource)
      return
    }
    const group = years.get(resource.year) ?? []
    group.push(resource)
    years.set(resource.year, group)
  })

  const groups = Array.from(years.entries())
    .sort(([a], [b]) => b - a)
    .map(([year, items]) => ({ key: `year-${year}`, label: year, resources: items }))
  if (undated.length) groups.push({ key: 'more', label: 'More resources', resources: undated })
  return groups
}

function ItemLink({ item, className, children, ...props }) {
  if (!item.external) {
    return (
      <Link href={item.href} className={className} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
      {children}
    </a>
  )
}

function ActionLabel({ children }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 font-body-sm text-sm font-semibold text-primary">
      {children}
      <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  )
}

function SecondaryAction({ item, className = '' }) {
  if (!item.secondaryHref) return null
  return (
    <a
      href={item.secondaryHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-fit items-center gap-2 font-body-sm text-sm font-semibold text-on-surface-variant underline decoration-primary/25 underline-offset-4 hover:text-primary ${className}`}
    >
      {item.secondaryLabel}
      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
    </a>
  )
}

function ItemBadges({ item }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {item.category && <Badge variant="outline" className="uppercase tracking-[0.1em]">{item.category}</Badge>}
      {item.type && <Badge variant="ghost" className="uppercase tracking-[0.1em]">{item.type}</Badge>}
      {item.tags?.slice(0, 3).map((tag) => (
        <Badge key={tag} variant="ghost" className="uppercase tracking-[0.1em]">{tag}</Badge>
      ))}
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div role="status" aria-live="polite">
      <span className="sr-only">Loading resources…</span>
      <div aria-hidden="true">
        <Card className="grid overflow-hidden rounded-xl border-primary/10 bg-card/70 shadow-none lg:grid-cols-2">
          <Skeleton className="min-h-[250px] rounded-none md:min-h-[320px]" />
          <div className="flex flex-col justify-center p-6 md:p-10">
            <Skeleton className="h-3 w-32" />
            <div className="mt-6 flex gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <Skeleton className="mt-6 h-9 w-11/12" />
            <Skeleton className="mt-3 h-9 w-2/3" />
            <div className="mt-7 space-y-3">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-10/12" />
              <Skeleton className="h-3 w-8/12" />
            </div>
          </div>
        </Card>
        <div className="mt-10 rounded-xl border border-primary/10 bg-card/60 px-4 md:px-6">
          {[0, 1, 2].map((item) => (
            <div key={item} className="flex items-center gap-4 border-b border-primary/10 py-5 last:border-b-0">
              <Skeleton className="h-11 w-11 shrink-0 rounded-lg" />
              <div className="min-w-0 flex-1 space-y-3">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-3 w-11/12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ResourcesGrid({
  loading = false,
  filteredResources = [],
  emptyMessage = 'No resources match these filters yet.',
}) {
  const reduceMotion = useReducedMotion()
  const sectionClassName = 'mx-auto max-w-7xl px-gutter pb-16 pt-8 md:pb-24 md:pt-10'

  if (loading) {
    return <section className={sectionClassName} aria-label="Resource library"><LoadingSkeleton /></section>
  }

  if (filteredResources.length === 0) {
    return (
      <section className={sectionClassName} aria-label="Resource library">
        <div role="status" className="rounded-xl border border-dashed border-primary/25 bg-card/60 px-6 py-16 text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">{emptyMessage}</p>
        </div>
      </section>
    )
  }

  const items = filteredResources.map(viewModel)
  const [featured, ...archive] = items
  const groups = archiveGroups(archive, items.some(hasYear))
  const revealTransition = { duration: reduceMotion ? 0 : 0.45, ease: 'easeOut' }
  const itemTransition = { duration: reduceMotion ? 0 : 0.25, ease: 'easeOut' }

  return (
    <section className={sectionClassName} aria-label="Resource library">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={revealTransition}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={itemKey(featured, 0)}
            layout={!reduceMotion}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={itemTransition}
          >
            <ItemLink
              item={featured}
              className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
            >
              <Card className="grid overflow-hidden rounded-xl border-primary/15 bg-card shadow-none transition-colors group-hover:border-primary/35 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div className="relative min-h-[250px] overflow-hidden bg-surface-container md:min-h-[320px]">
                  {featured.cover ? (
                    <Image
                      src={featured.cover}
                      alt={featured.title}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transform-none"
                    />
                  ) : (
                    <div className="flex h-full min-h-[250px] flex-col justify-between p-6 text-primary md:min-h-[320px] md:p-8">
                      <p className="font-body-sm text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/70">
                        Project Cornelia
                      </p>
                      <span aria-hidden="true" className="my-8 text-6xl md:text-7xl">
                        {featured.emoji || '📄'}
                      </span>
                      <span className="h-px w-16 bg-primary/30" />
                    </div>
                  )}
                </div>
                <CardContent className="flex min-w-0 flex-col justify-center p-6 pt-6 md:p-8 md:pt-8 lg:p-10 lg:pt-10">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <p className="font-body-sm text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      Featured resource
                    </p>
                    {(featured.meta || featured.year) && (
                      <span className="shrink-0 font-body-sm text-xs text-on-surface-variant">
                        {featured.meta || featured.year}
                      </span>
                    )}
                  </div>
                  <ItemBadges item={featured} />
                  <CardTitle className="mt-5 font-headline-md text-headline-md text-on-surface transition-colors group-hover:text-primary md:text-4xl">
                    {featured.title}
                  </CardTitle>
                  <CardDescription className="mt-4 font-body-md text-base leading-relaxed text-on-surface-variant">
                    {featured.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ItemLink>
            <div className="mt-4 flex flex-wrap items-center gap-5">
              <ItemLink item={featured} className="group"><ActionLabel>{featured.linkLabel}</ActionLabel></ItemLink>
              <SecondaryAction item={featured} />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {archive.length > 0 && (
        <motion.div
          layout={!reduceMotion}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.06 }}
          transition={revealTransition}
          className="mt-10 md:mt-12"
        >
          <div className="mb-5 flex items-end justify-between gap-4 border-b border-primary/15 pb-4">
            <h3 className="font-headline-md text-headline-sm text-on-surface md:text-headline-md">Library archive</h3>
            <span className="shrink-0 font-body-sm text-xs text-on-surface-variant">
              {archive.length} {archive.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          <div className="space-y-7">
            {groups.map((group) => (
              <div key={group.key} role={group.label ? 'group' : undefined} aria-label={group.label ? String(group.label) : undefined}>
                {group.label && (
                  <div className="mb-3 flex items-center gap-4">
                    <p className="shrink-0 font-headline-sm text-xl text-primary">{group.label}</p>
                    <span className="h-px flex-1 bg-primary/10" aria-hidden="true" />
                  </div>
                )}
                <ul className="divide-y divide-primary/10 rounded-xl border border-primary/15 bg-card/60 px-4 md:px-6">
                  <AnimatePresence initial={false}>
                    {group.resources.map((item, index) => (
                      <motion.li
                        key={itemKey(item, index)}
                        layout={!reduceMotion}
                        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
                        transition={itemTransition}
                      >
                        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center">
                          <ItemLink item={item} className="group flex min-w-0 flex-1 items-start gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                            <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/10 bg-primary/5 text-xl">
                              {item.emoji || '📄'}
                            </span>
                            <span className="min-w-0 flex-1">
                              <ItemBadges item={item} />
                              <span className="mt-2.5 block font-headline-sm text-xl leading-snug text-on-surface transition-colors group-hover:text-primary md:text-2xl">
                                {item.title}
                              </span>
                              <span className="mt-2 block font-body-sm text-sm leading-6 text-on-surface-variant">
                                {item.description}
                              </span>
                              {(item.meta || item.year) && (
                                <span className="mt-2 block font-body-sm text-xs text-on-surface-variant/70">
                                  {item.meta || item.year}
                                </span>
                              )}
                            </span>
                          </ItemLink>
                          <div className="flex shrink-0 flex-wrap items-center gap-4 pl-[3.75rem] sm:pl-4">
                            <ItemLink item={item} className="group"><ActionLabel>{item.linkLabel}</ActionLabel></ItemLink>
                            <SecondaryAction item={item} />
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  )
}
