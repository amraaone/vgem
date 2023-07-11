import express from "express"
import { ApolloServer } from "apollo-server-express"
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core"
import { connect, disconnect } from "./db/connection"
import { typeDefs, resolvers } from "./graphql/schema"
import dotenv from "dotenv"

dotenv.config()

const { PORT } = process.env

const corsOptions = {
  origin: ["http://localhost:3000", "https://studio.apollographql.com"],
  credentials: true,
}

async function startApolloServer() {
  await connect() // Connect to MongoDB

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    context: ({ req, res }) => ({
      res,
      user: req.user,
    }),
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  })

  await server.start()

  const app = express()
  server.applyMiddleware({ app, path: "/graphql", cors: corsOptions })

  app.listen(PORT, () => {
    console.log(`🚀 BackEnd Server ready at http://localhost:${PORT}`)
  })
}

startApolloServer()
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch(err => {
    console.error(err)
  })

process.on("SIGINT", async () => {
  await disconnect() // Disconnect from MongoDB
  process.exit(0)
})
