import { Request, Response } from "express";
import { retrieveUsersService } from "../../services/user/retrieveUsers.service";
import { iUserResponse } from "../../interfaces/user.interface";

export const retrieveUsersController = async (req:Request ,res:Response) => {

    const users:iUserResponse[] = await retrieveUsersService()

    return res.status(200).json(users)
}