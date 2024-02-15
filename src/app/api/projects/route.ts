import image_1 from "../../../../public/example_1.jpg";
import image_2 from "../../../../public/example_2.jpg";
import image_3 from "../../../../public/example_3.jpg";

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    [
      {
        id: 1,
        name: "Granito preto",
        category: "Granito",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
      {
        id: 1,
        name: "Granito preto",
        category: "Granito",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
      {
        id: 1,
        name: "Granito preto",
        category: "Granito",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
      {
        id: 1,
        name: "Granito preto",
        category: "Granito",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
      {
        id: 1,
        name: "Granito preto",
        category: "Granito",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
      {
        id: 1,
        name: "Granito preto",
        category: "Granito",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
      {
        id: 1,
        name: "Granito preto",
        category: "Granito",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
      {
        id: 1,
        name: "Granito preto",
        category: "Granito",
        branch: "Túmulos",
        urlImages: [image_1, image_2, image_3],
      },
    ],
    { status: 200 }
  );
}
