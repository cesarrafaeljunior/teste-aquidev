import prisma from "../../database/connect.database";
import { iUserResponse } from "../../interfaces/user.interface";
import { returnUserSchemaWithoutPassword } from "../../schemas/user.schemas";

export const retrieveUsersService = async (): Promise<iUserResponse[]> => {
  const users = await prisma.user.findMany();

  const userResponse: iUserResponse[] = users.map((user) => {
    return returnUserSchemaWithoutPassword.parse(user);
  });

  return userResponse;
};
