import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 bg-zinc-950">
      <div className="container">
        <nav className="flex justify-between">
          <div className="text-white grid grid-cols-4 gap-5">
            <Link href={"/"} className="text-md font-bold hover:text-orange-600 duration-300">Página Inicial</Link>
            <Link href={"/"} className="text-md font-bold hover:text-orange-600 duration-300">Produtos</Link>
            <Link href={"/"} className="text-md font-bold hover:text-orange-600 duration-300">Projetos</Link>
            <Link href={"/"} className="text-md font-bold hover:text-orange-600 duration-300">Quem somos</Link>
          </div>
          <div className="text-white">
            <Link href={"/contato"} className="border border-white hover:border-orange-600 hover:bg-orange-600 py-2 px-5 rounded-lg duration-200">Entrar em contato</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
