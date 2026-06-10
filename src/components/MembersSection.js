'use client'

import { useEffect, useState } from 'react'

const FALLBACK_MEMBERS = [
  { name: 'Akanksha Sharma', role: 'Founder & Co-Leader', bio: 'Passionate about using law and policy as tools for social change.' },
  { name: 'Member 2', role: 'Co-Leader', bio: 'Dedicated to amplifying marginalized voices.' },
  { name: 'Member 3', role: 'Advocacy Lead', bio: 'Focused on policy advocacy and research.' },
  { name: 'Member 4', role: 'Community Engagement Lead', bio: 'Building bridges between communities and organizations.' },
  { name: 'Member 5', role: 'Communications Lead', bio: 'Telling stories of impact and change.' },
  { name: 'Member 6', role: 'Member', bio: 'Contributing to our collective mission.' },
]

export default function MembersSection() {
  const [members, setMembers] = useState(FALLBACK_MEMBERS)

  useEffect(() => {
    fetch('/api/frontend/members')
      .then(r => r.json())
      .then(data => { if (data.length > 0) setMembers(data) })
      .catch(() => {})
  }, [])

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
      </div>
    </section>
  )
}
