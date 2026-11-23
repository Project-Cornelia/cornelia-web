'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function RelatedArticles({ articles = [] }) {
  if (!articles.length) return null

  return (
    <section className="max-w-5xl mx-auto px-gutter mt-12 pb-section-padding-desktop">
      <h2 className="font-headline-md text-headline-md text-on-surface mb-12">Related Articles</h2>
      <div className="space-y-12">
        {articles.map((article) => (
          <Link
            key={article.id ?? article.slug}
            href={article.slug || '#'}
            className="group grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-start"
          >
            <div className="aspect-[4/3] bg-surface-container overflow-hidden">
              {article.image ? (
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-container-low to-surface-container-high">
                  <span className="font-headline-md text-headline-md text-primary/30">Cornelia</span>
                </div>
              )}
            </div>
            <div className="flex flex-col h-full py-2">
              <h3 className="font-headline-md text-headline-sm md:text-headline-md text-on-surface mb-6 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                {article.description}
              </p>
              <span className="font-label-lg text-label-lg text-on-surface font-bold mt-auto">
                {article.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
