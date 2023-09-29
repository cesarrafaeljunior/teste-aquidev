import "express-async-errors"
import "reflect-metadata"
import express from "express"
import cors from "cors"
import { userRoutes } from "./routes/user.routes"
import { errorHandler } from "./errors/errorHandler.errors"
import { sessionRoute } from "./routes/session.routes"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/user",userRoutes)
app.use("/login",sessionRoute)

app.use(errorHandler)

export default app

