import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/app/lib/db";
import { userLogin } from "@/app/services/user";
import Users from "@/app/lib/usersSchema";

export async function GET() {
  await connectMongo()

  const users = await Users.find({}).sort({_id: -1})
  return NextResponse.json(users, {status: 201})
}

export async function POST(request: NextRequest) {
  try {
    const user = await request.json();

    const login = await userLogin(user);

    return NextResponse.json(login);
  } catch (error) {
    console.log(error);
  }
}
