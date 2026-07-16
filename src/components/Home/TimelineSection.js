'use client'

import { useEffect, useRef, useState } from 'react'

export default function TimelineSection() {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const milestones = [
    { year: '2020', text: 'The Movement Begins as a university-based advocacy group.' },
    { year: '2021', text: 'Published first collective manifesto on gender equity in policy.' },
    { year: '2022', text: 'Launched the Three Pillars initiative across five major cities.' },
    { year: '2023', text: 'Recognized as a leading national voice in democratic participation.' },
  ]

  return (
    <section className="py-section-padding-desktop bg-surface px-gutter overflow-hidden" id="our-past">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-stack-lg text-left md:w-1/2 reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">
            Our Story
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Born as a student-led movement, growing into a national women's collective.
          </p>
        </div>

        <div className="relative mt-12 pb-8" ref={containerRef}>
          <div className="overflow-x-auto hide-scrollbar">
            <div className="md:hidden text-center text-on-surface-variant/50 text-sm mb-4 italic">← Scroll to explore →</div>
            <div className="relative flex min-w-[640px] md:min-w-0 pb-12 pt-16">
              {/* The Continuous Horizontal Line */}
              <div className="absolute top-[calc(4rem+2px)] left-0 w-full h-[1px] bg-secondary-fixed-dim/50 z-0"></div>

              {milestones.map((milestone, index) => (
                <div key={index} className="flex-1 px-8 relative">
                  <div className="mb-10 text-center">
                    <span className="font-headline-sm text-primary">{milestone.year}</span>
                  </div>
                  {/* Marker */}
                  {/* <div className="absolute left-1/2 top-16 -translate-x-1/2 w-3 h-3 bg-primary rounded-full z-10 border-4 border-surface box-content"></div> */}
                  <div className="mt-12 text-center">
                    <p className="font-body-md italic text-on-surface-variant">{milestone.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Hint */}
          {/* <div className="md:hidden text-center text-on-surface-variant/50 text-sm mt-4 italic">
            ← Scroll to explore
          </div> */}
        </div>
      </div>
    </section>
  )
}
