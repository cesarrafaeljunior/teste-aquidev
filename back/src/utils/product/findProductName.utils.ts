import prisma from "../../database/connect.database"
import { AppError } from "../../errors/AppError.errors"

export const findProductName = async (name:string) => {

    const findProduct = await prisma.product.findFirst({
        where:{
            name: name
        }
    })

    if(findProduct){
        throw new AppError("Product with the same name already registered",409)
    }

    return
}
