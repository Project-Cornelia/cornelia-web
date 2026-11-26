import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleHero from '@/components/Article/ArticleHero'
import ArticleContent from '@/components/Article/ArticleContent'
import ResearchReport from '@/components/Article/ResearchReport'
import RelatedArticles from '@/components/Article/RelatedArticles'
import { getPublicationBySlug, getPublications } from '@/lib/cms'
import { RESOURCE_SECTION_KEYS } from '@/lib/resourceSections'

function isArticleSection(section) {
  return RESOURCE_SECTION_KEYS.includes(section) && section !== 'toolkits'
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = await getPublicationBySlug(slug)

  if (!article) return {}

  return {
    title: `${article.title} | Project Cornelia`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : undefined,
    },
  }
}

export default async function ResourceArticlePage({ params }) {
  const { section, slug } = await params

  if (!isArticleSection(section)) notFound()

  const article = await getPublicationBySlug(slug)
  if (!article || article.section !== section) notFound()

  const publications = await getPublications()
  const otherPublications = publications.filter((publication) => publication.id !== article.id)
  const relatedPublications = [
    ...otherPublications.filter((publication) => publication.section === article.section),
    ...otherPublications.filter((publication) => publication.section !== article.section),
  ]
    .slice(0, 3)
    .map((publication) => ({
      id: publication.id,
      title: publication.title,
      description: publication.excerpt,
      category: publication.category,
      image: publication.image,
      slug: `/resources/${publication.section}/${publication.slug}`,
    }))

  return (
    <>
      <Header />
      <main className="pt-44 pb-section-padding-desktop bg-surface">
        {article.section === 'research-reports' ? (
          <ResearchReport article={article} />
        ) : (
          <>
            <ArticleHero title={article.title} author={article.author} date={article.date} />
            <ArticleContent imageUrl={article.image} content={article.content} />
          </>
        )}

        {relatedPublications.length > 0 && <RelatedArticles articles={relatedPublications} />}
      </main>
      <Footer />
    </>
  )
}
