import{d as J,u as K,e as u,n as O,c as n,a as s,x as Q,b as g,i as k,t as r,B as W,k as y,j as Y,h as M,F as A,s as z,l as ee,m as te,r as se,o as i,_ as oe}from"./index-C2R5qiPR.js";import{u as ae}from"./recipe.store-BAoCLKIH.js";import{S as _}from"./sweetalert2.esm.all-BGf-Fe8G.js";const le=b=>new Date(b).toLocaleDateString("es-MX",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),re={key:0,class:"grid grid-cols-1 md:grid-cols-12 gap-2 text-sky-950 dark:text-sky-50"},ie={class:"col-span-12 md:col-span-6 flex flex-col justify-center items-center my-5 md:my-0"},ne={class:"relative"},ce=["src","alt"],ue={class:"w-full md:w-fit text-start sm:text-center md:text-start"},de={class:"text-md"},ve={class:"text-sm"},me={class:"col-span-12 md:col-span-6"},fe={class:"my-5"},pe={class:"my-2 text-2xl md:text-4xl text-sky-950 dark:text-sky-50"},ye={class:"text-gray-800 dark:text-gray-300"},xe={class:"flex flex-col px-3"},he={class:"my-3"},ge={class:"flex flex-col px-3 gap-2"},ke={key:1,class:"h-96 flex justify-center items-center"},Re=J({__name:"RecipeView",setup(b){const w=ee(),I=te(),d=ae(),P=K(),T="http://localhost:3000/api",f=u(!1),e=u(),c=u(),R=u(),x=u(),p=u(!1),h=u(!1);O(()=>{R.value=P.user,c.value=I.fullPath.split("/").slice(-1)[0]??"",c.value.includes("?")&&(c.value=c.value.split("?")[0]),p.value=d.myFavorites?d.myFavorites.some(o=>o.id===c.value):!1,X()});const X=async()=>{var o,t,v;f.value=!0;try{if(c.value===void 0)return;const m=await d.getRecipe(c.value);e.value=m,h.value=((t=(o=e.value)==null?void 0:o.User)==null?void 0:t.id)===((v=R.value)==null?void 0:v.id),e.value.image.includes("http")?x.value=e.value.image:x.value=`${T.replace("/api","")}/${e.value.image}`}catch(m){console.log(m),e.value=void 0,w.push({path:"/dashboard"})}finally{f.value=!1}},Z=async()=>{var o;f.value=!0;try{if(!((o=e.value)!=null&&o.id))return;const{message:t}=await d.deleteRecipe(e.value.id);_.fire("Receta Eliminada",t??"Se eliminó la receta correctamente","success").then(()=>w.replace("/dashboard"))}catch(t){console.log(t)}finally{f.value=!1}},q=()=>{e.value&&(p.value=!p.value,p.value?G(e.value.id):H(e.value.id))},G=async o=>{if(o)try{await d.addFavorite(o)}catch(t){console.log(t),_.fire("Error",t,"error")}},H=async o=>{if(o)try{await d.removeFavorite(o)}catch(t){console.log(t),_.fire("Error",t,"error")}};return(o,t)=>{var m,C,S,F,j,U,B,E,N,$,D;const v=se("RouterLink");return f.value?(i(),n("div",ke,[g(oe,{class:"w-32 md:w-56"})])):(i(),n("div",re,[s("div",ie,[s("div",ne,[s("button",{class:"absolute right-0 z-10",onClick:q},[(i(),n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#ef4444",class:Q(["w-10 md:w-14 transition-colors duration-300 hover:fill-red-500",{"fill-red-500":p.value}])},t[0]||(t[0]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"},null,-1)]),2))]),s("img",{src:x.value,alt:(m=e.value)==null?void 0:m.title,class:"w-52 h-52 md:w-64 md:h-64 mb-5 object-cover rounded-lg border-4 border-sky-200 dark:border-sky-900"},null,8,ce)]),s("div",ue,[g(v,{to:`/dashboard/category/${(S=(C=e.value)==null?void 0:C.Category)==null?void 0:S.id}`,class:"text-sky-500 hover:text-sky-600 text-md"},{default:k(()=>{var l,a;return[y(r((a=(l=e.value)==null?void 0:l.Category)==null?void 0:a.name),1)]}),_:1},8,["to"]),s("p",de," Creado el "+r(W(le)(((F=e.value)==null?void 0:F.createdAt)??new Date)),1),s("p",ve,[t[1]||(t[1]=y(" Autor: ")),g(v,{to:`/dashboard/recipes-by-user/${(U=(j=e.value)==null?void 0:j.User)==null?void 0:U.id}`,class:"text-sky-500 hover:text-sky-600"},{default:k(()=>{var l,a,L,V;return[y(r((a=(l=e.value)==null?void 0:l.User)==null?void 0:a.firstName)+" "+r((V=(L=e.value)==null?void 0:L.User)==null?void 0:V.lastName),1)]}),_:1},8,["to"])]),h.value?(i(),Y(v,{key:0,to:`/dashboard/edit-recipe/${(B=e.value)==null?void 0:B.id}`,class:"uppercase col-span-3 md:col-span-1 mt-5 flex w-full justify-center rounded-md border border-sky-600 hover:bg-sky-500 text-sky-500 hover:text-sky-50 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:k(()=>t[2]||(t[2]=[y(" Editar Receta ")])),_:1},8,["to"])):M("",!0),h.value?(i(),n("button",{key:1,onClick:Z,class:"uppercase col-span-3 md:col-span-1 mt-5 flex w-full justify-center rounded-md border border-red-600 hover:bg-red-500 text-red-500 hover:text-sky-50 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}," Eliminar Receta ")):M("",!0)])]),s("div",me,[s("div",fe,[s("h3",pe,r((E=e.value)==null?void 0:E.title),1),s("p",ye,r((N=e.value)==null?void 0:N.description),1)]),s("div",null,[t[3]||(t[3]=s("h5",{class:"text-xl md:text-3xl text-sky-400 my-2"},"Ingredientes",-1)),s("ul",xe,[(i(!0),n(A,null,z(($=e.value)==null?void 0:$.ingredients,(l,a)=>(i(),n("li",{key:a},r(l),1))),128))])]),s("div",he,[t[4]||(t[4]=s("h5",{class:"text-xl md:text-3xl text-sky-400 my-2"},"Pasos",-1)),s("ul",ge,[(i(!0),n(A,null,z((D=e.value)==null?void 0:D.steps,(l,a)=>(i(),n("li",{key:a,class:"leading-5"},r(a+1)+".- "+r(l),1))),128))])])])]))}}});export{Re as default};
