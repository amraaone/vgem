import { withCurrentUser } from "./modules/auth/checkUser"
import AuthRoutes from "./modules/auth/routes"

const RenderRoutes = currentUser => {
  // if (currentUser) {
  //   console.log(currentUser)
  // }

  // return <div>HEHEHEHE</div>

  return <AuthRoutes />
}

const App = ({ currentUser }) => RenderRoutes(currentUser)

export default withCurrentUser(App)
