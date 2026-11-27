import Header from '@/components/Header'
import AboutHeroSection from '@/components/About/AboutHeroSection'
import TimelineSection from '@/components/Home/TimelineSection'
import AboutContent from '@/components/About/AboutContent'
import AboutContributions from '@/components/About/AboutContributions'
import AboutValues from '@/components/About/AboutValues'
import MembersSection from '@/components/About/MembersSection'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">

        {/* Hero Section */}
        <AboutHeroSection />
        <TimelineSection />
        
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
