import { cn } from "@/utils";
import React, { FC, MouseEventHandler } from "react";

interface IButton {
  className?: string;
  variant?: "primary" | "secondary";
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

const Button: FC<IButton> = ({
  variant = "primary",
  className,
  onClick,
  children,
  type = "button",
  disabled = false,
}) => {
  const styles = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-600 rounded-lg",
    secondary: "border-1 rounded-lg border-gray-200",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn("w-full shadow-md px-8 py-2", styles[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
