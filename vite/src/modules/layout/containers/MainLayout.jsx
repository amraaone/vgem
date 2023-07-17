import { MainLayout } from "../components"
import withRouter from "../../withRouter"
import { AppProvider, AppConsumer } from "../../AppContext"

const MainLayoutContainer = ({ currentUser, ...props }) => {
  return (
    <AppProvider currentUser={currentUser}>
      <AppConsumer>
        {({ currentUser }) => (
          <MainLayout {...props} currentUser={currentUser} />
        )}
      </AppConsumer>
    </AppProvider>
  )
}

export default withRouter(MainLayoutContainer)
