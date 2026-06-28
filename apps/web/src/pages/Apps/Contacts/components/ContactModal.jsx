import { useState, useEffect } from 'react'

const EMPTY = { firstName: '', lastName: '', email: '', phone: '', notes: '' }

export default function ContactModal({ contact, onSave, onClose }) {
  const [form, setForm] = useState(EMPTY)

  useEffect(() => {
    setForm(contact ? {
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone || '',
      notes: contact.notes || ''
    } : EMPTY)
  }, [contact])

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.firstName || !form.lastName || !form.email) return
    await onSave(form)
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>

        <div className="modal__header">
          <h2>{contact ? 'Edit Contact' : 'New Contact'}</h2>
          <button className="modal__close" onClick={onClose}>✕</button>
        </div>

        <div className="modal__body">
          <div className="modal__row">
            <div className="modal__field">
              <label>First Name *</label>
              <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" />
            </div>
            <div className="modal__field">
              <label>Last Name *</label>
              <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" />
            </div>
          </div>

          <div className="modal__field">
            <label>Email *</label>
            <input name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
          </div>

          <div className="modal__field">
            <label>Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="+357 99 000000" />
          </div>

          <div className="modal__field">
            <label>Notes</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="..." rows={3} />
          </div>
        </div>

        <div className="modal__footer">
          <button className="btn btn--ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn--primary" onClick={handleSubmit}>
            {contact ? 'Save Changes' : 'Add Contact'}
          </button>
        </div>

      </div>
    </div>
  )
}