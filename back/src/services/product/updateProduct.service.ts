import prisma from "../../database/connect.database"
import { iCategory, iProductPartial, iProductResponse } from "../../interfaces/product.interface"
import { returnProductSchema } from "../../schemas/product.schemas"
import { findOrCreateCategory } from "../../utils/product/findOrCreateCategory.utils"
import { findProductId } from "../../utils/product/findProductId.utils"

export const updateProductService = async (productId:number, productData:iProductPartial | any) => {

    await findProductId(productId)
    
    if(productData.category){

        const category:iCategory = await findOrCreateCategory(productData.category.name.toLowerCase())

        productData.category = category
    }

    const updateProduct:iProductPartial = await prisma.product.update({
        where:{
            id: productId
        },
        data:{
            ...productData,
            category: {
                connect: {id: productData.category.id}
            } 
        },include:{
            category: true
        }
    })

    const productResponse:iProductResponse =  returnProductSchema.parse(updateProduct)

    return productResponse
}