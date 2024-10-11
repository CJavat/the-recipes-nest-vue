import{d as P,u as M,e as r,n as w,y as B,c as l,a as y,F,s as S,j as x,h as V,b as C,l as $,m as j,o as e,_ as q}from"./index-C2R5qiPR.js";import{u as A}from"./recipe.store-BAoCLKIH.js";import{_ as E}from"./RecipeCard.vue_vue_type_script_setup_true_lang-qrcxbkKX.js";import{_ as L}from"./Pagination.vue_vue_type_script_setup_true_lang-C_0H0mMU.js";import"./sweetalert2.esm.all-BGf-Fe8G.js";const U={class:"px-5"},z={key:0},D={key:0},G={class:"grid gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4"},H={key:1,class:"border border-red-500 text-red-500 rounded-md text-center p-2"},I={key:1,class:"h-96 flex justify-center items-center"},X=P({__name:"MyRecipesView",setup(J){const m=$(),p=j(),v=A(),k=M(),n=r(!1),a=r(),i=r(6),_=r(0),u=r(1),f=r(2);w(()=>{i.value=Number(p.query.limit??6),_.value=Number(p.query.offset??0),u.value=Math.floor(_.value/i.value)+1,N(i.value,(u.value-1)*i.value)});const N=async(h,t)=>{var c;n.value=!0,isNaN(t)&&(t=0);try{const s=await v.getMyRecipes(h,t),{recipes:d,totalPages:b}=s;a.value=d.map(o=>{var g;return{...o,id:o.id,image:o.image,title:o.title,User:{firstName:o.User.firstName},isFavorite:((g=v.myFavorites)==null?void 0:g.some(R=>R.id===o.id))??!1}}),f.value=b}catch(s){if(console.log(s),a.value=[],s instanceof B&&((c=s.response)==null?void 0:c.data.statusCode)===401)return k.logout(),m.replace({path:"/auth/login"});m.push({path:"/dashboard"})}finally{n.value=!1}};return(h,t)=>{var c;return e(),l("div",U,[t[0]||(t[0]=y("h3",{class:"text-2xl md:text-5xl text-black dark:text-white py-5 md:mb-5"},"Mis Recetas",-1)),n.value?(e(),l("div",I,[C(q,{class:"w-32"})])):(e(),l("div",z,[a.value&&a.value.length>0?(e(),l("div",D,[y("div",G,[(e(!0),l(F,null,S(a.value,(s,d)=>(e(),x(E,{key:d,recipe:s},null,8,["recipe"]))),128))]),((c=a.value)==null?void 0:c.length)??!1?(e(),x(L,{key:0,class:"mt-16",limit:i.value,currentPage:u.value,finalPage:f.value,route:"/dashboard/auth/my-recipes"},null,8,["limit","currentPage","finalPage"])):V("",!0)])):(e(),l("p",H," No has creado recetas "))]))])}}});export{X as default};