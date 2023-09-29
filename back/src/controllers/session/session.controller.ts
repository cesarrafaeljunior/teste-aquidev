import { Request, Response } from "express";
import { sessionService } from "../../services/session/session.service";

export const sessionControler = async(req:Request, res:Response) => {

    const userSession = req.body;

    const token= await sessionService(userSession)

    return res.status(200).json({token:token})
}