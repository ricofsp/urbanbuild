import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderButton from "./SliderButton";

const Slider = () => {
  return (
    <Swiper className="bg-white shadow-custom w-full max-w-[630px] h-[200px]">
      {/* slide 1 */}
      <SwiperSlide>
        <div className="flex items-center h-[200px] px-12 gap-9 md:pl-[70px]">
          {/* avatar */}
          <div className="relative hidden lg:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              alt=""
              width={90}
              height={90}
              className="object-contain"
              quality={100}
            />
          </div>
          {/* text */}
          <div className="flex-1 lg:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, whitten budget and top quality
              work. High recommended!
            </p>
            <p className="font-semibold font-dmSans text-primary">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 2 */}
      <SwiperSlide>
        <div className="flex items-center h-[200px] px-12 gap-9 md:pl-[70px]">
          {/* avatar */}
          <div className="relative hidden lg:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              alt=""
              width={90}
              height={90}
              className="object-contain"
              quality={100}
            />
          </div>
          {/* text */}
          <div className="flex-1 lg:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, whitten budget and top quality
              work. High recommended!
            </p>
            <p className="font-semibold font-dmSans text-primary">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 3 */}
      <SwiperSlide>
        <div className="flex items-center h-[200px] px-12 gap-9 md:pl-[70px]">
          {/* avatar */}
          <div className="relative hidden lg:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              alt=""
              width={90}
              height={90}
              className="object-contain"
              quality={100}
            />
          </div>
          {/* text */}
          <div className="flex-1 lg:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, whitten budget and top quality
              work. High recommended!
            </p>
            <p className="font-semibold font-dmSans text-primary">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 4 */}
      <SwiperSlide>
        <div className="flex items-center h-[200px] px-12 gap-9 md:pl-[70px]">
          {/* avatar */}
          <div className="relative hidden lg:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              alt=""
              width={90}
              height={90}
              className="object-contain"
              quality={100}
            />
          </div>
          {/* text */}
          <div className="flex-1 lg:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, whitten budget and top quality
              work. High recommended!
            </p>
            <p className="font-semibold font-dmSans text-primary">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 5 */}
      <SwiperSlide>
        <div className="flex items-center h-[200px] px-12 gap-9 md:pl-[70px]">
          {/* avatar */}
          <div className="relative hidden lg:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              alt=""
              width={90}
              height={90}
              className="object-contain"
              quality={100}
            />
          </div>
          {/* text */}
          <div className="flex-1 lg:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, whitten budget and top quality
              work. High recommended!
            </p>
            <p className="font-semibold font-dmSans text-primary">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slider btn */}
      <SliderButton />
    </Swiper>
  );
};

export default Slider;
