'use client'

import Reveal from '@/components/motion/Reveal'
import SectionIntro from '@/components/ui/SectionIntro'

function getYouTubeId(value) {
  if (!value) return ''
  const trimmed = value.trim()
  const match = trimmed.match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([^&?/]+)/)
  return match ? match[1] : trimmed
}

const VIDEO_ID = getYouTubeId(process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID)

export default function VideoSection() {
  return (
    <section id="founder" data-chapter className="bg-surface-container-low px-gutter py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionIntro
            eyebrow="In our own words"
            title="From the Founder’s Desk"
            align="center"
            className="max-w-3xl"
          />
        </Reveal>

        <Reveal delay={0.12} y={36}>
          <div className="relative mt-10 aspect-video overflow-hidden rounded-[1.75rem] border border-white/60 bg-neutral-950 shadow-lift">
            {VIDEO_ID ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
                title="Project Cornelia — From the Founder’s Desk"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-950 via-primary/60 to-neutral-900 px-6 text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur">
                  <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="font-headline-sm text-headline-sm text-white">Video coming soon</p>
                <p className="mt-2 max-w-md font-body-md text-body-md text-white/70">
                  We&apos;re getting our next film ready. Check back shortly.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
