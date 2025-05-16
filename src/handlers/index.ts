import { DefaultResponse, RegisterUserCredential } from "../types";

export async function RegisterUser(
  request: RegisterUserCredential
): Promise<DefaultResponse> {
  try {
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error("Problem with response: server error");
    }

    const data: DefaultResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
}
