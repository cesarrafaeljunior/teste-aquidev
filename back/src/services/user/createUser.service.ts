import prisma from "../../database/connect.database"
import { AppError } from "../../errors/AppError.errors"
import { iUser, iUserResponse } from "../../interfaces/user.interface"
import { returnUserSchemaWithoutPassword } from "../../schemas/user.schemas"
import { findUser } from "../../utils/user/findUserInDb.utils"
import { hashSync } from "bcryptjs"

export const createUserService = async(userData:iUser): Promise<iUserResponse> => {

    const existsUser:iUserResponse | null = await findUser(userData)

    if(existsUser){
        throw new AppError("Email already registered", 409)
    }

    const hashPassword = hashSync(userData.password,10)

    const user:iUserResponse = await prisma.user.create({
        data:{
            ...userData,
            password: hashPassword
        }
    })

    const userResponse:iUserResponse = returnUserSchemaWithoutPassword.parse(user)

    return userResponse
}