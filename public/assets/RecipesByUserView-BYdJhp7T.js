import{d as R,u as w,e,n as S,c as i,a as k,t as U,F as $,s as F,j as P,h as V,b as C,m as j,r as q,o as s,_ as L}from"./index-C2R5qiPR.js";import{u as M}from"./recipe.store-BAoCLKIH.js";import{_ as A}from"./RecipeCard.vue_vue_type_script_setup_true_lang-qrcxbkKX.js";import"./sweetalert2.esm.all-BGf-Fe8G.js";const D={class:"flex-1 px-5 min-h-screen"},E={class:"text-2xl md:text-5xl text-black dark:text-white py-5 md:mb-5"},I={key:0},z={key:0},G={class:"grid gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4"},H={key:1,class:"border border-red-500 text-red-500 rounded-md text-center p-2"},J={key:1,class:"h-96 flex justify-center items-center"},X=R({__name:"RecipesByUserView",setup(K){const d=j(),f=M(),g=w(),m=e(!1),t=e(),h=e(),a=e(),u=e(6),v=e(0),y=e(1),x=e(2);S(()=>{var n,c;t.value=d.fullPath.split("/").slice(-1)[0]??"",t.value.includes("?")&&(t.value=t.value.split("?")[0]),h.value=`${(n=g.user)==null?void 0:n.firstName} ${(c=g.user)==null?void 0:c.lastName}`,u.value=Number(d.query.limit??6),v.value=Number(d.query.offset??0),y.value=Math.floor(v.value/u.value)+1,b(t.value,u.value,v.value)});const b=async(n,c,r)=>{m.value=!0,isNaN(r)&&(r=0);try{const o=await f.getRecipesByUser(n,c,r),{recipes:_,totalPages:p}=o;a.value=_.map(l=>{var N;return{...l,id:l.id,image:l.image,title:l.title,User:{firstName:l.User.firstName},isFavorite:((N=f.myFavorites)==null?void 0:N.some(B=>B.id===l.id))??!1}}),x.value=p}catch(o){console.log(o),a.value=[]}finally{m.value=!1}};return(n,c)=>{var o;const r=q("Pagination");return s(),i("div",D,[k("h3",E,U(h.value),1),m.value?(s(),i("div",J,[C(L,{class:"w-32 md:w-56"})])):(s(),i("div",I,[a.value&&a.value.length>0?(s(),i("div",z,[k("div",G,[(s(!0),i($,null,F(a.value,(_,p)=>(s(),P(A,{key:p,recipe:_},null,8,["recipe"]))),128))]),((o=a.value)==null?void 0:o.length)??!1?(s(),P(r,{key:0,class:"mt-16",limit:u.value,currentPage:y.value,finalPage:x.value,route:`/dashboard/recipes-by-user/${t.value}`},null,8,["limit","currentPage","finalPage","route"])):V("",!0)])):(s(),i("p",H," No hay recetas para mostrar "))]))])}}});export{X as default};