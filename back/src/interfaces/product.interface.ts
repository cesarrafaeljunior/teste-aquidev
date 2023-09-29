import {z} from "zod"
import { createProductSchema } from "../schemas/product.schemas"

export type iProduct = z.infer<typeof createProductSchema>