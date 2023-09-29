import prisma from "../../database/connect.database"
import { iUser } from "../../interfaces/user.interface"
import { returnUserSchemaWithoutPassword } from "../../schemas/user.schemas"
import { findUser } from "../../utils/user/findUserInDb.utils"
import bcrypt, { hashSync } from "bcryptjs"

export const createUserService = async(userData:iUser) => {

    await findUser(userData)

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