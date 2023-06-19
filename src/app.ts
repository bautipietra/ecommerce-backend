import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import userRoutes from './routes/user.routes'
import subscribeRoutes from './routes/subscribe.routes'
import reviewRoutes from './routes/review.routes'

const app = express()
app.use(morgan('dev'))
app.use(
  cors({
    origin: ['http://sneakers.bautistapietraroia.com.ar']
  })
)
app.use(express.json())

/* Routes */

app.use(userRoutes)
app.use(subscribeRoutes)
app.use(reviewRoutes)

export default app
