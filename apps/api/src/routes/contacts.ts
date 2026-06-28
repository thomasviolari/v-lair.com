import { Router } from 'express'
import { prisma } from '@v-lair/database'

const router = Router()

// GET all contacts + search
router.get('/', async (req, res) => {
  const { search } = req.query

  const contacts = await prisma.contact.findMany({
    where: search ? {
      OR: [
        { firstName: { contains: String(search), mode: 'insensitive' } },
        { lastName:  { contains: String(search), mode: 'insensitive' } },
        { email:     { contains: String(search), mode: 'insensitive' } },
      ]
    } : undefined,
    orderBy: { createdAt: 'desc' }
  })

  res.json(contacts)
})

// GET single contact
router.get('/:id', async (req, res) => {
  const contact = await prisma.contact.findUnique({
    where: { id: req.params.id }
  })
  if (!contact) return res.status(404).json({ error: 'Not found' })
  res.json(contact)
})

// POST create contact
router.post('/', async (req, res) => {
  const { firstName, lastName, email, phone, notes, metadata } = req.body
  const contact = await prisma.contact.create({
    data: { firstName, lastName, email, phone, notes, metadata }
  })
  res.status(201).json(contact)
})

// PUT update contact
router.put('/:id', async (req, res) => {
  const { firstName, lastName, email, phone, notes, metadata } = req.body
  const contact = await prisma.contact.update({
    where: { id: req.params.id },
    data: { firstName, lastName, email, phone, notes, metadata }
  })
  res.json(contact)
})

// DELETE contact
router.delete('/:id', async (req, res) => {
  await prisma.contact.delete({
    where: { id: req.params.id }
  })
  res.status(204).send()
})

export default router