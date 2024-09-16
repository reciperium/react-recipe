import { default as default_2 } from 'react';
import { HTMLProps } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { Token } from '@reciperium/recipe-parser-wasm';

/**
 * Takes a TemplateStringsArray and returns a concatenated string with trimmed lines.
 *
 * Useful to write recipes in a more readable way.
 *
 * @param strings - The TemplateStringsArray to process.
 * @returns The concatenated string with trimmed lines.
 */
export declare function ind(strings: TemplateStringsArray): string;

export declare function Ingredient({ quantity, unit, children, className, }: Props): default_2.ReactNode;

export declare function Instructions({ tokens, RecipeRefResolver, baseUrl, }: Props_2): JSX_2.Element;

export declare function Material({ children, className }: Props_3): default_2.ReactNode;

declare type Props = default_2.PropsWithChildren & HTMLProps<HTMLSpanElement> & {
    quantity?: string | null;
    unit?: string | null;
};

declare type Props_2 = {
    tokens: Token[];
    RecipeRefResolver?: default_2.ElementType;
    baseUrl: string;
};

declare type Props_3 = default_2.PropsWithChildren & HTMLProps<HTMLSpanElement> & {};

declare type Props_4 = default_2.PropsWithChildren & HTMLProps<HTMLSpanElement> & {
    path: string;
    baseUrl: string;
    quantity?: string | null;
    unit?: string | null;
    tag?: default_2.ElementType;
};

declare type Props_5 = React.PropsWithChildren & HTMLProps<HTMLSpanElement> & {};

declare type Props_6 = React.PropsWithChildren & HTMLProps<HTMLSpanElement> & {};

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
export declare function RecipeRef({ quantity, unit, children, className, baseUrl, path, tag: Tag, }: Props_4): default_2.ReactNode;

export declare function Timer({ children, className }: Props_5): JSX_2.Element;

export declare function Word({ children }: Props_6): JSX_2.Element;

export { }
