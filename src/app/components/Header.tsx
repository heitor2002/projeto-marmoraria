import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import MenuMobile from "./MenuMobile";

export default function Header() {
  return (
    <header className="py-5 bg-zinc-950">
      <div className="container max-w-7xl">
        <MenuMobile />
        <nav className="hidden md:flex justify-between items-center">
          <Link href={"/"} className="">
            <Image alt="logo" src={logo} className="w-40" />
          </Link>
          <div className="text-white flex gap-5">
            <Link
              href={"/"}
              className="text-md font-bold hover:text-orange-600 duration-300"
            >
              Página Inicial
            </Link>
            <Link
              href={"/"}
              className="text-md font-bold hover:text-orange-600 duration-300"
            >
              Produtos
            </Link>
            <Link
              href={"/"}
              className="text-md font-bold hover:text-orange-600 duration-300"
            >
              Projetos
            </Link>
            <Link
              href={"/"}
              className="text-md font-bold hover:text-orange-600 duration-300"
            >
              Quem somos
            </Link>
          </div>
          <div className="text-white flex gap-5">
            <Link
              href={"/contato"}
              className="border border-white hover:border-orange-600 hover:bg-orange-600 py-2 px-5 rounded-lg duration-200"
            >
              Entrar em contato
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
