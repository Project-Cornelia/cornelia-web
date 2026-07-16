'use client'

export default function ResourcesCat({ categories = [], activeCategory, setActiveCategory }) {
  return (
    <section className="bg-surface-container-lowest top-20 z-40 py-6 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-gutter flex items-center gap-4 overflow-x-auto">
          <span className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest mr-4 whitespace-nowrap">
            Filter By:
          </span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-label-md text-label-md whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-neutral-50'
                  : 'bg-transparent border border-neutral-100 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>
  )
}