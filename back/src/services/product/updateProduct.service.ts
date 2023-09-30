import prisma from "../../database/connect.database"
import { iProductPartial } from "../../interfaces/product.interface"
import { findOrCreateCategory } from "../../utils/product/findOrCreateCategory.utils"

export const updateProductService = async (productId:number, productData:iProductPartial | any) => {


    if(productData.category){

        const category = await findOrCreateCategory(productData.category.name.toLowerCase())

        productData.category = category
    }

    const updateProduct = await prisma.product.update({
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

    return updateProduct
}