'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const blogPosts = [
  { id: 1, title: 'The Power of Women in Policy Making', excerpt: 'Exploring how women\'s participation in policy discussions can lead to more inclusive and effective governance.', date: 'March 15, 2024', author: 'Cornelia Team', category: 'Policy' },
  { id: 2, title: 'Amplifying Marginalized Voices', excerpt: 'A deep dive into our initiatives aimed at bringing marginalized communities into the center of democratic conversations.', date: 'March 10, 2024', author: 'Cornelia Team', category: 'Advocacy' },
  { id: 3, title: 'Student Leadership in Social Change', excerpt: 'How student-led initiatives like Cornelia are driving meaningful social and policy change in their communities.', date: 'March 5, 2024', author: 'Guest Author', category: 'Leadership' },
  { id: 4, title: 'Building Community Through Dialogue', excerpt: 'The importance of creating safe spaces for conversations and how it strengthens community bonds.', date: 'February 28, 2024', author: 'Cornelia Team', category: 'Community' },
  { id: 5, title: 'Supporting Acid Attack Survivors', excerpt: 'Our fundraising initiatives and the broader work being done to support and empower acid attack survivors.', date: 'February 20, 2024', author: 'Cornelia Team', category: 'Fundraising' },
  { id: 6, title: 'Democracy Needs Women\'s Voices', excerpt: 'Why gender equality in democratic participation is essential for building a stronger, more equitable society.', date: 'February 15, 2024', author: 'Guest Author', category: 'Gender Equality' },
]

export default function Blog() {
  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">
        {/* Page Header */}
        <section className="bg-surface-container-low pt-40 pb-12 px-gutter">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Blog</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Insights, stories, and perspectives on women, law, and policy
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-md">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-surface border border-neutral-100 rounded-xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-label-md text-label-md rounded-full">
                    {post.category}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{post.date}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 hover:text-primary transition-colors">
                  <a href={`#blog-${post.id}`}>{post.title}</a>
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface-variant">By {post.author}</span>
                  <a
                    href={`#blog-${post.id}`}
                    className="font-label-lg text-label-lg text-primary hover:opacity-70 transition-opacity"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Write for Us CTA */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low px-gutter">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-headline-lg text-headline-sm md:text-headline-md text-on-surface mb-6">
              Want to Write for Us?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-2xl mx-auto">
              We're always looking for insightful pieces on women, law, policy, and social change.
            </p>
            <a
              href="https://forms.gle/dx3ERQHoTLGF1pcx8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-8 py-3 bg-primary text-surface font-label-lg text-label-lg rounded-full hover:opacity-90 transition-all active:scale-95 shadow-md"
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
