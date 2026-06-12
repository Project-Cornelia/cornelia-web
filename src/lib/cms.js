import { getPayload } from 'payload'
import { readFile } from 'fs/promises'
import { join } from 'path'
import config from '@/payload.config.js'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

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

function normalizePublication(doc) {
  const content = doc.content
  let html = ''
  if (typeof content === 'string') {
    html = content
  } else if (Array.isArray(content)) {
    html = content.map(p => `<p>${p}</p>`).join('\n')
  } else if (content && typeof content === 'object') {
    html = lexicalToHTML(content)
  }
  return {
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    category: doc.category ?? '',
    tags: Array.isArray(doc.tags)
      ? doc.tags.map(t => (typeof t === 'string' ? t : t.tag)).filter(Boolean)
      : [],
    date: doc.date ?? null,
    author: doc.author ?? '',
    excerpt: doc.excerpt ?? '',
    image: resolveImageUrl(doc.image),
    content: html,
  }
}

function normalizeResource(doc) {
  return {
    id: doc.id,
    title: doc.title,
    description: doc.description ?? '',
    emoji: doc.emoji ?? null,
    category: doc.category ?? '',
    type: doc.type ?? '',
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
    if (docs.length === 0) {
      const all = await readJSON('publications.json')
      const found = all.find(p => p.slug === slug)
      return found ? normalizePublication(found) : null
    }
    return normalizePublication(docs[0])
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
    if (totalDocs === 0) return readJSON('resources.json')
    return docs.map(normalizeResource)
  } catch {
    return readJSON('resources.json')
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
