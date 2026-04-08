'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouse = (event) => setMouse({ x: event.clientX, y: event.clientY })

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouse)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  const stats = [
    { icon: '/images/process_icon.png', number: '50+', label: 'months of operation' },
    { icon: '/images/population_icon.png', number: '7000+', label: 'females and youth impacted' },
    { icon: '/images/fundraiser_icon.png', number: '19,000+', label: 'INR fundraised for Acid Attack survivors' },
    { icon: '/images/link_icon.png', number: 'COLLECTIVE', label: 'Building alliances of women leaders' },
    { icon: '/images/skill_icon.png', number: 'CRITICISM', label: 'Challenging inequity through policy' },
    { icon: '/images/communication_icon.png', number: 'CONVERSATION', label: 'Driving dialogue in public spaces' },
  ]

  const collaborators = [
    { image: '/images/collaborator1.png', name: 'Partner 1' },
    { image: '/images/collaborator2.png', name: 'Partner 2' },
    { image: '/images/collaborator3.png', name: 'Partner 3' },
    { image: '/images/collaborator4.png', name: 'Partner 4' },
    { image: '/images/collaborator5.png', name: 'Partner 5' },
    { image: '/images/collaborator6.png', name: 'Partner 6' },
  ]

  const mouseParallax =
    typeof window === 'undefined'
      ? {}
      : {
          transform: `translate3d(${((mouse.x - window.innerWidth / 2) || 0) * 0.01}px, ${((mouse.y - window.innerHeight / 2) || 0) * 0.01}px, 0)`,
        }

  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="hero-grid" />
            <div
              className="floating-orb orb-blue"
              style={{ transform: `translateY(${scrollY * 0.08}px)` }}
            />
            <div className="floating-orb orb-pink" />
            <div className="gradient-stripe" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-left">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur text-sm font-semibold shadow-sm border border-blue-100">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Women-led legal and policy collective
                </span>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  Making every woman's voice central to all conversations that matter
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Empowering women and youth through law, policy, and democratic participation.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://forms.gle/auEAXJ96GoRzLPmr9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary shadow-lg shadow-blue-200 hover:-translate-y-0.5"
                  >
                    Get Involved
                  </a>
                  <a
                    href="https://milaap.org/fundraisers/plc-ahaana-againstacid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary bg-white/80 backdrop-blur border border-blue-100 shadow-sm"
                  >
                    Donate Now
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div
                      key={stat.number}
                      className="glass-card border border-white/60 shadow-lg shadow-blue-100"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <img src={stat.icon} alt={stat.label} className="h-12 w-12 object-contain" />
                        <div>
                          <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold">Impact</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative animate-fade-in-right">
                <div className="glass-hero shadow-2xl" style={mouseParallax}>
                  <img
                    src="/images/hero.jpg"
                    alt="Women leading change"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div className="hero-badge">
                    <span className="text-xs uppercase tracking-wide text-blue-100">Active Since</span>
                    <p className="text-xl font-bold text-white">June 2021</p>
                  </div>
                  <div className="hero-metric">
                    <p className="text-xs uppercase tracking-wide text-blue-900">Community Reach</p>
                    <p className="text-lg font-semibold text-blue-900">7000+ women & youth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Ribbon */}
        <section className="relative py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="impact-ribbon">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="ribbon-card">
                  <img src={stat.icon} alt={stat.label} className="h-10 w-10 object-contain" />
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{stat.number}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-shell">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3 space-y-6">
              <div className="section-tag">Our Story</div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Born as a student-led movement, growing into a national women&apos;s collective
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cornelia was founded in June 2021 as a pan-Delhi University club. We harness law and policy—the strongest tools of democracy—to champion women and youth who have been kept away from decision-making spaces.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We fight the gendered imbalance in State power by bringing silenced voices into the room—through awareness drives, workshops, fundraisers, and campaigns that turn policy into lived change.
              </p>
              <Link
                href="/our-work"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg shadow-blue-200 hover:-translate-y-0.5 transition-transform"
              >
                Know more about our work
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="md:col-span-2 relative">
              <div className="story-card">
                <img src="/images/hero.jpg" alt="Community dialogue" className="rounded-2xl shadow-xl" />
                <div className="story-chip">
                  <p className="text-xs uppercase tracking-wide text-blue-900">What drives us</p>
                  <p className="text-sm text-gray-800">Safe spaces, legal literacy, policy participation.</p>
                </div>
                <div className="story-meter">
                  <div className="flex justify-between text-xs text-blue-900 font-semibold mb-1">
                    <span>Empowerment Journey</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-blue-100 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-shimmer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="section-shell bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 mb-10 flex-wrap">
              <div>
                <div className="section-tag">Our Approach</div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Three pillars, one purpose</h3>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-100 text-sm font-semibold text-blue-700 shadow-sm">
                Strategy crafted by young women leaders
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.slice(3).map((pillar, index) => (
                <div
                  key={pillar.number}
                  className="approach-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <img src={pillar.icon} alt={pillar.number} className="h-14 w-14 object-contain" />
                    <span className="badge-soft">Pillar {index + 1}</span>
                  </div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-3">{pillar.number}</h4>
                  <p className="text-gray-700 leading-relaxed">{pillar.label}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-blue-700 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    Practice • Policy • Participation
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaborators */}
        <section className="section-shell">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="section-tag">Allies & Collaborators</div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">We build power together</h3>
              </div>
              <span className="text-sm text-gray-600">Trusted partners who amplify our impact</span>
            </div>

            <div className="marquee">
              <div className="marquee-track">
                {[...collaborators, ...collaborators].map((collab, index) => (
                  <div key={`${collab.name}-${index}`} className="marquee-card">
                    <img src={collab.image} alt={collab.name} className="w-full h-full object-cover rounded-xl" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700" />
          <div className="absolute inset-0 opacity-30 mix-blend-screen" aria-hidden>
            <div className="hero-grid" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/30 text-sm font-semibold">
              Every action counts
            </div>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              Join our movement to keep women at the center of policy, justice, and community life.
            </h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Help us amplify women&apos;s voices and create meaningful change. Your time, skills, and resources power safe spaces, legal literacy, and leadership journeys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/auEAXJ96GoRzLPmr9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold shadow-xl hover:-translate-y-0.5 transition-transform"
              >
                Work With Us
              </a>
              <a
                href="https://milaap.org/fundraisers/plc-ahaana-againstacid"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-transform"
              >
                Donate Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
