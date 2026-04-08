'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Resources() {
  const resources = [
    {
      id: 1,
      title: 'Women\'s Rights Guide',
      description: 'A comprehensive guide to understand your rights as a woman in India.',
      type: 'PDF',
      category: 'Legal',
      icon: '📄',
    },
    {
      id: 2,
      title: 'Policy Advocacy Toolkit',
      description: 'Step-by-step guide to engaging in policy advocacy and democratic participation.',
      type: 'PDF',
      category: 'Advocacy',
      icon: '🛠️',
    },
    {
      id: 3,
      title: 'Leadership Development Workbook',
      description: 'Interactive workbook for developing leadership skills and community organizing.',
      type: 'PDF',
      category: 'Training',
      icon: '📚',
    },
    {
      id: 4,
      title: 'Research Report: Women in Politics',
      description: 'Detailed research on women\'s representation in political institutions.',
      type: 'PDF',
      category: 'Research',
      icon: '📊',
    },
    {
      id: 5,
      title: 'Harassment Laws Explained',
      description: 'Understanding workplace and sexual harassment laws and how to file complaints.',
      type: 'PDF',
      category: 'Legal',
      icon: '⚖️',
    },
    {
      id: 6,
      title: 'Community Organizing Guide',
      description: 'Best practices for organizing communities and creating grassroots movements.',
      type: 'PDF',
      category: 'Organizing',
      icon: '🤝',
    },
    {
      id: 7,
      title: 'Case Studies: Women Leaders',
      description: 'Inspiring case studies of women who changed policies and systems.',
      type: 'PDF',
      category: 'Stories',
      icon: '⭐',
    },
    {
      id: 8,
      title: 'Access to Justice Manual',
      description: 'Guide to accessing legal help and navigating the justice system.',
      type: 'PDF',
      category: 'Legal',
      icon: '📋',
    },
  ]

  const categories = ['All', 'Legal', 'Advocacy', 'Training', 'Research', 'Organizing', 'Stories']

  const filteredResources = (category) => {
    if (category === 'All') return resources
    return resources.filter((r) => r.category === category)
  }

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
            <p className="text-lg text-gray-600">
              Free tools, guides, and materials to support your journey
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <label key={category} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    defaultChecked={category === 'All'}
                    className="hidden"
                  />
                  <span className="px-4 py-2 rounded-full border border-gray-300 hover:border-gray-600 transition-colors has-[:checked]:bg-black has-[:checked]:text-white has-[:checked]:border-black">
                    {category}
                  </span>
                </label>
              ))}
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResources('All').map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{resource.icon}</div>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                      {resource.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>

                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                      {resource.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 flex-grow">{resource.description}</p>

                  <button className="w-full px-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Toolkit */}
        <section className="bg-blue-50 section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-4xl">📦</div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Complete Advocacy Toolkit</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our comprehensive toolkit includes everything you need to start your own advocacy initiative:
                  guides, templates, case studies, and best practices.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <span className="text-xl">✓</span>
                    <span className="text-gray-700">Step-by-step guides</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl">✓</span>
                    <span className="text-gray-700">Customizable templates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl">✓</span>
                    <span className="text-gray-700">Real-world case studies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl">✓</span>
                    <span className="text-gray-700">Resource lists and contacts</span>
                  </li>
                </ul>
                <button className="px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors">
                  Get Free Toolkit
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Webinar Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Webinars & Events</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((event) => (
                <div key={event} className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🎥</span>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded">
                      Webinar
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2">
                    Women in Democratic Spaces: Event {event}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    Join us for an interactive session discussing women's participation in governance.
                  </p>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <p>📅 April {15 + event}, 2024</p>
                    <p>⏰ 6:00 PM IST</p>
                    <p>🔗 Online</p>
                  </div>

                  <button className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition-colors">
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Can't find what you're looking for?</h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              Get in touch with us and we'll help you find the resources you need.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition-colors font-semibold"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
