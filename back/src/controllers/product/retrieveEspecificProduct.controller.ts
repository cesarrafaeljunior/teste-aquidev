import { Request, Response } from "express"
import { retrieveEspecificProductService } from "../../services/product/retrieveEspecificProduct.service"

export const retrieveEspecifProductController = async (req: Request, res: Response) => {

    const productId = Number(req.params.id)

    const product = await retrieveEspecificProductService(productId)

    return res.status(200).json(product)
}