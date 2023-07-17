import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

/**
 * User object passed token
 * @param {Object} req - Req Obj
 * @param {Object} res - Resp Obj
 * @param {Function} next - next func
 */

export const userMiddleware = async (req, res, next) => {
  const token = req.cookies["auth-token"]

  if (token) {
    try {
      const { user } = jwt.verify(token, process.env.JWT_TOKEN)
      req.user = user
      req.user.loginToken = token
    } catch (e) {
      // Handle token verification errors if needed
    }
  }

  next() // Call next() within the middleware
}
