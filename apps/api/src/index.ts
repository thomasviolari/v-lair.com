import express from 'express'
import cors from 'cors'
import contactsRouter from './routes/contacts.js'
import emailRouter from './routes/email.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api/contacts', contactsRouter)

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})

app.use('/api/email', emailRouter)