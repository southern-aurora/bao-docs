import{h as V,o as u,b as _,w as f,k as r,n as d,l as o,a as C,C as L,c as m,D as w,F as g,r as A,e as x,s as p,a0 as b,a1 as M,a2 as P,a3 as $,a4 as k,a5 as E,a6 as S,a7 as R,a8 as Z,a9 as B,aa as D,d as N,u as O,j as T,y as F,ab as j,ac as I,ad as z,ae as q}from"./chunks/framework.064d4bf4.js";import{t as v}from"./chunks/theme.1365a5fa.js";const h="en",l=["en","zh"],c=V(h);const G={class:"language-selector"},U=r("div",{class:"message"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[r("path",{fill:"var(--vp-c-text-1)",d:"M5 15V17C5 18.0544 5.81588 18.9182 6.85074 18.9945L7 19H10V21H7C4.79086 21 3 19.2091 3 17V15H5ZM18 10L22.4 21H20.245L19.044 18H14.954L13.755 21H11.601L16 10H18ZM17 12.8852L15.753 16H18.245L17 12.8852ZM8 2V4H12V11H8V14H6V11H2V4H6V2H8ZM17 3C19.2091 3 21 4.79086 21 7V9H19V7C19 5.89543 18.1046 5 17 5H14V3H17ZM6 6H4V9H6V6ZM10 6H8V9H10V6Z"})]),C(" What language do you want to read? ")],-1),W=r("div",{class:"gap"},null,-1),J={class:"languages"},K={__name:"Layout",setup(e){const{Layout:t}=v,a=s=>{c.value=s,localStorage.setItem(".vitepress-select-language",s);const n=document.querySelector("body");n.classList.remove(...l),n.classList.add(s)};return onMounted(()=>{c.value=localStorage.getItem(".vitepress-select-language")||h,a(c.value)}),(s,n)=>(u(),_(o(t),null,{"doc-before":f(()=>[r("div",G,[U,W,r("div",J,[r("div",{class:d(["item",{active:o(c)===o(l)[0]}]),onClick:n[0]||(n[0]=H=>a(o(l)[0]))}," English ",2),r("div",{class:d(["item",{active:o(c)===o(l)[1]}]),onClick:n[1]||(n[1]=H=>a(o(l)[1]))}," 中文 ",2)])])]),_:1}))}},Q={__name:"I18N",setup(e){return(t,a)=>{const s=L("ClientOnly");return u(),_(s,null,{default:f(()=>[(u(!0),m(g,null,w(o(l),n=>(u(),m(g,{key:n},[o(c)===n?A(t.$slots,n,{key:0}):x("",!0)],64))),128))]),_:3})}}};const X={extends:v,Layout:K,async enhanceApp({app:e}){e.component("I18N",Q)}};function y(e){if(e.extends){const t=y(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const i=y(X),Y=N({name:"VitePressApp",setup(){const{site:e}=O();return T(()=>{F(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),j(),I(),z(),i.setup&&i.setup(),()=>q(i.Layout)}});async function ee(){const e=ae(),t=te();t.provide(M,e);const a=P(e.route);return t.provide($,a),t.component("Content",k),t.component("ClientOnly",E),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),i.enhanceApp&&await i.enhanceApp({app:t,router:e,siteData:S}),{app:t,router:e,data:a}}function te(){return R(Y)}function ae(){let e=p,t;return Z(a=>{let s=B(a),n=null;return s&&(e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),n=D(()=>import(s),[])),p&&(e=!1),n},i.NotFound)}p&&ee().then(({app:e,router:t,data:a})=>{t.go().then(()=>{b(t.route,a.site),e.mount("#app")})});export{ee as createApp};
