import React, { HTMLProps } from "react";
import { cn, createTitle } from "../utils";
import { useRecipeContext } from "../provider";

export type Props = React.PropsWithChildren &
  HTMLProps<HTMLSpanElement> & {
    path: string;
    baseUrl: string;
    quantity?: string | null;
    unit?: string | null;
    tag?: React.ElementType;
  };

/**
 * Renders a clickable link to a recipe.
 *
 * @component
 * @param {Props} props - The component props.
 * @param {number} props.quantity - The quantity of the recipe.
 * @param {string} props.unit - The unit of measurement for the quantity.
 * @param {React.ReactNode} props.children - The content of the link.
 * @param {string} props.className - The CSS class name for the link.
 * @param {string} props.baseUrl - The base URL for the recipe link.
 * @param {string} props.path - The path to the recipe.
 * @param {React.ElementType} props.tag - The HTML tag to use for the link.
 * @returns {React.ReactNode} The rendered link component.
 */
export default function RecipeRef({
  quantity,
  unit,
  children,
  className,
  baseUrl,
  path,
  tag: Tag = "a",
}: Props): React.ReactNode {
  const { theme } = useRecipeContext();
  let url = new URL(path, baseUrl);
  if (theme === "raw") {
    <Tag
      tabIndex={0}
      href={url.toString()}
      title={createTitle(quantity, unit)}
      className={className}
      target="_blank noopener noreferrer"
    >
      {children}
    </Tag>;
  }
  return (
    <Tag
      tabIndex={0}
      href={url.toString()}
      title={createTitle(quantity, unit)}
      className={cn("text-link hover:text-link/90", className)}
      target="_blank noopener noreferrer"
    >
      {children}
    </Tag>
  );
}
