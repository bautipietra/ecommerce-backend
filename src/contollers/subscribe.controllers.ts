import { Request, Response } from 'express'
import { User } from '../models/User'

export const createSubscribe = async (req: Request, res: Response) => {
  try {
    const { email } = req.body

    /* If email doesn't exist */
    const user = await User.findOne({
      where: { email: email }
    })
    if (!user)
      return res
        .status(400)
        .send({ message: "The email isn't registered" })

    /* If email is already subscribed */
    if (!user.suscribe)
      return res
        .status(400)
        .send({ message: 'The email is already subscribed' })

    /* Suscribe the email */
    user.suscribe = true
    User.update(user.id, user)
    res.send(user)
  } catch (error) {
    error instanceof Error &&
      res.status(500).send({ message: error.message })
  }
}
