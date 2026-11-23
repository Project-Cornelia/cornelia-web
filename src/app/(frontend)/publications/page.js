import { permanentRedirect } from 'next/navigation'

export default function PublicationsRedirect() {
  permanentRedirect('/resources')
}
