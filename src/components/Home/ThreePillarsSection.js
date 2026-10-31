'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

const pillars = [
  { title: 'Collective', description: 'Building alliances of women leaders.', color: '#E8401F', angle: -90 },
  { title: 'Criticism', description: 'Challenging inequity through policy.', color: '#C7B5FF', angle: 30 },
  { title: 'Conversation', description: 'Driving dialogue in public spaces.', color: '#FFB23F', angle: 150 },
]

const polar = (angle, r) => {
  const a = (angle * Math.PI) / 180
  return { x: Math.cos(a) * r, y: Math.sin(a) * r }
}

// Resting layout, written into the SVG so the diagram is right without any
// JS: reduced motion, small screens, or before GSAP loads.
const REST_CIRCLE = 80
const REST_LABEL = 250
const translate = ({ x, y }) => `translate(${x.toFixed(2)} ${y.toFixed(2)})`

// Three circles start far apart and slide together as you scroll. Where all
// three overlap, a single word appears: voice.
export default function ThreePillarsSection() {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          desktop: '(min-width: 768px)',
          motion: '(prefers-reduced-motion: no-preference)',
        },
        (context) => {
          // GSAP only calls this when at least one condition matches, so a
          // small screen with reduced motion never gets here. That case keeps
          // the resting layout from the markup.
          const { desktop, motion } = context.conditions
          if (!motion) return
          const circles = gsap.utils.toArray('.pl-circle')
          const labels = gsap.utils.toArray('.pl-label')
          const items = gsap.utils.toArray('.pl-item')

          circles.forEach((c, i) => gsap.set(c, polar(pillars[i].angle, 175)))
          labels.forEach((l, i) => gsap.set(l, polar(pillars[i].angle, 175)))

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: root.current,
              start: desktop ? 'top top' : 'top 70%',
              end: desktop ? '+=180%' : 'bottom 60%',
              scrub: 1,
              pin: desktop,
            },
          })

          tl.from(circles, { scale: 0, transformOrigin: '50% 50%', stagger: 0.12, duration: 0.5, ease: 'back.out(1.4)' }, 0)
            .from(labels, { opacity: 0, stagger: 0.12, duration: 0.4 }, 0.2)
            .to('.pl-orbit', { rotate: 120, svgOrigin: '0 0', duration: 2, ease: 'none' }, 0)

          items.forEach((item, i) => {
            tl.fromTo(item, { opacity: 0.25 }, { opacity: 1, duration: 0.3 }, 0.35 + i * 0.35)
            tl.fromTo(item.querySelector('.pl-bar'), { scaleX: 0 }, { scaleX: 1, duration: 0.35, ease: 'power2.out' }, 0.35 + i * 0.35)
          })

          circles.forEach((c, i) => {
            tl.to(c, { ...polar(pillars[i].angle, 70), duration: 0.9, ease: 'power3.inOut' }, 1)
          })
          labels.forEach((l, i) => {
            tl.to(l, { ...polar(pillars[i].angle, 235), duration: 0.9, ease: 'power3.inOut' }, 1)
          })
          tl.to('.pl-orbit-labels', { rotate: 120, svgOrigin: '0 0', duration: 2, ease: 'none' }, 0)
            .to(labels, { rotate: -120, transformOrigin: '50% 50%', duration: 2, ease: 'none' }, 0)
            .fromTo('.pl-voice', { opacity: 0, scale: 0.4, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' }, 1.7)
            .fromTo('.pl-ring', { scale: 0.6, opacity: 0, transformOrigin: '50% 50%' }, { scale: 1, opacity: 1, duration: 0.5 }, 1.6)
        }
      )

      return () => mm.revert()
    },
    { scope: root }
  )

  return (
    <section ref={root} className="relative bg-bone text-ink px-5 md:px-10 py-24 md:py-0 md:h-[100svh] overflow-hidden" aria-labelledby="pillars-title">
      <div className="h-full max-w-[1500px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square w-full max-w-[640px] mx-auto">
          <svg viewBox="-320 -320 640 640" className="w-full h-full overflow-visible" role="img" aria-label="Three overlapping circles: Collective, Criticism and Conversation. Where they meet: voice.">
            <circle className="pl-ring" r="290" fill="none" stroke="#120D16" strokeOpacity="0.12" strokeDasharray="2 8" />
            <g className="pl-orbit">
              {pillars.map((p) => (
                <circle
                  key={p.title}
                  className="pl-circle"
                  r="130"
                  fill={p.color}
                  transform={translate(polar(p.angle, REST_CIRCLE))}
                  style={{ mixBlendMode: 'multiply' }}
                />
              ))}
            </g>
            <g className="pl-orbit-labels">
              {pillars.map((p) => (
                <text
                  key={p.title}
                  className="pl-label font-mono"
                  transform={translate(polar(p.angle, REST_LABEL))}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="15"
                  letterSpacing="2.5"
                  fill="#120D16"
                >
                  {p.title.toUpperCase()}
                </text>
              ))}
            </g>
            <text className="pl-voice font-display" textAnchor="middle" dominantBaseline="middle" fontSize="54" fontStyle="italic" fill="#F2ECE3">
              voice
            </text>
          </svg>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50 mb-6">(05) How we work</p>
          <h2 id="pillars-title" className="font-display text-[clamp(2.8rem,6vw,6.5rem)] leading-[0.92] tracking-[-0.03em] mb-12">
            Three pillars, <br />
            <span className="italic-wonk text-vermilion">one voice.</span>
          </h2>
          <ul className="space-y-8">
            {pillars.map((p, i) => (
              <li key={p.title} className="pl-item">
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-xs text-ink/40">0{i + 1}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl md:text-4xl mb-1">{p.title}</h3>
                    <p className="text-lg text-ink/70">{p.description}</p>
                    <span className="pl-bar block mt-4 h-[3px] w-full origin-left" style={{ background: p.color }} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
