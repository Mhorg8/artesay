import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  className?: string | null;
  type: "email" | "text" | "number";
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
  return (
    <div className={cn("space-y-1", className)}>
      <Label>{label} :</Label>
      <Input
        className={cn("bg-white py-3 ", error ? "border border-red-400" : "")}
        color="white"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
