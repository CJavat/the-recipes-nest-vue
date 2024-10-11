import{u as w}from"./recipe.store-BAoCLKIH.js";import{d as g,e as k,n as x,r as _,o as c,c as l,b as y,i as b,a as o,t as n,x as F}from"./index-C2R5qiPR.js";import{S as d}from"./sweetalert2.esm.all-BGf-Fe8G.js";const C={class:"relative md:w-60 md:h-60 md:my-16"},S=["src","alt"],B={class:"flex flex-col justify-evenly h-20 w-6/12 md:w-full"},R={class:"text-sm md:text-xl text-black dark:text-white"},j={class:"text-xs md:text-sm text-sky-900 dark:text-sky-300"},$=g({__name:"RecipeCard",props:{recipe:{}},setup(p){const m="http://localhost:3000/api".replace("/api",""),s=k(""),i=w(),t=p;x(()=>{var e,r;(e=t.recipe)!=null&&e.image.includes("http")?s.value=t.recipe.image:s.value=`${m}/${(r=t.recipe)==null?void 0:r.image}`});const u=()=>{t.recipe&&(t.recipe.isFavorite=!t.recipe.isFavorite,t.recipe.isFavorite?f(t.recipe.id):v(t.recipe.id))},f=async e=>{if(e)try{await i.addFavorite(e)}catch(r){console.log(r),d.fire("Error",r,"error")}},v=async e=>{if(e)try{await i.removeFavorite(e)}catch(r){console.log(r),d.fire("Error",r,"error")}};return(e,r)=>{var a;const h=_("RouterLink");return c(),l("div",C,[y(h,{to:`/dashboard/recipe/${e.recipe.id}`,class:"flex md:flex-col gap-4"},{default:b(()=>[o("img",{src:s.value,alt:e.recipe.title,class:"w-20 h-20 md:w-60 md:h-60 border rounded-md object-cover md:opacity-80"},null,8,S),o("div",B,[o("p",R,n(e.recipe.title),1),o("span",j,n(e.recipe.User.firstName),1)])]),_:1},8,["to"]),o("button",{class:"absolute top-0 right-0",onClick:u},[(c(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#ef4444",class:F(["w-10 md:w-14 transition-colors duration-300 hover:fill-red-500",{"fill-red-500":(a=e.recipe)==null?void 0:a.isFavorite}])},r[0]||(r[0]=[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"},null,-1)]),2))])])}}});export{$ as _};
