import { gql } from "@apollo/client"

const LOGIN = gql`
    mutation login($username: String!, $password: String!){
        login(username: $username, password: $password){
            user{
                username
                firstname
                lastname
            }
            status
        }
    }
`

const REGISTER = gql`
    mutation register($email: String!, $username: String!, $password: String!, $verifyPassword: String!){
        register(email: $email, username: $username, password: $password, verifyPassword: $verifyPassword){
            _id
        }
    }
`

export default { LOGIN, REGISTER }
