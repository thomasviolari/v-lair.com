const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function readContactInput(body: unknown) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { error: 'Request body must be an object' as const }
  }

  const input = body as Record<string, unknown>
  const firstName = readString(input.firstName, 100)
  const lastName = readString(input.lastName, 100)
  const email = readString(input.email, 320)
  const phone = readOptionalString(input.phone, 50)
  const notes = readOptionalString(input.notes, 5000)

  if (!firstName || !lastName || !email) {
    return { error: 'First name, last name, and email are required' as const }
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { error: 'A valid email address is required' as const }
  }

  const metadata = input.metadata
  if (metadata !== undefined && (metadata === null || typeof metadata !== 'object' || Array.isArray(metadata))) {
    return { error: 'Metadata must be a JSON object' as const }
  }
  if (metadata !== undefined && JSON.stringify(metadata).length > 10000) {
    return { error: 'Metadata is too large' as const }
  }

  return { value: { firstName, lastName, email, phone, notes, metadata } }
}

export function readEmailInput(body: unknown) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { error: 'Request body must be an object' as const }
  }

  const input = body as Record<string, unknown>
  const to = readString(input.to, 320)
  const subject = readString(input.subject, 200)
  const message = readString(input.body, 20000)

  if (!to || !subject || !message) {
    return { error: 'Recipient, subject, and body are required' as const }
  }
  if (!EMAIL_PATTERN.test(to)) {
    return { error: 'A valid recipient email address is required' as const }
  }

  return { value: { to, subject, message } }
}

export function readPublicContactInput(body: unknown) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { error: 'Request body must be an object' as const }
  }

  const input = body as Record<string, unknown>
  const name = readString(input.name, 120)
  const email = readString(input.email, 320)
  const company = readOptionalString(input.company, 160)
  const message = readString(input.message, 10000)
  const website = input.website

  if (website) return { error: 'Unable to submit this message' as const }
  if (!name || !email || !message) {
    return { error: 'Name, email, and message are required' as const }
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { error: 'A valid email address is required' as const }
  }

  return { value: { name, email, company, message } }
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  })[character] || character)
}

function readString(value: unknown, maxLength: number) {
  return typeof value === 'string' && value.trim() && value.length <= maxLength
    ? value.trim()
    : null
}

function readOptionalString(value: unknown, maxLength: number) {
  if (value === undefined || value === null || value === '') return undefined
  return readString(value, maxLength)
}
