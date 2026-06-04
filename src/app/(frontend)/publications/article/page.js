'use client'

import Header from '@/components/Header'
import ArticleHero from '@/components/ArticleHero'
import ArticleContent from '@/components/ArticleContent'
import RelatedArticles from '@/components/RelatedArticles'
import Footer from '@/components/Footer'

export default function ArticlePage() {
  const articleContent = [
    "Project Cornelia is a women-led organisation that strives for active participation of every woman in the modern democratic discourses of this country.",
    "Our journey from a student-run club to now an independent organisation (legally known as the AINA Foundation) is reflective of our determination and commitment to fight the various gender-based inequalities prevalent in the society. In the past 3.5 years, we have conducted more than 30 awareness activities to educate and empower more than 300 females on issues ranging from domestic violence, street and gender harassment to the rights of acid attack survivors. The awareness activities included workshops, closed group discussions, keynote lectures, debate competitions, open mics, live online sessions among other activities. We have worked closely with acid-attack survivors to help them understand their rights and fundraised ~20,000 INR to support their livelihood. One of our key projects include mentoring young students, from the Specialised Schools of Excellence run by the Government of Delhi, to help them understand and explore the domains of democracy and policy. We also collaborated with a literary platform, Bookosmia, to author an activity-based learning book for young students, called The Constitution Land.",
    "As a one-of-a-kind organisation in India, we envision helping women at grassroot levels voice their opinions and exercise their choices, as they become informed and fearless.",
  ]

  return (
    <>
      <Header />
      <main className="pt-44 pb-section-padding-desktop bg-surface">
        <ArticleHero
          title="Today in Total"
          author="Akanksha Sharma"
          date="17th May 2026"
        />
        <ArticleContent
          imageUrl="https://lh3.googleusercontent.com/aida/ADBb0ujMSMJzCwgJbbzZOlDA_6vbPYTrt9VIiMLVv7MrDeF5_A4-idE0-h6l7Fc1VRP_iy7iqcC61WYzpvTxbWLKZhGizab7D9ehtzN9RwC-S6CAcC1TwSOiYMPR2D_qimAUtc1NZx0DbN0sx504YzGCcJri_28_Y9zyxEjsu0wiGNO209wSUM5BQL5-qQwQeES1CW9cTb4crMLunK1pI_-ykfMHVnYDH_1Jv1rnGd1VxKob6ksdmNaUzejenpI"
          content={articleContent}
        />
        <RelatedArticles />
      </main>
      <Footer />
    </>
  )
}
