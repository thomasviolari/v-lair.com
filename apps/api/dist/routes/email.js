import { Router } from 'express';
import { Resend } from 'resend';
import rateLimit from 'express-rate-limit';
import { escapeHtml, readEmailInput, readPublicContactInput } from '../validation.js';
import { requireApiAccess } from '../middleware.js';
const router = Router();
const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;
const emailLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 30,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: { error: 'Too many email requests. Try again later.' }
});
router.post('/contact', emailLimiter, async (req, res) => {
    if (!resend) {
        return res.status(503).json({ error: 'Email service is not configured' });
    }
    const input = readPublicContactInput(req.body);
    if ('error' in input) {
        return res.status(400).json({ error: input.error });
    }
    const recipient = process.env.CONTACT_EMAIL;
    if (!recipient) {
        return res.status(503).json({ error: 'Contact email is not configured' });
    }
    try {
        const { data, error } = await resend.emails.send({
            from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
            to: recipient,
            replyTo: input.value.email,
            subject: `New project enquiry from ${input.value.name}`,
            html: `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <p><strong>Name:</strong> ${escapeHtml(input.value.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(input.value.email)}</p>
        ${input.value.company ? `<p><strong>Company:</strong> ${escapeHtml(input.value.company)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(input.value.message).replace(/\n/g, '<br/>')}</p>
      </div>`
        });
        if (error) {
            console.error('Resend contact error:', error);
            return res.status(502).json({ error: 'Email provider rejected the request' });
        }
        return res.json({ success: true, id: data?.id });
    }
    catch (error) {
        console.error('Contact email request failed:', error);
        return res.status(502).json({ error: 'Email service unavailable' });
    }
});
router.post('/send', requireApiAccess, emailLimiter, async (req, res) => {
    if (!resend) {
        return res.status(503).json({ error: 'Email service is not configured' });
    }
    const input = readEmailInput(req.body);
    if ('error' in input) {
        return res.status(400).json({ error: input.error });
    }
    try {
        const { data, error } = await resend.emails.send({
            from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
            to: input.value.to,
            subject: input.value.subject,
            html: `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">${escapeHtml(input.value.message).replace(/\n/g, '<br/>')}</div>`
        });
        if (error) {
            console.error('Resend error:', error);
            return res.status(502).json({ error: 'Email provider rejected the request' });
        }
        res.json({ success: true, id: data?.id });
    }
    catch (error) {
        console.error('Email request failed:', error);
        res.status(502).json({ error: 'Email service unavailable' });
    }
});
export default router;
