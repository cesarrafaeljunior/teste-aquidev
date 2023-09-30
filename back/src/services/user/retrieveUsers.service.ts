import prisma from "../../database/connect.database"
import { iUserResponse } from "../../interfaces/user.interface"

export const retrieveUsersService = async (): Promise<iUserResponse[]> => {

    const users = await prisma.user.findMany()

    return users
}