import Image from "next/image"
import logo from "../../public/logo.png"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container max-w-6xl">
      <main className="grid grid-cols-2 py-20">
        <div className="flex flex-col gap-3">
          <Image alt="logo" src={logo}/>
          <p className="mt-10 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit facere, qui at eveniet assumenda dignissimos non eaque aliquam neque aliquid consequatur quam itaque cupiditate minus, dolore laboriosam voluptates hic.</p>
          <Link href={"/"} className="py-3 border border-emerald-500 text-center max-w-xs font-bold bg-emerald-500 text-white rounded-lg duration-300 text-md mt-5 hover:scale-105">Entrar em contato via Whatsapp</Link>
        </div>
      </main>
    </div>
  )
}
