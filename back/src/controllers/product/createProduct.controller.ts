import { Request, Response } from "express";
import { createProductService } from "../../services/product/createProduct.service";

export const createProductController = async (req:Request,res:Response) => {

    const productData = req.body

    const product = await createProductService(productData)

    return res.status(200).json(product)
}