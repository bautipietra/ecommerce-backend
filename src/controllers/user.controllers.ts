import { Request, Response } from 'express'
import { User } from '../models/User'
import { generateToken } from '../helpers/jwt';
import { log } from 'console';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req: Request, res: Response) => {
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

    /* Hash password */
    bcrypt.hash(password, 10, async function(err: Error, hash: string) {
      user.password = hash
      await user.save()
    });

    /* Generate token */
    const token = generateToken(user.id)
    res.send({ token })
  } catch (error) {
    error instanceof Error &&
      res.status(500).send({ message: error.message })
  }
}

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    /* If user not exist */
    const user = await User.findOne({
      where: { email: email }
    })

    if (!user) {
      return res.status(400).send({ message: 'User not found' })
    }

    /* If user exist */

    /* Compare password */
    bcrypt.compare(password, user.password, function (err: Error, result: boolean) {
      if (result == true) {
        /* Generate token */
        const token = generateToken(user.id)
        res.send({ token })
      }
      else {
        res.status(400).send({ message: 'Password incorrect' })
      }
    });

  } catch (error) {
    error instanceof Error &&
      res.status(500).send({ message: error.message })
  }
}

const validateToken = async (req: Request, res: Response) => {
  try {
    const { token } = req.body

    /* If token not exist */
    if (!token) {
      return res.status(400).send({ message: 'Token not found' })
    }

    /* If token exist */
    const {id} = jwt.verify(token, process.env.JWT_SECRET!) as { id: number }

    const user = await User.findOne({
      where: { id: id }
    })

    /* If token is invalid */
    if (!user) {
      return res.status(400).send({ message: 'Session not found' })
    }

    /* If token is valid, extends it */
    const newToken = generateToken(user.id)
    res.send({ newToken })
  
  }
  catch (error) {
    error instanceof Error &&
      res.status(500).send({ message: error.message })
  }
}

export { registerUser, loginUser, validateToken }
