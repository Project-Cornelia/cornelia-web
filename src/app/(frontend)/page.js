import Header from '@/components/Header'
import HeroSection from '@/components/Home/HeroSection'
import ImpactNumbersSection from '@/components/Home/ImpactNumbersSection'
import OurApproachSection from '@/components/Home/OurApproachSection'
import PartnersSection from '@/components/Home/PartnersSection'
import CorneliaStorySection from '@/components/Home/CorneliaStorySection'
import VideoSection from '@/components/Home/VideoSection'
import FAQSection from '@/components/Home/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">
        <HeroSection />
        <ImpactNumbersSection />
        <OurApproachSection />
        <PartnersSection />
        <CorneliaStorySection />
        <VideoSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
