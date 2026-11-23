import { permanentRedirect } from 'next/navigation'
import { getPublicationBySlug } from '@/lib/cms'

export default async function LegacyPublicationRedirect({ params }) {
  const { slug } = await params
  const publication = await getPublicationBySlug(slug)

  if (!publication) {
    permanentRedirect('/resources')
  }

  permanentRedirect(`/resources/${publication.section}/${publication.slug}`)
}
