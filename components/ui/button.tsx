import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// Minimal shadcn-like Button: solid primary, rounded, merges className
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = "button", ...props }, ref) => {
    const classes = [
      "inline-flex items-center justify-center",
      "rounded-md",
      "px-4 py-2",
      "text-sm font-medium",
      "bg-black text-white",
      "hover:bg-gray-800",
      "disabled:opacity-50 disabled:pointer-events-none",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    return <button ref={ref} className={classes} type={type} {...props} />;
  }
);

Button.displayName = "Button";

export default Button;
