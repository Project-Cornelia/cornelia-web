import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default buildConfig({
  admin: {
    // This tells Payload exactly where to automatically write the importMap file
    importMap: {
      baseDir: path.resolve(__dirname),
    },
  },
  collections: [
    {
      slug: 'articles',
      admin: { useAsTitle: 'title' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true, unique: true },
        { name: 'content', type: 'richText', required: true },
      ],
    },
  ],
  secret: process.env.PAYLOAD_SECRET || 'local-dev-secret-key-12345',
  editor: lexicalEditor({}),
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || 'file:./payload.db',
    },
  }),
})