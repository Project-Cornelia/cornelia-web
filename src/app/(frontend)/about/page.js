'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import AboutHeroSection from '@/components/About/AboutHeroSection'
import AboutContent from '@/components/About/AboutContent'
import AboutContributions from '@/components/About/AboutContributions'
import AboutValues from '@/components/About/AboutValues'
import MembersSection from '@/components/About/MembersSection'
import Footer from '@/components/Footer'

export default function About() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="bg-surface overflow-x-hidden">
          <div className="min-h-screen flex items-center justify-center">
            <p className="font-body-md text-on-surface-variant">Loading...</p>
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
        <AboutHeroSection />
        
        {/* Content Section */}
        <AboutContent />

        {/* Team/Contributors Section */}
        <AboutContributions />

        {/* Values Section */}
        <AboutValues />

        {/* Members Section */}
        <MembersSection />

      </main>
      <Footer />
    </>
  )
}
