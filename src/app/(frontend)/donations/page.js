'use client'
import DonationFAQ from '@/components/Donations/DonationFAQ'
import Header from '@/components/Header'
import DonationsHeroSection from '@/components/Donations/DonationsHeroSection'
import Footer from '@/components/Footer'
import DonationOptions from '@/components/Donations/DonationOptions'
import DonationImpact from '@/components/Donations/DonationImpact'

export default function Donations() {
  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">

        {/* Hero Section */}
        <DonationsHeroSection />

        {/* Donation Options */}
        <DonationOptions />

        {/* Impact Section */}
        <DonationImpact />

        {/* FAQ Section */}
        <DonationFAQ />

      </main>
      <Footer />
    </>
  )
}
