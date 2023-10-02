import { ButtonHTMLAttributes } from "react";

export const ButtonForm:React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ type,children,...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      className="w-[100%] h-[40px] text-white bg-transparent rounded-[10px] border mt-3"
    >{children}</button>
  );
};
