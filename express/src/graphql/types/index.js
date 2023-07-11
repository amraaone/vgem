import { gql } from "apollo-server-express"

import {
  mutations as userMutations,
  queries as userQueries,
  types as userTypes,
} from "./userTypes"

const typeDefs = gql`
    scalar JSON
    scalar Date
    scalar JSONObject

    ${userTypes}

    type Query {
        ${userQueries}
    }

    type Mutation {
        ${userMutations}
    }
`

export default typeDefs
