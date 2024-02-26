"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import Rewiewcard from "./rewiewcard";

export default function Slider() {
  return (
    <div className="slider h-[70vh] bg-slate-100 flex flex-col items-center">
      <h className="text-5xl font-semibold mt-20 mb-7">
        Student's testonomials
      </h>
      <p className="w-[70%] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam
        deserunt fuga soluta officiis, pariatur non labore similique, quisquam
        harum tenetur asperiores enim velit quibusdam fugit corrupti suscipit
        culpa libero.
      </p>
      <div className="swiper mt-16 w-[90%]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          className=" h-[30vh]"
          pagination={true}
          spaceBetween={50}
          slidesPerView={4}
        >
          <SwiperSlide>
            <Rewiewcard />
          </SwiperSlide>
          <SwiperSlide>
            <Rewiewcard />
          </SwiperSlide>
          <SwiperSlide>
            <Rewiewcard />
          </SwiperSlide>
          <SwiperSlide>
            <Rewiewcard />
          </SwiperSlide>
          <SwiperSlide>
            <Rewiewcard />
          </SwiperSlide>
          <SwiperSlide>
            <Rewiewcard />
          </SwiperSlide>
          <SwiperSlide>
            <Rewiewcard />
          </SwiperSlide>
          <SwiperSlide>
            <Rewiewcard />
          </SwiperSlide>
          <SwiperSlide>
            <Rewiewcard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
