import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import SliderHome from "./components/SliderHome";
import GalleryHome from "./components/GalleryHome";
import AboutUs from "./components/AboutUs";
import Mosaic from "./components/Mosaic";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import SectionProjectsHome from "./components/SectionProjectsHome";
import bgColor from "../../public/banner-home.jpg"

export default function Home() {
  return (
    <div>
      <section className="bg-zinc-950 relative">
      <div className="container lg:max-w-6xl max-w-lg relative z-10">
        <main className="lg:grid lg:grid-cols-2 flex flex-col items-center gap-5 py-20">
          <div className="flex flex-col gap-3">
            <Image alt="logo" src={logo} />
            <p className="mt-10 text-md text-zinc-50 lg:text-left text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              impedit facere, qui at eveniet assumenda dignissimos non eaque
              aliquam neque aliquid consequatur quam itaque cupiditate minus,
              dolore laboriosam voluptates hic.
            </p>
            <Link
              href={"/"}
              className="lg:px-0 px-10 py-3 border border-orange-600 text-center max-w-xs font-bold bg-orange-600 text-white duration-300 text-md mt-5 hover:scale-105 hover:bg-orange-600 lg:mx-0 mx-auto"
            >
              Visualizar trabalhos
            </Link>
          </div>
        </main>
      </div>
      <img src="https://images.unsplash.com/photo-1526868621613-18bc2df51131?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute w-full h-full top-0 left-0 object-cover z-0 brightness-50" />
      </section>
      <SectionProjectsHome />
      <section className="py-10 relative z-10">
        <div className="container max-w-5xl relative z-10">
          <div className="mx-auto my-10 bg-orange-600 w-full max-w-40 h-1"></div>
          <h2 className="text-orange-600 text-center text-3xl font-bold tracking-widest">
            Somos referência no mercado
          </h2>
          <GalleryHome />
        </div>
          <Image alt="" src={bgColor} className="absolute w-full h-full top-0 left-0 object-cover z-0" />
      </section>
      <AboutUs />
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14831.416280891588!2d-51.07769149999999!3d-21.669533399999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9496a33c45309e3b%3A0x9c8ce12cd330c7b8!2sMarmoraria%20Decore%20Adamantina!5e0!3m2!1spt-BR!2sbr!4v1705251686317!5m2!1spt-BR!2sbr"
          className="w-full h-96"
          loading="lazy"
        ></iframe>
        <Mosaic />
        <div className="container max-w-4xl -translate-y-1/2 h-10 bg-golden"></div>
        <Comments />
      </section>
      <Footer />
    </div>
  );
}
