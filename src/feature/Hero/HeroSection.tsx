import SignatureDrink from "../../assets/images/hero-image.png";
import Button from "../../components/Button";

export default function HeroSection() {
    return <div className="flex items-center justify-center flex-col sm:flex-row ">
        <div className="hero-details z-10 -mr-5">
            <p className="jockey-regular text-[64px]">TIBUOK</p>
            <p className="sil-regular text-[95px] -mt-16 text-(--primary-color)">SPECIAL</p>
            <p className="noto-music-regular text-[20px] mb-6">Elevate your caffeine experience as we serve you a coffee filled with joy</p>
            <Button type="danger" value="" customClass="text-[20px] jockey-regular px-6 py-2 rounded-full">
                <a href="https://maps.app.goo.gl/x4Up4Qu3p2xGUnkd7" target="_blank">
                    VISIT US
                </a>
            </Button>           
        </div>
        <div className="hidden md:block">
            <img className="w-170" src={SignatureDrink} alt="Tibuok" />
        </div>
    </div>
}