import { HTMLProps } from "react";
import { useRecipeContext } from "../provider";
import { cn } from "../utils";

export type Props = React.PropsWithChildren & HTMLProps<HTMLSpanElement> & {};

export default function Timer({ children, className }: Props) {
  const { theme } = useRecipeContext();
  if (theme === "raw") {
    return <span className={cn(className)}>{children}</span>;
  }
  return (
    <span className={cn("bg-orange-100 dark:bg-orange-800 mb-1", className)}>{children}</span>
  );
}
