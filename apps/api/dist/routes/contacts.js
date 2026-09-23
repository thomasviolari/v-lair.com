import { Router } from 'express';
import { prisma } from '@v-lair/database';
import { readContactInput } from '../validation.js';
const router = Router();
// GET all contacts + search
router.get('/', async (req, res) => {
    const search = typeof req.query.search === 'string' ? req.query.search.slice(0, 100) : undefined;
    try {
        const contacts = await prisma.contact.findMany({
            where: search ? {
                OR: [
                    { firstName: { contains: search, mode: 'insensitive' } },
                    { lastName: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                ]
            } : undefined,
            orderBy: { createdAt: 'desc' }
        });
        res.json(contacts);
    }
    catch (error) {
        console.error('Contact lookup failed:', error);
        res.status(500).json({ error: 'Unable to load contacts' });
    }
});
// GET single contact
router.get('/:id', async (req, res) => {
    try {
        const contact = await prisma.contact.findUnique({ where: { id: req.params.id } });
        if (!contact)
            return res.status(404).json({ error: 'Not found' });
        res.json(contact);
    }
    catch (error) {
        console.error('Contact lookup failed:', error);
        res.status(500).json({ error: 'Unable to load contact' });
    }
});
// POST create contact
router.post('/', async (req, res) => {
    const input = readContactInput(req.body);
    if ('error' in input)
        return res.status(400).json({ error: input.error });
    try {
        const contact = await prisma.contact.create({ data: input.value });
        res.status(201).json(contact);
    }
    catch (error) {
        console.error('Contact creation failed:', error);
        res.status(500).json({ error: 'Unable to create contact' });
    }
});
// PUT update contact
router.put('/:id', async (req, res) => {
    const input = readContactInput(req.body);
    if ('error' in input)
        return res.status(400).json({ error: input.error });
    try {
        const contact = await prisma.contact.update({ where: { id: req.params.id }, data: input.value });
        res.json(contact);
    }
    catch (error) {
        console.error('Contact update failed:', error);
        res.status(500).json({ error: 'Unable to update contact' });
    }
});
// DELETE contact
router.delete('/:id', async (req, res) => {
    try {
        await prisma.contact.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (error) {
        console.error('Contact deletion failed:', error);
        res.status(500).json({ error: 'Unable to delete contact' });
    }
});
export default router;
