import type { MouseEvent, ReactNode } from "react";

type ButtonType = "danger" | "warning" | "default";
interface ButtonInterface {
    value: string;
    type: ButtonType;
    customClass?: string;
    children?: ReactNode;
    onclick?: (e: MouseEvent<HTMLButtonElement>) => void;
    isCopied?: boolean;
}
export default function Button({
    value, type = "default", customClass, children, onclick, isCopied = false
}: ButtonInterface) {

    return <div className="relative">
        <button className={`cursor-pointer ${customClass}  btn-${type}`} onClick={onclick}>
            {value}
            {children}
        </button>
        {
            isCopied ? (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap">
                    Copied!
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                </div>
            ) : ""
        }

    </div>
}