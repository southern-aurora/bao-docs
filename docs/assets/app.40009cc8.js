import{h as V,j as L,O as C,C as x,o as _,b as M,w as h,k as l,H as A,l as d,c as g,n as y,a as N,_ as Z,r as $,x as P,s as f,a3 as S,a4 as T,a5 as E,a6 as k,a7 as I,a8 as B,a9 as O,aa as R,ab as j,ac as D,X as q,d as F,u as z,y as G,ad as U,ae as W,af as X,ag as J}from"./chunks/framework.b8c8dad6.js";import{t as b}from"./chunks/theme.87316784.js";const o=["zh","en"],m=V("none"),v=V(!0);const K={class:"doc-before-container"},Q={key:0,class:"language-selector"},Y=l("div",{class:"message"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[l("path",{fill:"var(--vp-c-text-1)",d:"M5 15V17C5 18.0544 5.81588 18.9182 6.85074 18.9945L7 19H10V21H7C4.79086 21 3 19.2091 3 17V15H5ZM18 10L22.4 21H20.245L19.044 18H14.954L13.755 21H11.601L16 10H18ZM17 12.8852L15.753 16H18.245L17 12.8852ZM8 2V4H12V11H8V14H6V11H2V4H6V2H8ZM17 3C19.2091 3 21 4.79086 21 7V9H19V7C19 5.89543 18.1046 5 17 5H14V3H17ZM6 6H4V9H6V6ZM10 6H8V9H10V6Z"})]),l("span",null," What language do you want to read? ")],-1),ee=l("div",{class:"gap"},null,-1),te={class:"languages"},ne={key:1,class:"language-selector"},ae=l("div",{class:"message"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[l("path",{fill:"var(--vp-c-text-1)",d:"M5 15V17C5 18.0544 5.81588 18.9182 6.85074 18.9945L7 19H10V21H7C4.79086 21 3 19.2091 3 17V15H5ZM18 10L22.4 21H20.245L19.044 18H14.954L13.755 21H11.601L16 10H18ZM17 12.8852L15.753 16H18.245L17 12.8852ZM8 2V4H12V11H8V14H6V11H2V4H6V2H8ZM17 3C19.2091 3 21 4.79086 21 7V9H19V7C19 5.89543 18.1046 5 17 5H14V3H17ZM6 6H4V9H6V6ZM10 6H8V9H10V6Z"})]),N(" There is no i18n version for the current page. ")],-1),se=[ae],oe={__name:"Layout",setup(e){const{Layout:t}=b,n=a=>{m.value=o[a],localStorage.setItem(".vitepress-select-language",o[a]);const s=document.querySelector("body"),u=[];for(const r in o)u.push("lang-index-"+(Number(r)+1));for(const r of u)s.classList.remove(r);s.classList.add(u[a]);let i=document.querySelector('style[is-lang-css="yes"]');i===null&&(i=document.createElement("style"),i.setAttribute("type","text/css"),i.setAttribute("is-lang-css","yes"),document.head.appendChild(i));let c="";for(const r in o)Number(r)!==Number(a)?c=c+`
.lang-${o[r]} { display: none !important; }`:c=c+`
.lang-${o[r]} { display: inline !important; }`;for(const r in o)for(const H in o)r!==H&&(c=c+`
.lang-index-${Number(r)+1} .enable-i18n > *:nth-child(${o.length}n + ${Number(H)+1}) {`,c=c+`
display: none;`,c=c+`
}`);i.innerHTML=c};return L(()=>{const a=localStorage.getItem(".vitepress-select-language")||"en";m.value=a;const s=o.findIndex(i=>i===a);n(s);const u=document.querySelector("body");C(()=>{u.classList.add("i18n-loaded")})}),(a,s)=>{const u=x("ClientOnly");return _(),M(d(t),null,{"doc-before":h(()=>[l("div",K,[A(u,null,{default:h(()=>[d(v)?(_(),g("div",Q,[Y,ee,l("div",te,[l("div",{class:y(["item",{active:d(m)===d(o)[1]}]),onClick:s[0]||(s[0]=i=>n(1))}," English ",2),l("div",{class:y(["item",{active:d(m)===d(o)[0]}]),onClick:s[1]||(s[1]=i=>n(0))}," 中文 ",2)])])):(_(),g("div",ne,se))]),_:1})])]),_:1})}}};const le={},ce={class:"enable-i18n"};function ie(e,t){return _(),g("div",ce,[$(e.$slots,"default")])}const re=Z(le,[["render",ie]]);const ue={extends:b,Layout:oe,async enhanceApp({app:e,router:t}){e.component("I18N",re);const n=()=>{C(()=>{document.querySelector(".enable-i18n")?v.value=!0:v.value=!1})};P(()=>t.route.path,()=>{n()}),setTimeout(()=>{n()},256)}};function w(e){if(e.extends){const t=w(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const p=w(ue),de=F({name:"VitePressApp",setup(){const{site:e}=z();return L(()=>{G(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),U(),W(),X(),p.setup&&p.setup(),()=>J(p.Layout)}});async function pe(){const e=_e(),t=me();t.provide(T,e);const n=E(e.route);return t.provide(k,n),t.component("Content",I),t.component("ClientOnly",B),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),p.enhanceApp&&await p.enhanceApp({app:t,router:e,siteData:O}),{app:t,router:e,data:n}}function me(){return R(de)}function _e(){let e=f,t;return j(n=>{let a=D(n),s=null;return a&&(e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),s=q(()=>import(a),[])),f&&(e=!1),s},p.NotFound)}f&&pe().then(({app:e,router:t,data:n})=>{t.go().then(()=>{S(t.route,n.site),e.mount("#app")})});export{pe as createApp};
