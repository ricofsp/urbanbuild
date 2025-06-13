"use client";

import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { useSwiper } from "swiper/react";

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute z-10 flex gap-1 w-max bottom-2 right-2">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-accent text-primary text-[22px] w-[48px] h-[48px]
      flex justify-center items-center transition-all cursor-pointer "
      >
        <RiArrowLeftLine />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-accent text-primary text-[22px] w-[48px] h-[48px]
      flex justify-center items-center transition-all cursor-pointer "
      >
        <RiArrowRightLine />
      </button>
    </div>
  );
};

export default SliderButton;
