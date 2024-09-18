import{j as a}from"./jsx-runtime-DEdD30eg.js";import{W as M}from"./Word-B22JSHOe.js";import{I as O}from"./Ingredient-Czz4f87i.js";import{R as U}from"./RecipeRef-C14ZIU7a.js";import{M as W}from"./Material-2ZwPsdPg.js";import{T as D}from"./Timer-BHWgAlu_.js";import"./index-RYns6xqu.js";import"./utils-B6CGsdxQ.js";const q=({children:e})=>a.jsx(a.Fragment,{children:e});function I({tokens:e,RecipeRefResolver:n=q,baseUrl:r}){const o=e?.findIndex(t=>t.token!=="Metadata"&&t.token!=="Space")||0;return a.jsx("div",{className:"recipe-content whitespace-pre text-wrap",children:e.slice(o).map((t,c)=>{switch(t.token){case"Space":return t.content;case"Word":return a.jsx(M,{children:t.content},c);case"Ingredient":return a.jsx(O,{quantity:t.content.quantity,unit:t.content.unit,children:t.content.name},c);case"RecipeRef":return a.jsx(U,{quantity:t.content.quantity,unit:t.content.unit,path:t.content.name,baseUrl:r,children:a.jsx(n,{children:t.content.name})},c);case"Material":return a.jsx(W,{children:t.content},c);case"Timer":return a.jsx(D,{children:t.content},c)}})})}I.__docgenInfo={description:"",methods:[],displayName:"Instructions",props:{tokens:{required:!0,tsType:{name:"Array",elements:[{name:"Token"}],raw:"Token[]"},description:""},RecipeRefResolver:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"({ children }) => <>{children}</>",computed:!1}},baseUrl:{required:!0,tsType:{name:"string"},description:""}}};const $=""+new URL("recipe-parser_bg-tU-YVBZr.wasm",import.meta.url).href,B=async(e={},n)=>{let r;if(n.startsWith("data:")){const o=n.replace(/^data:.*?base64,/,"");let t;if(typeof Buffer=="function"&&typeof Buffer.from=="function")t=Buffer.from(o,"base64");else if(typeof atob=="function"){const c=atob(o);t=new Uint8Array(c.length);for(let i=0;i<c.length;i++)t[i]=c.charCodeAt(i)}else throw new Error("Cannot decode base64-encoded data URL");r=await WebAssembly.instantiate(t,e)}else{const o=await fetch(n),t=o.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&t.startsWith("application/wasm"))r=await WebAssembly.instantiateStreaming(o,e);else{const c=await o.arrayBuffer();r=await WebAssembly.instantiate(c,e)}}return r.instance.exports};let s;function L(e){s=e}const u=new Array(128).fill(void 0);u.push(void 0,null,!0,!1);function f(e){return u[e]}let p=u.length;function N(e){e<132||(u[e]=p,p=e)}function b(e){const n=f(e);return N(e),n}const C=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let A=new C("utf-8",{ignoreBOM:!0,fatal:!0});A.decode();let y=null;function x(){return(y===null||y.byteLength===0)&&(y=new Uint8Array(s.memory.buffer)),y}function S(e,n){return e=e>>>0,A.decode(x().subarray(e,e+n))}function d(e){p===u.length&&u.push(u.length+1);const n=p;return p=u[n],u[n]=e,n}function R(e){const n=typeof e;if(n=="number"||n=="boolean"||e==null)return`${e}`;if(n=="string")return`"${e}"`;if(n=="symbol"){const t=e.description;return t==null?"Symbol":`Symbol(${t})`}if(n=="function"){const t=e.name;return typeof t=="string"&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const t=e.length;let c="[";t>0&&(c+=R(e[0]));for(let i=1;i<t;i++)c+=", "+R(e[i]);return c+="]",c}const r=/\[object ([^\]]+)\]/.exec(toString.call(e));let o;if(r.length>1)o=r[1];else return toString.call(e);if(o=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:o}let T=0;const V=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let j=new V("utf-8");const k=typeof j.encodeInto=="function"?function(e,n){return j.encodeInto(e,n)}:function(e,n){const r=j.encode(e);return n.set(r),{read:e.length,written:r.length}};function E(e,n,r){if(r===void 0){const _=j.encode(e),g=n(_.length,1)>>>0;return x().subarray(g,g+_.length).set(_),T=_.length,g}let o=e.length,t=n(o,1)>>>0;const c=x();let i=0;for(;i<o;i++){const _=e.charCodeAt(i);if(_>127)break;c[t+i]=_}if(i!==o){i!==0&&(e=e.slice(i)),t=r(t,o,o=i+e.length*3,1)>>>0;const _=x().subarray(t+i,t+o),g=k(e,_);i+=g.written,t=r(t,o,i,1)>>>0}return T=i,t}let l=null;function w(){return(l===null||l.buffer.detached===!0||l.buffer.detached===void 0&&l.buffer!==s.memory.buffer)&&(l=new DataView(s.memory.buffer)),l}function F(e){try{const t=s.__wbindgen_add_to_stack_pointer(-16),c=E(e,s.__wbindgen_malloc,s.__wbindgen_realloc),i=T;s.parse(t,c,i);var n=w().getInt32(t+4*0,!0),r=w().getInt32(t+4*1,!0),o=w().getInt32(t+4*2,!0);if(o)throw b(r);return b(n)}finally{s.__wbindgen_add_to_stack_pointer(16)}}function z(e){b(e)}function H(e,n){const r=new Error(S(e,n));return d(r)}function J(e){const n=f(e);return d(n)}function P(e){return d(e)}function Y(e){const n=BigInt.asUintN(64,e);return d(n)}function Z(e,n){const r=S(e,n);return d(r)}function G(e,n,r){f(e)[b(n)]=b(r)}function K(){const e=new Array;return d(e)}function Q(){return d(new Map)}function X(){const e=new Object;return d(e)}function v(e){return typeof f(e)=="string"}function ee(e,n,r){f(e)[n>>>0]=b(r)}function te(e,n,r){const o=f(e).set(f(n),f(r));return d(o)}function ne(e,n){const r=R(f(n)),o=E(r,s.__wbindgen_malloc,s.__wbindgen_realloc),t=T;w().setInt32(e+4*1,t,!0),w().setInt32(e+4*0,o,!0)}function re(e,n){throw new Error(S(e,n))}URL=globalThis.URL;const h=await B({"./recipe-parser_bg.js":{__wbindgen_object_drop_ref:z,__wbindgen_error_new:H,__wbindgen_object_clone_ref:J,__wbindgen_number_new:P,__wbindgen_bigint_from_u64:Y,__wbindgen_string_new:Z,__wbg_set_f975102236d3c502:G,__wbg_new_a220cf903aa02ca2:K,__wbg_new_8608a2b51a5f6737:Q,__wbg_new_525245e2b9901204:X,__wbindgen_is_string:v,__wbg_set_673dda6c73d19609:ee,__wbg_set_49185437f0ab06f8:te,__wbindgen_debug_string:ne,__wbindgen_throw:re}},$),oe=h.memory,ie=h.parse,ce=h.__wbindgen_malloc,se=h.__wbindgen_realloc,ae=h.__wbindgen_add_to_stack_pointer,_e=Object.freeze(Object.defineProperty({__proto__:null,__wbindgen_add_to_stack_pointer:ae,__wbindgen_malloc:ce,__wbindgen_realloc:se,memory:oe,parse:ie},Symbol.toStringTag,{value:"Module"}));L(_e);const xe={component:I},ue=`>> tags: vegan, high-protein, high-fiber
>> lang: en

Add {boiled chickpeas}(400 gr) to the &{blender} with {garlic}(1),
{tahini}(2 tsp), {lemon}(1/2), {olive oil}(2 tsp), {salt} and {pepper}.

Blend for t{3 minutes}.

Let's test a recipeRef as well: @{woile/teff-crepes}.
Serve or store`,fe=F(ue),de=fe.tokens,m=()=>a.jsx(I,{tokens:de,baseUrl:"https://reciperium.com"});m.__docgenInfo={description:"",methods:[],displayName:"Default"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'() => <Instructions tokens={tokens} baseUrl={"https://reciperium.com"} />',...m.parameters?.docs?.source}}};const je=["Default"];export{m as Default,je as __namedExportsOrder,xe as default};
