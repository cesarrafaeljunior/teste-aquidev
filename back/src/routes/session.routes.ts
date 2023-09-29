import { Router } from "express";
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware";
import { sessionUserSchema } from "../schemas/user/session.schemas";
import { sessionControler } from "../controllers/session/session.controller";

export const sessionRoute = Router()

sessionRoute.post("",verifySchemaMiddleware(sessionUserSchema),sessionControler)