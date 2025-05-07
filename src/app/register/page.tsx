import Image from "next/image";
import React from "react";
import loginFormImage from "../../../public/poster.webp";
import CustomInput from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="w-full h-[100dvh] py-32 flex items-center justify-center">
      <div className="w-[700px] h-[500px] rounded-xl shadow-2xl mt-20 flex items-center ">
        <div className="flex-1  h-full relative px-2">
          <Image
            src={loginFormImage}
            alt=""
            fill
            sizes="fill"
            className="object-cover w-full h-full rounded-s-2xl"
          />
        </div>
        <div className="flex-1 bg-zinc-200 h-full  rounded-e-xl p-3 flex-col flex items-center justify-center w-full">
          <form className="space-y-3 w-full">
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

            <div className="flex items-center gap-2 text-sm">
              <p>Already have an account ?</p>
              <Link href="/login" className="underline">
                Register
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
      </div>
    </div>
  );
};

export default RegisterPage;
