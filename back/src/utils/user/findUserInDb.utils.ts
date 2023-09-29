import { iUser } from "../../interfaces/user.interface";
import prisma from "../../database/connect.database";
import { AppError } from "../../errors/AppError.errors";

export const findUser = async(userData: iUser) => {

    const findUser = await prisma.user.findFirst({
        where:{
            email: userData.email
        }
    })

    if(findUser){
      throw new AppError("Email already registered", 409)
    }

    return
}