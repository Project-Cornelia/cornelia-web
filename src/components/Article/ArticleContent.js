'use client'

import Image from 'next/image'

export default function ArticleContent({ imageUrl, children, content }) {
  return (
    <>
      {/* Main Media Canvas */}
      {imageUrl && (
        <div className="w-full mb-20 overflow-hidden">
          <Image
            src={imageUrl}
            alt="Article content"
            width={1400}
            height={700}
            className="w-full h-auto object-cover max-h-[40vh] md:max-h-[80vh]"
          />
        </div>
      )}

      {/* Prose Container */}
      <article className="max-w-3xl mx-auto px-gutter prose-container">
        <div className="font-body-lg text-body-lg text-on-surface leading-[1.8] space-y-8">
          {children || (content && (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ))}
        </div>

        {/* Termination Sequence */}
        <div className="flex justify-center gap-4 py-24">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-100"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-100"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-100"></div>
        </div>
      </article>
    </>
  )
}
