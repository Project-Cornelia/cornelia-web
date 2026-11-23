'use client'

import { useEffect, useRef, useState } from 'react'

export default function ThreePillarsSection() {
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

  const pillars = [
    { title: 'Collective Action', description: 'Change isn’t achieved alone. We collaborate so every woman’s voice is heard.' },
    { title: 'Conversational Discourse', description: 'Dialogue is how awareness spreads. We put conversation at the center of our mission.' },
    { title: 'Critical Outlook', description: 'Questioning builds a just society. We learn to challenge the world around us, together.' },
  ]

  return (
    <section className="py-section-padding-desktop bg-surface-container-low px-gutter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Interlocking Circles Graphic */}
        <div className={`relative aspect-square flex items-center justify-center reveal ${isVisible ? 'visible' : ''}`} ref={containerRef}>
          <svg className="w-full h-full max-w-[400px]" viewBox="0 0 400 400">
            {/* Connecting Lines */}
            {/* <line
              stroke="currentColor"
              strokeWidth="2"
              x1="250"
              x2="120"
              y1="120"
              y2="220"
              className="text-secondary/30"
            />
            <line
              stroke="currentColor"
              strokeWidth="2"
              x1="120"
              x2="260"
              y1="220"
              y2="300"
              className="text-secondary/30"
            />
            <line
              stroke="currentColor"
              strokeWidth="2"
              x1="260"
              x2="250"
              y1="300"
              y2="120"
              className="text-secondary/30"
            /> */}
            {/* Circles */}
            <circle
              cx="250"
              cy="120"
              r="60"
              fill="currentColor"
              className="text-primary/70"
            />
            <circle
              cx="120"
              cy="220"
              r="70"
              fill="currentColor"
              className="text-primary/70"
            />
            <circle
              cx="260"
              cy="300"
              r="65"
              fill="currentColor"
              className="text-primary/70"
            />
          </svg>
        </div>

        {/* Content */}
        <div className={`space-y-12 reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display-lg text-display-lg text-on-surface">3 Pillars</h2>
          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="group">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
