import { query } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = await params.id;

    const deleteProduct = await query({
        query: "DELETE FROM products WHERE id = ?",
        values: [id],
    })

    return NextResponse.json({ message: `Produto ID:${id} foi deletada com sucesso!` }, {status: 201});
  } catch (err) {
    console.log(err);
  }
}