import { HTMLProps } from "react";
import { cn } from "../utils";

export type Props = React.PropsWithChildren & HTMLProps<HTMLSpanElement> & {};

export default function Timer({ children, className }: Props) {
  return (
    <span className={cn("recp--timer bg-orange-100 dark:bg-orange-800 mb-1", className)}>{children}</span>
  );
}
