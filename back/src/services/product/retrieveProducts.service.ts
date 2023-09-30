import prisma from "../../database/connect.database"
import { iProduct, iProductResponse } from "../../interfaces/product.interface"
import { returnProductSchema } from "../../schemas/product.schemas"

export const retrieveProductsService = async ():Promise<iProductResponse[]> => {

    const products:iProduct[] = await prisma.product.findMany({
        include:{
            category: true
        }
    })

    const productsResponse:iProductResponse[] = products.map(product => returnProductSchema.parse(product))

    return productsResponse
}