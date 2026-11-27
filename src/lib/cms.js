import { getPayload } from 'payload'
import { readFile } from 'fs/promises'
import { join } from 'path'
import config from '@/payload.config.js'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'
import { getPublicationSection } from './resourceSections.js'

async function getPayloadInstance() {
  return await getPayload({ config })
}

function readJSON(filename) {
  return readFile(join(process.cwd(), 'public/data', filename), 'utf-8').then(JSON.parse)
}

function lexicalToHTML(content) {
  if (!content) return ''
  try {
    return convertLexicalToHTML({ data: content }) ?? ''
  } catch {
    return ''
  }
}

function resolveImageUrl(image) {
  if (!image) return null
  if (typeof image === 'string') return image
  if (image.url) return image.url
  if (image.filename) return `/api/media/file/${image.filename}`
  return null
}

function contentToHTML(content) {
  if (typeof content === 'string') return content
  if (Array.isArray(content)) return content.map(p => `<p>${p}</p>`).join('\n')
  if (content && typeof content === 'object') return lexicalToHTML(content)
  return ''
}

function normalizePublication(doc) {
  const html = contentToHTML(doc.content)
  return {
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    subtitle: doc.subtitle ?? '',
    category: doc.category ?? '',
    section: getPublicationSection(doc.category),
    tags: Array.isArray(doc.tags)
      ? doc.tags.map(t => (typeof t === 'string' ? t : t.tag)).filter(Boolean)
      : [],
    date: doc.date ?? null,
    author: doc.author ?? '',
    authors: Array.isArray(doc.authors)
      ? doc.authors
          .map(a => ({ name: a.name ?? '', bio: a.bio ?? '' }))
          .filter(a => a.name || a.bio)
      : [],
    excerpt: doc.excerpt ?? '',
    pdfUrl: doc.pdfUrl ?? '',
    aiNote: doc.aiNote ?? '',
    image: resolveImageUrl(doc.image),
    content: html,
  }
}

function normalizeResource(doc) {
  return {
    id: doc.id,
    title: doc.title,
    description: doc.description ?? '',
    emoji: doc.emoji ?? doc.icon ?? null,
    category: doc.category ?? '',
    type: doc.type ?? '',
    year: doc.year ?? null,
    cover: resolveImageUrl(doc.cover),
    downloadUrl: doc.downloadUrl ?? '#',
  }
}

function normalizeInitiative(doc) {
  return {
    id: doc.id,
    title: doc.title,
    emoji: doc.emoji ?? null,
    category: doc.category ?? '',
    description: doc.description ?? '',
    atAGlance: Array.isArray(doc.atAGlance)
      ? doc.atAGlance
          .map(stat => ({ value: stat.value ?? '', label: stat.label ?? '' }))
          .filter(stat => stat.value || stat.label)
      : [],
    content: contentToHTML(doc.content),
    fullDescription: doc.fullDescription ?? '',
    impact: doc.impact ?? '',
    status: doc.status ?? 'Active',
    order: doc.order ?? 0,
  }
}

function normalizeMember(doc) {
  return {
    id: doc.id,
    name: doc.name,
    role: doc.role ?? '',
    bio: doc.bio ?? '',
    photo: resolveImageUrl(doc.photo),
    order: doc.order ?? 0,
  }
}

export async function getPublications() {
  try {
    const payload = await getPayloadInstance()
    const { docs, totalDocs } = await payload.find({
      collection: 'publications',
      limit: 200,
      sort: '-date',
    })
    if (totalDocs === 0) return readJSON('publications.json').then(d => d.map(normalizePublication))
    return docs.map(normalizePublication)
  } catch {
    return readJSON('publications.json').then(d => d.map(normalizePublication))
  }
}

export async function getPublicationBySlug(slug) {
  try {
    const payload = await getPayloadInstance()
    const { docs } = await payload.find({
      collection: 'publications',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    if (docs.length > 0) {
      return normalizePublication(docs[0])
    }

    // Only use the static seed data while the CMS collection is empty.
    const { totalDocs } = await payload.count({ collection: 'publications' })
    if (totalDocs > 0) {
      return null
    }

    const all = await readJSON('publications.json')
    const found = all.find(p => p.slug === slug)
    return found ? normalizePublication(found) : null
  } catch {
    const all = await readJSON('publications.json')
    const found = all.find(p => p.slug === slug)
    return found ? normalizePublication(found) : null
  }
}

export async function getResources() {
  try {
    const payload = await getPayloadInstance()
    const { docs, totalDocs } = await payload.find({
      collection: 'resources',
      limit: 200,
    })
    if (totalDocs === 0) return readJSON('resources.json').then(d => d.map(normalizeResource))
    return docs.map(normalizeResource)
  } catch {
    return readJSON('resources.json').then(d => d.map(normalizeResource))
  }
}

export async function getMembers() {
  try {
    const payload = await getPayloadInstance()
    const { docs, totalDocs } = await payload.find({
      collection: 'members',
      limit: 200,
      sort: 'order',
    })
    if (totalDocs === 0) return []
    return docs.map(normalizeMember)
  } catch {
    return []
  }
}

export async function getInitiatives() {
  try {
    const payload = await getPayloadInstance()
    const { docs, totalDocs } = await payload.find({
      collection: 'initiatives',
      limit: 200,
      sort: 'order',
    })
    if (totalDocs === 0) return []
    return docs.map(normalizeInitiative)
  } catch {
    return []
  }
}
