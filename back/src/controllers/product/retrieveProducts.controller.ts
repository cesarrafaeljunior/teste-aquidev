import { Request, Response } from "express"
import { retrieveProductsService } from "../../services/product/retrieveProducts.service"

export const retrieveProductsController = async (req:Request, res:Response) => {

    const products = await retrieveProductsService()

    return res.status(200) .json(products)
}