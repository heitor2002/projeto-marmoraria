"use client";

import { Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function SliderBanner() {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-0 object-cover bg-orange-300">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="w-full h-full bg-orange-500">
            {/* <img
              src="https://static.hbt.triider.com.br/files/dynamic_content/fazer-pia-de-marmore-2937798_big.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            /> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
