"use client";
import {
  iUser,
  iUserContext,
  iUserLogin,
  iUserRegister,
} from "@/interface/user.interface";
import React, { createContext, useEffect, useState } from "react";
import { iChildren } from "./beer.context";
import { localApi } from "@/services/axios";
import nookies from "nookies";
import { useRouter } from "next/navigation";

export const userContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iChildren) => {
  const [error, setError] = useState<string>("");

  const [user, setUser] = useState<iUser>({} as iUser);

  const router = useRouter();

  const loading = () => {
    const token = nookies.get(null).token;
    if (token) {
      localApi.defaults.headers.authorization = `Bearer ${token}`;
      retrieveLoggedUser();
      router.push("/home");
    }
  };

  useEffect(() => {
    loading();
  }, []);

  const loginUser = async (userLogin: iUserLogin) => {
    await localApi
      .post("login", userLogin)
      .then((res) => {
        nookies.set(null, "token", res.data.token);
        loading();
        router.push("/home");
        setError("");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  const registerUser = async (userRegister: iUserRegister) => {
    await localApi
      .post("user", userRegister)
      .then((res) => {
        setUser(res.data.user);
        const { email, password } = userRegister;
        loginUser({ email, password });
        loading();
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  const retrieveLoggedUser = async () => {
    await localApi
      .get("user/login")
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        registerUser,
        error,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
