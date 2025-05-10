import Image from "next/image";
import React from "react";
import loginFormImage from "../../../public/poster.webp";
import CustomInput from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";

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
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
