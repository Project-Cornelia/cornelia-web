// Homepage with new design system components
'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TimelineSection from '@/components/TimelineSection'
import ThreePillarsSection from '@/components/ThreePillarsSection'
import PublicationsSection from '@/components/PublicationsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">
        <HeroSection />
        <TimelineSection />
        <ThreePillarsSection />
        <PublicationsSection />
      </main>
      <Footer />
    </>
  )
}

