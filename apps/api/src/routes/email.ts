import { Router } from 'express'
import { Resend } from 'resend'
import rateLimit from 'express-rate-limit'
import { escapeHtml, readEmailInput } from '../validation.js'

const router = Router()
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 30,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many email requests. Try again later.' }
})

router.post('/send', emailLimiter, async (req, res) => {
  if (!resend) {
    return res.status(503).json({ error: 'Email service is not configured' })
  }

  const input = readEmailInput(req.body)
  if ('error' in input) {
    return res.status(400).json({ error: input.error })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: input.value.to,
      subject: input.value.subject,
      html: `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">${escapeHtml(input.value.message).replace(/\n/g, '<br/>')}</div>`
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(502).json({ error: 'Email provider rejected the request' })
    }

    res.json({ success: true, id: data?.id })
  } catch (error) {
    console.error('Email request failed:', error)
    res.status(502).json({ error: 'Email service unavailable' })
  }
})

export default router