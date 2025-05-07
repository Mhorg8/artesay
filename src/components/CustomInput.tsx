"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { LuEyeClosed } from "react-icons/lu";

interface Props {
  label: string;
  className?: string | null;
  type: "email" | "text" | "password";
  name: string;
  placeholder: string;
  error?: string | null;
}

const CustomInput = ({
  label,
  className,
  type,
  name,
  error,
  placeholder,
}: Props) => {
  function changeType() {
    type === "password" ? "text" : "password";
  }
  return (
    <div className={cn("space-y-1 relative", className)}>
      <Label>{label} :</Label>
      <Input
        className={cn("bg-white py-3 ", error ? "border border-red-400" : "")}
        color="white"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {type === "password" && (
        <Button
          type="button"
          onClick={changeType}
          size="icon"
          variant={"ghost"}
          className="absolute top-1/3 -translate-y-1/3 cursor-pointer right-2 hover:bg-none"
        >
          <LuEyeClosed color="#000" />
        </Button>
      )}
    </div>
  );
};

export default CustomInput;
