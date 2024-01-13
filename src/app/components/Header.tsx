import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 bg-zinc-950">
      <div className="container">
        <nav className="flex justify-between">
          <div className="text-white grid grid-cols-4 gap-5">
            <Link href={"/"}>Página Inicial</Link>
            <Link href={"/"}>Produtos</Link>
            <Link href={"/"}>Projetos</Link>
            <Link href={"/"}>Quem somos</Link>
          </div>
          <div className="text-white">

          <Link href={""}>Entrar em contato</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
