import{d as B,e,n as C,c as i,a as k,t as R,F as w,s as F,j as N,h as V,b as $,m as S,o as t,_ as j}from"./index-C2R5qiPR.js";import{u as q}from"./recipe.store-BAoCLKIH.js";import{_ as L}from"./RecipeCard.vue_vue_type_script_setup_true_lang-qrcxbkKX.js";import{_ as M}from"./Pagination.vue_vue_type_script_setup_true_lang-C_0H0mMU.js";import"./sweetalert2.esm.all-BGf-Fe8G.js";const U={class:"flex-1 px-5 min-h-screen"},D={class:"text-2xl md:text-5xl text-black dark:text-white py-5 md:mb-5"},E={key:0},I={key:0},z={class:"grid gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4"},A={key:1,class:"border border-red-500 text-red-500 rounded-md text-center p-2"},G={key:1,class:"h-96 flex justify-center items-center"},W=B({__name:"CategoryView",setup(H){const d=S(),m=q(),a=e(),p=e(),v=e(!1),r=e(),n=e(6),_=e(0),y=e(1),h=e(2);C(()=>{var c;a.value=d.fullPath.split("/").slice(-1)[0]??"",a.value.includes("?")&&(a.value=a.value.split("?")[0]),p.value=(c=m.categories)==null?void 0:c.filter(u=>u.id===a.value)[0],n.value=Number(d.query.limit??6),_.value=Number(d.query.offset??0),y.value=Math.floor(_.value/n.value)+1,b(a.value,n.value,_.value)});const b=async(c,u,s)=>{v.value=!0,isNaN(s)&&(s=0);try{const o=await m.getRecipesByCategory(c,u,s),{recipes:g,totalPages:f}=o;r.value=g.map(l=>{var x;return{...l,id:l.id,image:l.image,title:l.title,User:{firstName:l.User.firstName},isFavorite:((x=m.myFavorites)==null?void 0:x.some(P=>P.id===l.id))??!1}}),h.value=f}catch(o){console.log(o),r.value=[]}finally{v.value=!1}};return(c,u)=>{var s,o;return t(),i("div",U,[k("h3",D,R((s=p.value)==null?void 0:s.name),1),v.value?(t(),i("div",G,[$(j,{class:"w-32 md:w-56"})])):(t(),i("div",E,[r.value&&r.value.length>0?(t(),i("div",I,[k("div",z,[(t(!0),i(w,null,F(r.value,(g,f)=>(t(),N(L,{key:f,recipe:g},null,8,["recipe"]))),128))]),((o=r.value)==null?void 0:o.length)??!1?(t(),N(M,{key:0,class:"mt-16",limit:n.value,currentPage:y.value,finalPage:h.value,route:`/dashboard/category/${a.value}`},null,8,["limit","currentPage","finalPage","route"])):V("",!0)])):(t(),i("p",A," No hay recetas para mostrar "))]))])}}});export{W as default};