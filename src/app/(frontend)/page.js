'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TimelineSection from '@/components/TimelineSection'
import ThreePillarsSection from '@/components/ThreePillarsSection'
import PublicationsSection from '@/components/PublicationsSection'
import Footer from '@/components/Footer'
import FeaturedPublicationsSection from '@/components/FeaturedPublicationsSection'

// export default function Home() {

  // export default function Home() {
  //   const [publications, setPublications] = useState([])
    
  //   useEffect(() => {
  //     const fetchPublications = async () => {
  //       try {
  //         const response = await fetch('/api/frontend/publications')
  //         const data = await response.json()
  //         setPublications(data)
  //       } catch (error) {
  //         console.error('Error loading publications:', error)
  //       } finally {
  //         setLoading(false)
  //       }
  //     }
  
  //     fetchPublications()
  //   }, [])

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
        {/* <PublicationsSection /> */}
      </main>
      <Footer />
    </>
  )
}

