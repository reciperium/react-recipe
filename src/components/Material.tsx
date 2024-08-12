import { useRecipeContext } from "../provider";
import React, { HTMLProps } from 'react';
import { cn } from "../utils";

export type Props = React.PropsWithChildren & HTMLProps<HTMLSpanElement> & {};

export default function Material({ children, className }: Props): React.ReactNode {
  const { theme } = useRecipeContext();
  if (theme === "raw") {
    return <span className={cn(className)}>{children}</span>;
  }
  return (
    <span className={cn("bg-yellow-100 dark:bg-yellow-800 mb-1", className)}>{children}</span>
  );
}
