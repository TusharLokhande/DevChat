import React, { ChangeEvent, ChangeEventHandler, FC } from "react";
import { cn } from "@/utils";

interface InputFormProps {
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type: "text" | "email" | "password" | "number";
  className?: string;
  name?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  id?: string;
  maxLength?: number;
}

const InputForm: FC<InputFormProps> = ({
  id = "",
  className = "",
  value = "",
  placeholder,
  type,
  onChange,
  icon,
  name,
  iconPosition = "left",
  maxLength = 100,
}) => {
  return (
    <div className="relative">
      {icon && iconPosition === "left" && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <div className="text-gray-400">{icon}</div>
        </div>
      )}
      <input
        type={type}
        id={id}
        maxLength={maxLength}
        // className={cn(
        //   "border rounded-md py-1.5 w-full",
        //   "border-gray-300",
        //   "placeholder:text-sm placeholder:font-semibold px-3",
        //   "focus:outline-none focus:border-blue-400 focus:ring-2  focus:ring-blue-300",
        //   className
        // )}
        className={`
            w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${
              icon && iconPosition == "left"
                ? "pl-11"
                : icon && iconPosition == "right"
                ? "pr-11"
                : ""
            }
            ${"border-gray-300 bg-white hover:border-gray-400"}
          `}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {icon && iconPosition === "right" && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <div className="text-gray-400">{icon}</div>
        </div>
      )}
    </div>
  );
};

export default InputForm;
