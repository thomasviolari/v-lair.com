import { timingSafeEqual } from 'node:crypto'
import type { NextFunction, Request, Response } from 'express'

export function requireApiAccess(req: Request, res: Response, next: NextFunction) {
  const expectedToken = process.env.API_ACCESS_TOKEN

  if (!expectedToken) {
    if (process.env.NODE_ENV === 'production') {
      return res.status(503).json({ error: 'API access is not configured' })
    }
    return next()
  }

  const authorization = req.header('authorization') || ''
  const suppliedToken = authorization.startsWith('Bearer ')
    ? authorization.slice('Bearer '.length)
    : ''
  const expected = Buffer.from(expectedToken)
  const supplied = Buffer.from(suppliedToken)

  if (expected.length !== supplied.length || !timingSafeEqual(expected, supplied)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  return next()
}
