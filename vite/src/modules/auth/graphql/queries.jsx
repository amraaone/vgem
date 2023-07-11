import { gql } from "@apollo/client"

const CURRENT_USER = gql`
    query {
        currentUser{
            _id
            username
            email
        }
    }
`

export default { CURRENT_USER }
