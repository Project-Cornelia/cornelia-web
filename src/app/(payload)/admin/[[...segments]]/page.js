import { RootPage } from '@payloadcms/next/views'
import config from '@/payload.config'
import { importMap } from '../importMap'

export default async function Page(props) {
  const params = await props.params
  const searchParams = await props.searchParams

  return RootPage({
    config,
    importMap,
    params,
    searchParams,
  })
}

export async function generateMetadata() {
  return {}
}
