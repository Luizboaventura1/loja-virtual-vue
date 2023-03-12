(function(){"use strict";var t={2229:function(t,e,n){var o=n(9963),r=n(6252);function a(t,e,n,o,a,i){const s=(0,r.up)("NavBar"),c=(0,r.up)("router-view"),u=(0,r.up)("FooterSite");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),(0,r.Wm)(c),(0,r.Wm)(u)],64)}var i=n(3577);const s=t=>((0,r.dD)("data-v-5692989e"),t=t(),(0,r.Cn)(),t),c=s((()=>(0,r._)("div",{class:"menu_logo"},[(0,r._)("h1",null," Logo ")],-1))),u={class:"menu_itens"},l={id:"menu_desktop"},d={class:"rounded-circle text-light fw-bold notificacao-carrinho d-flex justify-content-center align-items-center"},p=s((()=>(0,r._)("i",{class:"fa-solid fa-cart-shopping"},null,-1))),f={id:"menu_mobile",class:"shadow-sm"},m=s((()=>(0,r._)("li",null,"Home",-1))),h=s((()=>(0,r._)("li",null,"Products",-1))),g={class:"rounded-circle text-light fw-bold notificacao-carrinho d-flex justify-content-center align-items-center"},v=s((()=>(0,r._)("i",{class:"fa-solid fa-cart-shopping"},null,-1))),_=(0,r.uE)('<svg id="menu_open" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF" data-v-5692989e><path d="M0 0h24v24H0V0z" fill="none" data-v-5692989e></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" data-v-5692989e></path></svg><svg id="menu_close" class="close" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF" data-v-5692989e><path d="M0 0h24v24H0V0z" fill="none" data-v-5692989e></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" data-v-5692989e></path></svg>',2),w=[_];function b(t,e,n,a,s,_){const b=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",null,[c,(0,r._)("div",u,[(0,r._)("ul",l,[(0,r._)("li",null,[(0,r.Wm)(b,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(b,{to:"/products"},{default:(0,r.w5)((()=>[(0,r.Uk)("Products")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(b,{to:"/cart"},{default:(0,r.w5)((()=>[(0,r._)("div",d,(0,i.zw)(t.mostrarTotalQuantidade),1),p])),_:1})])]),(0,r.wy)((0,r._)("ul",f,[(0,r.Wm)(b,{to:"/"},{default:(0,r.w5)((()=>[m])),_:1}),(0,r.Wm)(b,{to:"/products"},{default:(0,r.w5)((()=>[h])),_:1}),(0,r.Wm)(b,{to:"/cart"},{default:(0,r.w5)((()=>[(0,r._)("li",null,[(0,r._)("div",g,(0,i.zw)(t.mostrarTotalQuantidade),1),v])])),_:1})],512),[[o.F8,s.showMenu]]),(0,r._)("div",{class:"menu_burguer",onClick:e[0]||(e[0]=t=>s.showMenu=!s.showMenu)},w)])])}var y={data(){return{showMenu:!1,notificacaoCarrinho:0}},methods:{quantidadeTotalCarrinho(){this.notificacaoCarrinho=0;for(let t=0;t<this.$store.state.cart.length;t++)this.notificacaoCarrinho+=this.$store.state.cart[t].quantidade;return this.notificacaoCarrinho}},computed:{mostrar(){return this.quantidadeTotalCarrinho()}}},x=n(3744);const k=(0,x.Z)(y,[["render",b],["__scopeId","data-v-5692989e"]]);var C=k;const j={class:"d-flex justify-content-center align-items-center"};function S(t,e,n,o,a,s){return(0,r.wg)(),(0,r.iD)("footer",j,[(0,r._)("p",null,"Todos os direitos reservados - © "+(0,i.zw)(s.anoAtual()),1)])}var P={methods:{anoAtual(){let t=new Date;return t.getFullYear()}}};const F=(0,x.Z)(P,[["render",S],["__scopeId","data-v-e1a77a2a"]]);var M=F,O={components:{NavBar:C,FooterSite:M}};const N=(0,x.Z)(O,[["render",a]]);var D=N,T=n(2201);function A(t,e,n,o,a,i){const s=(0,r.up)("MainNav"),c=(0,r.up)("MainProducts");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),(0,r.Wm)(c)],64)}var E=n.p+"img/img-controle-ps5.28064d01.png";const I=t=>((0,r.dD)("data-v-cd9db00c"),t=t(),(0,r.Cn)(),t),z={class:"pt-5 ps-5"},B={class:"container d-flex px-2"},H={class:"container_single"},W=I((()=>(0,r._)("h1",{class:"text-light pt-5 pb-3"},[(0,r.Uk)("Peças de qualidade para "),(0,r._)("br"),(0,r.Uk)(" sua maquina!")],-1))),L=I((()=>(0,r._)("p",{class:"text-light pb-5"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aspernatur doloremque veritatis.",-1))),Z=I((()=>(0,r._)("div",{class:"container_single"},[(0,r._)("img",{src:E,alt:"Imagem controle PS5"})],-1)));function q(t,e){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("main",z,[(0,r._)("div",B,[(0,r._)("div",H,[W,L,(0,r.Wm)(n,{class:"button-loja",to:"/products"},{default:(0,r.w5)((()=>[(0,r.Uk)("Ver produtos")])),_:1})]),Z])])])}const V={},U=(0,x.Z)(V,[["render",q],["__scopeId","data-v-cd9db00c"]]);var $=U,R=n(1973),Y={name:"HomeView",components:{MainNav:$,MainProducts:R.Z}};const G=(0,x.Z)(Y,[["render",A]]);var J=G;const K=[{path:"/",name:"home",component:J},{path:"/products",name:"products",component:()=>n.e(410).then(n.bind(n,8410))},{path:"/cart",name:"cart",component:()=>n.e(474).then(n.bind(n,9474))}],Q=(0,T.p7)({history:(0,T.PO)(),routes:K});var X=Q,tt=n(3907),et=(0,tt.MT)({state:{listProducts:[{id:0,img:"https://cdn.kulturegeek.fr/wp-content/uploads/2019/10/Intel-Core-i9-9900ks.jpg",nome:"Processador Intel Core i9-11900K",preco:2899.9},{id:1,img:"https://http2.mlstatic.com/D_NQ_NP_2X_903254-MLA44560108449_012021-F.jpg",nome:"Placa de vídeo NVIDIA GeForce RTX 3080",preco:10299},{id:2,img:"https://cdn.videocardz.com/1/2021/01/ASUS-Z590-Series.jpg",nome:"Placa-mãe ASUS ROG Strix Z590-E",preco:3349.9},{id:3,img:"https://www.purepc.pl/image/news/2019/07/18_corsair_vengeance_lpx_32_gigabajtowe_moduly_pamieci_ram_ddr4_0_b.jpg",nome:"Memória RAM Corsair Vengeance LPX 32GB DDR4",preco:1599.9},{id:4,img:"https://citycenter.jo/image/cache/catalog/1-1-2019/M1TB-650x400.jpg",nome:"SSD NVMe Samsung 970 EVO 1TB",preco:1999.9},{id:5,img:"https://cdn.iset.io/assets/35158/produtos/1193/fontes-corsair-corsairrm100001.jpg",nome:"Fonte de alimentação Corsair RM1000x",preco:1499.9}],cart:JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[]},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(D).use(et).use(X).mount("#app")},1973:function(t,e,n){n.d(e,{Z:function(){return _}});var o=n(6252),r=n(3577);const a={class:"produtos p-2"},i={class:"container d-flex flex-wrap py-5"},s={class:"img_product"},c=["src"],u={class:"info_product pt-3 d-flex flex-wrap"},l={class:"info_product_single"},d={class:"info_product_single"},p={class:"info_product_single"},f=["onClick"];function m(t,e,n,m,h,g){return(0,o.wg)(),(0,o.iD)("section",a,[(0,o._)("div",i,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.listProducts,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.id,class:"product_single rounded-3 shadow px-4 pt-3 m-4"},[(0,o._)("div",s,[(0,o._)("img",{src:t.img,alt:"Product"},null,8,c)]),(0,o._)("div",u,[(0,o._)("div",l,[(0,o._)("h1",null,(0,r.zw)(t.nome),1)]),(0,o._)("div",d,[(0,o._)("p",null,"R$ "+(0,r.zw)(t.preco.toFixed(2).replace(".",",")),1)]),(0,o._)("div",p,[(0,o._)("button",{onClick:e=>g.adicionarProdutoCarrinho(t),class:"btn_adicionar bg-dark text-light fw-bold p-2 rounded-3 border-0"},"Adicionar",8,f)])])])))),128))])])}n(7658);var h={data(){return{listProducts:this.$store.state.listProducts}},methods:{adicionarProdutoCarrinho(t){console.log(t.id),this.cart={id:t.id,img:t.img,product:t.nome,preco:t.preco,quantidade:1},this.$store.state.cart.push(this.cart),localStorage.setItem("cart",JSON.stringify(this.$store.state.cart)),console.log(this.$store.state.cart[t.id].product)}}},g=n(3744);const v=(0,g.Z)(h,[["render",m],["__scopeId","data-v-10b4105a"]]);var _=v}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{410:"6cb73855",474:"48b6a709"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".f24b8faf.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="loja-virtual:";n.l=function(o,r,a,i){if(t[o])t[o].push(r);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=o),t[o]=[r];var p=function(e,n){s.onerror=s.onload=null,clearTimeout(f);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/loja-virtual-vue/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=i,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===t||a===e))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===t||a===e)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(e(i,s))return r();t(o,s,null,r,a)}))},r={143:0};n.f.miniCss=function(t,e){var n={474:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(e),s=new Error,c=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(e&&e(o);u<i.length;u++)a=i[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunkloja_virtual"]=self["webpackChunkloja_virtual"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2229)}));o=n.O(o)})();
//# sourceMappingURL=app.32253779.js.map