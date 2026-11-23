export const RESOURCE_SECTIONS = [
  {
    key: 'from-our-desk',
    label: 'From Our Desk',
    description: 'Essays, updates, and perspectives from the Project Cornelia team.',
  },
  {
    key: 'research-reports',
    label: 'Research Reports',
    description: 'Research, policy papers, and reports produced by our team.',
  },
  {
    key: 'toolkits',
    label: 'Toolkits',
    description: 'Practical guides, handbooks, and downloadable resources.',
  },
]

export const RESOURCE_SECTION_KEYS = RESOURCE_SECTIONS.map((section) => section.key)

const RESEARCH_CATEGORIES = new Set([
  'reports',
  'report',
  'research',
  'case study',
  'policy paper',
  'policy brief',
])

export function getPublicationSection(category) {
  const normalized = String(category || '').trim().toLowerCase()
  return RESEARCH_CATEGORIES.has(normalized) ? 'research-reports' : 'from-our-desk'
}

export function getSectionLabel(sectionKey) {
  return RESOURCE_SECTIONS.find((section) => section.key === sectionKey)?.label ?? 'Resources'
}

export function getArticleHref(publication) {
  if (!publication?.slug) return '/resources'
  return `/resources/${publication.section || getPublicationSection(publication.category)}/${publication.slug}`
}
