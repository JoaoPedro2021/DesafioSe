import { Request, Response } from 'express'
import { authenticateUser } from '../../services/login/login-user-service'


export class SignIn {
    async handle(request: Request, response: Response) {
        try {
            const { email, password } = request.body
            const token = await authenticateUser(email, password)
            if (!token) {
              return response.status(400).json({ message: 'Wrong email/password' })
            }
            return response.status(200).json({ token: token })
          } catch (error: any) {
            return response.status(500).json({
              message: error.message
            })
          }
        }
}
