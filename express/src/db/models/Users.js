import dotenv from "dotenv"
import { Schema, model } from "mongoose"
import { field } from "./utils.js"

dotenv.config()

const UserSchema = new Schema({
  email: field({ type: String, label: "Email" }),
  password: field({ type: String, label: "Password" }),
  username: field({ type: String, label: "Username" }),
  createdDate: field({ type: Date, label: "User Created official Date" }),
})

class User {
  /**
   * Register
   */
  static async register(data) {
    const isRegistered = await Users.find({ username: data.username })

    console.log(isRegistered)

    if (isRegistered.length !== 0) throw new Error("User already registered.")

    return this.create({ ...data })
  }

  /**
   * Login
   */
  static async login(data) {
    return null
  }
}

UserSchema.loadClass(User)

const Users = model("users", UserSchema)

export default Users
