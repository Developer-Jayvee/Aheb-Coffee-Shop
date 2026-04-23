import { useEffect, useState } from "react";
import { Feedbacks } from "../constant/feedbacks";

export default function useCarouselHook() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [feedBackList, setFeedbackList] = useState(Feedbacks);
  const [displayFeedback, setDisplayFeedback] = useState([feedBackList[0]]);

  // Carousel loop - rotates through feedback items
  useEffect(() => {
    if (feedBackList.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % feedBackList.length;
        setDisplayFeedback([feedBackList[nextIndex]]);
        return nextIndex;
      });
    }, 15000); 

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [feedBackList]); // Re-run if feedBackList changes

  return {
    displayFeedback,
    currentIndex,
    setFeedbackList
  }
}
