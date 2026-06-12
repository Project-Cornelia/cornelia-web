'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function PublicationsSection() {
  const headerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [publications, setPublications] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    fetch('/data/publications.json')
      .then((r) => r.json())
      .then((data) => setPublications(data.slice(0, 3)))
      .catch(() => {})
  }, [])

  return (
    <section className="py-section-padding-desktop bg-surface px-gutter">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`flex items-end justify-between mb-stack-lg reveal ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display-lg text-headline-md md:text-display-lg text-on-surface">
            Publications
          </h2>
          <Link
            href="/publications"
            className="font-label-lg text-label-lg text-primary hover:opacity-70 transition-opacity hidden sm:flex items-center gap-1"
          >
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {publications.length > 0 && (
          <div className="flex flex-col gap-stack-lg">
            {publications.map((pub) => (
              <Link key={pub.id} href={`/publications/${pub.slug}`}>
                <article className="grid grid-cols-1 md:grid-cols-12 gap-stack-md group cursor-pointer border-b border-neutral-100 pb-stack-lg">
                  <div className="md:col-span-4 relative overflow-hidden bg-surface-variant h-56 md:h-64">
                    <Image
                      src={pub.image}
                      alt={pub.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-500"
                      style={{ filter: 'grayscale(1)' }}
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
                      {pub.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg">
                      Read full article
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
        )}

        <div className="mt-stack-lg flex justify-center sm:hidden">
          <Link
            href="/publications"
            className="font-label-lg text-label-lg text-primary border border-primary px-6 py-2.5 rounded-full hover:bg-primary hover:text-surface transition-all"
          >
            View all publications →
          </Link>
        </div>
      </div>
    </section>
  )
}
