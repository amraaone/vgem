import { useLocation, useNavigate, useParams } from "react-router-dom"

export const withRouter = Component => {
  const Wrapper = props => {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()

    const updatedProps = {
      ...props,
      location,
      navigate,
      params,
    }

    return <Component {...updatedProps} />
  }

  return Wrapper
}

export default withRouter
