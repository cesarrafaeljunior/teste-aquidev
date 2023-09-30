import { Request, Response } from "express";
import { updateProductService } from "../../services/product/updateProduct.service";

export const updateProductController = async (req:Request, res:Response) => {

    const productData = req.body
    const productId = Number(req.params.id)

    const productUpdated = await updateProductService(productId, productData)

    return res.status(200).json(productUpdated)



}