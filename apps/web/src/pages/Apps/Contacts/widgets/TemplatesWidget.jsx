import { useState } from 'react'

const DEFAULT_TEMPLATES = [
  {
    id: '1',
    name: 'Follow-up',
    type: 'personal',
    subject: 'Following up',
    body: 'Hi {{name}},\n\nJust wanted to follow up on our last conversation. Let me know if you have any questions!\n\nBest regards'
  },
  {
    id: '2',
    name: 'Introduction',
    type: 'mass',
    subject: 'Nice to meet you',
    body: 'Dear {{name}},\n\nI\'d like to introduce myself. I\'m reaching out because...\n\nLooking forward to connecting!'
  },
  {
    id: '3',
    name: 'Thank you',
    type: 'personal',
    subject: 'Thank you!',
    body: 'Hi {{name}},\n\nThank you so much for taking the time. It was a pleasure!\n\nBest regards'
  },
]

export default function TemplatesWidget({ contacts, selectedContact, onUseTemplate }) {
  const [templates, setTemplates] = useState(DEFAULT_TEMPLATES)
  const [selected, setSelected] = useState(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleUse = (template) => {
    setSelected(template)
    if (selectedContact) {
      onUseTemplate(selectedContact, template)
    }
  }

  const handleSendAll = async () => {
    if (!selected) return
    setSending(true)
    try {
      await Promise.all(
        contacts.map(contact =>
          fetch('http://localhost:3001/api/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              to: contact.email,
              subject: selected.subject,
              body: selected.body.replace(/{{name}}/g, contact.firstName)
            })
          })
        )
      )
      setSent(true)
      setTimeout(() => setSent(false), 3000)
    } catch (e) {
      console.error(e)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="widget">
      <div className="widget__header">
        <span className="widget__label">Templates</span>
        <button className="widget__action">+ New</button>
      </div>

      <div className="widget__scroll">
        {templates.map(template => (
          <div
            key={template.id}
            className={`template-card ${selected?.id === template.id ? 'template-card--selected' : ''}`}
            onClick={() => handleUse(template)}
          >
            <div className="template-card__header">
              <span className="template-card__name">{template.name}</span>
              <span className={`template-badge template-badge--${template.type}`}>
                {template.type === 'mass' ? 'Mass' : 'Personal'}
              </span>
            </div>
            <p className="template-card__preview">{template.body.replace(/{{name}}/g, '…')}</p>
          </div>
        ))}
      </div>

      <div className="widget__divider" />

      <div className="sendall">
        <p className="sendall__label">
          {selected
            ? `Send "${selected.name}" to all ${contacts.length} contacts`
            : 'Select a template to send to all'}
        </p>
        <button
          className={`send-btn ${sent ? 'send-btn--sent' : ''}`}
          onClick={handleSendAll}
          disabled={!selected || sending || contacts.length === 0}
        >
          {sent ? '✓ Sent!' : sending ? 'Sending...' : `✉ Send to all (${contacts.length})`}
        </button>
      </div>
    </div>
  )
}