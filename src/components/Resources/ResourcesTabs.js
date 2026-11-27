'use client'

import { RESOURCE_SECTIONS } from '@/lib/resourceSections'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

export default function ResourcesTabs({ activeSection, onChange, counts = {} }) {
  return (
    <nav aria-label="Resource sections" className="sticky top-24 z-40 border-y border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto max-w-7xl overflow-x-auto px-gutter py-4">
        <Tabs value={activeSection} onValueChange={onChange}>
          <TabsList aria-label="Choose a resource section" className="min-w-max bg-transparent p-0">
            {RESOURCE_SECTIONS.map((section) => (
              <TabsTrigger
                key={section.key}
                value={section.key}
                className="group rounded-full px-5 py-2.5 font-label-lg text-label-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {section.label}
                {typeof counts[section.key] === 'number' && (
                  <Badge variant="ghost" className="min-w-6 justify-center px-1.5 group-data-[state=active]:bg-white/15 group-data-[state=active]:text-white">
                    {counts[section.key]}
                  </Badge>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </nav>
  )
}
