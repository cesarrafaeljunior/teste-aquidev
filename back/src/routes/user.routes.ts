import { Router } from "express";
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware";
import { createUserSchema } from "../schemas/user/user.schemas";
import { createUserController } from "../controllers/user/createUser.controllers";

export const userRoutes = Router()


userRoutes.post("",verifySchemaMiddleware(createUserSchema), createUserController)

