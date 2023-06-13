import { Router } from 'express'
import { createReview } from '../controllers/review.controllers'

const router = Router()

router.post('/review', createReview)

export default router