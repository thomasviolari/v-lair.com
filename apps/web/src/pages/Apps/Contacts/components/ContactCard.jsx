import { useState } from 'react'

const COLORS = [
  { bg: '#E6F1FB', color: '#185FA5' },
  { bg: '#EAF3DE', color: '#3B6D11' },
  { bg: '#FAEEDA', color: '#854F0B' },
  { bg: '#FBEAF0', color: '#993556' },
  { bg: '#EAF3DE', color: '#0F6E56' },
]

function getColor(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash)
  return COLORS[Math.abs(hash) % COLORS.length]
}

export default function ContactCard({ contact, onEdit, onDelete, onPersonalEmail, onTemplateEmail }) {
  const [expanded, setExpanded] = useState(false)
  const initials = `${contact.firstName[0]}${contact.lastName[0]}`.toUpperCase()
  const { bg, color } = getColor(contact.email)

  return (
    <div className={`contact-card ${expanded ? 'contact-card--expanded' : ''}`}>

      <div className="contact-card__header" onClick={() => setExpanded(o => !o)}>
        <div className="contact-card__avatar" style={{ background: bg, color }}>
          {initials}
        </div>
        <div className="contact-card__info">
          <strong>{contact.firstName} {contact.lastName}</strong>
          <span>{contact.email}</span>
        </div>
        <svg
          width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          style={{ flexShrink: 0, color: 'var(--text-tertiary)', transition: 'transform 0.25s ease', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>

      {expanded && (
        <div className="contact-card__body">
          {contact.phone && (
            <p className="contact-card__detail">📞 {contact.phone}</p>
          )}
          {contact.notes && (
            <p className="contact-card__detail">📝 {contact.notes}</p>
          )}
          <div className="contact-card__actions">
            <button className="action-btn action-btn--blue" onClick={() => onPersonalEmail(contact)}>
              ✉ Personal
            </button>
            <button className="action-btn action-btn--blue" onClick={() => onTemplateEmail(contact)}>
              📋 Template
            </button>
            <button className="action-btn" onClick={() => onEdit(contact)}>
              ✏ Edit
            </button>
            <button className="action-btn action-btn--red" onClick={() => onDelete(contact.id)}>
              🗑 Delete
            </button>
          </div>
        </div>
      )}
    </div>
  )
}