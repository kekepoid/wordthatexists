import {ReactNode} from "react";

export function Link({children, link}: { children: ReactNode, link: string }) {
    return (
        <a href={link}
           className={"mt-6 sm:mt-12 bg-neutral-800 hover:bg-neutral-700 transition py-2 px-4 rounded text-md text-neutral-100 font-light"}>
            {children}
        </a>
    )
}