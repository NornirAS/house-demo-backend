import express from 'express'
import hive from '../hive.js'
import { CLIENT_ID, CLIENT_SECRET } from '../config.js'

const routes = express.Router()

routes.post('/login', async (req, res) => {
  const { email, password } = req.body
  await hive.auth({
    username: email,
    password: password,
    clientId: CLIENT_ID,
    clientSecrect: CLIENT_SECRET,
  })

  res.send({ accessToken: hive.authAccessToken })
})

const authRoutes = routes

export default authRoutes
