import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{c as l,a as m}from"./utils-DyYQbWRL.js";function c({quantity:e,unit:t,children:n,className:r,baseUrl:a,path:p,tag:i="a"}){let s=new URL(p,a);return o.jsx(i,{tabIndex:0,href:s.toString(),title:m(e,t),className:l("recp--reciperef text-link hover:text-link/90",r),target:"_blank noopener noreferrer",children:n})}c.__docgenInfo={description:`Renders a clickable link to a recipe.

@component
@param {Props} props - The component props.
@param {number} props.quantity - The quantity of the recipe.
@param {string} props.unit - The unit of measurement for the quantity.
@param {React.ReactNode} props.children - The content of the link.
@param {string} props.className - The CSS class name for the link.
@param {string} props.baseUrl - The base URL for the recipe link.
@param {string} props.path - The path to the recipe.
@param {React.ElementType} props.tag - The HTML tag to use for the link.
@returns {React.ReactNode} The rendered link component.`,methods:[],displayName:"RecipeRef",props:{path:{required:!0,tsType:{name:"string"},description:""},baseUrl:{required:!0,tsType:{name:"string"},description:""},quantity:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},unit:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},tag:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:'"a"',computed:!1}}}};export{c as R};
