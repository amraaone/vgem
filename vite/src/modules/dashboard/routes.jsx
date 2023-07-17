import { Route } from "react-router-dom"
import { Navigate } from "react-router-dom"

// const Dashboard = asyncComponent(() => import("./containers/Dashboard"))

const routes = [
  <Route key="/dashboard" path="/" element={<div>DASH</div>} />,
  <Route key="*" path="*" element={<Navigate to="/404" replace />} />,
]

export default routes
