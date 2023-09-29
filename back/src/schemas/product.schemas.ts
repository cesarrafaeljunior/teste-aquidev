import {z} from "zod"

export const createProductSchema = z.object({

    name: z.string().min(3).max(25),
    description: z.string().min(10).max(50),
    price: z.number().positive(),
    stock: z.number(),
    category: z.object({
        name:z.string()
    })

})