export default function SectionProjectsHome() {
  const urlImages:string[] = [
    "https://marmoraria-storage.s3.sa-east-1.amazonaws.com/tumulo-modelo-home.jpg",
    "https://marmoraria-storage.s3.sa-east-1.amazonaws.com/pia-modelo-home-2.jpg",
    "https://marmoraria-storage.s3.sa-east-1.amazonaws.com/pia-modelo-home.jpg",
    "https://marmoraria-storage.s3.sa-east-1.amazonaws.com/tumulo-modelo-home-2.jpg",
  ]
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
        <div className="bg-orange-500 w-full max-w-40 h-1 mb-20 mt-10"></div>
        <div className="container max-w-6xl grid grid-cols-2 gap-5 ">
          <div className="grid grid-cols-2 gap-4">
            {urlImages.map(image => {
              return <img
              src={image}
              alt=""
              className="hover:scale-105 duration-200 w-full h-full max-h-44 object-cover"
            />
            })}
          </div>
          <div className="flex justify-end relative z-10">
            <img
              src="https://neromarmores.com.br/wp-content/uploads/2021/03/product-item.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
