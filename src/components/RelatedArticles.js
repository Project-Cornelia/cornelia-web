'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function RelatedArticles({ articles }) {
  const defaultArticles = [
    {
      id: 1,
      title: 'Today in Total',
      description:
        'Here, the contents of the articles are displayed. Today in total are the significant changes made in the date.',
      category: 'News',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBcJhMdNSM-0ujXZry2fotGeMLyp7ms_lJsJ2vERDyuVz3K2Xfof_fPBqoSenx3fTgyIwfps8P9G_AqMmch3ZUtxLcLhUcybB8kqRwAFa-jpUcl1xPx4UiESePdK3DFv_uvZUGkLdEQwBDIYX0Ewgzob7bTtiWskFS_gvKkMvKNwcILCFyT02lWU5Zv2j8VNL5sckjmM4w_oVLTpOgG2p701irKlwLtWkpeckqz_VHKIcQu7zlibSsCNHujPB-Y8K_x3iSJG34-9C8',
      slug: '/publications/today-in-total',
    },
    {
      id: 2,
      title: 'Today in Total',
      description:
        'Here, the contents of the articles are displayed. Today in total are the significant changes made in the date.',
      category: 'News',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC_174W2S7DfO0HsNSq0A0bdlb7oELa0qMZ-S0Y_ooQAYfz9MIgEqXKLgG0ENPFCy0P_zExvs2iR1Td7HvJz6IiergABHWx5Wq0VqHsSPm7qYTn181DfiOk_5tMGOdfNF8JqOBuD82LIWozny3WqqZTxC2PWIJVWrXXyvIZYfm9-EaDh8ePNcBHsKM1M5dU8SjnYFCgTV2nb9C7zS5h3RZxYddDp94WYOtqdIzeagLvrgK3fFau0jc5zRoZM81ORdugSHzA3bsG_fo',
      slug: '/publications/today-in-total-2',
    },
  ]

  const articlesToShow = articles || defaultArticles

  return (
    <section className="max-w-5xl mx-auto px-gutter mt-12 pb-section-padding-desktop">
      <h2 className="font-headline-md text-headline-md text-on-surface mb-12">Related Articles</h2>
      <div className="space-y-12">
        {articlesToShow.map((article) => (
          <Link
            key={article.id}
            href={article.slug || '#'}
            className="group grid grid-cols-1 md:grid-cols-[400px_1fr] gap-12 items-start"
          >
            <div className="aspect-[4/3] bg-surface-container overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col h-full py-2">
              <h3 className="font-headline-md text-4xl text-on-surface mb-6 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                {article.description}
              </p>
              <span className="font-label-lg text-label-lg text-on-surface font-bold mt-auto">
                {article.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
