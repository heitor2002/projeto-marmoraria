import ServicesAndProjectsBox from "./ServicesAndProjectsBox";
import MostViewedProjects from "./MostViewedProjects";

export default async function ServicesAndProjects() {
  const dataBox = [
    { image: "https://marmoraria-storage.s3.sa-east-1.amazonaws.com/tumulo-modelo-home.jpg", title: "Túmulos", text: "Em nossa marmoraria, temos o privilégio de oferecer serviços especializados na criação e design de túmulos. Com habilidade artesanal e atenção meticulosa aos detalhes, dedicamo-nos a honrar a memória de entes queridos. Cada túmulo é concebido como uma obra única, refletindo a personalidade e o legado daqueles que partiram. Do design à instalação, comprometemo-nos a fornecer produtos de qualidade e durabilidade, além de um atendimento compassivo e respeitoso para ajudar nossos clientes em momentos delicados." },
    { image: "https://images.unsplash.com/photo-1562059942-fb30d7cb8cdf?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Lavatórios", text: "Nossa marmoraria é especializada na criação de lavatórios sob medida, oferecendo uma fusão perfeita de elegância e funcionalidade para espaços de banho. Com uma ampla variedade de materiais e acabamentos, nossos lavatórios são projetados para complementar qualquer estilo de decoração, desde o contemporâneo até o clássico. Da concepção à instalação, nossa equipe habilidosa trabalha em estreita colaboração com os clientes para garantir que cada lavatório atenda às suas necessidades específicas, resultando em uma peça única que adiciona um toque de luxo e sofisticação ao ambiente." },
    { image: "https://marmoraria-storage.s3.sa-east-1.amazonaws.com/pia-modelo-home.jpg", title: "Pias", text: "Em nossa marmoraria, temos o compromisso de criar pias que combinem estilo e praticidade. Com uma variedade de opções de design e materiais de alta qualidade, nossas pias são feitas sob medida para se adequar a qualquer espaço e necessidade. Seja para uma cozinha, banheiro ou lavabo, nossas pias são projetadas para proporcionar não apenas beleza estética, mas também durabilidade e funcionalidade excepcionais. De pias simples e elegantes a projetos mais elaborados e personalizados, estamos preparados para transformar a visão de nossos clientes em realidade." },
    { image: "https://i.pinimg.com/474x/06/1b/d5/061bd5f331757a3886524d27b7cd8cb0.jpg", title: "Soleiras", text: "As soleiras são peças essenciais em qualquer projeto de construção ou renovação, e em nossa marmoraria, nos dedicamos a fornecer soleiras de alta qualidade que agregam valor estético e funcional aos ambientes. Com uma variedade de opções de materiais, incluindo mármore, granito e pedra natural, nossas soleiras são projetadas para resistir ao desgaste diário e ao mesmo tempo adicionar um toque de elegância a portas e janelas. Com medidas precisas e acabamento impecável, nossas soleiras são uma escolha confiável para qualquer projeto residencial ou comercial." },
  ];

  const response = await fetch(`${process.env.NEXT_AUTH_URL}api/projects`, {
    cache: "no-cache",
  });
  const data = await response.json();

  return (
    <section className="container max-w-7xl flex flex-col lg:grid lg:grid-cols-11 py-10 gap-10">
      <main className="col-span-7 grid sm:grid-cols-2 gap-2">
        {dataBox.map((data, index) => (
          <ServicesAndProjectsBox
            image={data.image}
            text={data.text}
            title={data.title}
            key={index}
          />
        ))}
      </main>
      <aside className="col-span-4">
        <MostViewedProjects projects={data} />
      </aside>
    </section>
  );
}
