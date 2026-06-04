// import configPromise from '@payload-config'
// import {
//   RootPage,
//   generatePageMetadata,
// } from '@payloadcms/next/views'

// export default async function Page(props) {
//   const params = await props.params
//   const searchParams = await props.searchParams

//   const config = await configPromise

//   return RootPage({
//     config,
//     params,
//     searchParams,
//   })
// }

// export const generateMetadata = generatePageMetadata({
//   config: configPromise,
// })

import { RootPage } from '@payloadcms/next/views'
import config from '@/payload.config'

export default async function Page(props) {
  const params = await props.params
  const searchParams = await props.searchParams

  return RootPage({
    config,
    params,
    searchParams,
  })
}

export async function generateMetadata() {
  return {}
}