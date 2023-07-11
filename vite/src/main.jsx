import React from "react"
import ReactDOM from "react-dom/client"
import client from "./apolloClient"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { ConfigProvider } from "antd"
import Routers from "./routers"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ConfigProvider>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ConfigProvider>
  </ApolloProvider>
)
