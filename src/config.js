import * as dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 3334

export const MONGODB_URL = process.env.MONGODB_URL

export const ORIGIN = process.env.ORIGIN || '*'

export const ROOT_DOMAIN = process.env.ROOT_DOMAIN

export const CLIENT_ID = process.env.CLIENT_ID

export const CLIENT_SECRET = process.env.CLIENT_SECRET
