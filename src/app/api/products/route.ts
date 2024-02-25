import { NextRequest, NextResponse } from "next/server"
import { query } from "@/app/lib/db"

export async function GET() {
  const products = await query({
    query:"SELECT * FROM products",
    values: []
  })
  return NextResponse.json(products)
}

export async function POST(request:NextRequest){

  const {id, product_name, product_category, product_image } = await request.json()

  const product = await query({
    query: "INSERT INTO products (id, product_name, product_category, product_image) VALUES (?,?,?,?)",
    values: [id, product_name, product_category, product_image]
  })

  return NextResponse.json({message: "Produtos cadastrados com sucesso!"}, {status: 201})

}

