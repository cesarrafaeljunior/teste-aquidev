import prisma from "../../database/connect.database"
import { AppError } from "../../errors/AppError.errors"

export const findProductId = async (id:number) => {

    const findProduct = await prisma.product.findFirst({
        where:{
            id: id
        },include:{
            category: true
        }
    })

    if(!findProduct){
        throw new AppError("Product not found",404)
    }

    return findProduct
}