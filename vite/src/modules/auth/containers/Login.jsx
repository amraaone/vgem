import { Login } from "../components"
import { mutations } from "../graphql"
import { useMutation } from "@apollo/client"
import { Alert } from "../../components"
import withRouter from "../../withRouter"
import apolloClient from "../../../apolloClient"

const LoginContainer = ({ navigate, ...props }) => {
  const [loginMutation] = useMutation(mutations.LOGIN)
  const [registerMutation] = useMutation(mutations.REGISTER)

  const login = variables => {
    loginMutation({ variables })
      .then(response => {
        const { data: login } = response

        if (login.login.status === "loggedIn") {
          apolloClient.resetStore()

          Alert.success("Successfully", "Logged in.")

          navigate("/")
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const register = variables => {
    registerMutation({ variables })
      .then(response => {
        return Alert.success("Successfully", "Registered your account!")
      })
      .catch(error => {
        return Alert.error(error)
      })
  }

  const extendedProps = { login, register, ...props }

  return <Login {...extendedProps} />
}

export default withRouter(LoginContainer)
