import express from 'express'
import {
  getFloorPlanList,
  getFloorPlanByName,
  addFloorPlan,
  removeFloorPlan,
  updateFloorPlan,
} from '../controllers/floorPlan.js'

export const floorPlanRoutes = express.Router()

floorPlanRoutes.get('/list/:email', async (req, res) => {
  if (!req.params.email)
    return res.status(400).send({ message: 'Please provide an email' })
  const floorPlans = await getFloorPlanList(req.params)
  res.status(200).send(floorPlans)
})

floorPlanRoutes.get('/:email/:name', async (req, res) => {
  if (!req.params.email)
    return res.status(400).send({ message: 'Please provide email' })
  if (!req.params.name)
    return res.status(400).send({ message: 'Please provide floor plan name' })
  const floorPlans = await getFloorPlanByName(req.params)
  res.status(200).send(floorPlans)
})

floorPlanRoutes.post('/add', async (req, res) => {
  const msg = await addFloorPlan(req.body)
  res.status(200).send(msg)
})

floorPlanRoutes.post('/update', async (req, res) => {
  const msg = await updateFloorPlan(req.body)
  res.status(200).send(msg)
})

floorPlanRoutes.post('/remove', async (req, res) => {
  const msg = await removeFloorPlan(req.body)
  res.status(200).send(msg)
})
