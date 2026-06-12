import { NextResponse } from 'next/server'
import { getInitiatives } from '@/lib/cms'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  try {
    const initiatives = await getInitiatives()
    return NextResponse.json(initiatives)
  } catch (error) {
    console.error('Error fetching initiatives:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
