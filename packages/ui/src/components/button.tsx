import React, { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonV = tv({
  base: "w-auto h-auto rounded-md flex items-center text-sm whitespace-nowrap justify-center select-none px-4 py-2 disabled:opacity-0.5 disabled:pointer-events-none",
  variants: {
    variant: {
      solid:
        "border border-solid border-white dark:border-neutral-800 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200",
    },
    size: {
      sm: "h-[36px]",
      md: "h-[40px]",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});

export type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonV>;

export const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button {...props} className={buttonV({ className, variant, size })} />
  );
};
