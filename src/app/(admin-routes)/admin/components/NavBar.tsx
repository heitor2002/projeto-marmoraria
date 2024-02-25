import Link from "next/link";

export default function NavBar() {
  return (
    <aside className="col-span-2">
      <nav className="flex flex-col gap-3 text-lg nav-links-admin-page">
        <Link href={"/admin"}>Página do administrador</Link>
        <Link href={"/admin/adicionar/projetos"}>Gerenciar projetos</Link>
        <Link href={"/admin/adicionar/produtos"}>Gerenciar produtos</Link>
        <Link href={"/admin/adicionar/imagens"}>Gerenciar imagens</Link>
        <Link href={"/admin/usuario"}>Gerenciar usuário</Link>
      </nav>
    </aside>
  );
}
