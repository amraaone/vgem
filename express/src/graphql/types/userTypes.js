export const types = `    
    type User {
        _id: String!
        email: String!
        username: String!
    }

    type Authentication {
        status: String
        user: User!
    }
`

export const queries = `
    currentUser: User!
`

export const mutations = `
    login(username: String!, password: String!): Authentication!
    register(email: String!, password: String!, verifyPassword: String!, username: String!): User!
`
