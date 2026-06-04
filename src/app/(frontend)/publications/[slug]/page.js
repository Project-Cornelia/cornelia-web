'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import ArticleHero from '@/components/ArticleHero'
import ArticleContent from '@/components/ArticleContent'
import RelatedArticles from '@/components/RelatedArticles'
import Footer from '@/components/Footer'

export default function ArticlePage() {
  const params = useParams()
  const [article, setArticle] = useState(null)
  const [relatedArticles, setRelatedArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch('/data/publications.json')
        const publications = await response.json()

        // Find article by slug
        const currentArticle = publications.find(pub => pub.slug === params.slug)

        if (currentArticle) {
          setArticle(currentArticle)

          // Get related articles (exclude current, take first 3)
          const related = publications
            .filter(pub => pub.id !== currentArticle.id)
            .slice(0, 3)
            .map(pub => ({
              id: pub.id,
              title: pub.title,
              description: pub.excerpt,
              category: pub.category,
              image: pub.image,
              slug: `/publications/${pub.slug}`,
            }))
          setRelatedArticles(related)
        }
      } catch (error) {
        console.error('Error loading article:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [params.slug])

  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-44 pb-section-padding-desktop bg-surface flex items-center justify-center min-h-screen">
          <p className="font-body-md text-on-surface-variant">Loading article...</p>
        </main>
        <Footer />
      </>
    )
  }

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-44 pb-section-padding-desktop bg-surface flex items-center justify-center min-h-screen">
          <p className="font-body-md text-on-surface">Article not found</p>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-44 pb-section-padding-desktop bg-surface">
        <ArticleHero
          title={article.title}
          author={article.author}
          date={article.date}
        />
        <ArticleContent
          imageUrl={article.image}
          content={article.content}
        />
        {relatedArticles.length > 0 && (
          <RelatedArticles articles={relatedArticles} />
        )}
      </main>
      <Footer />
    </>
  )
}
