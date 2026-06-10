import { readFile } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export const dynamic = 'force-dynamic'

export async function GET(request, { params }) {
  const { filename } = params

  try {
    // Sanitize filename to prevent directory traversal attacks
    if (filename.includes('..') || filename.includes('/')) {
      return new Response('Invalid filename', { status: 400 })
    }

    const mediaPath = join(process.cwd(), 'media', filename)

    // Check if file exists
    if (!existsSync(mediaPath)) {
      return new Response('Not found', { status: 404 })
    }

    // Read and serve the file
    const fileBuffer = await readFile(mediaPath)
    const mimeType = getMimeType(filename)

    return new Response(fileBuffer, {
      headers: {
        'Content-Type': mimeType,
        'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
        'Content-Disposition': `inline; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error('Error serving media:', error)
    return new Response('Error serving file', { status: 500 })
  }
}

function getMimeType(filename) {
  const ext = filename.split('.').pop()?.toLowerCase()
  const mimeTypes = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    pdf: 'application/pdf',
  }
  return mimeTypes[ext] || 'application/octet-stream'
}
