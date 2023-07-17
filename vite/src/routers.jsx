import { withCurrentUser } from "./modules/auth/checkUser"
import { Route, Routes } from "react-router-dom"
import AuthRoutes from "./modules/auth/routes"
import { MainLayout } from "./modules/layout/containers"
import DashboardRoutes from "./modules/dashboard/routes"

const RenderRoutes = currentUser => {
  if (currentUser) {
    return (
      <MainLayout currentUser={currentUser}>
        <Routes>
          {DashboardRoutes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </MainLayout>
    )
  }

  return <AuthRoutes />
}

const App = ({ currentUser }) => RenderRoutes(currentUser)

export default withCurrentUser(App)
