import Image from "next/image"
import logo from "../../public/logo.png"
import Link from "next/link"

export default function Home() {
  return (
    <div>

    <div className="container max-w-6xl">
      <main className="grid grid-cols-2 py-20">
        <div className="flex flex-col gap-3">
          <Image alt="logo" src={logo}/>
          <p className="mt-10 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit facere, qui at eveniet assumenda dignissimos non eaque aliquam neque aliquid consequatur quam itaque cupiditate minus, dolore laboriosam voluptates hic.</p>
          <Link href={"/"} className="py-3 border border-emerald-500 text-center max-w-xs font-bold bg-emerald-500 text-white rounded-lg duration-300 text-md mt-5 hover:scale-105">Entrar em contato via Whatsapp</Link>
        </div>
        <div>
          <div className="w-full h-full flex justify-end items-center">
            <div className="h-72 back-image">
              <img className="w-full max-w-md h-full object-cover rounded-2xl shadow-lg" src="https://png.pngtree.com/thumb_back/fw800/background/20230717/pngtree-contemporary-white-living-room-with-luxurious-marble-flooring-and-sleek-white-image_3895769.jpg"/>
            </div>
          </div>
        </div>
      </main>
    </div>
      <section className="py-10">
        <div className="container">
          <h2 className="text-center text-3xl">Transformando <span className="font-bold text-orange-600">Ideias </span>em <span className="font-bold text-orange-600">Elegância</span>, cada pedra conta uma <span className="font-bold text-orange-600">História.</span></h2>
        </div>
      </section>
    </div>
  )
}
