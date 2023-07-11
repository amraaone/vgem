import { Login } from "../components"
import { mutations } from "../graphql"
import { useMutation } from "@apollo/client"

const LoginContainer = () => {
  const [loginMutation] = useMutation(mutations.LOGIN)
  const [registerMutation] = useMutation(mutations.REGISTER)

  const login = variables => {
    loginMutation({ variables })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const register = variables => {
    console.log(variables, "lalalaal")
    registerMutation({ variables })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const extendedProps = { login, register }

  return <Login {...extendedProps} />
}

export default LoginContainer
