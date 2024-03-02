import connectMongo from "@/app/lib/db";
import Products from "@/app/lib/productSchema";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try{
    await connectMongo();
    const id = await params.id;
    await Products.findByIdAndDelete(id);
    return NextResponse.json({ message: `Imagem ${id} foi deletada com sucesso!` }, { status: 200 });
  }catch(error){
    console.log(error)
  }
}