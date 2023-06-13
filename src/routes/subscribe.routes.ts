import { Router } from 'express'
import { createSubscribe } from '../controllers/subscribe.controllers'

const router = Router()

router.post('/subscribe', createSubscribe)

export default router
