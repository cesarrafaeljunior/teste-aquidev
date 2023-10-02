import Image from "next/image";
import Logo from "../../public/assets/icons/logo.png";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full h-[100px] flex items-center justify-between bg-amber-950">
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
        <div className="w-[50px] h-[50px] rounded-[50%] bg-black"></div>
      </div>
    </header>
  );
};
