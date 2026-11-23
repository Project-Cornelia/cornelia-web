'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InitiativesHeroSection from '@/components/Initiatives/InitiativesHeroSection'
import InitiativesGrid from '@/components/Initiatives/InitiativesGrid'
import InitCTA from '@/components/Initiatives/InitCTA'

export default function Initiatives() {
  const [initiatives, setInitiatives] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const fetchInitiatives = async () => {
      try {
        const response = await fetch('/api/frontend/initiatives')
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
        const data = await response.json()
        if (!cancelled) setInitiatives(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error('Error loading initiatives:', error)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchInitiatives()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <Header />
      <main className="overflow-x-hidden bg-surface">
        <InitiativesHeroSection />

        <section className="mx-auto max-w-7xl px-gutter py-section-padding-mobile md:py-section-padding-desktop">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <p className="font-body-md text-on-surface-variant">Loading initiatives...</p>
            </div>
          ) : (
            <InitiativesGrid initiatives={initiatives} />
          )}
        </section>

        <InitCTA />
      </main>
      <Footer />
    </>
  )
}
