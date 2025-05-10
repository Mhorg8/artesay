import CustomInput from "../CustomInput";
import { Button } from "../ui/button";
import { FaApple, FaGoogle } from "react-icons/fa";
import LoginOptions from "./LoginOptions";
import Link from "next/link";

const LoginForm = () => {

  return (
    <div className="flex-1 bg-zinc-200 h-full rounded-e-xl border-l border-l-zinc-400/40 flex flex-col items-center justify-start  w-full py-5 px-5">
      <h2 className="text-2xl font-semibold">Welcome back!</h2>
      <p className="text-zinc-800">Login in for access to all features</p>

      <form className="w-full space-y-4">
        <CustomInput
          type="email"
          name="email"
          placeholder="example.com"
          label="Email"
        />
        <CustomInput
          type="text"
          name="username"
          placeholder="Jon Doe"
          label="Username"
        />
        <CustomInput
          type="text"
          name="password"
          placeholder="******"
          label="Password"
        />

       <LoginOptions />
       <div className="flex items-center gap-2 text-sm">
          <p>Don&apos;t have an account ? </p>
          <Link href="/register" className="underline">
            Register
          </Link>
        </div>

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
