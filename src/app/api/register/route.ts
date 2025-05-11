import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  const { email, username, password } = await request.json();
  return NextResponse.json({ message: "", isSuccess: true, data: "" });
}
