'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const projects = [
  { title: 'Awareness Drives', description: 'Conducting awareness campaigns on women\'s rights, gender equality, and democratic participation across Delhi University and beyond.', icon: '📢' },
  { title: 'Workshops & Seminars', description: 'Organizing educational workshops and seminars on law, policy, and social issues to empower women and youth.', icon: '📚' },
  { title: 'Fundraising Initiatives', description: 'Running fundraisers to support acid attack survivors and other marginalized communities.', icon: '💰' },
  { title: 'Community Engagement', description: 'Building direct relationships with communities and creating platforms for meaningful dialogue and action.', icon: '🤝' },
  { title: 'Research & Advocacy', description: 'Conducting research on policy issues and advocating for systemic changes through democratic institutions.', icon: '🔍' },
  { title: 'Member Support', description: 'Providing mentorship and support to our members in their individual advocacy and community work.', icon: '💪' },
]

const stats = [
  { count: '50+', label: 'months of continuous operation' },
  { count: '7000+', label: 'females and youth impacted' },
  { count: '₹19,000+', label: 'fundraised for acid attack survivors' },
]

export default function OurWork() {
  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">
        {/* Page Header */}
        <section className="bg-surface-container-low pt-40 pb-12 px-gutter">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Our Work</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Discover the initiatives and projects we're working on to create meaningful change
            </p>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-headline-sm text-headline-sm text-on-surface mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-stack-md">
              {stats.map(({ count, label }) => (
                <div key={label} className="bg-surface-container border border-neutral-100 rounded-xl p-8 text-center">
                  <p className="font-display-lg text-display-lg text-primary mb-2">{count}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low px-gutter">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-headline-sm text-headline-sm text-on-surface mb-12 text-center">Our Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-surface border border-neutral-100 rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">{project.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-primary px-gutter">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-headline-lg text-headline-sm md:text-headline-md text-surface mb-6">Be Part of Our Mission</h2>
            <p className="font-body-md text-body-md text-surface/80 mb-8 max-w-2xl mx-auto">
              We're always looking for dedicated individuals to join our team and support our initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/auEAXJ96GoRzLPmr9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 bg-surface text-primary font-label-lg text-label-lg rounded-full hover:opacity-90 transition-all active:scale-95 shadow-md text-center"
              >
                Work With Us
              </a>
              <a
                href="https://forms.gle/dx3ERQHoTLGF1pcx8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 border-2 border-surface text-surface font-label-lg text-label-lg rounded-full hover:bg-surface hover:text-primary transition-all text-center"
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
