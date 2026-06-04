'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function OurWork() {
  const projects = [
    {
      title: 'Awareness Drives',
      description: 'Conducting awareness campaigns on women\'s rights, gender equality, and democratic participation across Delhi University and beyond.',
      icon: '📢',
    },
    {
      title: 'Workshops & Seminars',
      description: 'Organizing educational workshops and seminars on law, policy, and social issues to empower women and youth.',
      icon: '📚',
    },
    {
      title: 'Fundraising Initiatives',
      description: 'Running fundraisers to support acid attack survivors and other marginalized communities.',
      icon: '💰',
    },
    {
      title: 'Community Engagement',
      description: 'Building direct relationships with communities and creating platforms for meaningful dialogue and action.',
      icon: '🤝',
    },
    {
      title: 'Research & Advocacy',
      description: 'Conducting research on policy issues and advocating for systemic changes through democratic institutions.',
      icon: '🔍',
    },
    {
      title: 'Member Support',
      description: 'Providing mentorship and support to our members in their individual advocacy and community work.',
      icon: '💪',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
            <p className="text-lg text-gray-600">
              Discover the initiatives and projects we're working on to create meaningful change
            </p>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-white section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <p className="text-4xl font-bold text-gray-900 mb-2">50+</p>
                <p className="text-gray-600">months of continuous operation</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <p className="text-4xl font-bold text-gray-900 mb-2">7000+</p>
                <p className="text-gray-600">females and youth impacted</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <p className="text-4xl font-bold text-gray-900 mb-2">₹19,000+</p>
                <p className="text-gray-600">fundraised for acid attack survivors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-gray-50 section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-5xl mb-4">{project.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-black text-white section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Mission</h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              We're always looking for dedicated individuals to join our team and support our initiatives. Whether you want to work with us, volunteer, or contribute your skills, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/auEAXJ96GoRzLPmr9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition-colors font-semibold"
              >
                Work With Us
              </a>
              <a
                href="https://forms.gle/dx3ERQHoTLGF1pcx8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-white text-white rounded hover:bg-white hover:text-black transition-colors font-semibold"
              >
                Write for Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
