import { cn } from "@/lib/utils"; // Pastikan cn adalah utilitas yang menggabungkan class
import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[54px] focus:outline-none focus:border-accent w-full rounded-none text-primary border border-border bg-white px-6 py-2 text-base transition-colors file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-secondary disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
