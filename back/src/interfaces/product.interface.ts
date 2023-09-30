import {z} from "zod"
import { createProductSchema, returnProductSchema, updateProductSchema } from "../schemas/product.schemas"

export type iProduct = z.infer<typeof createProductSchema>

export type iProductResponse = z.infer<typeof returnProductSchema>

export type iProductPartial = z.infer<typeof updateProductSchema>

export interface iCategory{
    id: number,
    name: string
}