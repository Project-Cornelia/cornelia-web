'use client'

import Image from 'next/image'

export default function ArticleContent({ imageUrl, children, content }) {
  return (
    <>
      {/* Main Media Canvas */}
      <div className="w-full mb-20 overflow-hidden">
        <Image
          src={imageUrl || 'https://lh3.googleusercontent.com/aida/ADBb0ujMSMJzCwgJbbzZOlDA_6vbPYTrt9VIiMLVv7MrDeF5_A4-idE0-h6l7Fc1VRP_iy7iqcC61WYzpvTxbWLKZhGizab7D9ehtzN9RwC-S6CAcC1TwSOiYMPR2D_qimAUtc1NZx0DbN0sx504YzGCcJri_28_Y9zyxEjsu0wiGNO209wSUM5BQL5-qQwQeES1CW9cTb4crMLunK1pI_-ykfMHVnYDH_1Jv1rnGd1VxKob6ksdmNaUzejenpI'}
          alt="Article content"
          width={1400}
          height={700}
          className="w-full h-auto object-cover max-h-[40vh] md:max-h-[80vh]"
        />
      </div>

      {/* Prose Container */}
      <article className="max-w-3xl mx-auto px-gutter prose-container">
        <div className="font-body-lg text-body-lg text-on-surface leading-[1.8] space-y-8">
          {children ||
            (content && content.map((paragraph, idx) => <p key={idx}>{paragraph}</p>))}
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
