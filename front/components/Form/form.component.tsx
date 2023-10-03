import { ReactNode } from "react";


interface iChildren{
    children: ReactNode
    onSubmit: any
}

export const Form = ({children,onSubmit}:iChildren ) => {
    return <form action="" className="w-full max-w-[700px] h-full mt-20 px-5 flex flex-col items-center justify-between gap-8 md:gap-[3rem]" onSubmit={(e) => onSubmit(e)}>{children}</form>
}

