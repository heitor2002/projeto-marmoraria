import { NextResponse } from "next/server"
import { query } from "@/app/lib/db"

export async function GET() {
  const users = await query({
    query:"SELECT * FROM users",
    values: []
  })
  return NextResponse.json(users)
}

