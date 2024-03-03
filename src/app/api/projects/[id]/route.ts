import connectMongo from "@/app/lib/db";
import Projects from "@/app/lib/projectsSchema";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: { id: string };
};

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = params;
  await connectMongo();
  const project = await Projects.findOneAndUpdate(
    { _id: id },
    { $inc: { view: 1 } },
    { new: true }
  );
  return NextResponse.json(project, { status: 200 });
}

