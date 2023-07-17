import jwt from "jsonwebtoken"
import { Session, Users } from "./db/models"

/**
 * User object passed token
 * @param {Object} req - Req Obj
 * @param {Object} res - Resp Obj
 * @param {Function} next - next func
 */

export const userMiddleware = async (req, res, next) => {
  //   const token = req.cookies["auth-token"]

  //   if (token) {
  //     try {
  //       // verify user token and retrieve stored user information
  //       const { user } = jwt.verify(token, Users.getSecret())
  //       // logged out
  //       const isLoggedout = await Session.findOne({ invalidToken: token })

  //       if (isLoggedout) {
  //         return next()
  //       }

  //       // save user in request
  //       req.user = user
  //       req.user.loginToken = token
  //     } catch (e) {
  //       return next()
  //     }
  //   }

  next()
}
