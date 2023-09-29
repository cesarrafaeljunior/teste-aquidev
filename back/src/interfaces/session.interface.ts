import {z} from "zod"
import { sessionUserSchema } from "../schemas/user/session.schemas"


export type iSession = z.infer<typeof sessionUserSchema>