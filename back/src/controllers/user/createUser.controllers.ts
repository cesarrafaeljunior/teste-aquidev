import { Request,Response } from "express";
import { createUserService } from "../../services/user/createUser.services";

export const createUserController = async (req: Request, res:Response,) => {
    
    const userData = req.body;

    const user = await createUserService(userData)

    return res.status(201).json(user)
}