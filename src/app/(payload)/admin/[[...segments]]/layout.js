import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import config from '@/payload.config'
import { importMap } from '../importMap'
import '@payloadcms/next/css'

async function serverFunction(args) {
  'use server'

  return handleServerFunctions(args)
}

export default async function Layout(props) {
  const params = await props.params

  return (
    <RootLayout
      config={config}
      importMap={importMap}
      params={params}
      serverFunction={serverFunction}
    >
      {props.children}
    </RootLayout>
  )
}
