'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Initiatives() {
  const [expandedId, setExpandedId] = useState(null)

  const initiatives = [
    {
      id: 1,
      title: 'Women in Democracy Initiative',
      category: 'Policy Advocacy',
      description: 'A comprehensive program aimed at increasing women\'s participation in democratic processes.',
      fullDescription: 'This initiative works directly with women leaders and aspiring female policymakers to build their capacity and create pathways for participation in democratic institutions. We conduct workshops, mentorship programs, and facilitate networking opportunities.',
      impact: '500+ women trained',
      status: 'Active',
      icon: '🏛️',
    },
    {
      id: 2,
      title: 'Legal Awareness Drives',
      category: 'Education',
      description: 'Campus and community-based awareness campaigns on women\'s rights and legal protections.',
      fullDescription: 'We organize monthly awareness drives in collaboration with colleges and community centers, covering topics like harassment laws, workplace rights, property rights, and access to justice.',
      impact: '2000+ people reached',
      status: 'Active',
      icon: '⚖️',
    },
    {
      id: 3,
      title: 'Acid Attack Survivors Support',
      category: 'Fundraising & Support',
      description: 'Fundraising campaigns and direct support for acid attack survivors in their rehabilitation.',
      fullDescription: 'We partner with organizations working with acid attack survivors to raise funds for medical treatment, rehabilitation, and reintegration support. Our goal is to empower survivors and advocate for stricter laws.',
      impact: '₹19,000+ raised',
      status: 'Ongoing',
      icon: '❤️',
    },
    {
      id: 4,
      title: 'Youth Leadership Program',
      category: 'Capacity Building',
      description: 'Developing next-generation leaders committed to social and policy change.',
      fullDescription: 'This program provides comprehensive training in leadership, policy analysis, advocacy skills, and community organizing. Participants work on real-world projects addressing women\'s issues.',
      impact: '150+ youth trained',
      status: 'Active',
      icon: '⭐',
    },
    {
      id: 5,
      title: 'Research & Analysis',
      category: 'Research',
      description: 'Conducting research on gender gaps in policy and democratic participation.',
      fullDescription: 'Our research team analyzes policy documents, conducts surveys, and publishes reports on women\'s representation in various sectors. These findings inform our advocacy work.',
      impact: '10+ research papers',
      status: 'Ongoing',
      icon: '📊',
    },
    {
      id: 6,
      title: 'Community Dialogue Series',
      category: 'Engagement',
      description: 'Regular forums for open conversations on women\'s issues and social change.',
      fullDescription: 'We host community dialogues where women can share their experiences, learn from experts, and engage in meaningful conversations about creating systemic change.',
      impact: '30+ events conducted',
      status: 'Active',
      icon: '💬',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Initiatives</h1>
            <p className="text-lg text-gray-600">
              Detailed overview of programs and projects we're running
            </p>
          </div>
        </section>

        {/* Initiatives Grid */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initiatives.map((initiative) => (
                <div
                  key={initiative.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{initiative.icon}</div>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                        {initiative.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>

                    {/* Status */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-sm font-medium text-gray-600">{initiative.status}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {initiative.description}
                    </p>

                    {/* Impact */}
                    <div className="bg-gray-50 p-4 rounded mb-4 border border-gray-200">
                      <p className="text-sm text-gray-600 font-semibold">Impact:</p>
                      <p className="text-lg font-bold text-gray-900">{initiative.impact}</p>
                    </div>

                    {/* Expandable Details */}
                    <button
                      onClick={() => setExpandedId(expandedId === initiative.id ? null : initiative.id)}
                      className="w-full px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                    >
                      {expandedId === initiative.id ? 'Show Less' : 'Learn More'}
                    </button>

                    {expandedId === initiative.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed">
                          {initiative.fullDescription}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="bg-gray-50 section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Collective Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <p className="text-gray-600">Months Operating</p>
              </div>

              <div className="bg-white rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">7000+</div>
                <p className="text-gray-600">Lives Impacted</p>
              </div>

              <div className="bg-white rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">6+</div>
                <p className="text-gray-600">Active Initiatives</p>
              </div>

              <div className="bg-white rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">₹19K+</div>
                <p className="text-gray-600">Funds Raised</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Work</h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Your support helps us amplify women's voices and create systemic change through law and policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://milaap.org/fundraisers/plc-ahaana-againstacid"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition-colors font-semibold"
              >
                Donate Now
              </a>
              <a
                href="https://forms.gle/auEAXJ96GoRzLPmr9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-white text-white rounded hover:bg-white hover:text-black transition-colors font-semibold"
              >
                Join Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
