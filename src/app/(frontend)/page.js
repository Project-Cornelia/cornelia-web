'use client'

import { useCallback, useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Home/Preloader'
import HeroSection from '@/components/Home/HeroSection'
import MarqueeBand from '@/components/Home/MarqueeBand'
import MarginsToCentre from '@/components/Home/MarginsToCentre'
import ManifestoSection from '@/components/Home/ManifestoSection'
import TimelineSection from '@/components/Home/TimelineSection'
import ThreePillarsSection from '@/components/Home/ThreePillarsSection'
import ImpactNumbers from '@/components/Home/ImpactNumbers'
import FeaturedPublicationsSection from '@/components/Home/FeaturedPublicationsSection'
import RaiseYourVoice from '@/components/Home/RaiseYourVoice'
import { ScrollTrigger } from '@/lib/gsap'

export default function Home() {
  const [publications, setPublications] = useState([])
  const [introDone, setIntroDone] = useState(false)
  const onIntroDone = useCallback(() => setIntroDone(true), [])

  // Publications load in the background; the page no longer waits on them.
  useEffect(() => {
    let cancelled = false
    fetch('/api/frontend/publications')
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => !cancelled && setPublications(Array.isArray(data) ? data : []))
      .catch((error) => console.error('Error loading publications:', error))
    return () => {
      cancelled = true
    }
  }, [])

  // Pinned sections measure text, so re-measure once the web fonts arrive.
  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
  }, [])

  return (
    <>
      <Preloader onComplete={onIntroDone} />
      <Header />
      <main className="bg-surface overflow-x-clip">
        <HeroSection play={introDone} />
        <MarqueeBand />
        <MarginsToCentre />
        <ManifestoSection />
        <TimelineSection />
        <ThreePillarsSection />
        <ImpactNumbers />
        <FeaturedPublicationsSection publications={publications} />
        <RaiseYourVoice />
      </main>
      <Footer />
    </>
  )
}
