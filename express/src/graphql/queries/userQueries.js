const userQueries = {
  /**
   * Get current user
   */
  async currentUser(root, args, { user }) {
    return { username: "hello" }
  },
}

export default userQueries
