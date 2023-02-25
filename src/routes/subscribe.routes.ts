import { Router } from 'express'
import { createSubscribe } from '../contollers/subscribe.controllers'

const router = Router()

router.post('/subscribe', createSubscribe)

export default router
