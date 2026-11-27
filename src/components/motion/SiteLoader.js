'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'

const SESSION_KEY = 'cornelia-intro-seen'

export default function SiteLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let hasSeenIntro = false
    try {
      hasSeenIntro = window.sessionStorage.getItem(SESSION_KEY) === 'true'
    } catch {
      hasSeenIntro = false
    }

    if (reduceMotion || hasSeenIntro) {
      setVisible(false)
      return undefined
    }

    try {
      window.sessionStorage.setItem(SESSION_KEY, 'true')
    } catch {
      // The intro still works when session storage is unavailable.
    }

    const timer = window.setTimeout(() => setVisible(false), 1350)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = visible ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="site-loader fixed inset-0 z-[100] flex items-center justify-center bg-surface px-gutter"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <motion.div
            className="flex w-full max-w-sm flex-col items-center text-center"
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-soft"
            >
              <Image src="/images/p_cornelia_logo.png" alt="" width={58} height={58} priority />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.55 }}
              className="font-headline-md text-3xl text-on-surface"
            >
              Project Cornelia
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38, duration: 0.5 }}
              className="mt-2 font-label-lg text-[11px] uppercase tracking-[0.24em] text-primary"
            >
              Every voice matters
            </motion.p>
            <div className="mt-8 h-px w-40 overflow-hidden bg-primary/15">
              <motion.div
                className="h-full origin-left bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
