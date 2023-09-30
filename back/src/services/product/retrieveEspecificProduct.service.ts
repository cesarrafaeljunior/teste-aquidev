import { iProductResponse } from "../../interfaces/product.interface"
import { returnProductSchema } from "../../schemas/product.schemas"
import { findProductId } from "../../utils/product/findProductId.utils"

export const retrieveEspecificProductService = async (productId: number):Promise<iProductResponse> => {
 
    const product:iProductResponse = await findProductId(productId)

    const productResponse:iProductResponse = returnProductSchema.parse(product)

    return productResponse
}