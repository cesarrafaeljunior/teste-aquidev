import prisma from "../../database/connect.database"
import { AppError } from "../../errors/AppError.errors"

export const retrieveEspecificProductService = async (productId: number) => {
 
    const product = await prisma.product.findUnique({
        where:{
            id: productId,
        },include:{
            category: true
        }
    })

    if(!product){
        throw new AppError("Product not found",404)
    }

    return product
}