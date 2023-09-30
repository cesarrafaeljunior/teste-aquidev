import { Router } from "express";
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware";
import { createUserSchema } from "../schemas/user.schemas";
import { createUserController } from "../controllers/user/createUser.controllers";
import { retrieveUsersController } from "../controllers/user/retrieveUsers.controller";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { retrieveUserLoggedController } from "../controllers/user/retrieveUserLogged.controller";

export const userRoutes = Router()


userRoutes.post("",verifySchemaMiddleware(createUserSchema), createUserController)

userRoutes.get("",retrieveUsersController)

userRoutes.get("/:login",verifyTokenMiddleware,retrieveUserLoggedController)

