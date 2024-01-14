"use client";

import { Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function SliderHome() {
  return (
    <div className="my-20 mx-auto max-w-3xl">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="w-full h-96 rounded-2xl">
            <img
              src="https://static.hbt.triider.com.br/files/dynamic_content/fazer-pia-de-marmore-2937798_big.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-96 rounded-2xl">
            <img
              src="https://marinamarmores.com.br/wp-content/uploads/2019/08/marina-marmores-34-1024x577.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-96 rounded-2xl">
            <img
              src="https://www.cuiket.com.br/imagenes/company_photo/23220_big.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
