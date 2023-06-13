import { Request, Response } from 'express'
import { User } from '../models/User'

const createReview = async (req: Request, res: Response) => {
  try {
    const { email, review, rating } = req.body

    /* If email doesn't exist */
    const user = await User.findOne({
      where: { email: email }
    })
    if (!user)
      return res
        .status(400)
        .send({ message: "The email isn't registered" })

    /* If email already sends a review */
    if (user.review)
      return res
        .status(400)
        .send({ message: 'You have already send a review' })

    /* Send a review */
    user.review = {
      review,
      rating
    }
    User.update(user.id, user)
    res.send(user)
  } catch (error) {
    error instanceof Error &&
      res.status(500).send({ message: error.message })
  }
}

export {createReview}
