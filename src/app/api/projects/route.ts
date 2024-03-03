import connectMongo from "@/app/lib/db";
import Projects from "@/app/lib/projectsSchema";

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectMongo()

  const projects = await Projects.find({}).sort({_id: -1})
  return NextResponse.json(projects, {status: 201})
}

export async function POST(request: NextRequest) {
  const { name, category, branch, images, views } = await request.json();

  await connectMongo();

  await Projects.create({ name, category, branch, images, views });
  return NextResponse.json({message: "Post created!"}, {status: 201})
}