import { iUser } from "../../interfaces/user.interface";
import prisma from "../../database/connect.database";
import { iSession } from "../../interfaces/session.interface";

export const findUser = async(userData: iUser | iSession) => {

    const findUser = await prisma.user.findUnique({
        where:{
            email: userData.email
        }
    })

    return findUser
}