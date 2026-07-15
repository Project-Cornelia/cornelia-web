'use client'

import { useEffect, useState } from 'react'

export default function MembersSection() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/frontend/members')
      .then(r => r.json())
      .then(data => { 
        if (data.length > 0) setMembers(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center py-12">
            <p className="font-body-md text-on-surface-variant">Loading team members...</p>
          </div>
        </div>
      </section>
    )
  }

  if (members.length === 0) {
    return null
  }

  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
            Our Team
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl">
            Meet the dedicated individuals working to amplify women's voices
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-md">
          {members.map((member, index) => (
            <div
              key={member.id ?? index}
              className="bg-surface border border-neutral-100 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="aspect-square bg-surface-container-high flex items-center justify-center overflow-hidden">
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
      </div>
    </section>
  )
}
