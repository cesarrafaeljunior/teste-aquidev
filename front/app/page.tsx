"use client";
import Image from "next/image";
import icon from "../public/assets/icons/beers_icon.png";
import { useState } from "react";
import { FormLogin, FormRegister } from "@/components/Form";

export default function Login() {
  const [register, setRegister] = useState<boolean>(false);

  return (
    <section className="bg_beer min-w-[100vw] min-h-[100vh] flex flex-col justify-start items-center bg-black relative">
      <Image
        src={icon}
        width={200}
        height={200}
        alt="Icon"
        className="w-[100px] h-[100px] mt-20 object-cover"
      />
      {register ? <FormRegister /> : <FormLogin />}
      <p
        className="text-white mt-8
       font-light"
      >
          {register ? "Já tem uma conta?" : "Não tem uma conta?"}
          <button className="ml-2 text-blue-500" onClick={() => setRegister(!register)}>{register ? "Entrar" : "Cadastre-se"}</button>
      </p>
    </section>
  );
}
