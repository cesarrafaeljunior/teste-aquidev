import { Request, Response } from "express";
import { updateProductService } from "../../services/product/updateProduct.service";
import { iProduct, iProductResponse } from "../../interfaces/product.interface";

export const updateProductController = async (req:Request, res:Response) => {

    const productData:iProduct = req.body
    const productId = Number(req.params.id)

    const productUpdated:iProductResponse = await updateProductService(productId, productData)

    return res.status(200).json(productUpdated)



}