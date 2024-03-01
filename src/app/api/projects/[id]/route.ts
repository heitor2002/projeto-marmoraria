import { query } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id
  const projects = await query({
    query:"SELECT * FROM projects WHERE id = ?",
    values: [id]
  })
  return NextResponse.json(projects, {status: 201})
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = await params.id;

    const deleteProject = await query({
      query: "DELETE FROM projects WHERE id = ?",
      values: [id],
    });

    return NextResponse.json(
      { message: `${id} foi deletado com sucesso!` },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
  }
}
