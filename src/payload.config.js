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
      auth: {
        cookies: {
          secure: process.env.NODE_ENV === 'production',
        },
      },
      admin: { useAsTitle: 'email' },
      fields: [],
    },
    {
      slug: 'publications',
      labels: {
        singular: 'Article / Report',
        plural: 'Articles & Reports',
      },
      admin: {
        useAsTitle: 'title',
        group: 'Resources',
        defaultColumns: ['title', 'category', 'date', 'author'],
        description:
          'Choose "From Our Desk (Blog)" for essays and updates, or "Research Report"/"Research Article" for research content.',
      },
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'subtitle',
          type: 'text',
          admin: {
            description: 'Optional full or secondary title shown under the main title.',
          },
        },
        { name: 'slug', type: 'text', required: true, unique: true },
        {
          name: 'category',
          type: 'select',
          required: true,
          defaultValue: 'Blogs',
          options: [
            { label: 'From Our Desk (Blog)', value: 'Blogs' },
            { label: 'Research Report', value: 'Reports' },
            { label: 'Research Article', value: 'Research' },
          ],
        },
        {
          name: 'tags',
          type: 'array',
          fields: [{ name: 'tag', type: 'text' }],
        },
        { name: 'date', type: 'date', required: true },
        {
          name: 'author',
          type: 'text',
          admin: {
            description: 'Used for blogs. Research reports use the Authors field below instead.',
          },
        },
        {
          name: 'authors',
          type: 'array',
          label: 'Authors',
          labels: {
            singular: 'Author',
            plural: 'Authors',
          },
          admin: {
            description: 'Used for research reports: list each author with a short bio.',
          },
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'bio', type: 'textarea' },
          ],
        },
        { name: 'excerpt', type: 'textarea', required: true },
        {
          name: 'pdfUrl',
          type: 'text',
          admin: {
            description:
              'External link to the full PDF (e.g., a Google Drive public share link). Shown for research reports.',
          },
        },
        {
          name: 'aiNote',
          type: 'textarea',
          admin: {
            description:
              'Optional disclosure note, e.g., "AI was used in this research paper for proofreading, finding sources, and aligning ideas."',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor(),
          admin: {
            description:
              'Blog body. Research reports may leave this empty; they use the abstract (excerpt), PDF link, and authors instead.',
          },
        },
      ],
    },
    {
      slug: 'resources',
      labels: {
        singular: 'Toolkit',
        plural: 'Toolkits',
      },
      admin: {
        useAsTitle: 'title',
        group: 'Resources',
        description: 'Shown under the "Toolkits" submenu on the Resources page.',
      },
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
      labels: {
        singular: 'Initiative / Event',
        plural: 'Initiatives & Events',
      },
      admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'status', 'order'],
        description:
          'Each initiative has a card intro, an at-a-glance summary, and a long-form description. Initiatives are shown in one combined list.',
      },
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
        {
          name: 'description',
          type: 'textarea',
          label: 'Intro',
          required: true,
          admin: {
            description:
              'Introduction shown on the collapsed card and as the lead of the expanded article. Any length.',
          },
        },
        {
          name: 'atAGlance',
          type: 'array',
          label: 'At a glance',
          labels: {
            singular: 'Stat',
            plural: 'Stats',
          },
          admin: {
            description:
              'Key numbers shown as tiles. Example: value "11", label "lectures and talks". The first four show on the card.',
          },
          fields: [
            { name: 'value', type: 'text', required: true, admin: { description: 'e.g., 11, ~300, 2021–2026' } },
            { name: 'label', type: 'text', required: true, admin: { description: 'e.g., lectures and talks' } },
          ],
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Description',
          admin: {
            description:
              'Full blog-style write-up shown when the card is expanded. Supports headings, lists, quotes, links, and formatting. No images yet.',
          },
        },
        {
          name: 'fullDescription',
          type: 'textarea',
          label: 'Legacy full description',
          admin: {
            description: 'Plain-text fallback used only when Description is empty.',
          },
        },
        {
          name: 'impact',
          type: 'text',
          admin: { description: 'Short result or highlight shown on the card and in the expanded view.' },
        },
        {
          name: 'status',
          type: 'select',
          options: ['Active', 'Ongoing', 'Completed', 'Planned'],
          defaultValue: 'Active',
          admin: {
            description:
              'Displayed as a status badge. Initiatives are no longer split into Ongoing and Past sections.',
          },
        },
        { name: 'order', type: 'number', admin: { description: 'Display order' } },
      ],
    },
    {
      slug: 'media',
      upload: true,
      admin: { useAsTitle: 'filename' },
      access: {
        create: ({ req: { user } }) => Boolean(user),
        read: () => true, // Public can read media files
        update: ({ req: { user } }) => Boolean(user),
        delete: ({ req: { user } }) => Boolean(user),
      },
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
        {
          name: 'website',
          type: 'text',
          required: false,
          admin: { hidden: true },
        },
      ],
      hooks: {
        beforeChange: [
          ({ data, operation }) => {
            // Honeypot field: humans never fill it, bots do.
            if (operation === 'create' && data?.website) {
              throw new Error('Spam detected')
            }
            return data
          },
        ],
      },
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