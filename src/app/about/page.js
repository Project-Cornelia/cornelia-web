'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-600">
              Learn more about Project Cornelia and our mission
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-2xl">
                  [About Image]
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Cornelia was founded in June 2021 as a student-led initiative, a pan Delhi University club. Ever since its inception as a club, it has always considered law and policy to be the most powerful tools of democracy.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The male dominance, however, has always prevented these tools from showcasing their true potential. We are thus determined to fight the 'man' in the State and include the inherently silenced voices in democratic discussions to bring about its true strength.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  In the pursuit, we have so far worked with the youth, students and females in the form of awareness drives, workshops, fundraisers and so on. Our collective work is built on three pillars: Collective, Criticism, and Conversation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-gray-50 section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4">🤝 Collective</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in the power of collective action. Together, we are stronger and more effective in creating lasting change.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4">💡 Criticism</h3>
                <p className="text-gray-600 leading-relaxed">
                  We embrace constructive criticism and critical thinking as essential tools for growth and improvement in our work.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4">💬 Conversation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We foster open dialogue and conversations that bring women's voices to the center of democratic discussions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-black text-white section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Join us in our mission to amplify women's voices and create systemic change through law and policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/our-work"
                className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition-colors font-semibold"
              >
                Explore Our Work
              </Link>
              <a
                href="https://forms.gle/auEAXJ96GoRzLPmr9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-white text-white rounded hover:bg-white hover:text-black transition-colors font-semibold"
              >
                Work With Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
