import prisma from "../../database/connect.database";
import { iProduct } from "../../interfaces/product.interface";

export const createProductService = async (productData:iProduct) => {


    const category = productData.category

    let findCategory = await prisma.category.findFirst({
        where:{
            name: category.name
        }
    })

    if(!findCategory){
        findCategory = await prisma.category.create({
            data: {
                name: category.name.toLowerCase()
            }
        })
    }
    
    const product = await prisma.product.create({
        data:{
            name: productData.name,
            description: productData.description,
            price: productData.price,
            stock: productData.stock,
            category: {
                connect: {id: findCategory.id}
            } 
        }
    })

    return product

}