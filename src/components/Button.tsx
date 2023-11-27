import clsx from "clsx";
import React, { ReactElement } from "react";

export default function Button({
  children,
  className,
  type = "primary",
  ...restProps
}: {
  children?: React.ReactNode;
  className?: string;
  type?: "primary" | "secondary" | "tertiary";
}): ReactElement<HTMLButtonElement> {
  return (
    <div className="relative">
      <button
        className={clsx(
          "absolute",
          type === "primary" &&
            "bg-secondary text-primary px-6 py-2 rounded-3xl transition-all hover:scale-105 hover:bg-transparent hover:text-primary hover:border hover:border-secondary",
          type === "secondary" &&
            "rounded border border-primary px-9 py-2 hover:scale-105 transition-all hover:bg-primary hover:text-secondary",
          type === "tertiary" && "underline",
          className
        )}
        {...restProps}
      >
        {children}
      </button>
    </div>
  );
}
