import{d as p,e as l,n as f,c as t,a as h,t as v,F as y,s as x,b as g,m as k,o as s,j as w,_ as R}from"./index-C2R5qiPR.js";import{u as S}from"./recipe.store-BAoCLKIH.js";import{S as b}from"./sweetalert2.esm.all-BGf-Fe8G.js";import{_ as N}from"./RecipeCard.vue_vue_type_script_setup_true_lang-qrcxbkKX.js";const B={class:"flex-1 px-5 min-h-screen"},F={class:"text-2xl md:text-5xl text-black dark:text-white py-5 md:mb-5"},V={key:0},j={key:0,class:"grid gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4"},q={key:1,class:"border border-red-500 text-red-500 rounded-md text-center p-2"},E={key:1,class:"self-center w-full flex justify-center items-center"},M=p({__name:"SearchView",setup(L){const u=k(),n=S(),c=l(),a=l(),i=l(!1);f(()=>{c.value=u.query.q,m(c.value)});const m=async d=>{i.value=!0;try{const r=await n.searchRecipes(d);a.value=r.map(e=>{var o;return{id:e.id,title:e.title,image:e.image,User:{firstName:e.User.firstName},isFavorite:((o=n.myFavorites)==null?void 0:o.some(_=>_.id===e.id))??!1}}),console.log(a.value)}catch(r){b.fire("Error",r,"error")}finally{i.value=!1}};return(d,r)=>(s(),t("div",B,[h("h3",F," Resultados encontrados con: "+v(c.value),1),i.value?(s(),t("div",E,[g(R,{class:"w-40"})])):(s(),t("div",V,[a.value&&a.value.length>0?(s(),t("div",j,[(s(!0),t(y,null,x(a.value,(e,o)=>(s(),w(N,{key:o,recipe:e},null,8,["recipe"]))),128))])):(s(),t("p",q," No hay recetas para mostrar "))]))]))}});export{M as default};