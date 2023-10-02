"use client";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import { ButtonHTMLAttributes } from "react";

export const LogoutButton: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement>
> = ({ type, children, ...rest }) => {
  const router = useRouter();

  const logout = () => {
    console.log("Oláaa");
    destroyCookie(null, "token");
    router.push("/");
  };

  return (
    <button
      {...rest}
      type={type}
      className="p-[0.3rem] bg-white border border-white rounded-md hover:bg-amber-400 hover:border-amber-400 font-medium transition-all"
      onClick={() => logout()}
    >
      {children}
    </button>
  );
};
