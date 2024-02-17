import { NextResponse } from "next/server"
import { query } from "@/app/lib/db"

export async function GET() {
  const products = await query({
    query:"SELECT * FROM products",
    values: []
  })
  return NextResponse.json(products)
}

