import { Users } from "../../db/models"

const userMutations = {
  /**
   * Register
   * @param {Object} data - Register datas
   * @returns - Success message
   */
  async register(root, data) {
    const { password, verifyPassword } = data || {}

    if (password !== verifyPassword) throw new Error("Passwords not match.")

    const extendedData = {
      ...data,
      createdDate: new Date(),
    }

    return Users.register(extendedData)
  },

  /**
   * Login
   * @param {Object} data - Login datas
   * @returns - Success message
   */
  async login(root, data, { res }) {
    const response = await Users.login(data)

    const { token } = response
    const oneDay = 1 * 24 * 3600 * 1000

    const cookieOptions = {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      maxAge: oneDay,
      sameSite: "none",
      secure: true,
    }

    // if (process.env.NODE_ENV !== "development") {
    //   cookieOptions.sameSite = true
    //   delete cookieOptions.secure
    // }

    res.cookie("auth-token", token, cookieOptions)

    return response
  },
}

export default userMutations
