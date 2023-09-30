import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.errors";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const verifyTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new AppError("Authentication token not found", 400);
  }

  const token = authToken.split(" ")[1];

  jwt.verify(token, `${process.env.SECRET_KEY}`, (error, decoded: any) => {
    if (error) {
      throw new AppError(`${error}`, 401);
    }

    req.user = {
      id: decoded.sub,
      name: decoded.name,
    };

    return next();
  });
};
