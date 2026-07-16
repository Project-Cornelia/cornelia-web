import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import { cloudinaryAdapter } from './cloudinaryAdapter.js'

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: { useAsTitle: 'email' },
      fields: [],
    },
    {
      slug: 'publications',
      admin: { useAsTitle: 'title' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true, unique: true },
        {
          name: 'category',
          type: 'select',
          required: true,
          options: ['Blogs', 'Reports', 'Research'],
        },
        {
          name: 'tags',
          type: 'array',
          fields: [{ name: 'tag', type: 'text' }],
        },
        { name: 'date', type: 'date', required: true },
        { name: 'author', type: 'text', required: true },
        { name: 'excerpt', type: 'textarea', required: true },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          editor: lexicalEditor(),
        },
      ],
    },
    {
      slug: 'resources',
      admin: { useAsTitle: 'title' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'emoji',
          type: 'text',
          admin: { description: 'Emoji icon for this resource (e.g., 📄, 🎥, 📖)' },
        },
        {
          name: 'category',
          type: 'select',
          required: true,
          options: ['Legal', 'Health', 'Finance', 'Education', 'Policy', 'Other'],
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          options: ['PDF', 'Video', 'Article', 'Guide', 'Toolkit', 'Other'],
        },
        { name: 'downloadUrl', type: 'text', required: true },
      ],
    },
    {
      slug: 'members',
      admin: { useAsTitle: 'name' },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', required: true },
        { name: 'bio', type: 'textarea' },
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
        },
        { name: 'order', type: 'number', admin: { description: 'Display order' } },
      ],
    },
    {
      slug: 'initiatives',
      admin: { useAsTitle: 'title' },
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'emoji',
          type: 'text',
          admin: { description: 'Emoji icon for this initiative (e.g., 🏛️, ⚖️, ❤️)' },
        },
        {
          name: 'category',
          type: 'text',
          required: true,
        },
        { name: 'description', type: 'textarea', required: true },
        { name: 'fullDescription', type: 'textarea' },
        { name: 'impact', type: 'text' },
        {
          name: 'status',
          type: 'select',
          options: ['Active', 'Ongoing', 'Completed', 'Planned'],
          defaultValue: 'Active',
        },
        { name: 'order', type: 'number', admin: { description: 'Display order' } },
      ],
    },
    {
      slug: 'media',
      upload: true,
      admin: { useAsTitle: 'filename' },
      fields: [
        { name: 'alt', type: 'text', required: true },
      ],
    },
    {
      slug: 'messages',
      admin: {
        useAsTitle: 'email',
        defaultColumns: ['name', 'email', 'createdAt'],
      },
      // Public can create submissions, but only authenticated users see them
      access: {
        create: () => true,
        read: ({ req: { user } }) => Boolean(user),
        update: ({ req: { user } }) => Boolean(user),
        delete: ({ req: { user } }) => Boolean(user),
      },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'email', type: 'text', required: true },
        { name: 'subject', type: 'text', required: false },
        { name: 'message', type: 'textarea', required: true },
      ],
      timestamps: true, // Automatically logs the exact date and time it was sent
    }
  ],
  globals: [],
  secret: process.env.PAYLOAD_SECRET,
  editor: lexicalEditor(),
  
  // Clean cloud storage integration entry
  plugins: [
    cloudStoragePlugin({
      collections: {
        media: {
          adapter: cloudinaryAdapter,
          disableLocalStorage: true,
        },
      },
    }),
  ],
  
  db: sqliteAdapter({
    client: {
      url: process.env.TURSO_DB_URL || '',
      authToken: process.env.AUTH_TOKEN,
    },
  }),
})