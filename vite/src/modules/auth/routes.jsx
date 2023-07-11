import { Route, Routes, Navigate } from "react-router-dom"
import { Login } from "./containers"

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route key="*" path="*" element={<Navigate to="/" replace />} />{" "}
    </Routes>
  )
}

export default AuthRoutes
