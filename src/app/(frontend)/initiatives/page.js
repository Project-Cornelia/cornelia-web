'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import InitiativesHeroSection from '@/components/Initiatives/InitiativesHeroSection'
import InitOngoing from '@/components/Initiatives/InitOngoing'
import InitPast from '@/components/Initiatives/InitPast'
import InitDialog from '@/components/Initiatives/InitDialog'
import InitCTA from '@/components/Initiatives/InitCTA'

export default function Initiatives() {
  const [selectedInitiative, setSelectedInitiative] = useState(null)
  const [initiatives, setInitiatives] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchInitiatives = async () => {
      try {
        const response = await fetch('/api/frontend/initiatives')
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
        const data = await response.json()
        setInitiatives(data)
      } catch (error) {
        console.error('Error loading initiatives:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchInitiatives()
  }, [])

  const ongoingInitiatives = initiatives.filter(i => i.status !== 'Completed')
  const pastInitiatives = initiatives.filter(i => i.status === 'Completed')

  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-surface overflow-x-hidden">
          <div className="min-h-screen flex items-center justify-center">
            <p className="font-body-md text-on-surface-variant">Loading initiatives...</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>

      {/* Hero Section */}
      <InitiativesHeroSection />

        {/* Initiatives Grid */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Ongoing Initiatives */}
            <InitOngoing ongoingInitiatives={ongoingInitiatives} setSelectedInitiative={setSelectedInitiative} />

            {/* Past Initiatives */}
            <InitPast pastInitiatives={pastInitiatives} setSelectedInitiative={setSelectedInitiative} />
          </div>
        </section>

        {/* Modal Dialog */}
        <InitDialog selectedInitiative={selectedInitiative} setSelectedInitiative={setSelectedInitiative} />

        {/* CTA */}
        <InitCTA />
        
      </main>
      <Footer />
    </>
  )
}
