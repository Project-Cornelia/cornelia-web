import { permanentRedirect } from 'next/navigation'

export default function LegacyArticleRedirect() {
  permanentRedirect('/resources')
}
