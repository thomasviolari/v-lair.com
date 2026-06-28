import SearchBar from '../components/SearchBar'
import ContactCard from '../components/ContactCard'

export default function ContactsWidget({
  contacts, loading, search, onSearch,
  onAdd, onEdit, onDelete, onPersonalEmail, onTemplateEmail
}) {
  return (
    <div className="widget">
      <div className="widget__header">
        <span className="widget__label">Contacts</span>
        <button className="widget__action" onClick={onAdd}>
          + Add
        </button>
      </div>

      <SearchBar value={search} onChange={onSearch} />

      <div className="widget__scroll">
        {loading && (
          <div className="widget__empty">Loading...</div>
        )}

        {!loading && contacts.length === 0 && (
          <div className="widget__empty">
            <span>👤</span>
            <p>No contacts yet</p>
            <button className="btn btn--primary" onClick={onAdd}>
              Add first contact
            </button>
          </div>
        )}

        {contacts.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onEdit={onEdit}
            onDelete={onDelete}
            onPersonalEmail={onPersonalEmail}
            onTemplateEmail={onTemplateEmail}
          />
        ))}
      </div>
    </div>
  )
}