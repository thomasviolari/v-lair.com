import { Router } from 'express'
import { Resend } from 'resend'

const router = Router()
const resend = new Resend(process.env.RESEND_API_KEY)

router.post('/send', async (req, res) => {
  const { to, subject, body } = req.body

  if (!to || !subject || !body) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to,
      subject,
      html: `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">${body.replace(/\n/g, '<br/>')}</div>`
    })

    if (error) return res.status(400).json({ error })

    res.json({ success: true, id: data?.id })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
})

export default router