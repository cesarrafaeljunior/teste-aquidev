import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(3).max(25),
  description: z.string().min(10).max(50),
  price: z.number().positive(),
  stock: z.number(),
  category: z.object({
    name: z.string(),
  }),
});

export const returnProductSchema = createProductSchema.extend({
  id: z.number().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  category: z.object({
    id: z.number().optional(),
    name: z.string().optional(),
  }).optional()
});

export const updateProductSchema = createProductSchema.partial();
