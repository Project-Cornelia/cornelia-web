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
    <>
      <section className="max-w-7xl mx-auto px-gutter pt-section-padding-mobile md:pt-section-padding-desktop">
        <div className="max-w-3xl">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-3">
            Toolkits
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Practical guides, handbooks, reports, and downloadable resources to support your work.
          </p>
        </div>
      </section>

      {!loading && resources.length > 0 && (
        <section className="border-y border-neutral-100 mt-stack-lg">
          <div className="max-w-7xl mx-auto px-gutter py-6 space-y-5">
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
        </section>
      )}

      <ResourcesGrid loading={loading} filteredResources={filteredResources} />
    </>
  )
}
