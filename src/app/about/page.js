'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import AboutHeroSection from '@/components/AboutHeroSection'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">
        <AboutHeroSection />
        
        {/* Content Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
            {/* Left: Map/Visual */}
            <div className="relative group">
              <div className="aspect-square bg-surface-container rounded-xl overflow-hidden border border-neutral-100">
                <Image
                  src="https://i.ibb.co/217NprcX/India-Cornelia.png"
                  alt="Project Cornelia locations across India"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: About Content */}
            <div className="space-y-6">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                  Our Mission
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  Project Cornelia is dedicated to bringing women's voices to the forefront of democratic participation. We believe that women's leadership, research, and activism are fundamental to building just and equitable societies.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Through legal literacy, policy advocacy, and community organizing, we work to center women's experiences in conversations that shape our future.
                </p>
              </div>

              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                  Our Focus Areas
                </h3>
                <ul className="space-y-2">
                  {['Legal Empowerment', 'Policy Research', 'Community Building', 'Youth Leadership'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-body-md text-on-surface">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="mb-12">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                Our Values
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl">
                Grounded in feminist principles and democratic ideals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
              {[
                {
                  title: 'Collective Power',
                  description: 'We believe in the strength of women coming together to drive systemic change.',
                },
                {
                  title: 'Accountability',
                  description: 'We hold institutions accountable to women and marginalized communities.',
                },
                {
                  title: 'Innovation',
                  description: 'We employ new tools and strategies to amplify women\'s voices in policy.',
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="p-6 bg-surface rounded-lg border border-neutral-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team/Contributors Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="mb-12">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                Powered By Our Community
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl">
                From lawyers to activists, researchers to organizers—women leading change
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-md">
              {[
                { label: 'Student Leaders', count: '100+' },
                { label: 'Partner Organizations', count: '25+' },
                { label: 'Legal Cases', count: '15+' },
                { label: 'Policy Briefs', count: '30+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display-lg text-display-lg text-primary mb-2">
                    {stat.count}
                  </div>
                  <p className="font-body-md text-on-surface-variant">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
