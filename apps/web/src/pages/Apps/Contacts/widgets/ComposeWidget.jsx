import { useState, useEffect } from 'react'

const RESEND_API = 'http://localhost:3001/api/email/send'

export default function ComposeWidget({ contact, data, onChange }) {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setSent(false)
    setError(null)
  }, [contact])

  const handleSend = async () => {
    if (!data?.to || !data?.subject || !data?.body) return
    setSending(true)
    setError(null)
    try {
      const res = await fetch(RESEND_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: data.to,
          subject: data.subject,
          body: data.body
        })
      })
      if (!res.ok) throw new Error('Failed to send')
      setSent(true)
      setTimeout(() => setSent(false), 3000)
    } catch (e) {
      setError(e.message)
    } finally {
      setSending(false)
    }
  }

  if (!contact) {
    return (
      <div className="widget widget--empty">
        <div className="widget__header">
          <span className="widget__label">Compose</span>
        </div>
        <div className="widget__empty">
          <span>✉️</span>
          <p>Select a contact to compose an email</p>
        </div>
      </div>
    )
  }

  return (
    <div className="widget">
      <div className="widget__header">
        <span className="widget__label">Compose</span>
        <span className="widget__badge">{contact.firstName} {contact.lastName}</span>
      </div>

      <div className="compose__fields">
        <div className="compose__field">
          <label>To</label>
          <div className="compose__readonly">{data?.to}</div>
        </div>

        <div className="compose__field">
          <label>Subject</label>
          <input
            type="text"
            value={data?.subject || ''}
            onChange={e => onChange({ ...data, subject: e.target.value })}
            placeholder="Subject..."
          />
        </div>

        <div className="compose__field compose__field--grow">
          <label>Message</label>
          <textarea
            value={data?.body || ''}
            onChange={e => onChange({ ...data, body: e.target.value })}
            placeholder={`Hi ${contact.firstName},\n\n`}
            rows={8}
          />
        </div>
      </div>

      {error && <p className="compose__error">{error}</p>}

      <button
        className={`send-btn ${sent ? 'send-btn--sent' : ''}`}
        onClick={handleSend}
        disabled={sending || !data?.subject || !data?.body}
      >
        {sent ? '✓ Sent!' : sending ? 'Sending...' : '✉ Send Email'}
      </button>
    </div>
  )
}