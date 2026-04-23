import type { ReactNode } from "react"

interface CardInterface{
    children ?: ReactNode;
    imgSrc : string;
    title ?: {
        first : string;
        second : string;
    }
}
export default function Card({ children , title , imgSrc } : CardInterface){
    
    return <div className="shadow-2xl  h-120 rounded-[20px] relative overflow-hidden">
            {children}
            <div className="absolute z-2 bottom-3 left-5 text-white ">
                <p className="sil-regular text-[40px] ">{title?.first}</p>
                <p className="sil-regular text-[40px]">{title?.second}</p>
            </div>
            <div className="relative hover:scale-110 h-full w-full transition-all delay-200 duration-200 ease-in-out">
                <img src={imgSrc} className="w-full h-full object-fit"/>
                <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/50"></div>
            </div>
    </div>
}
