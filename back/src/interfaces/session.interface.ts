import {z} from "zod"
import { sessionUserSchema } from "../schemas/session.schemas"


export type iSession = z.infer<typeof sessionUserSchema>