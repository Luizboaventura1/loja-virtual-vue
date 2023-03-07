(function(){"use strict";var t={8806:function(t,e,n){var r=n(9242),o=n(3396);function a(t,e,n,r,a,i){const s=(0,o.up)("NavBar"),u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o.Wm)(u)],64)}const i=t=>((0,o.dD)("data-v-b6686f72"),t=t(),(0,o.Cn)(),t),s=i((()=>(0,o._)("div",{class:"menu_logo"},[(0,o._)("h1",null," Logo ")],-1))),u={class:"menu_itens"},c={id:"menu_desktop"},l=i((()=>(0,o._)("i",{class:"fa-solid fa-cart-shopping"},null,-1))),d={id:"menu_mobile",class:"shadow-sm"},p=i((()=>(0,o._)("li",null,"Home",-1))),f=i((()=>(0,o._)("li",null,"Products",-1))),m=i((()=>(0,o._)("li",null,[(0,o._)("i",{class:"fa-solid fa-cart-shopping"})],-1))),v=(0,o.uE)('<svg id="menu_open" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF" data-v-b6686f72><path d="M0 0h24v24H0V0z" fill="none" data-v-b6686f72></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" data-v-b6686f72></path></svg><svg id="menu_close" class="close" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF" data-v-b6686f72><path d="M0 0h24v24H0V0z" fill="none" data-v-b6686f72></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" data-v-b6686f72></path></svg>',2),g=[v];function h(t,e,n,a,i,v){const h=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",null,[s,(0,o._)("div",u,[(0,o._)("ul",c,[(0,o._)("li",null,[(0,o.Wm)(h,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(h,{to:"/products"},{default:(0,o.w5)((()=>[(0,o.Uk)("Products")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(h,{to:"/cart"},{default:(0,o.w5)((()=>[l])),_:1})])]),(0,o.wy)((0,o._)("ul",d,[(0,o.Wm)(h,{to:"/"},{default:(0,o.w5)((()=>[p])),_:1}),(0,o.Wm)(h,{to:"/products"},{default:(0,o.w5)((()=>[f])),_:1}),(0,o.Wm)(h,{to:"/cart"},{default:(0,o.w5)((()=>[m])),_:1})],512),[[r.F8,i.showMenu]]),(0,o._)("div",{class:"menu_burguer",onClick:e[0]||(e[0]=t=>i.showMenu=!i.showMenu)},g)])])}var _={data(){return{showMenu:!1}},mounted(){}},w=n(89);const b=(0,w.Z)(_,[["render",h],["__scopeId","data-v-b6686f72"]]);var y=b,k={components:{NavBar:y}};const x=(0,w.Z)(k,[["render",a]]);var S=x,P=n(2483);function j(t,e,n,r,a,i){const s=(0,o.up)("MainNav"),u=(0,o.up)("MainProducts"),c=(0,o.up)("FooterSite");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o.Wm)(u),(0,o.Wm)(c)],64)}var C=n.p+"img/img-controle-ps5.28064d01.png";const F=t=>((0,o.dD)("data-v-8cbebd38"),t=t(),(0,o.Cn)(),t),M={class:"pt-5 ps-5"},O={class:"container d-flex px-2"},N={class:"container_single"},D=F((()=>(0,o._)("h1",{class:"text-light pt-5 pb-3"},[(0,o.Uk)("Peças de qualidade para "),(0,o._)("br"),(0,o.Uk)(" sua maquina!")],-1))),A=F((()=>(0,o._)("p",{class:"text-light pb-5"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aspernatur doloremque veritatis.",-1))),E=F((()=>(0,o._)("div",{class:"container_single"},[(0,o._)("img",{src:C,alt:"Imagem controle PS5"})],-1)));function T(t,e){const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("main",M,[(0,o._)("div",O,[(0,o._)("div",N,[D,A,(0,o.Wm)(n,{class:"button-loja",to:"/products"},{default:(0,o.w5)((()=>[(0,o.Uk)("Ver produtos")])),_:1})]),E])])])}const I={},B=(0,w.Z)(I,[["render",T],["__scopeId","data-v-8cbebd38"]]);var H=B,W=n(8334),z=n(7139);const L={class:"d-flex justify-content-center align-items-center"};function Z(t,e,n,r,a,i){return(0,o.wg)(),(0,o.iD)("footer",L,[(0,o._)("p",null,"Todos os direitos reservados - © "+(0,z.zw)(i.anoAtual()),1)])}var V={methods:{anoAtual(){let t=new Date;return t.getFullYear()}}};const U=(0,w.Z)(V,[["render",Z],["__scopeId","data-v-e1a77a2a"]]);var q=U,R={name:"HomeView",components:{MainProducts:W.Z,FooterSite:q,MainNav:H}};const Y=(0,w.Z)(R,[["render",j]]);var $=Y;const G=[{path:"/",name:"home",component:$},{path:"/products",name:"products",component:()=>n.e(410).then(n.bind(n,8410))},{path:"/cart",name:"cart",component:()=>n.e(474).then(n.bind(n,9474))}],J=(0,P.p7)({history:(0,P.PO)(),routes:G});var K=J,X=n(65),Q=(0,X.MT)({state:{listProducts:[{id:0,img:"https://cdn.kulturegeek.fr/wp-content/uploads/2019/10/Intel-Core-i9-9900ks.jpg",nome:"Processador Intel Core i9-11900K",preco:2899.9},{id:1,img:"https://http2.mlstatic.com/D_NQ_NP_2X_903254-MLA44560108449_012021-F.jpg",nome:"Placa de vídeo NVIDIA GeForce RTX 3080",preco:10299},{id:2,img:"https://cdn.videocardz.com/1/2021/01/ASUS-Z590-Series.jpg",nome:"Placa-mãe ASUS ROG Strix Z590-E",preco:3349.9},{id:3,img:"https://www.purepc.pl/image/news/2019/07/18_corsair_vengeance_lpx_32_gigabajtowe_moduly_pamieci_ram_ddr4_0_b.jpg",nome:"Memória RAM Corsair Vengeance LPX 32GB DDR4",preco:1599.9},{id:4,img:"https://citycenter.jo/image/cache/catalog/1-1-2019/M1TB-650x400.jpg",nome:"SSD NVMe Samsung 970 EVO 1TB",preco:1999.9},{id:5,img:"https://cdn.iset.io/assets/35158/produtos/1193/fontes-corsair-corsairrm100001.jpg",nome:"Fonte de alimentação Corsair RM1000x",preco:1499.9}],cart:JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[]},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(S).use(Q).use(K).mount("#app")},8334:function(t,e,n){n.d(e,{Z:function(){return _}});var r=n(3396),o=n(7139);const a={class:"produtos p-2"},i={class:"container d-flex flex-wrap py-5"},s={class:"img_product"},u=["src"],c={class:"info_product pt-3 d-flex flex-wrap"},l={class:"info_product_single"},d={class:"info_product_single"},p={class:"info_product_single"},f=["onClick"];function m(t,e,n,m,v,g){return(0,r.wg)(),(0,r.iD)("section",a,[(0,r._)("div",i,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(v.listProducts,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id,class:"product_single rounded-3 shadow px-4 pt-3 m-4"},[(0,r._)("div",s,[(0,r._)("img",{src:t.img,alt:"Product"},null,8,u)]),(0,r._)("div",c,[(0,r._)("div",l,[(0,r._)("h1",null,(0,o.zw)(t.nome),1)]),(0,r._)("div",d,[(0,r._)("p",null,"R$ "+(0,o.zw)(t.preco.toFixed(2).replace(".",",")),1)]),(0,r._)("div",p,[(0,r._)("button",{onClick:e=>g.adicionarProdutoCarrinho(t),class:"btn_adicionar bg-dark text-light fw-bold p-2 rounded-3 border-0"},"Adicionar",8,f)])])])))),128))])])}n(7658);var v={data(){return{listProducts:this.$store.state.listProducts}},methods:{adicionarProdutoCarrinho(t){this.cart={id:t.id,img:t.img,product:t.nome,preco:t.preco,quantidade:1},this.$store.state.cart.push(this.cart),localStorage.setItem("cart",JSON.stringify(this.$store.state.cart))}},created(){console.log(this.cart)}},g=n(89);const h=(0,g.Z)(v,[["render",m],["__scopeId","data-v-e01ec410"]]);var _=h}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{410:"11f1af45",474:"9e4cd8d1"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".f24b8faf.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="loja-virtual:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=r),t[r]=[o];var p=function(e,n){s.onerror=s.onload=null,clearTimeout(f);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=i,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(e(i,s))return o();t(r,s,null,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={474:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(e&&e(r);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkloja_virtual"]=self["webpackChunkloja_virtual"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8806)}));r=n.O(r)})();
//# sourceMappingURL=app.d745e85e.js.map