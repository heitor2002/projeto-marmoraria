import SwiperProductsHome from "./SwiperProductsHome";

export default async function SectionProjectsHome() {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/products` )
  const data = await response.json()

  return (
    <section className="bg-zinc-100 relative py-16">
      <div className="container">
        <h2 className="text-zinc-950 text-2xl font-thin sm:text-left text-center">
          Especializada em{" "}
          <span className="italic font-bold text-orange-600">
            revestimentos
          </span>{" "}
          de <span className="text-zinc-900 font-bold italic">túmulos, pias, soleiras, peitoris e lavatórios</span>
        </h2>
        <div className="bg-orange-500 w-full max-w-40 h-1 m-10"></div>
        <div className="container max-w-6xl">
          <SwiperProductsHome data={data}/>
        </div>
      </div>
    </section>
  );
}
