import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import SliderHome from "./components/SliderHome";
import GalleryHome from "./components/GalleryHome";
import AboutUs from "./components/AboutUs";
import Mosaic from "./components/Mosaic";
import Comments from "./components/Comments";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className="container max-w-6xl">
        <main className="grid grid-cols-2 py-20">
          <div className="flex flex-col gap-3">
            <Image alt="logo" src={logo} />
            <p className="mt-10 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              impedit facere, qui at eveniet assumenda dignissimos non eaque
              aliquam neque aliquid consequatur quam itaque cupiditate minus,
              dolore laboriosam voluptates hic.
            </p>
            <Link
              href={"/"}
              className="py-3 border border-orange-600 text-center max-w-xs font-bold bg-transparent text-orange-600 duration-300 text-md mt-5 hover:scale-105 hover:bg-orange-600 hover:text-white"
            >
              Visualizar trabalhos
            </Link>
          </div>
          <div>
            <div className="w-full h-full flex justify-end items-center">
              <div className="h-72 back-image">
                <img
                  className="w-full max-w-md h-full object-cover rounded-2xl shadow-lg"
                  src="https://png.pngtree.com/thumb_back/fw800/background/20230717/pngtree-contemporary-white-living-room-with-luxurious-marble-flooring-and-sleek-white-image_3895769.jpg"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <section className="py-10 bg-zinc-100">
        <div className="container">
          <h2 className="text-center text-3xl text-zinc-900">
            Transformando{" "}
            <span className="font-bold text-orange-600">Ideias </span>em{" "}
            <span className="font-bold text-orange-600">Elegância</span>, cada
            pedra conta uma{" "}
            <span className="font-bold text-orange-600">História.</span>
          </h2>
          <SliderHome />
        </div>
      </section>
      <section className="py-10 bg-zinc-950">
        <div className="container max-w-5xl">
          <h2 className="text-white text-2xl font-thin">
            Especializada em{" "}
            <span className="italic font-bold text-orange-600">
              revestimentos
            </span>{" "}
            de túmulos em granito, galerias e construções
          </h2>
          <div className="mx-auto my-10 bg-orange-600 w-full max-w-40 h-1"></div>
          <h2 className="text-orange-600 text-center text-3xl font-bold tracking-widest">
            Somos referência no mercado
          </h2>
          <GalleryHome />
        </div>
      </section>
      <AboutUs />
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14831.416280891588!2d-51.07769149999999!3d-21.669533399999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9496a33c45309e3b%3A0x9c8ce12cd330c7b8!2sMarmoraria%20Decore%20Adamantina!5e0!3m2!1spt-BR!2sbr!4v1705251686317!5m2!1spt-BR!2sbr"
          className="w-full h-96"
          loading="lazy"
        ></iframe>
        <Mosaic />
        <div className="container max-w-4xl -translate-y-1/2 h-10 bg-orange-600"></div>
        <Comments />
      </section>
      <Footer />
    </div>
  );
}
