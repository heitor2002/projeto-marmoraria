import { query } from "@/app/lib/db";

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const projects = await query({
    query:"SELECT * FROM projects",
    values: []
  })
  return NextResponse.json(projects, {status: 201})
}

export async function POST(request:NextRequest){
  const {id, name, category, branch, images } = await request.json()

  const imgJson = JSON.stringify(images)

  const project = await query({
    query: "INSERT INTO projects (id, name, category, branch, images) VALUES (?,?,?,?,?)",
    values: [id, name, category, branch, imgJson]
  })

  return NextResponse.json({message: "Projeto cadastrados com sucesso!", posts: {project}}, {status: 201})

}