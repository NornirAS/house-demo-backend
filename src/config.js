import * as dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 3333

export const MONGODB_URL = process.env.MONGODB_URL

export const ORIGIN = process.env.ORIGIN || '*'
