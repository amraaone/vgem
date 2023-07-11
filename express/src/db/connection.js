import mongoose from "mongoose"
import * as dotenv from "dotenv"

dotenv.config()

const { MONGO_URL } = process.env

mongoose.Promise = global.Promise

/**
 * Connect
 */
mongoose.connection
  .on("connected", () => {
    console.log(`Connected to the database: ${MONGO_URL}`)
  })
  .on("disconnected", () => {
    console.log(`Disconnected from the database: ${MONGO_URL}`)
  })
  .on("error", error => {
    console.log(`Database connection error: ${MONGO_URL}`, error)
  })

/**
 * Health check status
 */
export const mongoStatus = async () => {
  try {
    const result = await mongoose.connection.db.admin().ping()
    return result
  } catch (error) {
    throw error
  }
}

export const connect = async URL => mongoose.connect(URL || MONGO_URL)

export const disconnect = async () => mongoose.connection.close()
