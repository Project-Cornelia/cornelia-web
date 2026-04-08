'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Power of Women in Policy Making',
      excerpt: 'Exploring how women\'s participation in policy discussions can lead to more inclusive and effective governance.',
      date: 'March 15, 2024',
      author: 'Cornelia Team',
      category: 'Policy',
    },
    {
      id: 2,
      title: 'Amplifying Marginalized Voices',
      excerpt: 'A deep dive into our initiatives aimed at bringing marginalized communities into the center of democratic conversations.',
      date: 'March 10, 2024',
      author: 'Cornelia Team',
      category: 'Advocacy',
    },
    {
      id: 3,
      title: 'Student Leadership in Social Change',
      excerpt: 'How student-led initiatives like Cornelia are driving meaningful social and policy change in their communities.',
      date: 'March 5, 2024',
      author: 'Guest Author',
      category: 'Leadership',
    },
    {
      id: 4,
      title: 'Building Community Through Dialogue',
      excerpt: 'The importance of creating safe spaces for conversations and how it strengthens community bonds.',
      date: 'February 28, 2024',
      author: 'Cornelia Team',
      category: 'Community',
    },
    {
      id: 5,
      title: 'Supporting Acid Attack Survivors',
      excerpt: 'Our fundraising initiatives and the broader work being done to support and empower acid attack survivors.',
      date: 'February 20, 2024',
      author: 'Cornelia Team',
      category: 'Fundraising',
    },
    {
      id: 6,
      title: 'Democracy Needs Women\'s Voices',
      excerpt: 'Why gender equality in democratic participation is essential for building a stronger, more equitable society.',
      date: 'February 15, 2024',
      author: 'Guest Author',
      category: 'Gender Equality',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-gray-600">
              Insights, stories, and perspectives on women, law, and policy
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-sm font-semibold text-gray-700 rounded">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-gray-600 transition-colors">
                    <a href={`#blog-${post.id}`}>{post.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <a
                      href={`#blog-${post.id}`}
                      className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      Read More →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-50 section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Want to Write for Us?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for insightful pieces on women, law, policy, and social change. If you have a story or perspective to share, we'd love to hear from you!
            </p>
            <a
              href="https://forms.gle/dx3ERQHoTLGF1pcx8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors font-semibold"
            >
              Submit Your Article
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
