import { Router } from "express";
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware";
import { createProductSchema } from "../schemas/product.schemas";
import { createProductController } from "../controllers/product/createProduct.controller";

export const productRoutes = Router()

productRoutes.post("",verifySchemaMiddleware(createProductSchema), createProductController)