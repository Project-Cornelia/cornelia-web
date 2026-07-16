// **Important notice**
// Publications page actually represents the Blogs & Writings page in the website. This is just how the naming is done as the CMS settings recognize blogs as publications.


'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import PublicationsHeroSection from '@/components/Publications/PublicationsHeroSection'
import PublicationsFilterBar from '@/components/Publications/PublicationsFilterBar'
import PublicationsGrid from '@/components/Publications/PublicationsGrid'
import WriteForUs from '@/components/Publications/WriteForUs'
import Footer from '@/components/Footer'

export default function Publications() {
  const [publications, setPublications] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch('/api/frontend/publications')
        const data = await response.json()
        setPublications(data)
      } catch (error) {
        console.error('Error loading publications:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPublications()
  }, [])

  const filteredPublications = activeFilter === 'All' 
    ? publications 
    : publications.filter(pub => pub.category === activeFilter)

  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-surface overflow-x-hidden">
          <div className="min-h-screen flex items-center justify-center">
            <p className="font-body-md text-on-surface-variant">Loading publications...</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">

        {/* Hero Section */}
        <PublicationsHeroSection />

        {/* Filter Bar and Publications Grid */}
        <PublicationsFilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        {/* Publications Grid */}
        <PublicationsGrid publications={filteredPublications} />

        {/* Write For Us Section */}
        <WriteForUs />
        
      </main>
      <Footer />
    </>
  )
}
