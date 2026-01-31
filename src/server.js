import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import cors from "cors"

import { connectDB } from "./config/db.js"
import authRoutes from "./routers/auth.routes.js"
import transportRoutes from "./routers/transport.routes.js"
import branchRoutes from "./routers/branch.routes.js"
import errorHandler from "./middlewares/errorHandler.js"

dotenv.config()

const app = express()

connectDB().then(() => {
  app.use(cors())
  app.use(express.json())
  app.use(morgan("dev"))

  app.use("/api/auth", authRoutes)
  app.use("/api/transports", transportRoutes)
  app.use("/api/branches", branchRoutes)

  app.use(errorHandler)

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`)
  })
})
