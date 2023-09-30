import { Request, Response } from "express";
import { createProductService } from "../../services/product/createProduct.service";
import { iProduct, iProductResponse } from "../../interfaces/product.interface";

export const createProductController = async (req: Request, res: Response) => {
  const productData: iProduct = req.body;

  const product: iProductResponse = await createProductService(productData);

  return res.status(200).json(product);
};
