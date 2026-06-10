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
  return {
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    category: doc.category ?? '',
    tags: doc.tags?.map(t => t.tag).filter(Boolean) ?? [],
    date: doc.date ?? null,
    author: doc.author ?? '',
    excerpt: doc.excerpt ?? '',
    image: resolveImageUrl(doc.image),
    content: lexicalToHTML(doc.content),
  }
}

function normalizeResource(doc) {
  return {
    id: doc.id,
    title: doc.title,
    description: doc.description ?? '',
    category: doc.category ?? '',
    type: doc.type ?? '',
    downloadUrl: doc.downloadUrl ?? '#',
    icon: doc.icon ?? null,
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
    if (totalDocs === 0) return readJSON('publications.json')
    return docs.map(normalizePublication)
  } catch {
    return readJSON('publications.json')
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
      return all.find(p => p.slug === slug) ?? null
    }
    return normalizePublication(docs[0])
  } catch {
    const all = await readJSON('publications.json')
    return all.find(p => p.slug === slug) ?? null
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
