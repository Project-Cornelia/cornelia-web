import { NextResponse } from 'next/server'
import { getResources } from '@/lib/cms'

export const dynamic = 'force-dynamic'

export async function GET() {
  const resources = await getResources()
  return NextResponse.json(resources)
}
