"use client";

import { ProductProps } from "@/types/apiTypes";
import { Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

export default function SwiperProductsHome({ data }: { data: ProductProps[] }) {
  return (
    <div>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={10}
        breakpoints={{
          630: {
            slidesPerView: 2,
          },
          920: {
            slidesPerView: 3,
          },
          1300: {
            slidesPerView: 4,
          },
        }}
      >
        {data.slice(0, 10).map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full max-w-80 border border-zinc-400">
                <img
                  src={data.productImage}
                  alt=""
                  className="w-full h-36 object-cover"
                />
                <div className="py-3 px-2">
                  <h2 className="text-lg font-bold">{data.productName}</h2>
                  <h3 className="text-sm text-zinc-700">
                    Categoria: {data.productCategory}
                  </h3>
                  <Link href={"/projetos/" + data.productName}>
                    <h2 className="w-full bg-orange-500 text-white py-1 text-center text-md mt-3">
                      Ver mais
                    </h2>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <Link href={"/produtos"} className="text-zinc-100">
            <div className=" bg-orange-500 w-full h-56 flex justify-center items-center text-2xl">Veja mais</div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
