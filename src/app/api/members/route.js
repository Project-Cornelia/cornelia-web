import { NextResponse } from 'next/server'
import { getMembers } from '@/lib/cms'

export const dynamic = 'force-dynamic'

export async function GET() {
  const members = await getMembers()
  return NextResponse.json(members)
}
