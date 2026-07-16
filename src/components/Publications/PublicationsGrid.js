'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function PublicationsGrid({ publications = [] }) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const totalPages = Math.ceil(publications.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayedPublications = publications.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className="max-w-7xl mx-auto px-gutter py-section-padding-desktop">
      <div className="flex flex-col gap-stack-lg">
        {displayedPublications.map((pub) => (
          <Link
            key={pub.id}
            href={`/publications/${pub.slug}`}
          >
            <article className="grid grid-cols-1 md:grid-cols-12 gap-stack-md group cursor-pointer border-b border-neutral-100 pb-stack-lg">
              <div className="md:col-span-4 relative overflow-hidden bg-surface-variant h-64">
                <Image
                  src={pub.image}
                  alt={pub.title}
                  fill
                  className="object-cover group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="md:col-span-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                    {pub.category}
                  </span>
                  <span className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em]">
                    {pub.date}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-stack-sm group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-md leading-relaxed">
                  {pub.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg group/link">
                  Read full article
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-section-padding-mobile flex justify-center items-center gap-4">
        <button 
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="font-label-lg text-label-lg">{currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
