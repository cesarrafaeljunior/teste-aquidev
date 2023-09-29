import prisma from "../../database/connect.database"
import { AppError } from "../../errors/AppError.errors"
import { iUser } from "../../interfaces/user.interface"
import { returnUserSchemaWithoutPassword } from "../../schemas/user/user.schemas"
import { findUser } from "../../utils/user/findUserInDb.utils"
import bcrypt, { hashSync } from "bcryptjs"

export const createUserService = async(userData:iUser) => {

    const existsUser = await findUser(userData)

    if(existsUser){
        throw new AppError("Email already registered", 409)
    }

    const hashPassword = hashSync(userData.password,10)

    const user = await prisma.user.create({
        data:{
            ...userData,
            password: hashPassword
        }
    })

    const userResponse = returnUserSchemaWithoutPassword.parse(user)

    return userResponse
}