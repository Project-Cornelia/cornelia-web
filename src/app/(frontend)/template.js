'use client'

import { useRef } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'

// template.js re-mounts on every navigation, so each page arrives behind a
// five-column curtain that lifts in a stagger.
export default function Template({ children }) {
  const curtain = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set(curtain.current, { display: 'none' })
      return
    }
    gsap.fromTo(
      curtain.current.children,
      { scaleY: 1 },
      {
        scaleY: 0,
        duration: 0.9,
        ease: 'expo.inOut',
        stagger: { each: 0.06, from: 'center' },
        delay: 0.05,
        onComplete: () => gsap.set(curtain.current, { display: 'none' }),
      }
    )
  })

  return (
    <>
      <div ref={curtain} className="route-curtain" aria-hidden="true">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      {children}
    </>
  )
}
