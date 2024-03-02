import connectMongo from "@/app/lib/db";
import Images from "@/app/lib/imageSchema";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try{
    await connectMongo();
    const id = await params.id;
    await Images.findByIdAndDelete(id);
    return NextResponse.json({ message: `Imagem ${id} foi deletada com sucesso!` }, { status: 200 });
  }catch(error){
    console.log(error)
  }
}
