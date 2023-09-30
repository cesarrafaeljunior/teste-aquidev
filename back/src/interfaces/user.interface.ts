import { createUserSchema, returnUserSchemaWithoutPassword } from "../schemas/user.schemas";
import {z} from "zod"

export type iUser = z.infer<typeof createUserSchema>

export type iUserResponse = z.infer<typeof returnUserSchemaWithoutPassword>
