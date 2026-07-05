'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import PublicationsHeroSection from '@/components/PublicationsHeroSection'
import PublicationsFilterBar from '@/components/PublicationsFilterBar'
import PublicationsGrid from '@/components/PublicationsGrid'
import WriteForUs from '@/components/WriteForUs'
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
        <PublicationsHeroSection />
        <PublicationsFilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <PublicationsGrid publications={filteredPublications} />
        <WriteForUs />
      </main>
      <Footer />
    </>
  )
}
