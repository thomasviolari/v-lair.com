import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { requireApiAccess } from './middleware.js';
import contactsRouter from './routes/contacts.js';
import emailRouter from './routes/email.js';
const app = express();
const PORT = process.env.PORT || 3001;
app.disable('x-powered-by');
app.use(helmet());
const allowedOrigins = (process.env.WEB_ORIGINS || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: '100kb' }));
app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
app.use('/api/contacts', requireApiAccess, contactsRouter);
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
});
app.use('/api/email', requireApiAccess, emailRouter);
app.use((error, _req, res, _next) => {
    console.error('Unhandled API error:', error);
    res.status(500).json({ error: 'Internal server error' });
});
