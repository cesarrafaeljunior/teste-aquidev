import prisma from "../../database/connect.database"

export const retrieveProductsService = async () =>{

    const products = await prisma.product.findMany()

    return products
}