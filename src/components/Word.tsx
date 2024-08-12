import { HTMLProps } from "react";

export type Props = React.PropsWithChildren & HTMLProps<HTMLSpanElement> & {};

export default function Word({ children }: Props) {
  return <span className="mb-1">{children}</span>;
}
