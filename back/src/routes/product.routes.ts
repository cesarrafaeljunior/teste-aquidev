import { Router } from "express";
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware";
import { createProductSchema, updateProductSchema } from "../schemas/product.schemas";
import { createProductController } from "../controllers/product/createProduct.controller";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { retrieveProductsController } from "../controllers/product/retrieveProducts.controller";
import { retrieveEspecifProductController } from "../controllers/product/retrieveEspecificProduct.controller";
import { updateProductController } from "../controllers/product/updateProduct.controller";
import { deleteProductController } from "../controllers/product/deleteProduct.controller";

export const productRoutes = Router()

productRoutes.post("",verifyTokenMiddleware,verifySchemaMiddleware(createProductSchema), createProductController)

productRoutes.get("",verifyTokenMiddleware,retrieveProductsController)

productRoutes.get("/:id",verifyTokenMiddleware,retrieveEspecifProductController )

productRoutes.patch("/:id",verifyTokenMiddleware,verifySchemaMiddleware(updateProductSchema),updateProductController)

productRoutes.delete("/:id",verifyTokenMiddleware,deleteProductController)