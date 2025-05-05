"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
interface Errors {
  email?: string | null;
  username?: string | null;
  password?: string | null;
}

interface User {
  email: string;
  username: string;
  password: string;
}

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .nonempty({ message: "Email is required!" }),
  username: z
    .string()
    .min(8, { message: "Username should be at least 8 characters" }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" })
    .max(16, { message: "Password can't be greater than 16 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z]).*$/, {
      message:
        "Password must contain at least one uppercase and one lowercase letter",
    }),
});

export async function handleLoginUser(
  formData: FormData
): Promise<{ errors: Errors; user?: User }> {
  const values = {
    email: formData.get("email")?.toString() || "",
    username: formData.get("username")?.toString() || "",
    password: formData.get("password")?.toString() || "",
  };

  const result = formSchema.safeParse(values);

  if (!result.success) {
    const errors: Errors = {};
    result.error.errors.forEach((err) => {
      const field = err.path[0] as keyof Errors;
      errors[field] = err.message;
    });

    return { errors };
  } else {
    console.log("user login successfully");
    redirect("/");
  }
}
