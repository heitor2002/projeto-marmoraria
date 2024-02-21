export default function AboutUs() {
  return (
    <section className="w-full py-20 bg-slate-100" id="aboutus">
      <div className="container max-w-3xl grid md:grid-cols-2 grid-cols-1">
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-xs h-96 back-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1689562473471-6e736b8afe15?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover custom-rounded"
            />
          </div>
        </div>
        <article className="md:mt-0 mt-16">
          <h2 className="md:text-right text-center text-3xl text-orange-700 font-bold tracking-widest">
            Sobre nós...
          </h2>
          <div className="w-full flex md:justify-end justify-center">
            <div className="w-full max-w-32 h-1 bg-orange-600 mt-5"></div>
          </div>
          <p className="text-sm md:text-right text-center mt-10">
            Há 12 anos atuando, temos o orgulho de oferecer uma vasta variedade de
            mármores, granitos, quartzitos e outras pedras naturais de todo o
            mundo. Cada peça em nossa coleção é cuidadosamente selecionada,
            refletindo a beleza atemporal e a singularidade que só as pedras
            naturais podem oferecer.
            <br />
            <br />
            O que nos diferencia na Marmoraria Decore não é apenas a
            qualidade dos nossos produtos, mas também o compromisso com a
            excelência em cada projeto. Nossa equipe trabalha em estreita
            colaboração com cada cliente, desde a concepção até a instalação
            final, para garantir que cada projeto atenda e exceda às
            expectativas mais exigentes.
          </p>
        </article>
      </div>
    </section>
  );
}
