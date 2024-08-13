function D(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(t=D(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function se(){for(var e,r,t=0,o="",a=arguments.length;t<a;t++)(e=arguments[t])&&(r=D(e))&&(o&&(o+=" "),o+=r);return o}const _="-";function ie(e){const r=le(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function a(s){const l=s.split(_);return l[0]===""&&l.length!==1&&l.shift(),ee(l,r)||ae(s)}function n(s,l){const u=t[s]||[];return l&&o[s]?[...u,...o[s]]:u}return{getClassGroupId:a,getConflictingClassGroupIds:n}}function ee(e,r){if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),a=o?ee(e.slice(1),o):void 0;if(a)return a;if(r.validators.length===0)return;const n=e.join(_);return r.validators.find(({validator:s})=>s(n))?.classGroupId}const Q=/^\[(.+)\]$/;function ae(e){if(Q.test(e)){const r=Q.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function le(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return de(Object.entries(e.classGroups),t).forEach(([n,s])=>{O(s,o,n,r)}),o}function O(e,r,t,o){e.forEach(a=>{if(typeof a=="string"){const n=a===""?r:Y(r,a);n.classGroupId=t;return}if(typeof a=="function"){if(ce(a)){O(a(o),r,t,o);return}r.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([n,s])=>{O(s,Y(r,n),t,o)})})}function Y(e,r){let t=e;return r.split(_).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function ce(e){return e.isThemeGetter}function de(e,r){return r?e.map(([t,o])=>{const a=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,l])=>[r+s,l])):n);return[t,a]}):e}function ue(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function a(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return a(n,s),s},set(n,s){t.has(n)?t.set(n,s):a(n,s)}}}const re="!";function pe(e){const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,a=r[0],n=r.length;function s(l){const u=[];let b=0,p=0,g;for(let f=0;f<l.length;f++){let m=l[f];if(b===0){if(m===a&&(o||l.slice(f,f+n)===r)){u.push(l.slice(p,f)),p=f+n;continue}if(m==="/"){g=f;continue}}m==="["?b++:m==="]"&&b--}const h=u.length===0?l:l.substring(p),x=h.startsWith(re),S=x?h.substring(1):h,y=g&&g>p?g-p:void 0;return{modifiers:u,hasImportantModifier:x,baseClassName:S,maybePostfixModifierPosition:y}}return t?function(u){return t({className:u,parseClassName:s})}:s}function fe(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function be(e){return{cache:ue(e.cacheSize),parseClassName:pe(e),...ie(e)}}const ge=/\s+/;function me(e,r){const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:a}=r,n=new Set;return e.trim().split(ge).map(s=>{const{modifiers:l,hasImportantModifier:u,baseClassName:b,maybePostfixModifierPosition:p}=t(s);let g=!!p,h=o(g?b.substring(0,p):b);if(!h){if(!g)return{isTailwindClass:!1,originalClassName:s};if(h=o(b),!h)return{isTailwindClass:!1,originalClassName:s};g=!1}const x=fe(l).join(":");return{isTailwindClass:!0,modifierId:u?x+re:x,classGroupId:h,originalClassName:s,hasPostfixModifier:g}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:l,classGroupId:u,hasPostfixModifier:b}=s,p=l+u;return n.has(p)?!1:(n.add(p),a(u,b).forEach(g=>n.add(l+g)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function he(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=te(r))&&(o&&(o+=" "),o+=t);return o}function te(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=te(e[o]))&&(t&&(t+=" "),t+=r);return t}function ye(e,...r){let t,o,a,n=s;function s(u){const b=r.reduce((p,g)=>g(p),e());return t=be(b),o=t.cache.get,a=t.cache.set,n=l,l(u)}function l(u){const b=o(u);if(b)return b;const p=me(u,t);return a(u,p),p}return function(){return n(he.apply(null,arguments))}}function c(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const oe=/^\[(?:([a-z-]+):)?(.+)\]$/i,xe=/^\d+\/\d+$/,we=new Set(["px","full","screen"]),ve=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ke=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ce=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ze=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Se=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function v(e){return z(e)||we.has(e)||xe.test(e)}function k(e){return A(e,"length",je)}function z(e){return!!e&&!Number.isNaN(Number(e))}function E(e){return A(e,"number",z)}function P(e){return!!e&&Number.isInteger(Number(e))}function Ae(e){return e.endsWith("%")&&z(e.slice(0,-1))}function i(e){return oe.test(e)}function C(e){return ve.test(e)}const Me=new Set(["length","size","percentage"]);function Ge(e){return A(e,Me,ne)}function Pe(e){return A(e,"position",ne)}const Re=new Set(["image","url"]);function Ie(e){return A(e,Re,Ne)}function Te(e){return A(e,"",Ee)}function R(){return!0}function A(e,r,t){const o=oe.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function je(e){return ke.test(e)&&!Ce.test(e)}function ne(){return!1}function Ee(e){return ze.test(e)}function Ne(e){return Se.test(e)}function Le(){const e=c("colors"),r=c("spacing"),t=c("blur"),o=c("brightness"),a=c("borderColor"),n=c("borderRadius"),s=c("borderSpacing"),l=c("borderWidth"),u=c("contrast"),b=c("grayscale"),p=c("hueRotate"),g=c("invert"),h=c("gap"),x=c("gradientColorStops"),S=c("gradientColorStopPositions"),y=c("inset"),f=c("margin"),m=c("opacity"),w=c("padding"),B=c("saturate"),N=c("scale"),U=c("sepia"),F=c("skew"),q=c("space"),J=c("translate"),L=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],$=()=>["auto",i,r],d=()=>[i,r],X=()=>["",v,k],I=()=>["auto",z,i],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],T=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],M=()=>["","0",i],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],G=()=>[z,E],j=()=>[z,i];return{cacheSize:500,separator:":",theme:{colors:[R],spacing:[v,k],blur:["none","",C,i],brightness:G(),borderColor:[e],borderRadius:["none","","full",C,i],borderSpacing:d(),borderWidth:X(),contrast:G(),grayscale:M(),hueRotate:j(),invert:M(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[Ae,k],inset:$(),margin:$(),opacity:G(),padding:d(),saturate:G(),scale:G(),sepia:M(),skew:j(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",i]}],container:["container"],columns:[{columns:[C]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),i]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P,i]}],basis:[{basis:$()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",i]}],grow:[{grow:M()}],shrink:[{shrink:M()}],order:[{order:["first","last","none",P,i]}],"grid-cols":[{"grid-cols":[R]}],"col-start-end":[{col:["auto",{span:["full",P,i]},i]}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":[R]}],"row-start-end":[{row:["auto",{span:[P,i]},i]}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",i]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",i]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[f]}],mx:[{mx:[f]}],my:[{my:[f]}],ms:[{ms:[f]}],me:[{me:[f]}],mt:[{mt:[f]}],mr:[{mr:[f]}],mb:[{mb:[f]}],ml:[{ml:[f]}],"space-x":[{"space-x":[q]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[q]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",i,r]}],"min-w":[{"min-w":[i,r,"min","max","fit"]}],"max-w":[{"max-w":[i,r,"none","full","min","max","fit","prose",{screen:[C]},C]}],h:[{h:[i,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[i,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[i,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[i,r,"auto","min","max","fit"]}],"font-size":[{text:["base",C,k]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",E]}],"font-family":[{font:[R]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",i]}],"line-clamp":[{"line-clamp":["none",z,E]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",v,i]}],"list-image":[{"list-image":["none",i]}],"list-style-type":[{list:["none","disc","decimal",i]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...T(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",v,k]}],"underline-offset":[{"underline-offset":["auto",v,i]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",i]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",i]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),Pe]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ge]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ie]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...T(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:T()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...T()]}],"outline-offset":[{"outline-offset":[v,i]}],"outline-w":[{outline:[v,k]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[v,k]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",C,Te]}],"shadow-color":[{shadow:[R]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",C,i]}],grayscale:[{grayscale:[b]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[g]}],saturate:[{saturate:[B]}],sepia:[{sepia:[U]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[b]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[B]}],"backdrop-sepia":[{"backdrop-sepia":[U]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",i]}],duration:[{duration:j()}],ease:[{ease:["linear","in","out","in-out",i]}],delay:[{delay:j()}],animate:[{animate:["none","spin","ping","pulse","bounce",i]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[N]}],"scale-x":[{"scale-x":[N]}],"scale-y":[{"scale-y":[N]}],rotate:[{rotate:[P,i]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[F]}],"skew-y":[{"skew-y":[F]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",i]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",i]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",i]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[v,k,E]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const We=ye(Le),$e=(e,r)=>e&&r?`${e} ${r}`:e||r||"at will";function Ve(...e){return We(se(e))}export{Ve as a,$e as c};
