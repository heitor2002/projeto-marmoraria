import { query } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const image_id = await params.id;

    const deleteProduct = await query({
        query: "DELETE FROM db_images WHERE id = ?",
        values: [image_id],
    })

    return NextResponse.json({ message: `Imagem ID:${image_id} foi deletada com sucesso!` }, {status: 201});
  } catch (err) {
    console.log(err);
  }
}
