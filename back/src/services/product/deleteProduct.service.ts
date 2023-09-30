import prisma from "../../database/connect.database"
import { findProductId } from "../../utils/product/findProductId.utils"

export const deleteProductService = async (productId:number): Promise<void> => {

    await findProductId(productId)

    await prisma.product.delete({
        where:{
            id:productId
        }
    })

    return
}