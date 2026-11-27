'use client'

import { useState } from 'react'
import Reveal from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import SectionIntro from '@/components/ui/SectionIntro'

const PILLAR_KEYS = ['action', 'discourse', 'critical']

const pillars = [
  {
    key: 'action',
    number: '01',
    title: 'Collective Action',
    description: 'Change isn’t achieved alone. We collaborate so every woman’s voice is heard.',
    ariaLabel: "Collective Action: change isn't achieved alone",
  },
  {
    key: 'discourse',
    number: '02',
    title: 'Conversational Discourse',
    description: 'Dialogue is how awareness spreads. We put conversation at the center of our mission.',
    ariaLabel: 'Conversational Discourse: dialogue is how awareness spreads',
  },
  {
    key: 'critical',
    number: '03',
    title: 'Critical Outlook',
    description: 'Questioning builds a just society. We learn to challenge the world around us, together.',
    ariaLabel: 'Critical Outlook: questioning builds a just society',
  },
]

const PILLAR_SVG = {
  action: (
    <g className="float">
      <g className="lift">
        <circle className="ring" cx="200" cy="148" r="104" stroke="var(--cpg-action)" />
        <circle className="disc" cx="200" cy="148" r="94" fill="var(--cpg-action)" />
        <g className="icon" transform="translate(178 74)">
          <g className="wave"><circle cx="22" cy="8" r="5.5" /><path d="M12 30c0-6 4.5-10 10-10s10 4 10 10" /></g>
          <g className="wave w2"><circle cx="6" cy="14" r="4.2" /><path d="M-2 32c0-5 3.5-8 8-8 2.2 0 4 .7 5.4 2" /></g>
          <g className="wave w3"><circle cx="38" cy="14" r="4.2" /><path d="M46 32c0-5-3.5-8-8-8-2.2 0-4 .7-5.4 2" /></g>
        </g>
        <text className="label" x="200" y="128">Collective Action</text>
        <text className="tag" x="200" y="143">Change isn’t achieved alone.</text>
      </g>
    </g>
  ),
  discourse: (
    <g className="float">
      <g className="lift">
        <circle className="ring" cx="146" cy="242" r="104" stroke="var(--cpg-discourse)" />
        <circle className="disc" cx="146" cy="242" r="94" fill="var(--cpg-discourse)" />
        <g className="icon" transform="translate(88 210)">
          <path d="M2 4h26a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H14l-7 6v-6H2a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" />
          <circle className="solid dot" cx="7" cy="14" r="1.8" />
          <circle className="solid dot d2" cx="15" cy="14" r="1.8" />
          <circle className="solid dot d3" cx="23" cy="14" r="1.8" />
          <path d="M36 14h6a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-2v5l-6-5H26a4 4 0 0 1-4-4v-1" />
        </g>
        <text className="label" x="110" y="268">Conversational</text>
        <text className="label" x="110" y="282">Discourse</text>
        <text className="tag" x="110" y="298">Dialogue is how</text>
        <text className="tag" x="110" y="309">awareness spreads.</text>
      </g>
    </g>
  ),
  critical: (
    <g className="float">
      <g className="lift">
        <circle className="ring" cx="254" cy="242" r="104" stroke="var(--cpg-critical)" />
        <circle className="disc" cx="254" cy="242" r="94" fill="var(--cpg-critical)" />
        <g className="icon" transform="translate(270 206)">
          <g className="lens"><circle cx="16" cy="16" r="12" /><path d="M25 25l10 10" /><path d="M11 13.5a5.5 5.5 0 0 1 5-3.5" strokeWidth="1.6" /></g>
        </g>
        <text className="label" x="286" y="268">Critical</text>
        <text className="label" x="286" y="282">Outlook</text>
        <text className="tag" x="286" y="298">Questioning builds</text>
        <text className="tag" x="286" y="309">a just society.</text>
      </g>
    </g>
  ),
}

export default function OurApproachSection() {
  const [hovered, setHovered] = useState(null)
  const [locked, setLocked] = useState(null)
  const activeKey = locked ?? hovered

  // Paint the active pillar last, preserving the original stacking behaviour.
  const ordered = activeKey
    ? [...PILLAR_KEYS.filter((key) => key !== activeKey), activeKey]
    : PILLAR_KEYS

  return (
    <section id="approach" data-chapter className="overflow-hidden bg-surface-container-low px-gutter py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionIntro
            eyebrow="How we work"
            title="Our Approach"
            className="max-w-3xl"
          />
        </Reveal>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <Reveal className="relative flex items-center justify-center" y={32}>
            <div className="absolute inset-8 rounded-full bg-white/40 blur-3xl" aria-hidden="true" />
            <div
              className={`cpg ${activeKey ? 'has-active' : ''}`}
              role="group"
              aria-label="Our approach: Collective Action, Conversational Discourse, Critical Outlook"
            >
              <svg viewBox="0 0 400 400" aria-hidden="false">
                <circle className="orbit" cx="200" cy="200" r="178" />
                <circle className="orbit o2" cx="200" cy="200" r="190" />
                <circle className="spark" cx="200" cy="22" r="3" />
                <circle className="spark s2" cx="200" cy="10" r="2" />

                {ordered.map((key) => {
                  const pillar = pillars.find((item) => item.key === key)
                  return (
                    <g
                      key={key}
                      className={`pillar ${activeKey === key ? 'active' : ''}`}
                      data-key={key}
                      tabIndex={0}
                      role="button"
                      aria-pressed={activeKey === key}
                      aria-label={pillar.ariaLabel}
                      onMouseEnter={() => { if (!locked) setHovered(key) }}
                      onMouseLeave={() => { if (!locked) setHovered(null) }}
                      onFocus={() => { if (!locked) setHovered(key) }}
                      onBlur={() => { if (!locked) setHovered(null) }}
                      onClick={() => {
                        setLocked(locked === key ? null : key)
                        setHovered(null)
                      }}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          setLocked(locked === key ? null : key)
                          setHovered(null)
                        }
                      }}
                    >
                      {PILLAR_SVG[key]}
                    </g>
                  )
                })}

                <circle className="centre" cx="200" cy="212" r="5" />
                <text className="hint" x="200" y="392">Hover or tap a circle</text>
              </svg>
            </div>
          </Reveal>

          <Stagger className="border-t border-primary/20" delay={0.08}>
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.key} y={18}>
                <div
                  data-pillar={pillar.key}
                  className={`grid grid-cols-[2rem_1fr] gap-4 border-b border-primary/20 py-6 ${
                    activeKey && activeKey !== pillar.key ? 'cpg-dim' : ''
                  }`}
                >
                  <span className="pt-1 font-label-md text-[11px] tracking-[0.16em] text-primary/60">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="font-headline-sm text-[1.55rem] leading-tight text-on-surface">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 font-body-md text-base leading-relaxed text-on-surface-variant">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
