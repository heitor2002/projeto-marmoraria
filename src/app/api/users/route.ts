import { NextRequest, NextResponse } from "next/server";
import { query } from "@/app/lib/db";
import { userLogin } from "@/app/services/user";

export async function GET() {
  const users = await query({
    query: "SELECT * FROM users",
    values: [],
  });
  return NextResponse.json(users);
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
