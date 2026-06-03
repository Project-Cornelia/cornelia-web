'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function PublicationsSection() {
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

  return (
    <section className="py-section-padding-desktop bg-surface px-gutter">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <h2 className="font-display-lg text-display-lg text-on-surface mb-stack-lg">
          Publications
        </h2>

        {/* Asymmetric Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Large Featured Card */}
          <div className={`md:col-span-7 group relative bg-primary-container/20 rounded-lg p-8 border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 reveal ${isVisible ? 'visible' : ''}`}>
            <div className="aspect-[16/10] bg-surface-container-highest rounded-lg mb-8 overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-5qh9e39RlNJd8h-AIowfrKY1SkuniKem5Cdevhw68VZQhibqQKJovN1zIP_bzcQKjl-xl5VXnD9LKK5UNioAOb0JIoO7IIZFirq47HqdaJkmNKE-3pkeXPTq_QTy0Wu4zYtmlzde1K4p0y45TIYRkpq7ZcGCk29HytRiqTfajhtSlwvZlIGE-pG78k_C4OQ8jx2zqF98ruUgDNKD4_89NH4KSvR85DMg4NhnTdHtL65JqARdDoc8pHJXVkXpwq6LfixK2rpaF-o"
                alt="Publication cover"
                fill
                className="object-cover grayscale"
              />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
              Today in Total
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Here, the contents of the articles are displayed. Today in total are the significant changes made....
            </p>
            <a className="font-label-lg text-label-lg text-primary uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
              Read more →
            </a>
          </div>

          {/* Two Smaller Stacked Cards */}
          <div className="md:col-span-5 flex flex-col gap-gutter">
            {/* Small Card 1 */}
            <div className={`group relative bg-primary/10 rounded-lg p-6 border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 reveal ${isVisible ? 'visible' : ''}`}>
              <div className="flex gap-6 items-center">
                <div className="w-32 h-32 flex-shrink-0 bg-surface-container-highest rounded-lg overflow-hidden relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUaNWAwmPd3GrrpLHpUeMKwr3YkbsZc7leidUsqpG4LBoq6dKSNrp6kGKPcAYhSXmEZ5OJ8AEl_m91dH7Bu1QA_joasDG2td-U1ut5XsoRg-3lYi_GBDfCnzHGiiIaGCs0OQHYgXr2CmsO8U-QzVivK4P7OmSbc1VD0DD9eOPF2nebBsTCdKglKSdqEpKI0sZTjMkYbnYF-6DCiqciDJtjeprMIb8zcTs-kjmGFsy9bBYsf3lrqff4r9oM50XLHZiS77KhUbGly8E"
                    alt="Research thumbnail"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    Today in Total
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                    Here, the contents of the articles are displayed.
                  </p>
                  <a className="font-label-md text-label-md text-primary hover:underline" href="#">
                    Read more →
                  </a>
                </div>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className={`group relative bg-primary/10 rounded-lg p-6 border border-neutral-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 reveal ${isVisible ? 'visible' : ''}`}>
              <div className="flex gap-6 items-center">
                <div className="w-32 h-32 flex-shrink-0 bg-surface-container-highest rounded-lg overflow-hidden relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt4IYnuoZxLBxA-YkuUmDs5cOdK9htnFyxudCHC8LCfLJ2HCsTeePUdYbGt846RsBnKL5D7n6mPATeYpJx0g2LpcO-_xO4hZJrlhNfeh1-OFdK14f_EO56jb8FaiDLzS7kswZuqDV_qp1EyeGiQmz4SJaWElLgjFcIZQYKIBhUMtmOo6PYBJtmYy-HvR9sg6E3d9X74kfP3_Qimhb5uRQSc5EGomHa7kTE6g3o5KN-epDNl9rI7QLp6ItfotxgpAvBvIqsXgEQlfU"
                    alt="Archive thumbnail"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    Today in Total
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                    Here, the contents of the articles are displayed.
                  </p>
                  <a className="font-label-md text-label-md text-primary hover:underline" href="#">
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
