'use client'

import { useEffect, useRef } from 'react'

// A field of horizontal "voice prints". The waves always peak at the centre
// of the screen (the motto, literally) and swell wherever the pointer is.
const LINES = 30
const LILAC = [199, 181, 255]
const FLARE = [255, 90, 54]

export default function VoiceField({ className = '', energyRef }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let dpr = 1
    let raf = 0
    let visible = true
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false }

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = r.width
      h = r.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.tx = e.clientX - r.left
      mouse.ty = e.clientY - r.top
      if (!mouse.active) {
        mouse.x = mouse.tx
        mouse.y = mouse.ty
      }
      mouse.active = true
    }
    const onLeave = () => (mouse.active = false)

    const draw = (time) => {
      const t = time / 1000
      const energy = energyRef?.current ?? 1

      // With no pointer (touch, idle) a ghost cursor drifts on a Lissajous path.
      if (!mouse.active) {
        mouse.tx = w * (0.5 + 0.28 * Math.sin(t * 0.5))
        mouse.ty = h * (0.5 + 0.22 * Math.sin(t * 0.8 + 1))
      }
      mouse.x += (mouse.tx - mouse.x) * 0.08
      mouse.y += (mouse.ty - mouse.y) * 0.08

      ctx.clearRect(0, 0, w, h)
      ctx.lineWidth = 1
      const step = w < 700 ? 8 : 6
      const top = h * 0.1
      const span = h * 0.8
      const sigma = Math.max(w, h) * 0.13

      for (let i = 0; i < LINES; i++) {
        const baseY = top + span * (i / (LINES - 1))
        const lineNear = Math.exp(-((baseY - mouse.y) ** 2) / (2 * 110 * 110))
        const mix = Math.min(1, lineNear * 1.4)
        const r = Math.round(LILAC[0] + (FLARE[0] - LILAC[0]) * mix)
        const g = Math.round(LILAC[1] + (FLARE[1] - LILAC[1]) * mix)
        const b = Math.round(LILAC[2] + (FLARE[2] - LILAC[2]) * mix)
        ctx.strokeStyle = `rgba(${r},${g},${b},${0.14 + 0.55 * mix})`

        ctx.beginPath()
        for (let x = 0; x <= w + step; x += step) {
          const nx = x / w
          const centre = Math.exp(-(((nx - 0.5) / 0.16) ** 2))
          const dx = x - mouse.x
          const dy = baseY - mouse.y
          const near = Math.exp(-(dx * dx + dy * dy) / (2 * sigma * sigma))
          const amp = (centre * 14 + near * 46) * energy
          const y =
            baseY +
            Math.sin(nx * 24 + t * 1.7 + i * 0.55) * amp * 0.55 +
            Math.sin(nx * 51 - t * 2.4 + i * 1.3) * amp * 0.35 +
            Math.sin(nx * 9 + t * 0.6) * amp * 0.1
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }
    }

    const loop = (time) => {
      if (visible) draw(time)
      raf = requestAnimationFrame(loop)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting))
    io.observe(canvas)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)

    if (reduce) draw(0)
    else raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [energyRef])

  return <canvas ref={canvasRef} aria-hidden="true" className={`absolute inset-0 w-full h-full ${className}`} />
}
