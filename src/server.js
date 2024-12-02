import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { floorPlanRoutes } from './routes/floorPlan.js'
import authRoutes from './routes/authRoutes.js'
import {
  PORT,
  ORIGIN,
  // CLIENT_ID,
  // CLIENT_SECRET,
  // ROOT_DOMAIN,
} from './config.js'
// import HiveAgent from '@norniras/hive-agent/agent'

const app = express()

const corsOptions = {
  origin: ORIGIN,
  optionsSuccessStatus: 200,
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))
app.use(helmet())
app.use('/auth', authRoutes)
app.use('/floor-plan', floorPlanRoutes)

app.listen(PORT, () => {
  console.log('App is listening on port:', PORT)
})

// const hive = new HiveAgent({ rootDomain: ROOT_DOMAIN })

// hive
//   .auth({
//     username: 'nornir@synxdns.com',
//     password: 'passwordNornir24',
//     clientId: CLIENT_ID,
//     clientSecrect: CLIENT_SECRET,
//   })
//   .then(() => {
//     hive.initWs({
//       type: 'receiver',
//       domain: 'nornir',
//       service: 'demoweb',
//       instance: '1',
//       dataHandler: data => {
//         console.log(data)
//         const { RTW } = JSON.parse(data)
//         if (Array.isArray(RTW)) return console.log(RTW[0])
//         return console.log(RTW)
//       },
//     })

//     setInterval(async () => {
//       hive.httpSend({
//         domain: 'nornir',
//         service: 'demoweb',
//         instance: '5',
//         data: {
//           SENDER: 'test',
//           RECEIVER: 'test',
//           TIMESTAMP: new Date().toISOString(),
//           TOPIC: 'test',
//           REFID: 'test',
//           PAYLOAD: 'test',
//         },
//       })
//     }, 5000)
//   })
