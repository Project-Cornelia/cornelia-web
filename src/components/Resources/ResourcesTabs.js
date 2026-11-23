'use client'

import { RESOURCE_SECTIONS } from '@/lib/resourceSections'

export default function ResourcesTabs({ activeSection, onChange, counts = {} }) {
  return (
    <nav
      aria-label="Resource sections"
      className="sticky top-32 z-40 bg-surface/95 backdrop-blur border-y border-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-gutter flex items-center gap-3 overflow-x-auto py-4">
        {RESOURCE_SECTIONS.map((section) => {
          const isActive = activeSection === section.key
          return (
            <button
              key={section.key}
              type="button"
              onClick={() => onChange(section.key)}
              aria-current={isActive ? 'page' : undefined}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-label-lg text-label-lg whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'bg-primary text-surface shadow-md'
                  : 'bg-transparent border border-neutral-100 text-on-surface hover:border-primary hover:text-primary'
              }`}
            >
              {section.label}
              {typeof counts[section.key] === 'number' && (
                <span
                  className={`inline-flex items-center justify-center min-w-[1.5rem] h-6 px-1.5 rounded-full text-[11px] font-semibold ${
                    isActive ? 'bg-surface/20 text-surface' : 'bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  {counts[section.key]}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
