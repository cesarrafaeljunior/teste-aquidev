import prisma from "../../database/connect.database"

export const findOrCreateCategory = async (categoryName:string) => {
    
    const category = categoryName

        let findCategory = await prisma.category.findFirst({
            where:{
                name: category
            }
        })
    
        if(!findCategory){
            findCategory = await prisma.category.create({
                data: {
                    name: category
                }
            })
        }
        
    return findCategory
}