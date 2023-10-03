import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

interface iInput {
  name: string;
  placeholder: string;
  type: string;
  Icon?: IconType;
  register: any;
  error: string | undefined;
}

export const Input = ({
  name,
  placeholder,
  type,
  Icon,
  register,
  error,
}: iInput) => {
  return (
    <>
      <div className="w-full border rounded-[10px] flex items-center">
        {Icon ? (
          <Icon className=" text-white text-[2.5rem] ml-[1rem] border-r pr-2" />
        ) : null}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full h-[50px] bg-transparent pl-5 font-bold text-white outline-none outline-offset-0 rounded-[10px]"
          {...register(`${name}`)}
        />
      </div>
      <p className="errors">{error}</p>
    </>
  );
};
