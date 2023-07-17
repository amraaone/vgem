import express from "express"
import { ApolloServer } from "apollo-server-express"
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core"
import { connect, disconnect } from "./db/connection"
import { typeDefs, resolvers } from "./graphql/schema"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import { userMiddleware } from "./auth"
import dotenv from "dotenv"

dotenv.config()

const { PORT } = process.env

const app = express()

const corsOptions = {
  origin: ["http://localhost:3000", "https://studio.apollographql.com"],
  credentials: true,
}

app.use(bodyParser.json({ limit: "15mb" }))
app.use(bodyParser.urlencoded({ limit: "15mb", extended: true }))
app.disable("x-powered-by")
app.use(cookieParser())
app.use(cors(corsOptions))

app.use(userMiddleware)

app.get("/health", async (_req, res) => {
  res.end("ok")
})

async function startApolloServer() {
  await connect() // Connect to MongoDB

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    context: async ({ req, res }) => ({
      res,
      user: req.user,
    }),
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  })

  await server.start()

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
