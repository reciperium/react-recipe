const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-BZ5mIHdZ.js","./iframe-DjmE2rd5.js","./index-D-8MO0q_.js","./_commonjsHelpers-BosuxZz1.js","./index-xEJN0p-H.js","./index-DrFu-skq.js","./react-18-BV8C6Zbf.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-DjmE2rd5.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-BZ5mIHdZ.js").then(r=>r.ak),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);return new e},stories:{filter:e=>(e.tags||[]).filter(r=>_[r]).length===0&&!e.parameters.docs?.disable}}};export{n as parameters};
