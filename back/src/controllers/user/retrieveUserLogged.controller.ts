import { Request, Response } from "express"
import { iUserResponse } from "../../interfaces/user.interface"
import { retrieveUserLoggedService } from "../../services/user/retrieveUserLogged.service"

export const retrieveUserLoggedController = async (req:Request, res:Response) => {

    req.params.user = String(req.user.id)

    const userId = Number(req.params.user)
    
    const user:iUserResponse | null = await retrieveUserLoggedService(userId)

    return res.status(200).json(user)
}