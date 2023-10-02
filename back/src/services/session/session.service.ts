import { compareSync } from "bcryptjs";
import { AppError } from "../../errors/AppError.errors";
import { iSession } from "../../interfaces/session.interface";
import { findUser } from "../../utils/user/findUserInDb.utils";
import jwt from "jsonwebtoken"
import "dotenv/config"

export const sessionService = async (sessionData: iSession) => {
  
  const user = await findUser(sessionData);

  if (!user) {
    throw new AppError("User not found, check your email/password", 403);
  }

  const matchPassword = compareSync(sessionData.password, user.password);

  if (!matchPassword) {
    throw new AppError("User not found, check your email/password", 403);
  
  }

  const token = jwt.sign({email:sessionData.email},`${process.env.SECRET_KEY}`,{
    expiresIn: "24h",
    subject: `${user?.id}`
  });

  return token
};
