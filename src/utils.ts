import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Creates a title by concatenating two optional string values.
 * If both values are provided, they are concatenated with a space in between.
 * If only one value is provided, it is returned as the title.
 * If no values are provided, the default title "at will" is returned.
 *
 * @param value1 - The first string value (optional).
 * @param value2 - The second string value (optional).
 * @returns The created title.
 */
export const createTitle = (
  value1?: string | null,
  value2?: string | null
): string | undefined => {
  if (value1 && value2) {
    return `${value1} ${value2}`;
  } else if (value1) {
    return value1;
  } else if (value2) {
    return value2;
  }
  return "at will";
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Takes a TemplateStringsArray and returns a concatenated string with trimmed lines.
 *
 * Useful to write recipes in a more readable way.
 *
 * @param strings - The TemplateStringsArray to process.
 * @returns The concatenated string with trimmed lines.
 */
export function ind(strings: TemplateStringsArray) {
  return strings
    .map((s) =>
      s
        .split("\n")
        .map((s) => s.trim())
        .join("\n")
    )
    .join("");
}