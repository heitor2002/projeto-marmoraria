import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    [
      {
        name: "Granito",
        category: "Granito",
        id: 1,
      },
      {
        name: "Mármore",
        category: "Mármore",
        id: 2,
      },
      {
        name: "Quartzito",
        category: "Quartzito",
        id: 3,
      },
      {
        name: "Dekton",
        category: "Dekton",
        id: 4,
      },
      {
        name: "Silestone",
        category: "Silestone",
        id: 5,
      },
      {
        name: "Quartzo",
        category: "Quartzo",
        id: 6,
      },
      {
        name: "Neolith",
        category: "Neolith",
        id: 7,
      },
      {
        name: "Granito 2",
        category: "Granito",
        id: 7,
      },
    ],
    { status: 200 }
  );
}