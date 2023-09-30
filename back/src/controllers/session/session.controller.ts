import { Request, Response } from "express";
import { sessionService } from "../../services/session/session.service";
import { iSession } from "../../interfaces/session.interface";

export const sessionControler = async(req:Request, res:Response) => {

    const userSession:iSession = req.body;

    const token = await sessionService(userSession)

    return res.status(200).json({token:token})
}