import { useRef } from "react";
import FeedbackContent from "./FeedbackContent";
import useCarouselHook from "../../hooks/useCarouselHook";


export default function FeedbackSection() {
    const feedBackRef = useRef(null);
    const {
        displayFeedback
    } = useCarouselHook()



    return <div>
        <div ref={feedBackRef} className="bg-(--card-surface-color)  rounded-[20px] overflow-hidden flex ">
            {
                displayFeedback.map((val, index) => (
                    <FeedbackContent key={index} name={val.name} date={val.date} feedback={val.description} />
                ))
            }
        </div>
    </div>
}