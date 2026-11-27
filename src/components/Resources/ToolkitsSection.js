'use client'

import { useMemo, useState } from 'react'
import ResourcesFilter from './ResourcesFilter'
import ResourcesGrid from './ResourcesGrid'

function uniqueOptions(values) {
  return ['All', ...Array.from(new Set(values.filter(Boolean))).sort()]
}

export default function ToolkitsSection({ resources = [], loading = false }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeType, setActiveType] = useState('All')

  const categories = useMemo(
    () => uniqueOptions(resources.map((resource) => resource.category)),
    [resources],
  )
  const types = useMemo(
    () => uniqueOptions(resources.map((resource) => resource.type)),
    [resources],
  )

  const filteredResources = useMemo(
    () =>
      resources.filter((resource) => {
        const matchesCategory = activeCategory === 'All' || resource.category === activeCategory
        const matchesType = activeType === 'All' || resource.type === activeType
        return matchesCategory && matchesType
      }),
    [resources, activeCategory, activeType],
  )

  return (
    <div className="bg-surface">
      <section className="mx-auto max-w-7xl px-gutter pb-8 pt-16 md:pb-10 md:pt-20">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 font-body-sm text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
            The resource library
          </p>
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
            Toolkits
          </h2>
          <p className="mt-4 max-w-2xl font-body-md text-body-md leading-relaxed text-on-surface-variant">
            Practical guides, handbooks, reports, and downloadable resources to support your work.
          </p>
        </div>
      </section>

      {!loading && resources.length > 0 && (
        <section
          aria-label="Filter toolkits"
          className="relative z-20 px-gutter md:sticky md:top-24"
        >
          <div className="mx-auto max-w-7xl rounded-xl border border-primary/15 bg-card/95 p-4 shadow-sm backdrop-blur-md md:p-5">
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-primary/10 pb-3">
              <p className="font-body-sm text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Filter the library
              </p>
              <output
                aria-live="polite"
                aria-atomic="true"
                className="flex shrink-0 items-baseline gap-1.5 text-on-surface-variant"
              >
                <span className="font-headline-sm text-xl text-primary">
                  {filteredResources.length}
                </span>
                <span className="font-body-sm text-xs">
                  {filteredResources.length === 1 ? 'resource' : 'resources'}
                </span>
              </output>
            </div>
            <div className="grid min-w-0 gap-4 lg:grid-cols-2 lg:gap-6">
              <ResourcesFilter
                label="Category"
                options={categories}
                value={activeCategory}
                onChange={setActiveCategory}
              />
              <ResourcesFilter
                label="Type"
                options={types}
                value={activeType}
                onChange={setActiveType}
              />
            </div>
          </div>
        </section>
      )}

      <ResourcesGrid
        loading={loading}
        filteredResources={filteredResources}
        emptyMessage="No toolkits match these filters yet."
      />
    </div>
  )
}
