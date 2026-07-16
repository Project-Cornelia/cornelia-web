'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ResourcesCat from '@/components/Resources/ResourcesFilter'
import ResourcesHeroSection from '@/components/Resources/ResourcesHeroSection'
import ResourcesGrid from '@/components/Resources/ResourcesGrid'
import ResourcesCTA from '@/components/Resources/ResourcesCTA'

export default function Resources() {
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('/api/frontend/resources')
        const data = await response.json()
        setResources(data)
      } catch (error) {
        console.error('Error loading resources:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchResources()
  }, [])

  const categories = ['All', 'Legal', 'Advocacy', 'Training', 'Research']

  const filteredResources = activeCategory === 'All' 
    ? resources 
    : resources.filter(r => r.category === activeCategory)

  return (
    <>
      <Header />

      {/* Hero Section */}
      <ResourcesHeroSection />
      
      {/* Category Filter */}
      <ResourcesCat 
        categories={categories} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      <main className="bg-surface overflow-x-hidden">

        {/* Resources Section */}
        <ResourcesGrid loading={loading} filteredResources={filteredResources} />

        {/* Call to Action Section */}
        <ResourcesCTA />

      </main>
      
      <Footer />
    </>
  )
}
