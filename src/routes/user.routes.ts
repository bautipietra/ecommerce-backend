import { Router } from 'express'
import { createUser } from '../contollers/user.controllers'

const router = Router()

router.route('/user').post(createUser)

export default router
