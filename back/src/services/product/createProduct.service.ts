import prisma from "../../database/connect.database";
import { iProduct } from "../../interfaces/product.interface";
import { findOrCreateCategory } from "../../utils/product/findOrCreateCategory.utils";

export const createProductService = async (productData:iProduct) => {


    const category = await findOrCreateCategory(productData.category.name.toLowerCase())
    
    const product = await prisma.product.create({
        data:{
            name: productData.name,
            description: productData.description,
            price: productData.price,
            stock: productData.stock,
            category: {
                connect: {id: category.id}
            } 
        }
    })

    return product

}