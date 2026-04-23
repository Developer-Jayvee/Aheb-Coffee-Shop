import { Links } from "../constant/links";
import Logo from "../assets/images/logo.png"
import { MenuScale } from "iconoir-react";
import { useState } from "react";

export default function Navbar(){
    const [navHeight, setNavHeight] = useState("h-25")
    const toggleHeight = () => {
        if(navHeight === 'h-25') setNavHeight('h-80')
        else if(navHeight === 'h-80') setNavHeight('h-25')
    }
    if(typeof window !== 'undefined'){
        window.addEventListener('resize',function(e) {
            const target = e.target as Window;
            if(target.innerWidth < 640){
                setNavHeight('h-25');
            }
        })
    }
    return <nav className={`fixed ${navHeight} select-none flex-wrap shadow-gray-400 shadow-2xl z-99 top-0 left-0 right-0 flex  justify-between items-center transition-all px-5  overflow-hidden`}>
        <div className="inline-block sm:hidden">
            <MenuScale className="cursor-pointer" onClick={toggleHeight}/>
        </div>
        <div className="">
            <img className="w-25 h-25" src={Logo} alt="Aheb Coffee Logo" />
        </div>
        <ul className=" w-full sm:w-auto mt-1 sm:mt-0  ">
            {
                Links.map( (link) => (
                    <li className="w-full   sm:inline sm:mx-4 text-center sm:text-left">
                        <a className="cursor-pointer py-2 sm:py-0 block sm:inline w-full" href={link.link}>
                            {link.name}
                        </a>
                    </li>
                ))
            }
        </ul>
    </nav>
}