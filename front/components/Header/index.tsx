import Image from "next/image";
import Logo from "../../public/assets/icons/logo.png";
import Link from "next/link";
import { useContext, useState } from "react";
import { userContext } from "@/contexts/user.context";
import { LogoutButton } from "../Button/logout.component";

export const Header = () => {

  const { user } = useContext(userContext);

  return (
    <header className="w-full h-[100px] flex items-center justify-between bg-amber-950 shadow-lg fixed z-10">
      <div className="container flex items-center justify-between">
        <div className="w-full h-full">
          <figure className="w-[100px]">
            <Link href={"/home"}>
              <Image
                src={Logo}
                alt="Logo"
                width={100}
                height={100}
                className="object-cover"
              />
            </Link>
          </figure>
        </div>
        <div className="w-full text-end flex items-center justify-end gap-4">
          <p className="w-full text-white text-[1rem]">{user.name}</p>
            <LogoutButton>Logout</LogoutButton>
        </div>
      </div>
    </header>
  );
};
