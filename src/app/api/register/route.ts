import { NextRequest, NextResponse } from "next/server";
import { DefaultResponse } from "../../../../types";

export async function POST(request: NextRequest): Promise<DefaultResponse> {
  const { email, username, password } = await request.json();

  console.log(email, username, password);

  return NextResponse.json({ message: "", isSuccess: true, data: "" });
}
