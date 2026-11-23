import { getPublications } from '@/lib/cms'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://projectcornelia.org'

export const revalidate = 3600

function toISO(value) {
  const date = value ? new Date(value) : null
  return date && !Number.isNaN(date.getTime()) ? date.toISOString() : null
}

export default async function sitemap() {
  const now = new Date()

  const staticRoutes = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/our-work', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/initiatives', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/resources', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/members', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/contact', changeFrequency: 'yearly', priority: 0.8 },
    { path: '/donations', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
  ]

  const entries = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const publications = await getPublications()
  for (const publication of publications) {
    if (!publication.slug || !publication.section) continue
    entries.push({
      url: `${SITE_URL}/resources/${publication.section}/${publication.slug}`,
      lastModified: toISO(publication.date) ?? now,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  }

  return entries
}
