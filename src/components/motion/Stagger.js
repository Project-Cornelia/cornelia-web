'use client'

import { motion, useReducedMotion } from 'motion/react'
import { editorialEase } from './Reveal'

export function Stagger({ children, className = '', delay = 0, amount = 0.15 }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 24 }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduceMotion ? 0 : 0.7, ease: editorialEase },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
