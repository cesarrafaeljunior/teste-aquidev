import { createUserSchema } from "../schemas/user/user.schemas";
import {z} from "zod"

export type iUser = z.infer<typeof createUserSchema>