import { Request, Response } from 'express'
import { Subscribe } from '../models/Subscribe'
import { User } from '../models/User'

export const createSubscribe = async (req: Request, res: Response) => {
  try {
    const { email } = req.body

    /* If user already exist not create it */
    const alreadyExist = await Subscribe.findOne({
      where: { email: email }
    })
    if (alreadyExist)
      return res
        .status(400)
        .send({ message: 'Email is already subscribed' })

    /* If email isn't subscribed */
    const userTable = await User.findOne({ where: { email: email } })

    const user = new Subscribe()
    user.email = email
    if (userTable) user.user = userTable?.id
    if (!userTable)
      return res
        .status(400)
        .send({ message: 'The email is not registered' })
    const savedUser = await user.save()

    res.send(savedUser)
  } catch (error) {
    error instanceof Error &&
      res.status(500).send({ message: error.message })
  }
}
