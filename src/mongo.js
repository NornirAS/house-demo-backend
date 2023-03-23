import { MongoClient } from 'mongodb'
import { MONGODB_URL } from './config.js'

const client = new MongoClient(MONGODB_URL)

export const mongoConnect = async () => {
  await client.connect()
  console.log('Connected successfully to server')
}

export const mongoClose = async () => {
  await client.close()
  console.log('Connection closed')
}

export const getCollection = async ({ dbName, collectionName }) => {
  const db = client.db(dbName)
  return db.collection(collectionName)
}
