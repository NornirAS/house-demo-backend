import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { floorPlanRoutes } from './routes/floorPlan.js'
import { PORT, ORIGIN } from './config.js'

const app = express()

const corsOptions = {
  origin: ORIGIN,
  optionsSuccessStatus: 200,
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))
app.use(helmet())
app.use('/floor-plan', floorPlanRoutes)

app.listen(PORT, () => {
  console.log('App is listening on port:', PORT)
})
