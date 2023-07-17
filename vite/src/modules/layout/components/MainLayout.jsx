import { Layout } from "antd"
import withRouter from "../../withRouter"

const { Content } = Layout

const MainLayout = ({ children, currentUser, navigate }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
        <LayoutHeader currentUser={currentUser} navigate={navigate} />
        <Content
          style={{
            backgroundColor: "#F9FAFB",
            padding: 16,
            overflow: "auto",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default withRouter(MainLayout)
