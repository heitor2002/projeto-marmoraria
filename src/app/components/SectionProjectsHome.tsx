import { Suspense } from "react";
import SwiperProductsHome from "./SwiperProductsHome";
import SkeletonBox from "./SkeletonBox";

export default async function SectionProjectsHome() {
  const response = await fetch(`${process.env.NEXT_AUTH_URL}api/products`, {
    cache: "no-cache",
  });
  const data = await response.json();

  console.log(data)

  return (
    <section className="bg-zinc-100 relative py-16">
      <div className="container">
        <h2 className="text-zinc-950 text-2xl font-thin sm:text-left text-center">
          Especializada em{" "}
          <span className="italic font-bold text-orange-600">
            revestimentos
          </span>{" "}
          de{" "}
          <span className="text-zinc-900 font-bold italic">
            túmulos, pias, soleiras, peitoris e lavatórios
          </span>
        </h2>
        <div className="bg-orange-500 w-full max-w-40 h-1 m-10"></div>
        <div className="container max-w-6xl">
          <Suspense fallback={<SkeletonBox />}>
            <SwiperProductsHome data={data} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
