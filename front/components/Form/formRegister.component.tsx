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
        placeholder="Your Name"
        type="text"
        register={register}
        error={errors.name?.message}
      />
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
        placeholder="Your password"
        type="password"
        register={register}
        error={errors.password?.message}
      />
      <Input
        Icon={GiPadlock}
        name="confirmPassword"
        placeholder="Confirm your password"
        type="password"
        register={register}
        error={errors.confirmPassword?.message}
      />
      {error && <p className="errors">{error}</p>}
      <ButtonForm type="submit">SignUp</ButtonForm>
    </Form>
  );
};
