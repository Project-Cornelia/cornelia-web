'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedPublicationsSection({ publications = [] }) {
  if (publications.length === 0) return null

  const featured = publications[0]
  const teaser1 = publications[1]
  const teaser2 = publications[2]

  return (
    <section className="max-w-7xl mx-auto px-gutter py-section-padding-desktop">
      <div className="mb-stack-lg">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Featured Research</h2>
        <div className="w-12 h-1 bg-primary"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Main Featured Article */}
        <Link href={`/publications/${featured.slug}`} className="md:col-span-7">
          <div className="group relative overflow-hidden bg-surface-container border border-neutral-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <div className="aspect-[21/9] overflow-hidden relative">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-stack-md">
              <span className="inline-block px-3 py-1 bg-neutral-900 text-neutral-50 font-label-md text-label-md mb-stack-sm">
                {featured.category.toUpperCase()}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-stack-sm group-hover:text-primary transition-colors">
                {featured.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl">
                {featured.excerpt}
              </p>
            </div>
          </div>
        </Link>

        {/* Stacked Teaser Cards */}
        <div className="md:col-span-5 flex flex-col gap-gutter">
          {/* Card 1 */}
          {teaser1 && (
            <Link href={`/publications/${teaser1.slug}`} className="flex-1">
              <div className="bg-surface-container-high border border-neutral-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group flex h-full">
                <div className="w-24 sm:w-1/3 shrink-0 relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={teaser1.image}
                    alt={teaser1.title}
                    fill
                    className="object-cover"
                  />
                </div>
              <div className="flex-1 p-stack-md flex flex-col justify-center overflow-hidden">
                <span className="text-primary font-label-md text-label-md mb-1 block uppercase tracking-wider text-[12px]">
                  {teaser1.category}
                </span>
                <h4 className="font-headline-sm text-[20px] text-on-surface mb-1 leading-tight group-hover:text-primary transition-colors">
                  {teaser1.title}
                </h4>
                <p className="font-body-sm text-[14px] text-on-surface-variant line-clamp-2">
                  {teaser1.excerpt}
                </p>
              </div>
            </div>
            </Link>
          )}

          {/* Card 2 */}
          {teaser2 && (
            <Link href={`/publications/${teaser2.slug}`} className="flex-1">
              <div className="bg-surface-container-high border border-neutral-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group flex h-full">
                <div className="w-24 sm:w-1/3 shrink-0 relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={teaser2.image}
                    alt={teaser2.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-stack-md flex flex-col justify-center overflow-hidden">
                  <span className="text-primary font-label-md text-label-md mb-1 block uppercase tracking-wider text-[12px]">
                    {teaser2.category}
                  </span>
                  <h4 className="font-headline-sm text-[20px] text-on-surface mb-1 leading-tight group-hover:text-primary transition-colors">
                    {teaser2.title}
                  </h4>
                  <p className="font-body-sm text-[14px] text-on-surface-variant line-clamp-2">
                    {teaser2.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
