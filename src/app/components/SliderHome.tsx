"use client";

import { Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function SliderHome() {
  return (
    <div className="mg:my-20 my-10 mx-auto md:max-w-3xl max-w-lg">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="w-full h-80">
            <img
              src="https://static.hbt.triider.com.br/files/dynamic_content/fazer-pia-de-marmore-2937798_big.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-80">
            <img
              src="https://marinamarmores.com.br/wp-content/uploads/2019/08/marina-marmores-34-1024x577.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-80">
            <img
              src="https://www.cuiket.com.br/imagenes/company_photo/23220_big.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
