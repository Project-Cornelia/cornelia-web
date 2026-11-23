export function formatDate(value) {
  if (!value) return ''

  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return String(value)

  return parsed.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function getYear(value) {
  if (!value) return null

  const match = String(value).match(/\b(19|20)\d{2}\b/)
  if (match) return match[0]

  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? null : String(parsed.getFullYear())
}

export function getTimestamp(value) {
  if (!value) return 0
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime()
}
