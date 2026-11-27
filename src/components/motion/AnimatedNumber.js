'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

const formatter = new Intl.NumberFormat('en-IN')

export default function AnimatedNumber({ value, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const reduceMotion = useReducedMotion()
  const target = Number.parseInt(String(value).replace(/[^0-9]/g, ''), 10) || 0
  const suffix = String(value).replace(/[0-9,\s]/g, '')
  const [display, setDisplay] = useState(reduceMotion ? target : 0)

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(target)
      return undefined
    }
    if (!isInView) return undefined

    const controls = animate(0, target, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [isInView, reduceMotion, target])

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">{formatter.format(display)}{suffix}</span>
    </span>
  )
}
