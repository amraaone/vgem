import { Navigate } from "react-router-dom"

const routes = [
  { path: "/dashboard", element: <div>DASH</div> },
  { path: "*", element: <Navigate to="/404" replace /> },
]

export default routes
