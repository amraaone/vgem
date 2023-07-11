import { Users } from "../../db/models"

const userMutations = {
  /**
   * Register
   * @param {Object} data - Register datas
   * @returns - Success message
   */
  async register(root, data) {
    const { email, username, password, verifyPassword } = data || {}

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
  async login(root, data) {
    console.log(data, "LOGIN")

    return null
  },
}

export default userMutations
