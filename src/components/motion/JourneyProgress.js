'use client'

import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'

export default function JourneyProgress() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.3 })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-primary"
      style={{ scaleX: reduceMotion ? scrollYProgress : smoothProgress }}
      aria-hidden="true"
    />
  )
}
