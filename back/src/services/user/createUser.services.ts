import prisma from "../../database/connect.database"
import { AppError } from "../../errors/AppError.errors"
import { iUser } from "../../interfaces/user.interface"
import { returnUserSchemaWithoutPassword } from "../../schemas/user.schemas"

export const createUserService = async(userData:iUser) => {


    const findUser = await prisma.user.findFirst({
        where:{
            email: userData.email
        }
    })

    if(findUser){
        throw new AppError("Email already registered", 409)
    }

    const user = await prisma.user.create({
        data:{
            name: userData.name,
            email: userData.email,
            password: userData.password
        }
    })

    const userResponse = returnUserSchemaWithoutPassword.parse(user)

    return userResponse

}