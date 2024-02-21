import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-10 bg-stone-800">
      <div className="container md:max-w-5xl max-w-2xl grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-5 text-white sm:text-left text-center">
        <div>
          <h2 className="text-2xl font-bold">Páginas</h2>
          <nav className="flex flex-col mt-5 gap-3">
            <Link href={"/"} className="text-zinc-500 hover:text-white">
              Página inicial
            </Link>
            <Link href={"/produtos"} className="text-zinc-500 hover:text-white">
              Produtos
            </Link>
            <Link href={"/projetos"} className="text-zinc-500 hover:text-white">
              Projetos
            </Link>
            <Link href={"/#aboutus"} className="text-zinc-500 hover:text-white">
              Sobre nós
            </Link>
          </nav>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Social</h2>
          <nav className="flex flex-col mt-5 gap-3">
            <Link href={"/"} className="text-zinc-500 hover:text-white">
              Facebook
            </Link>
            <Link href={"/"} className="text-zinc-500 hover:text-white">
              Instagram
            </Link>
          </nav>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Contato</h2>
          <nav className="flex flex-col mt-5 gap-5">
            <Link href={"/contato"} className="text-zinc-500 hover:text-white">
              <h2>Marcos Vendedor:</h2>
              <div className="flex gap-3 mt-3 sm:justify-start justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <h2>(18) 9 9146-5072</h2>
              </div>
            </Link>
            <Link href={"/contato"} className="text-zinc-500 hover:text-white">
              <div className="flex gap-3 mt-3 sm:justify-start justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <h2>(18) 9 9668-0223</h2>
              </div>
            </Link>
            <Link href={"/contato"} className="text-zinc-500 hover:text-white">
              <h2>Escritório:</h2>
              <div className="flex gap-3 mt-3 sm:justify-start justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <h2>(18) 3522-8990</h2>
              </div>
            </Link>
          </nav>
        </div>
      </div>
      <div className="bg-stone-900 mt-10">
        <div className="container max-w-3xl text-zinc-200">
          <h2 className="py-5">
            © 2024 Todos os direitos reservados | Marmoraria Decore
          </h2>
        </div>
      </div>
    </footer>
  );
}
