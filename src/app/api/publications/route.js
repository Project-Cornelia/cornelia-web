import { NextResponse } from 'next/server'
import { getPublications, getPublicationBySlug } from '@/lib/cms'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  if (slug) {
    const publication = await getPublicationBySlug(slug)
    if (!publication) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    return NextResponse.json(publication)
  }

  const publications = await getPublications()
  return NextResponse.json(publications)
}
