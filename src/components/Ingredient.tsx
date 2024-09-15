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
  return (
    <span
      tabIndex={0}
      title={createTitle(quantity, unit)}
      className={cn("recp--ingredient bg-fuchsia-100 dark:bg-fuchsia-800 mb-1", className)}
    >
      {children}
    </span>
  );
}
