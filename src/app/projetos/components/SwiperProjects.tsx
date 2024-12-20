"use client";

import { TypeSingleProject } from "@/types/apiTypes";
import { Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

export default function SwiperProjects({
  data,
}: {
  data: TypeSingleProject[];
}) {

  return (
    <div>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={10}
        breakpoints={{
          630: {
            slidesPerView: 2
          },
          920: {
            slidesPerView: 3
          },
          1300: {
            slidesPerView: 4
          },
        }}
      >
        {data.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full max-w-80 border border-zinc-400">
              <img src={data.images[0].urlImage} alt="" className="w-full h-36 object-cover" />
              <div className="py-3 px-2">
                <h2 className="text-lg font-bold">{data.name}</h2>
                <h3 className="text-sm text-zinc-700">Categoria: {data.category}</h3>
                <h3 className="text-sm text-zinc-700 mb-3">
                  Ramo: {data.branch}
                </h3>
                <Link href={"/projetos/" + data._id}>
                  <h2 className="w-full bg-orange-500 text-white py-1 text-center text-md">
                    Ver mais
                  </h2>
                </Link>
              </div>
            </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
