import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";

interface CustomSelectProps {
  label?: string | null;
  size?: string;
  options: any[];
  title?: string | null;
  defaultValue?: string | null;
  placeholder?: string | null;
}

const CustomSelect = ({
  label,
  size,
  options,
  defaultValue,
  placeholder,
}: CustomSelectProps) => {
  return (
    <div>
      <Label  className="mb-2 ">{label}</Label>
      <Select>
        <SelectTrigger style={{ width: size ? size : "180px" }}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{defaultValue}</SelectLabel>
            {options ? (
              options.map((option) => {
                return (
                  <SelectItem key={option?.id} value={option?.value}>
                    {option?.name}
                  </SelectItem>
                );
              })
            ) : (
              <SelectItem value="error">options not provided</SelectItem>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSelect;
