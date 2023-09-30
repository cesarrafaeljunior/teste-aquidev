import { Request, Response } from "express"
import { retrieveProductsService } from "../../services/product/retrieveProducts.service"
import { iProductResponse } from "../../interfaces/product.interface"

export const retrieveProductsController = async (req:Request, res:Response) => {

    const products:iProductResponse[] = await retrieveProductsService()

    return res.status(200) .json(products)
}