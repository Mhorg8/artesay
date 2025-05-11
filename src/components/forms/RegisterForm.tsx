"use client";
import React, { FormEvent } from "react";
import CustomInput from "../CustomInput";
import Link from "next/link";
import { Button } from "../ui/button";
import LoginOptions from "./LoginOptions";
import { useMutation } from "@tanstack/react-query";
import { RegisterUser } from "@/handlers";

const RegisterForm = () => {
  const mutation = useMutation({
    mutationFn: RegisterUser,
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formDate = new FormData(e.currentTarget);
    const userInformation = Object.fromEntries(formDate.entries());

    mutation.mutate({
      email: userInformation.email as string,
      username: userInformation.username as string,
      password: userInformation.password as string,
    });
  }

  return (
    <div className="flex-1 bg-zinc-200 h-full  rounded-e-xl p-3 flex-col flex items-center justify-center w-full">
      <form className="space-y-4 w-full" onSubmit={handleSubmit}>
        <CustomInput
          name="email"
          label="Email"
          type="email"
          placeholder="example@gmail.com"
        />
        <CustomInput
          name="username"
          label="Username"
          type="email"
          placeholder="Jon doe"
        />
        <CustomInput
          name="password"
          label="password"
          type="password"
          placeholder="*******"
        />
        <LoginOptions />

        <div className="flex items-center gap-2 text-sm">
          <p>Already have an account ?</p>
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
        <Button
          className="w-full py-6 bg-white hover:bg-red-400 text-red-400 hover:text-white cursor-pointer hoverEffect"
          variant={"default"}
          type="submit"
        >
          Create
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
