import { RootLayout } from '@payloadcms/next/layouts'
import config from '@/payload.config'
import '@payloadcms/next/css'

export default async function Layout(props) {
  const params = await props.params

  return (
    <RootLayout config={config} params={params}>
      {props.children}
    </RootLayout>
  )
}