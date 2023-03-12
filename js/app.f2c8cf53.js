(function(){"use strict";var t={2405:function(t,e,n){var o=n(9963),r=n(6252);function a(t,e,n,o,a,i){const s=(0,r.up)("NavBar"),u=(0,r.up)("HomeView"),c=(0,r.up)("MainNav"),l=(0,r.up)("MainProducts"),d=(0,r.up)("FooterSite"),p=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),(0,r.Wm)(u),(0,r.Wm)(c),(0,r.Wm)(l),(0,r.Wm)(d),(0,r.Wm)(p)],64)}const i=t=>((0,r.dD)("data-v-b6686f72"),t=t(),(0,r.Cn)(),t),s=i((()=>(0,r._)("div",{class:"menu_logo"},[(0,r._)("h1",null," Logo ")],-1))),u={class:"menu_itens"},c={id:"menu_desktop"},l=i((()=>(0,r._)("i",{class:"fa-solid fa-cart-shopping"},null,-1))),d={id:"menu_mobile",class:"shadow-sm"},p=i((()=>(0,r._)("li",null,"Home",-1))),f=i((()=>(0,r._)("li",null,"Products",-1))),m=i((()=>(0,r._)("li",null,[(0,r._)("i",{class:"fa-solid fa-cart-shopping"})],-1))),v=(0,r.uE)('<svg id="menu_open" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF" data-v-b6686f72><path d="M0 0h24v24H0V0z" fill="none" data-v-b6686f72></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" data-v-b6686f72></path></svg><svg id="menu_close" class="close" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF" data-v-b6686f72><path d="M0 0h24v24H0V0z" fill="none" data-v-b6686f72></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" data-v-b6686f72></path></svg>',2),g=[v];function h(t,e,n,a,i,v){const h=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",null,[s,(0,r._)("div",u,[(0,r._)("ul",c,[(0,r._)("li",null,[(0,r.Wm)(h,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(h,{to:"/products"},{default:(0,r.w5)((()=>[(0,r.Uk)("Products")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(h,{to:"/cart"},{default:(0,r.w5)((()=>[l])),_:1})])]),(0,r.wy)((0,r._)("ul",d,[(0,r.Wm)(h,{to:"/"},{default:(0,r.w5)((()=>[p])),_:1}),(0,r.Wm)(h,{to:"/products"},{default:(0,r.w5)((()=>[f])),_:1}),(0,r.Wm)(h,{to:"/cart"},{default:(0,r.w5)((()=>[m])),_:1})],512),[[o.F8,i.showMenu]]),(0,r._)("div",{class:"menu_burguer",onClick:e[0]||(e[0]=t=>i.showMenu=!i.showMenu)},g)])])}var _={data(){return{showMenu:!1}},mounted(){}},w=n(3744);const b=(0,w.Z)(_,[["render",h],["__scopeId","data-v-b6686f72"]]);var y=b;function k(t,e,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div")}var x={name:"HomeView"};const S=(0,w.Z)(x,[["render",k]]);var j=S,P=n.p+"img/img-controle-ps5.28064d01.png";const C=t=>((0,r.dD)("data-v-8cbebd38"),t=t(),(0,r.Cn)(),t),F={class:"pt-5 ps-5"},M={class:"container d-flex px-2"},O={class:"container_single"},N=C((()=>(0,r._)("h1",{class:"text-light pt-5 pb-3"},[(0,r.Uk)("Peças de qualidade para "),(0,r._)("br"),(0,r.Uk)(" sua maquina!")],-1))),D=C((()=>(0,r._)("p",{class:"text-light pb-5"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aspernatur doloremque veritatis.",-1))),A=C((()=>(0,r._)("div",{class:"container_single"},[(0,r._)("img",{src:P,alt:"Imagem controle PS5"})],-1)));function E(t,e){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("main",F,[(0,r._)("div",M,[(0,r._)("div",O,[N,D,(0,r.Wm)(n,{class:"button-loja",to:"/products"},{default:(0,r.w5)((()=>[(0,r.Uk)("Ver produtos")])),_:1})]),A])])])}const T={},H=(0,w.Z)(T,[["render",E],["__scopeId","data-v-8cbebd38"]]);var I=H,W=n(302),B=n(3577);const V={class:"d-flex justify-content-center align-items-center"};function z(t,e,n,o,a,i){return(0,r.wg)(),(0,r.iD)("footer",V,[(0,r._)("p",null,"Todos os direitos reservados - © "+(0,B.zw)(i.anoAtual()),1)])}var L={methods:{anoAtual(){let t=new Date;return t.getFullYear()}}};const Z=(0,w.Z)(L,[["render",z],["__scopeId","data-v-e1a77a2a"]]);var U=Z,q={components:{NavBar:y,HomeView:j,MainNav:I,MainProducts:W.Z,FooterSite:U}};const R=(0,w.Z)(q,[["render",a]]);var $=R,G=n(2201);const J=[{path:"/",name:"home",component:j},{path:"/products",name:"products",component:()=>n.e(410).then(n.bind(n,8410))},{path:"/cart",name:"cart",component:()=>n.e(474).then(n.bind(n,9474))}],K=(0,G.p7)({history:(0,G.PO)(),routes:J});var X=K,Y=n(3907),Q=(0,Y.MT)({state:{listProducts:[{id:0,img:"https://cdn.kulturegeek.fr/wp-content/uploads/2019/10/Intel-Core-i9-9900ks.jpg",nome:"Processador Intel Core i9-11900K",preco:2899.9},{id:1,img:"https://http2.mlstatic.com/D_NQ_NP_2X_903254-MLA44560108449_012021-F.jpg",nome:"Placa de vídeo NVIDIA GeForce RTX 3080",preco:10299},{id:2,img:"https://cdn.videocardz.com/1/2021/01/ASUS-Z590-Series.jpg",nome:"Placa-mãe ASUS ROG Strix Z590-E",preco:3349.9},{id:3,img:"https://www.purepc.pl/image/news/2019/07/18_corsair_vengeance_lpx_32_gigabajtowe_moduly_pamieci_ram_ddr4_0_b.jpg",nome:"Memória RAM Corsair Vengeance LPX 32GB DDR4",preco:1599.9},{id:4,img:"https://citycenter.jo/image/cache/catalog/1-1-2019/M1TB-650x400.jpg",nome:"SSD NVMe Samsung 970 EVO 1TB",preco:1999.9},{id:5,img:"https://cdn.iset.io/assets/35158/produtos/1193/fontes-corsair-corsairrm100001.jpg",nome:"Fonte de alimentação Corsair RM1000x",preco:1499.9}],cart:JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[]},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)($).use(Q).use(X).mount("#app")},302:function(t,e,n){n.d(e,{Z:function(){return _}});var o=n(6252),r=n(3577);const a={class:"produtos p-2"},i={class:"container d-flex flex-wrap py-5"},s={class:"img_product"},u=["src"],c={class:"info_product pt-3 d-flex flex-wrap"},l={class:"info_product_single"},d={class:"info_product_single"},p={class:"info_product_single"},f=["onClick"];function m(t,e,n,m,v,g){return(0,o.wg)(),(0,o.iD)("section",a,[(0,o._)("div",i,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(v.listProducts,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.id,class:"product_single rounded-3 shadow px-4 pt-3 m-4"},[(0,o._)("div",s,[(0,o._)("img",{src:t.img,alt:"Product"},null,8,u)]),(0,o._)("div",c,[(0,o._)("div",l,[(0,o._)("h1",null,(0,r.zw)(t.nome),1)]),(0,o._)("div",d,[(0,o._)("p",null,"R$ "+(0,r.zw)(t.preco.toFixed(2).replace(".",",")),1)]),(0,o._)("div",p,[(0,o._)("button",{onClick:e=>g.adicionarProdutoCarrinho(t),class:"btn_adicionar bg-dark text-light fw-bold p-2 rounded-3 border-0"},"Adicionar",8,f)])])])))),128))])])}n(7658);var v={data(){return{listProducts:this.$store.state.listProducts}},methods:{adicionarProdutoCarrinho(t){console.log(t.id),this.cart={id:t.id,img:t.img,product:t.nome,preco:t.preco,quantidade:1},this.$store.state.cart.push(this.cart),localStorage.setItem("cart",JSON.stringify(this.$store.state.cart)),console.log(this.$store.state.cart[t.id].product)}}},g=n(3744);const h=(0,g.Z)(v,[["render",m],["__scopeId","data-v-6f967d96"]]);var _=h}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{410:"132d5fcf",474:"48b6a709"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".f24b8faf.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="loja-virtual:";n.l=function(o,r,a,i){if(t[o])t[o].push(r);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=o),t[o]=[r];var p=function(e,n){s.onerror=s.onload=null,clearTimeout(f);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/loja-virtual-vue/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=i,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===t||a===e))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===t||a===e)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(e(i,s))return r();t(o,s,null,r,a)}))},r={143:0};n.f.miniCss=function(t,e){var n={474:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(e),s=new Error,u=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],u=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(e&&e(o);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunkloja_virtual"]=self["webpackChunkloja_virtual"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2405)}));o=n.O(o)})();
//# sourceMappingURL=app.f2c8cf53.js.map