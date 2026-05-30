import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API routes — προσθέτεις εδώ για κάθε mini app
app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from v-lair API! 🚀' })
})

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})