import prisma from "../../database/connect.database"
import { iUserResponse } from "../../interfaces/user.interface"

export const retrieveUserLoggedService = async (userId:number): Promise<iUserResponse | null> => {

    const userLogged:iUserResponse | null = await prisma.user.findUnique({
        where:{
            id: userId
        }
    })

    return userLogged
}