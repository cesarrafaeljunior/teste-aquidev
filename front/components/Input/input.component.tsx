import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

interface iInput {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  Icon?: IconType;
  onchange: Dispatch<SetStateAction<any>>
}

export const Input = ({ name, placeholder,onchange, type, value, Icon }: iInput) => {
  return (
    <div className="w-full border rounded-[10px] flex items-center">
      {Icon ? (
        <Icon className=" text-white text-[2.5rem] ml-[1rem] border-r pr-2" />
      ) : null}
      <input
        onChange={(e) => onchange(e.target.value)}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className="w-full h-[50px] bg-transparent pl-5 font-bold text-white outline-none outline-offset-0 rounded-[10px]"
      />
    </div>
  );
};
