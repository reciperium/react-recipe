import React, { HTMLProps } from 'react';
import { cn } from "../utils";

export type Props = React.PropsWithChildren & HTMLProps<HTMLSpanElement> & {};

export default function Material({ children, className }: Props): React.ReactNode {
  return (
    <span className={cn("recp--material bg-yellow-100 dark:bg-yellow-800 mb-1", className)}>{children}</span>
  );
}
