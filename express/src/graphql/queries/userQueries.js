const userQueries = {
  /**
   * Get current user
   */
  async currentUser(root, args, { user }) {
    console.log(user)
    if (user) {
      return Users.findOne({ _id: user._id })
    }

    return null
  },
}

export default userQueries
