import { Input } from "../Input/input.component";
import { Form } from "./form.component";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from "react";
import { ButtonForm } from "../Button";

export const FormRegister = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <Form>
      <Input
        Icon={BsFillPersonFill}
        name="name"
        placeholder="Seu nome"
        type="text"
        value={name}
        onchange={setName}
      />
      <Input
        Icon={AiOutlineMail}
        name="email"
        placeholder="Endereço de email"
        type="email"
        value={email}
        onchange={setEmail}
      />
      <Input
        Icon={GiPadlock}
        name="confirmPassword"
        placeholder="Sua senha"
        type="password"
        value={password}
        onchange={setPassword}
      />
      <Input
        Icon={GiPadlock}
        name="password"
        placeholder="Confime sua senha"
        type="password"
        value={confirmPassword}
        onchange={setConfirmPassword}
      />
      <ButtonForm  type="submit">
        Cadastrar-se
      </ButtonForm>
    </Form>
  );
};
