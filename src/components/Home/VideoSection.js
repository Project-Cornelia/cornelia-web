'use client'

function getYouTubeId(value) {
  if (!value) return ''
  const trimmed = value.trim()
  const match = trimmed.match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([^&?/]+)/)
  return match ? match[1] : trimmed
}

const VIDEO_ID = getYouTubeId(process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID)

export default function VideoSection() {
  return (
    <section className="bg-surface px-gutter py-section-padding-mobile md:py-section-padding-desktop">
      <div className="mx-auto max-w-5xl">
        <div className="mb-stack-lg text-center">
          <p className="mb-3 font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary">
            In Our Own Words
          </p>
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
            Watch Our Story
          </h2>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-950 shadow-xl">
          {VIDEO_ID ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
              title="Project Cornelia video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-950 via-primary/50 to-neutral-900 px-6 text-center">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur">
                <svg
                  className="ml-1 h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
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
      </div>
    </section>
  )
}
