'use client'

import { motion, useReducedMotion } from 'motion/react'

export const editorialEase = [0.22, 1, 0.36, 1]

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 28,
  amount = 0.18,
  once = true,
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: reduceMotion ? 0 : 0.75, delay, ease: editorialEase }}
    >
      {children}
    </motion.div>
  )
}
