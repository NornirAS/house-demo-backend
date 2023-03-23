import { mongoConnect, mongoClose, getCollection } from '../mongo.js'

const config = {
  dbName: 'demo',
  collectionName: 'floorPlan',
}

export const getFloorPlanList = async ({ email }) => {
  await mongoConnect()
  const collection = await getCollection(config)
  const emailRecord = await collection.find({ email }).toArray()
  if (emailRecord.length === 0) {
    await mongoClose()
    return []
  }
  await mongoClose()
  return Object.keys(emailRecord[0][config.collectionName])
}

export const getFloorPlanByName = async ({ email, name }) => {
  await mongoConnect()
  const collection = await getCollection(config)
  const emailRecord = await collection.find({ email }).toArray()
  if (emailRecord.length === 0) {
    await mongoClose()
    return []
  }
  await mongoClose()
  return emailRecord[0][config.collectionName][name]
}

export const addFloorPlan = async ({ email, name, item }) => {
  await mongoConnect()
  const collection = await getCollection(config)
  const emailRecord = await collection.find({ email }).toArray()
  if (emailRecord.length === 0) {
    await collection.insertOne({
      email,
      [config.collectionName]: { [name]: item },
    })
    await mongoClose()
    return { message: 'Success' }
  }
  if (emailRecord[0][config.collectionName][name]) {
    await mongoClose()
    return { message: `${name} exists` }
  }
  const newRecord = {
    ...emailRecord[0][config.collectionName],
    ...{ [name]: item },
  }
  await collection.updateOne(
    { email },
    { $set: { [config.collectionName]: newRecord } },
  )
  await mongoClose()
  return { message: 'Success' }
}

export const updateFloorPlan = async ({ email, name, item }) => {
  await mongoConnect()
  const collection = await getCollection(config)
  const emailRecord = await collection.find({ email }).toArray()
  if (!emailRecord[0][config.collectionName][name]) {
    await mongoClose()
    return { message: `There is no ${name} record` }
  }
  const newRecord = {
    ...emailRecord[0][config.collectionName],
    ...{ [name]: item },
  }
  await collection.updateOne(
    { email },
    { $set: { [config.collectionName]: newRecord } },
  )
  await mongoClose()
  return { message: 'Success' }
}

export const removeFloorPlan = async ({ email, name, item }) => {
  await mongoConnect()
  const collection = await getCollection(config)
  const emailRecord = await collection.find({ email }).toArray()
  if (emailRecord.length === 0) {
    await mongoClose()
    return { message: 'There is no record' }
  }
  if (!emailRecord[0][config.collectionName][name]) {
    await mongoClose()
    return { message: `There is no ${name} record` }
  }
  const newRecord = emailRecord[0][config.collectionName].filter(
    e => e !== item,
  )
  await collection.updateOne(
    { email },
    { $set: { [config.collectionName]: newRecord } },
  )
  await mongoClose()
  return { message: 'Success' }
}
