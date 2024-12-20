import Link from "next/link";

export default function Mosaic() {
  return (
    <article className="pt-10 pb-20 bg-zinc-900">
      <div className="container md:max-w-4xl max-w-md">
        <h2 className="text-zinc-100 text-2xl font-bold">
          Produtos e serviços de excelência
        </h2>
        <div className="w-full max-w-44 h-1 bg-golden mt-5"></div>
        <div className="w-full md:grid md:grid-cols-2 flex flex-col gap-5 mt-10">
          <div className="w-full h-60">
            <img
              src="https://marmoraria-storage.s3.sa-east-1.amazonaws.com/quartzito_cristallo_translucido.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full px-4 md:text-left text-center">
            <h2 className="text-zinc-100 text-2xl font-bold">Produtos</h2>
            <div className="w-24 h-1 bg-golden mt-3 md:mx-0 mx-auto"></div>
            <p className="text-md text-zinc-50 font-thin mt-3 md:mb-5 mb-10">
              Com uma vasta variedade de mármores, granitos, quartzitos e outras
              pedras naturais, cada peça em nossa coleção conta uma história de
              singularidade e sofisticação. Desde bancadas de cozinha a
              túmulos, nossos produtos são cuidadosamente
              selecionados para oferecer qualidade inigualável e durabilidade
              excepcional.
            </p>
            <Link
              href={"/produtos"}
              className="border border-orange-500 py-3 px-5 rounded-md text-orange-500 hover:bg-orange-500 hover:text-zinc-50 duration-300"
            >
              Visualizar produtos
            </Link>
          </div>
          <div className="w-full px-4 md:text-right text-center md:order-3 order-4">
            <h2 className="text-zinc-100 text-2xl font-bold ">Projetos</h2>
            <div className="mt-3 flex md:justify-end justify-center">
              <div className="w-24 h-1 bg-orange-400"></div>
            </div>
            <p className="text-md text-zinc-50 font-thin mt-3 md:mb-5 mb-10">
              Além da nossa vasta gama de produtos, destacamo-nos por nosso
              compromisso com o design personalizado. Nossa equipe de
              especialistas trabalha em estreita colaboração com cada cliente
              para criar soluções exclusivas que atendam às suas necessidades e
              superem suas expectativas.
            </p>
            <Link
              href={"/projetos"}
              className="border border-orange-500 py-3 px-5 rounded-md text-orange-500 hover:bg-orange-500 hover:text-zinc-50 duration-300"
            >
              Visualizar projetos
            </Link>
          </div>
          <div className="w-full h-60 md:order-4 order-3 md:mt-0 mt-10">
            <img
              src="https://marmoraria-storage.s3.sa-east-1.amazonaws.com/pia-modelo-home.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
