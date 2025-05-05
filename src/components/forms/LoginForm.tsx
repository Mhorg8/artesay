"use client";
import React, { FormEvent, useState } from "react";
import z from "zod";
import CustomInput from "../CustomInput";
import { Button } from "../ui/button";

import { FaApple, FaGoogle } from "react-icons/fa";
import { handleLoginUser } from "@/action";
import { useRouter } from "next/navigation";

interface Error {
  email?: string | null;
  username?: string | null;
  password?: string | null;
}
const LoginForm = () => {
  const [errors, setErrors] = useState<Error>({});
  const router = useRouter();
  
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.errors) {
        setErrors(data.errors);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const obj: {} = {
    username: ["Username should be at least 6 characters"],
    password: [
      "Password is required",
      "Password should be at least 8 characters",
    ],
  };

  return (
    <div className="flex-1 bg-zinc-200 h-full rounded-e-xl border-l border-l-zinc-400/40 flex flex-col items-center justify-start  w-full py-5 px-5">
      <h2 className="text-2xl font-semibold">Welcome back!</h2>
      <p className="text-zinc-800">Login in for access to all features</p>

      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <CustomInput
          type="email"
          name="email"
          placeholder="example.com"
          label="Email"
          error={errors.email ? errors.email : null}
        />
        <CustomInput
          type="text"
          name="username"
          placeholder="Jon Doe"
          label="Username"
          error={errors.username}
        />
        <CustomInput
          type="text"
          name="password"
          placeholder="******"
          label="Password"
          error={errors.password}
        />

        <div className="flex items-center justify-center gap-5 ">
          <div className="login-option hoverEffect">
            <p>Google</p>
            <FaGoogle size={20} />
          </div>
          <div className="login-option hoverEffect">
            <p>Apple</p>
            <FaApple size={20} />
          </div>
        </div>
        {errors && (
          <div className="">
            {Object.entries(errors).map(([key, error]) => {
              return <p className="text-sm text-red-400">{error as string}</p>;
            })}
          </div>
        )}
        <Button
          className="w-full bg-red-400 hover:bg-red-500 cursor-pointer uppercase  hoverEffect"
          type="submit"
          size={"lg"}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
