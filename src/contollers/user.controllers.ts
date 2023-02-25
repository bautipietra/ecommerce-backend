import { Request, Response } from 'express'
import { User } from '../models/User'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    /* If user already exist not create it */
    const alreadyExist = await User.findOne({
      where: { email: email }
    })
    if (alreadyExist)
      return res.status(400).send({ message: 'User already exists' })

    /* If user not exist create it */
    const user = new User()
    user.email = email
    user.password = password
    const savedUser = await user.save()
    res.send(savedUser)
  } catch (error) {
    error instanceof Error &&
      res.status(500).send({ message: error.message })
  }
}
