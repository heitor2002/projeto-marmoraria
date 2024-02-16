import image_1 from "../../../../public/example_1.jpg";
import image_2 from "../../../../public/example_2.jpg";
import image_3 from "../../../../public/example_3.jpg";

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    [
      {
        id: 1,
        name: "Nero",
        category: "Mármore",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
      {
        id: 2,
        name: "Preto Absoluto",
        category: "Granito",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
      {
        id: 3,
        name: "Preto Absoluto",
        category: "Granito",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
      {
        id: 4,
        name: "Preto Absoluto",
        category: "Granito",
        branch: "Construção Civil",
        urlImages: [image_1, image_2, image_3],
      },
      {
        id: 5,
        name: "Preto Absoluto",
        category: "Granito",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
      {
        id: 6,
        name: "Preto Absoluto",
        category: "Granito",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
      {
        id: 7,
        name: "Preto Absoluto",
        category: "Granito",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
      {
        id: 8,
        name: "Preto Absoluto",
        category: "Granito",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
    ],
    { status: 200 }
  );
}
