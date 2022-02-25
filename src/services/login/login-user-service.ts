import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../../repositories/userRepository'

export const authenticateUser = async ( email: string, password: string ): Promise<any> => {
  const userRepository = getCustomRepository(UserRepository)

  const user = await userRepository.findByEmail(email)

  if (user === undefined || !bcrypt.compareSync(password, user.password)) {
    return undefined
  }
  const token = jwt.sign({ uuid: user.id }, process.env.SECRET_KEY as string, {
    expiresIn: '1d'
  })
  return token
}
