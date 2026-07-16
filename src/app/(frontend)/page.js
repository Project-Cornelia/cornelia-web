'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/Home/HeroSection'
import TimelineSection from '@/components/Home/TimelineSection'
import ThreePillarsSection from '@/components/Home/ThreePillarsSection'
import Footer from '@/components/Footer'
import FeaturedPublicationsSection from '@/components/Home/FeaturedPublicationsSection'

  export default function Home() {
    const [publications, setPublications] = useState([])
    const [loading, setLoading] = useState(true)
  
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
        <HeroSection />
        <TimelineSection />
        <ThreePillarsSection />
        <FeaturedPublicationsSection publications={publications} />
      </main>
      <Footer />
    </>
  )
}

