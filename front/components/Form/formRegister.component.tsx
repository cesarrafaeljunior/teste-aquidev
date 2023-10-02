import { Input } from "../Input/input.component";
import { Form } from "./form.component";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { ButtonForm } from "../Button";
import { userContext } from "@/contexts/user.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iUserRegister } from "@/interface/user.interface";
import { registerSchema } from "@/schemas/register.schema";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegister>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const { registerUser, error } =
    useContext(userContext);

  return (
    <Form onSubmit={handleSubmit(registerUser)}>
      <Input
        Icon={BsFillPersonFill}
        name="name"
        placeholder="Seu nome"
        type="text"
        register={register}
        error={errors.name?.message}
      />
      <Input
        Icon={AiOutlineMail}
        name="email"
        placeholder="Endereço de email"
        type="email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        Icon={GiPadlock}
        name="password"
        placeholder="Sua senha"
        type="password"
        register={register}
        error={errors.password?.message}
      />
      <Input
        Icon={GiPadlock}
        name="confirmPassword"
        placeholder="Confime sua senha"
        type="password"
        register={register}
        error={errors.confirmPassword?.message}
      />
      {error && <p className="errors">{error}</p>}
      <ButtonForm type="submit">Cadastrar-se</ButtonForm>
    </Form>
  );
};
