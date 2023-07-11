import { queries } from "../graphql"
import { useQuery } from "@apollo/client"
import { Spin } from "antd"

const withCurrentUser = Component => {
  const Container = props => {
    const { data, loading } = useQuery(queries.CURRENT_USER)

    if (loading) return <Spin />

    const updatedProps = {
      ...props,
      currentUser: data?.currentUser,
    }

    return <Component {...updatedProps} />
  }

  return Container
}

export default withCurrentUser
