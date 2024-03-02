import { NextRequest, NextResponse } from "next/server"
import connectMongo from "@/app/lib/db"
import Products from "@/app/lib/productSchema";

export async function GET() {
  await connectMongo()

  const products = await Products.find({}).sort({_id: -1})
  return NextResponse.json(products, {status: 201})
}

export async function POST(request: NextRequest) {
  const { productName, productCategory, productImage } =
    await request.json();

  await connectMongo();

  await Products.create({ productName, productCategory, productImage });
  return NextResponse.json({ message: "Post created!" }, { status: 200 });
}

