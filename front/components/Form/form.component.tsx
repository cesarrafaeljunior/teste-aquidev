import { ReactNode } from "react";


interface iChildren{
    children: ReactNode
}

export const Form = ({children}:iChildren ) => {
    return <form action="" className="w-full h-full mt-20 px-5 flex flex-col items-center justify-between gap-3">{children}</form>
}

