import { NextResponse } from 'next/server'
import { getPublications, getPublicationBySlug } from '@/lib/cms'
import { RESOURCE_SECTION_KEYS } from '@/lib/resourceSections'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const section = searchParams.get('section')

  if (slug) {
    const publication = await getPublicationBySlug(slug)
    if (!publication) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    return NextResponse.json(publication)
  }

  let publications = await getPublications()

  if (section) {
    if (!RESOURCE_SECTION_KEYS.includes(section) || section === 'toolkits') {
      return NextResponse.json({ error: 'Invalid section' }, { status: 400 })
    }
    publications = publications.filter((publication) => publication.section === section)
  }

  return NextResponse.json(publications)
}
