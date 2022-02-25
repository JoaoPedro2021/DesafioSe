import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    return res.status(401).json({ message: 'Missing authorization headers' })
  }
  jwt.verify(token , process.env.SECRET_KEY as string, (err: any, decoded: any) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid or expired token' })
      }
      const userId = decoded.id
      req.user = { id: userId }
      next()
    }
  )
}