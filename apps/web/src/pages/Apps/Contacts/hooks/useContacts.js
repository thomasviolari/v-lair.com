import { useState, useEffect, useCallback } from 'react'
import { apiUrl } from '../../../../lib/api.js'

const getApi = () => apiUrl('contacts')

export function useContacts() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  const fetchContacts = useCallback(async () => {
    setLoading(true)
    try {
      const api = getApi()
      const url = search ? `${api}?search=${encodeURIComponent(search)}` : api
      const res = await fetch(url)
      const data = await res.json()
      setContacts(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [search])

  useEffect(() => {
    const timer = setTimeout(fetchContacts, 300)
    return () => clearTimeout(timer)
  }, [fetchContacts])

  const createContact = async (data) => {
    const res = await fetch(getApi(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    await fetchContacts()
    return res.json()
  }

  const updateContact = async (id, data) => {
    await fetch(`${getApi()}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    await fetchContacts()
  }

  const deleteContact = async (id) => {
    await fetch(`${getApi()}/${id}`, { method: 'DELETE' })
    await fetchContacts()
  }

  return {
    contacts, loading, error,
    search, setSearch,
    createContact, updateContact, deleteContact
  }
}
