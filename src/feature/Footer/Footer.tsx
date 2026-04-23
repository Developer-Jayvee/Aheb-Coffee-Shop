import { ChatBubble, Facebook, Mail, MapPin, Phone } from "iconoir-react";
import Button from "../../components/Button";
import { useState } from "react";

interface CopiedTextInterface {
    phone: boolean;
    email : boolean;
}
export default function Footer() {
    const [isCopied, setIsCopied] = useState<CopiedTextInterface>({
        phone:false,
        email:false
    });
    const handleCopy = async (key: keyof CopiedTextInterface,text: string) => {
        await navigator.clipboard.writeText(text);
        setIsCopied((prev) => ({...prev,[key]:true}));

        setTimeout(() => {
             setIsCopied((prev) => ({...prev,[key]:false}));
        }, 2000)
    }
    return <footer className="bg-(--footer-color) text-white grid grid-cols-2 gap-y-5 md:gap-y-0 md:grid-cols-[150px_1fr_auto]  items-center px-6 py-7">
        <div className="flex flex-col row-span-2">
            <p className="jockey-regular mb-1 text-[24px]">AHEB COFFEE</p>
            <p className="noto-music-regular mb-2">Antipolo City</p>
            <div className="noto-music-regular flex gap-2 mb-2">
                <MapPin fontSize={11} />
                <span className="text-[11px]">Near Taktak Rd.</span>
            </div>
            <div className="noto-music-regular flex gap-2">
                <MapPin fontSize={11} />
                <span className="text-[11px]">Olalia Rd.</span>
            </div>
        </div>
        <div className="flex justify-center gap-6 ">

            <Button customClass="rounded-full bg-(--primary-color) p-2" value=" "  type="default">
                <a href="https://www.facebook.com/profile.php?id=61571886845851" target="_blank">
                    <Facebook />
                </a>
            </Button>

            <Button onclick={() => handleCopy('phone','09175664056')} isCopied={isCopied.phone} customClass="rounded-full bg-(--primary-color) p-2" value="" type="default">
                <Phone />
            </Button>
            <Button onclick={() => handleCopy('email','ahebcoffeeph@gmail.com')}   isCopied={isCopied.email} customClass="rounded-full bg-(--primary-color) p-2" value=" " type="default">
                <Mail />
            </Button>
        </div>
        <div className="flex flex-col items-center row-start-1 col-start-2 md:row-start-1 md:col-start-3">
            <Button value="" type="default" customClass="mb-2 rounded-full border border-white px-4 py-2">
                <a className="flex gap-2" href="https://www.facebook.com/profile.php?id=61571886845851" target="_blank">
                    <ChatBubble />
                    <p className="">Message Us</p>
                </a>
            </Button>
            <p className="noto-music-regular text-[11px]">We love to hear from you</p>
        </div>
    </footer>
}