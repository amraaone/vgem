import dotenv from "dotenv"
import bcrypt from "bcrypt"
import crypto from "crypto"
import sha256 from "sha256"
import jwt from "jsonwebtoken"
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
  static async register({ username, email, password }) {
    const isRegistered = await Users.find({ username })

    if (isRegistered.length !== 0) throw new Error("User already registered.")

    const { token, expires } = await User.tokenGenerate()

    return this.create({
      registrationToken: token,
      registrationTokenExpires: expires,
      username,
      email,
      password: await this.passwordGenerator(password),
    })
  }

  static passwordGenerator(password) {
    return bcrypt.hash(sha256(password), 10)
  }

  static async tokenGenerate() {
    const buffer = await crypto.randomBytes(32)
    const token = buffer.toString("hex")

    return {
      token,
      expires: Date.now() + 1000 * 60 * 60 * 24,
    }
  }

  /**
   * Login
   */
  static async login({ username, password }) {
    const user = await Users.findOne({ username })

    if (!user) throw new Error("User not found!")

    if (!(await this.comparePassword(password, user.password)))
      throw new Error("Username or password incorrect")

    const [token, refreshToken] = await this.createTokens(
      user,
      process.env.JWT_TOKEN
    )

    user.lastLoginDate = new Date()

    await user.save()

    return {
      status: "loggedIn",
      token,
      refreshToken,
      user,
    }
  }

  static comparePassword(password, userPassword) {
    return bcrypt.compare(sha256(password), userPassword)
  }

  static async createTokens(_user, secret) {
    const user = _user.toJSON()

    delete user.password

    const createToken = await jwt.sign({ user }, secret, { expiresIn: "1d" })

    const createRefreshToken = await jwt.sign({ user }, secret, {
      expiresIn: "1d",
    })

    return [createToken, createRefreshToken]
  }
}

UserSchema.loadClass(User)

const Users = model("users", UserSchema)

export default Users
