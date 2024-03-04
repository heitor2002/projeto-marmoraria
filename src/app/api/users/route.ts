import { NextRequest, NextResponse } from "next/server";
import { userLogin } from "@/app/services/user";

export async function POST(request: NextRequest) {
  try {
    const user = await request.json();

    const login = await userLogin(user);

    return NextResponse.json(login);
  } catch (error) {
    console.log(error);
  }
}
