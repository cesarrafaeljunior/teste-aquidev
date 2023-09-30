import { Request,Response } from "express";
import { iUser, iUserResponse } from "../../interfaces/user.interface";
import { createUserService } from "../../services/user/createUser.service";

export const createUserController = async (req: Request, res:Response,) => {
    
    const userData:iUser = req.body;

    const user:iUserResponse = await createUserService(userData)

    return res.status(201).json(user)
}