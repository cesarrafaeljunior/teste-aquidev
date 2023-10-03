import { Dispatch, SetStateAction } from "react";

export interface iUser {
  id: number;
  name: string;
  email: string;
  createdAt: Date | string;
}

export interface iUserLogin {
    email: string;
    password: string
}

export interface iUserRegister extends iUserLogin {
    name: string;
    confirmPassword: string
}

export interface iUserContext {
  user: iUser;
  error:string
  setUser: Dispatch<SetStateAction<iUser>>
  loginUser: (userLogin:iUserLogin) => Promise<void>
  registerUser: (userRegister:iUserRegister) => Promise<void>
}
