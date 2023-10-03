"use client";
import { useContext, useState } from "react";
import { Form } from "./form.component";
import { Input } from "../Input/input.component";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { ButtonForm } from "../Button";
import { userContext } from "@/contexts/user.context";
import { useForm } from "react-hook-form";
import { iUserLogin } from "@/interface/user.interface";
import { loginSchema } from "@/schemas/login.schema";
import { yupResolver } from "@hookform/resolvers/yup";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const { loginUser,error } = useContext(userContext);


  return (
    <Form onSubmit={handleSubmit(loginUser)}>
      <Input
        Icon={AiOutlineMail}
        name="email"
        placeholder="Email Address"
        type="email"
        register={register}
        error={errors.email?.message}
      />

      <Input
        Icon={GiPadlock}
        name="password"
        placeholder="Your Password"
        type="password"
        register={register}
        error={errors.password?.message}
      />
      {error && <p className="errors">{error}</p>}
      <ButtonForm type="submit">SignIn</ButtonForm>
    </Form>
  );
};
