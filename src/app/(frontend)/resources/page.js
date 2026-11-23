'use client'

import { useEffect, useMemo, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ResourcesHeroSection from '@/components/Resources/ResourcesHeroSection'
import ResourcesTabs from '@/components/Resources/ResourcesTabs'
import ArticlesSection from '@/components/Resources/ArticlesSection'
import ToolkitsSection from '@/components/Resources/ToolkitsSection'
import ResourcesCTA from '@/components/Resources/ResourcesCTA'
import { RESOURCE_SECTIONS } from '@/lib/resourceSections'

export default function Resources() {
  const [activeSection, setActiveSection] = useState('from-our-desk')
  const [publications, setPublications] = useState([])
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const loadResources = async () => {
      try {
        const [publicationsResponse, resourcesResponse] = await Promise.all([
          fetch('/api/frontend/publications'),
          fetch('/api/frontend/resources'),
        ])

        const [publicationsData, resourcesData] = await Promise.all([
          publicationsResponse.json(),
          resourcesResponse.json(),
        ])

        if (cancelled) return

        setPublications(Array.isArray(publicationsData) ? publicationsData : [])
        setResources(Array.isArray(resourcesData) ? resourcesData : [])
      } catch (error) {
        console.error('Error loading resources:', error)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadResources()

    return () => {
      cancelled = true
    }
  }, [])

  const fromOurDesk = useMemo(
    () => publications.filter((publication) => publication.section === 'from-our-desk'),
    [publications],
  )
  const researchReports = useMemo(
    () => publications.filter((publication) => publication.section === 'research-reports'),
    [publications],
  )

  const sectionContent = RESOURCE_SECTIONS.find((section) => section.key === activeSection)

  const counts = {
    'from-our-desk': fromOurDesk.length,
    'research-reports': researchReports.length,
    toolkits: resources.length,
  }

  return (
    <>
      <Header />

      <main className="bg-surface overflow-x-hidden">
        <ResourcesHeroSection />

        <ResourcesTabs
          activeSection={activeSection}
          onChange={setActiveSection}
          counts={loading ? {} : counts}
        />

        {activeSection === 'from-our-desk' && (
          <ArticlesSection
            key="from-our-desk"
            publications={fromOurDesk}
            loading={loading}
            title={sectionContent.label}
            description={sectionContent.description}
            emptyMessage="No notes from our desk have been published yet."
            showWriteForUs
          />
        )}

        {activeSection === 'research-reports' && (
          <ArticlesSection
            key="research-reports"
            publications={researchReports}
            loading={loading}
            title={sectionContent.label}
            description={sectionContent.description}
            emptyMessage="No research reports have been published yet."
          />
        )}

        {activeSection === 'toolkits' && (
          <ToolkitsSection resources={resources} loading={loading} />
        )}

        <ResourcesCTA />
      </main>

      <Footer />
    </>
  )
}
