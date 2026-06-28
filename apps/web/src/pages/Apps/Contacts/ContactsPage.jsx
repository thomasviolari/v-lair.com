import { useState } from 'react'
import { useContacts } from './hooks/useContacts'
import ContactsWidget from './widgets/ContactsWidget'
import ComposeWidget from './widgets/ComposeWidget'
import TemplatesWidget from './widgets/TemplatesWidget'
import ContactModal from './components/ContactModal'
import './contacts.css'

export default function ContactsPage() {
  const {
    contacts, loading,
    search, setSearch,
    createContact, updateContact, deleteContact
  } = useContacts()

  const [selectedContact, setSelectedContact] = useState(null)
  const [modal, setModal] = useState(null)
  const [composeData, setComposeData] = useState(null)

  const handlePersonalEmail = (contact) => {
    setSelectedContact(contact)
    setComposeData({ to: contact.email, subject: '', body: '' })
  }

  const handleTemplateEmail = (contact, template) => {
    setSelectedContact(contact)
    setComposeData({
      to: contact.email,
      subject: template.subject,
      body: template.body.replace(/{{name}}/g, contact.firstName)
    })
  }

  return (
    <main className="contacts-page">
      <div className="container">

        <header className="contacts-header animate-fadeUp">
          <div>
            <p className="page-header__eyebrow">Mini App</p>
            <h1 className="page-header__title">Contact Actions</h1>
          </div>
        </header>

        <div className="workspace animate-fadeUp delay-1">

          {/* Titlebar */}
          <div className="workspace__bar">
            <div className="workspace__title">
              <span>📋</span>
              Contact Actions
            </div>
            <div className="workspace__dots">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
            </div>
          </div>

          {/* Widgets */}
          <div className="workspace__body">
            <ContactsWidget
              contacts={contacts}
              loading={loading}
              search={search}
              onSearch={setSearch}
              onAdd={() => setModal('add')}
              onEdit={(c) => setModal(c)}
              onDelete={deleteContact}
              onPersonalEmail={handlePersonalEmail}
              onTemplateEmail={(c) => setSelectedContact(c)}
            />
            <ComposeWidget
              contact={selectedContact}
              data={composeData}
              onChange={setComposeData}
            />
            <TemplatesWidget
              contacts={contacts}
              selectedContact={selectedContact}
              onUseTemplate={handleTemplateEmail}
            />
          </div>

        </div>
      </div>

      {modal && (
        <ContactModal
          contact={modal === 'add' ? null : modal}
          onSave={async (form) => {
            if (modal === 'add') await createContact(form)
            else await updateContact(modal.id, form)
          }}
          onClose={() => setModal(null)}
        />
      )}
    </main>
  )
}