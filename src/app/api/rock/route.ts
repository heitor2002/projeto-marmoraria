import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    [
      {
        name: "Amarelo Capri",
        category: "Granito",
        urlImage: "https://pietradimarmo.com.br/wp-content/uploads/2019/07/Amarelo-Capri-1.jpg"
      },
      {
        name: "Amarelo Florença",
        category: "Granito",
        urlImage: "https://www.magmamarmores.com.br/imagens/produtos/granito/granito-amarelo-florenca-1.jpg"
      },
      {
        name: "Azul Night",
        category: "Granito",
        urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5M_4e27ckBq-Q50K_4E0xaaUtPA9riP67NYC5QbYtShUf48LqV3wwxbYqRTkpUToeX0&usqp=CAU"
      },
      {
        name: "Preto Absoluto",
        category: "Granito",
        urlImage: "https://http2.mlstatic.com/D_NQ_NP_840733-MLB27677458820_072018-O.webp"
      },
      {
        name: "Carrara",
        category: "Mármore",
        urlImage: "https://casoca.com.br/media/catalog/product/cache/image/900x900/e9c3970ab036de70892d86c6d221abfe/c/a/carrara.jpg"
      },
      {
        name: "Nero",
        category: "Mármore",
        urlImage: "https://www.magmamarmores.com.br/imagens/produtos/marmores/marmore-nero-marquina-01.jpg"
      },
      {
        name: "Calacatta Oro",
        category: "Mármore",
        urlImage: "https://lojaacal.vteximg.com.br/arquivos/ids/193847-1000-1000/Porcelanato-945X945cm-Calacatta-Oro-Supreme-Matte-Cerbras-797177.jpg?v=637927967811770000"
      },
      {
        name: "Quartzito",
        category: "Quartzito",
        urlImage: ""
      },
      {
        name: "Dekton",
        category: "Dekton",
        urlImage: ""
      },
      {
        name: "Silestone",
        category: "Silestone",
        urlImage: ""
      },
      {
        name: "Quartzo",
        category: "Quartzo",
        urlImage: ""
      },
      {
        name: "Neolith",
        category: "Neolith",
        urlImage: ""
      },
    ],
    { status: 200 }
  );
}