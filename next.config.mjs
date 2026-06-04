import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your standard Next.js configurations go here
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default withPayload(nextConfig)