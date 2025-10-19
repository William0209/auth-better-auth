import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    const classes = [
      "flex h-10 w-full",
      "rounded-md",
      "border border-gray-300",
      "bg-white",
      "px-3 py-2",
      "text-sm",
      "placeholder:text-gray-400",
      "focus:outline-none focus:ring-2 focus:ring-gray-400",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    return <input ref={ref} className={classes} type={type} {...props} />;
  }
);

Input.displayName = "Input";

export default Input;
