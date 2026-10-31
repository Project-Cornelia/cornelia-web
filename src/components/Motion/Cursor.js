'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

// Dot + trailing ring. Any element with [data-cursor="Label"] turns the ring
// into a filled label; links and buttons just grow it.
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    gsap.set([dot, ring], { xPercent: 0, yPercent: 0, opacity: 0 })

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' })
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.55, ease: 'power3' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.55, ease: 'power3' })

    let shown = false
    const onMove = (e) => {
      if (!shown) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.4 })
        shown = true
      }
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }

    const onOver = (e) => {
      const labelled = e.target.closest('[data-cursor]')
      const interactive = e.target.closest('a, button, input, textarea, select, [role="button"]')
      ring.classList.toggle('is-label', Boolean(labelled))
      ring.classList.toggle('is-hover', !labelled && Boolean(interactive))
      labelRef.current.textContent = labelled ? labelled.getAttribute('data-cursor') : ''
    }

    const onLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 })
      shown = false
    }
    const onDown = () => gsap.to(ring, { scale: 0.8, duration: 0.2, ease: 'power2.out' })
    const onUp = () => gsap.to(ring, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.4)' })

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver)
    document.documentElement.addEventListener('pointerleave', onLeave)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.documentElement.classList.add('has-cursor')

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} />
      </div>
    </>
  )
}
