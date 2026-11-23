import Header from '@/components/Header'
import HeroSection from '@/components/Home/HeroSection'
import TimelineSection from '@/components/Home/TimelineSection'
import ThreePillarsSection from '@/components/Home/ThreePillarsSection'
import VideoSection from '@/components/Home/VideoSection'
import NameAndPoliticsSection from '@/components/Home/NameAndPoliticsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">
        <HeroSection />
        <TimelineSection />
        <ThreePillarsSection />
        <VideoSection />
        <NameAndPoliticsSection />
      </main>
      <Footer />
    </>
  )
}
