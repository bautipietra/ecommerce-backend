import { Router } from 'express'
import { loginUser, registerUser, validateToken } from '../controllers/user.controllers'

const router = Router()

router.route('/user/register').post(registerUser)
router.route('/user/login').post(loginUser)
router.route('/user/renew').post(validateToken)

export default router
