import Link from "next/link";

export default function Mosaic() {
  return (
    <article className="py-10 bg-zinc-900">
      <div className="container max-w-4xl">
        <h2 className="text-zinc-100 text-2xl font-bold">
          Produtos e serviços de excelência
        </h2>
        <div className="w-full max-w-44 h-1 bg-orange-600 mt-5"></div>
        <div className="w-full grid grid-cols-2 gap-5 mt-10">
          <div className="w-full h-60">
            <img
              src="https://www.cliquearquitetura.com.br/public/Painel/midia/imagem/full/bancadas_de_cozinha_em_granito_preto_absoluto_6218.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full px-4">
            <h2 className="text-zinc-100 text-2xl font-bold">Produtos</h2>
            <div className="w-24 h-1 bg-orange-400 mt-3"></div>
            <p className="text-md text-zinc-50 font-thin mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, vitae quaerat. At adipisci facere nesciunt, sunt quasi nihil eligendi amet velit possimus pariatur autem vitae, rerum voluptatem temporibus est sed.</p>
            <Link href={"/"} className="border border-orange-500 py-3 px-5 rounded-md text-orange-500 hover:bg-orange-500 hover:text-zinc-50 duration-300">Visualizar produtos</Link>
          </div>
          <div className="w-full px-4 text-right">
            <h2 className="text-zinc-100 text-2xl font-bold">Trabalhos</h2>
            <div className="mt-3 flex justify-end">
              <div className="w-24 h-1 bg-orange-400"></div>
            </div>
            <p className="text-md text-zinc-50 font-thin mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, vitae quaerat. At adipisci facere nesciunt, sunt quasi nihil eligendi amet velit possimus pariatur autem vitae, rerum voluptatem temporibus est sed.</p>
            <Link href={"/"} className="border border-orange-500 py-3 px-5 rounded-md text-orange-500 hover:bg-orange-500 hover:text-zinc-50 duration-300">Visualizar produtos</Link>
          </div>
          <div className="w-full h-60">
            <img
              src="https://www.marmorariamasterpedras.com.br/wp-content/uploads/2023/01/Marmoraria-Feira-das-Pedras-Marmores-e-Granitos.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
