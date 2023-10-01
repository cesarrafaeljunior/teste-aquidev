import { useState } from "react";
import { Input } from "../Input/input.component";
import { Form } from "./form.component";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { ButtonForm } from "../Button";

export const FormLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Form>
      <Input
        Icon={AiOutlineMail}
        name="email"
        placeholder="Endereço de email"
        type="text"
        value={email}
        onchange={setEmail}
      />
      <Input
        Icon={GiPadlock}
        name="password"
        placeholder="Sua senha"
        type="password"
        value={password}
        onchange={setPassword}
      />
      <ButtonForm type="submit" >
        Entrar
      </ButtonForm>
    </Form>
  );
};
