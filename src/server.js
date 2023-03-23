import express from 'express'
import cors from 'cors'
import { floorPlanRoutes } from './routes/floorPlan.js'

const PORT = 3333

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/floor-plan', floorPlanRoutes)

app.listen(PORT, () => {
  console.log('App is listening on port:', PORT)
})
