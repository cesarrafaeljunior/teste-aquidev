import {z} from "zod"
import { createProductSchema, updateProductSchema } from "../schemas/product.schemas"

export type iProduct = z.infer<typeof createProductSchema>

export type iProductPartial = z.infer<typeof updateProductSchema>