'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Members() {
  const members = [
    {
      name: 'Akanksha Sharma',
      role: 'Founder & Co-Leader',
      bio: 'Passionate about using law and policy as tools for social change.',
    },
    {
      name: 'Member 2',
      role: 'Co-Leader',
      bio: 'Dedicated to amplifying marginalized voices.',
    },
    {
      name: 'Member 3',
      role: 'Advocacy Lead',
      bio: 'Focused on policy advocacy and research.',
    },
    {
      name: 'Member 4',
      role: 'Community Engagement Lead',
      bio: 'Building bridges between communities and organizations.',
    },
    {
      name: 'Member 5',
      role: 'Communications Lead',
      bio: 'Telling stories of impact and change.',
    },
    {
      name: 'Member 6',
      role: 'Member',
      bio: 'Contributing to our collective mission.',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-lg text-gray-600">
              Meet the dedicated individuals working to amplify women's voices
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-6xl">👤</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="bg-black text-white section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our mission of amplifying women's voices and creating systemic change.
            </p>
            <a
              href="https://forms.gle/auEAXJ96GoRzLPmr9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition-colors font-semibold"
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
