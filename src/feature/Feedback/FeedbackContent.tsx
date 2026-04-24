
import { StarSolid } from "iconoir-react";

interface FeedbackContentInterface {
    name : string;
    feedback : string;
    date: string;
}
export default function FeedbackContent({ name , feedback , date } : FeedbackContentInterface) {
   
    return <div className="feedback-div p-10 grid grid-cols-1 w-full gap-6">
        <div className="flex justify-between items-center gap-5 md:mx-16">
            <div className="overflow-hidden rounded-full">
                <img src={`https://ui-avatars.com/api/?name=${name}`} />
            </div>
            <div className="grow flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
                <div className="grow">
                    <p className="jockey-regular text-[24px]">{name}</p>
                    <div className="flex gap-1">
                        <StarSolid color="#B0F308" />
                        <StarSolid color="#B0F308" />
                        <StarSolid color="#B0F308" />
                        <StarSolid color="#B0F308" />
                        <StarSolid color="#B0F308" />
                    </div>

                </div>
                <div className="noto-music-regular text-[14px] md:text-[16px] opacity-60">
                    <p >{date}</p>
                </div>
            </div>
        </div>
        <div className="md:mx-16 md:ml-38">
            <p className="noto-music-regular leading-7">{feedback}</p>
        </div>
    </div>
}