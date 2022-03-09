import {ReactNode} from "react";

export function TextWrapper({children}: { children: ReactNode }) {
    return (
        <p className={"text-xs md:text-lg text-neutral-100 font-light leading-loose"}>{children}</p>
    )
}