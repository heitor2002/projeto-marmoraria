import Image from "next/image";
import wave from "../../../public/wave.png";

export default function SectionProjectsHome() {
  return (
    <section className="bg-zinc-100 relative py-16">
      <div className="container">
        <h2 className="text-zinc-950 text-2xl font-thin sm:text-left text-center">
          Especializada em{" "}
          <span className="italic font-bold text-orange-600">
            revestimentos
          </span>{" "}
          de túmulos em granito, galerias e construções
        </h2>
        <div className="bg-orange-500 w-full max-w-40 h-1 mb-20 mt-10"></div>
        <div className="container max-w-6xl grid grid-cols-2 gap-5 ">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1590227344930-9e75284f8de9?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="hover:scale-105 duration-200"
            />
            <img
              src="https://www.funerariaarce.com.br/wp-content/uploads/2019/02/tipos-de-tumulos-corpo-granito.jpg"
              alt=""
              className="hover:scale-105 duration-200"
            />
            <img
              src="https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="hover:scale-105 duration-200"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1661963784453-1b96c2bb5aaa?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="hover:scale-105 duration-200"
            />
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
