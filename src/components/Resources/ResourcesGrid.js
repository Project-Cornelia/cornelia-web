'use client'

export default function ResourcesGrid({ loading, filteredResources }) {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop max-w-7xl mx-auto px-gutter">

          {/* Resources Grid */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <p className="font-body-md text-on-surface-variant">Loading resources...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-lg">
              {filteredResources.map(resource => (
                <a
                  key={resource.id}
                  href={resource.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-surface-container border border-neutral-100 rounded-xl p-stack-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                >
                  {/* Icon/Header */}
                  <div className="mb-stack-md flex items-center justify-between">
                    <div className="text-4xl">{resource.emoji || '📄'}</div>
                    <span className="inline-block px-3 py-1 bg-primary text-surface font-label-md text-label-md rounded-full">
                      {resource.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-stack-sm">
                    <div>
                      <span className="text-primary font-label-md text-label-md uppercase tracking-widest">
                        {resource.category}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                    </div>

                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {resource.description}
                    </p>

                    {/* Download Button */}
                    <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg pt-stack-sm">
                      Download
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v-7m0 0V5m0 7H5m7 0h7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>
  )
}