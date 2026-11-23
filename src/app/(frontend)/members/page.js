'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Members() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    fetch('/api/frontend/members')
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setMembers(Array.isArray(data) ? data : [])
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">
        {/* Page Header */}
        <section className="bg-surface-container-low pt-40 pb-12 px-gutter">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
              Our Team
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Meet the dedicated individuals working to amplify women's voices
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter">
          {loading ? (
            <div className="max-w-7xl mx-auto flex items-center justify-center py-16">
              <p className="font-body-md text-on-surface-variant">Loading team members...</p>
            </div>
          ) : members.length === 0 ? (
            <div className="max-w-7xl mx-auto py-16 text-center">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our team profiles are coming soon.
              </p>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-md">
              {members.map((member, index) => (
                <div
                  key={member.id ?? index}
                  className="bg-surface border border-neutral-100 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="h-40 bg-surface-container-high flex items-center justify-center overflow-hidden">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-6xl text-on-surface-variant/30">◎</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{member.name}</h3>
                    <p className="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-3">{member.role}</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Join CTA */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-primary px-gutter">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-headline-lg text-headline-sm md:text-headline-md text-surface mb-6">Join Our Team</h2>
            <p className="font-body-md text-body-md text-surface/80 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our mission of amplifying women's voices and creating systemic change.
            </p>
            <a
              href="https://forms.gle/auEAXJ96GoRzLPmr9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-8 py-3 bg-surface text-primary font-label-lg text-label-lg rounded-full hover:opacity-90 transition-all active:scale-95 shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
