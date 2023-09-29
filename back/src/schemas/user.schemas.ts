import {z} from "zod"

const createUserSchema = z.object({
    name: z.string().min(5).max(25),
    email: z.string().email(),
    password: z.string().min(8)
})

const returnUserSchemaWithoutPassword = createUserSchema.extend({
    id: z.number().optional(),
    createdAt: z.date().optional(),
  }).omit({
    password: true
})

export {
    createUserSchema,
    returnUserSchemaWithoutPassword
}