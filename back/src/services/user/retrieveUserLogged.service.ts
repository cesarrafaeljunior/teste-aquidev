import prisma from "../../database/connect.database"
import { iUserResponse } from "../../interfaces/user.interface"
import { returnUserSchemaWithoutPassword } from "../../schemas/user.schemas"

export const retrieveUserLoggedService = async (userId:number): Promise<iUserResponse | null> => {

    const userLogged:iUserResponse | null = await prisma.user.findUnique({
        where:{
            id: userId
        }
    })

    const userResponse:iUserResponse = returnUserSchemaWithoutPassword.parse(userLogged)


    return userResponse
}