'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import ResourcesHeroSection from '@/components/ResourcesHeroSection'

export default function Resources() {
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('/api/frontend/resources')
        const data = await response.json()
        setResources(data)
      } catch (error) {
        console.error('Error loading resources:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchResources()
  }, [])

  const categories = ['All', 'Legal', 'Advocacy', 'Training', 'Research']

  const filteredResources = activeCategory === 'All' 
    ? resources 
    : resources.filter(r => r.category === activeCategory)

  return (
    <>
      <Header />
      <ResourcesHeroSection />
      <main className="bg-surface overflow-x-hidden">
        {/* Hero Section */}
        {/* <section className="relative min-h-screen flex items-end justify-center text-center px-gutter pb-24 md:pb-32 pt-24">
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full">
              <Image
                src="https://ibb.co/DHKSqn97"
                alt="Resources and knowledge"
                fill
                className="object-cover brightness-40"
              />
            </div>
          </div>

          <div className="relative z-10 max-w-3xl animate-fade-in-up">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-6 leading-tight">
              Knowledge and Tools for Empowerment
            </h1>
            <p className="font-body-md text-body-sm md:text-body-md text-white/90 mb-10 max-w-2xl mx-auto">
              Access our comprehensive collection of guides, toolkits, and research documents designed to empower women and amplify voices in democratic discourse.
            </p>
          </div>
        </section> */}

        {/* Resources Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop max-w-7xl mx-auto px-gutter">
          {/* Category Filter */}
          <div className="mb-stack-lg flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-label-lg text-label-lg transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-surface'
                    : 'bg-surface-container text-on-surface border border-neutral-100 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

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

        {/* Call to Action Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-gutter text-center">
            <div className="mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                Can't Find What You're Looking For?
              </h2>
              <div className="w-12 h-1 bg-primary mx-auto"></div>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-2xl mx-auto">
              Get in touch with our team. We're always developing new resources and would love to hear what you need.
            </p>

            <a
              href="mailto:hello@projectcornelia.org"
              className="inline-block px-8 py-3 bg-primary text-surface font-label-lg text-label-lg rounded-full hover:opacity-90 transition-all duration-300 active:scale-95 shadow-md"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
