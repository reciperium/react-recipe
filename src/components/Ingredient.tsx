import { useRecipeContext } from "../provider";
import React, { HTMLProps } from "react";
import { cn, createTitle } from "../utils";

export type Props = React.PropsWithChildren &
  HTMLProps<HTMLSpanElement> & {
    quantity?: string | null;
    unit?: string | null;
  };

export default function Ingredient({
  quantity,
  unit,
  children,
  className,
}: Props): React.ReactNode {
  const { theme } = useRecipeContext();
  if (theme === "raw") {
    return (
      <span
        tabIndex={0}
        title={createTitle(quantity, unit)}
        className={cn(className)}
      >
        {children}
      </span>
    );
  }
  return (
    <span
      tabIndex={0}
      title={createTitle(quantity, unit)}
      className={cn("bg-fuchsia-100 dark:bg-fuchsia-800 mb-1", className)}
    >
      {children}
    </span>
  );
}
