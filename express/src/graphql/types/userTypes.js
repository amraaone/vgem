export const types = `    
    type User {
        _id: String!
        email: String!
        username: String!
    } 
`

export const queries = `
    currentUser: User!
`

export const mutations = `
    login(email: String!, password: String!): User!
    register(email: String!, password: String!, verifyPassword: String!, username: String!): User!
`
