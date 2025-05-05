import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const formSchema = z.object({
  email: z.string().nonempty("Email is required"),
  username: z
    .string()
    .nonempty("Username is required")
    .min(6, { message: "Username should be at least 6 characters" })
    .max(16, { message: "Username can't be more than 16 characters" }),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, { message: "Password should be at least 8 characters" })
    .max(16, { message: "Password can't be more than 16 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z]).*$/),
});

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const raw = {
    email: formData.get("email")?.toString() || "",
    username: formData.get("username")?.toString() || "",
    password: formData.get("password")?.toString() || "",
  };

  const result = formSchema.safeParse(raw);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.flatten().fieldErrors },
      { status: 200 }
    );
  }

  return NextResponse.json({ message: "Login successful", data: result.data });
}
