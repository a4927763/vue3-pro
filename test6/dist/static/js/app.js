(function(e){function t(t){for(var c,r,i=t[0],u=t[1],l=t[2],s=0,b=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&b.push(a[r][0]),a[r]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(c=!1)}c&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},r={app:0},a={app:0},o=[];function i(e){return u.p+"static/js/"+({about:"about"}[e]||e)+".js"}function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var c="static/css/"+({about:"about"}[e]||e)+".css",a=u.p+c,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===c||s===a))return t()}var b=document.getElementsByTagName("style");for(i=0;i<b.length;i++){l=b[i],s=l.getAttribute("data-href");if(s===c||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var c=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[e],d.parentNode.removeChild(d),n(o)},d.href=a;var O=document.getElementsByTagName("head")[0];O.appendChild(d)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var b=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",b.name="ChunkLoadError",b.type=c,b.request=r,n[1](b)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0396":function(e,t,n){"use strict";n("9052")},"19a6":function(e,t,n){"use strict";n("1b9b")},"1b9b":function(e,t,n){},"318e":function(e,t,n){"use strict";n("53b3")},"53b3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={id:"nav"},a=Object(c["g"])("景點"),o=Object(c["g"])("About Me");function i(e,t,n,i,u,l){var s=Object(c["y"])("router-link"),b=Object(c["y"])("Footer"),d=Object(c["y"])("router-view");return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["h"])("div",r,[Object(c["h"])(s,{to:"/"},{default:Object(c["F"])((function(){return[a]})),_:1}),Object(c["h"])(s,{to:"/about"},{default:Object(c["F"])((function(){return[o]})),_:1})]),Object(c["h"])(b,{class:"Footer"}),Object(c["h"])(d)],64)}var u=Object(c["I"])("data-v-1b894eae");Object(c["u"])("data-v-1b894eae");var l={class:"footer"},s=Object(c["h"])("p",null,"使用版本 Vue3 cli4.5 Composition API 與 連結政府開放資料庫",-1);Object(c["s"])();var b=u((function(e,t,n,r,a,o){return Object(c["r"])(),Object(c["e"])("div",l,[s])})),d={name:"Footer"};n("ccb7");d.render=b,d.__scopeId="data-v-1b894eae";var O=d,f={components:{Footer:O},setup:function(){}};n("0396");f.render=i;var j=f,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),g=(n("fb6a"),Object(c["I"])("data-v-86a8461c"));Object(c["u"])("data-v-86a8461c");var p={class:"home"},v={class:"selectBox"},m={disabled:"",hiiden:""},y={disabled:"",hiiden:""},w={class:"placeTag"},P={class:"blueTag"},C={class:"buttonTag"},T={class:"textBox"},x={class:"titlePlace"},A={class:"textContent"},_={class:"pageBox"},k={class:"pageTitle"},L={class:"pageBtn"},S={href:"#"},F=Object(c["h"])("div",{class:"fixbot"},null,-1);Object(c["s"])();var I=g((function(e,t,n,r,a,o){var i=Object(c["y"])("Loading");return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["h"])("div",p,[Object(c["h"])("div",v,[Object(c["G"])(Object(c["h"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.selectCity=t}),onChange:t[2]||(t[2]=function(t){return r.changeCity(e.selectCity)})},[Object(c["h"])("option",m,Object(c["A"])(e.selectCity),1),(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(e.city,(function(e){return Object(c["r"])(),Object(c["e"])("option",null,Object(c["A"])(e),1)})),256))],544),[[c["D"],e.selectCity]]),Object(c["G"])(Object(c["h"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.selectTown=t}),onChange:t[4]||(t[4]=function(t){return r.changeTown(e.selectTown)})},[Object(c["h"])("option",y,Object(c["A"])(e.selectTown),1),(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(e.town,(function(e){return Object(c["r"])(),Object(c["e"])("option",null,Object(c["A"])(e),1)})),256))],544),[[c["D"],e.selectTown]])]),(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(e.rows.slice((e.currentPage-1)*e.countOfPage,(e.currentPage-1)*e.countOfPage+e.countOfPage),(function(e,t){return Object(c["r"])(),Object(c["e"])("div",{class:"placeCard",onClick:function(t){return r.connectURL(e.Url)},key:e},[Object(c["h"])("div",w,[Object(c["h"])("div",P,Object(c["A"])(e.City),1),Object(c["h"])("div",C,Object(c["A"])(e.Town),1)]),Object(c["h"])("img",{class:"placeImg",src:e.PicURL,alt:""},null,8,["src"]),Object(c["h"])("div",T,[Object(c["h"])("h1",x,Object(c["A"])(e.Name),1),Object(c["h"])("p",A,Object(c["A"])(e.FoodFeature),1)])],8,["onClick"])})),128)),Object(c["h"])(c["b"],{name:"fade"},{default:g((function(){return[e.isLoading?(Object(c["r"])(),Object(c["e"])(i,{key:0})):Object(c["f"])("",!0)]})),_:1})]),Object(c["h"])("div",_,[Object(c["h"])("div",k,"美食頁次 "+Object(c["A"])(e.currentPage)+" / "+Object(c["A"])(Math.ceil(e.rows.length/e.countOfPage)),1),Object(c["h"])("div",L,[Object(c["h"])("ul",null,[Object(c["h"])("li",{onClick:t[5]||(t[5]=Object(c["H"])((function(t){return e.currentPage-=1}),["prevent"])),class:{disabled:1===e.currentPage}},[Object(c["h"])("a",{href:"#",class:{disabled2:1===e.currentPage}},"<<",2)],2),(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(Math.ceil(e.rows.length/e.countOfPage),(function(t){return Object(c["r"])(),Object(c["e"])("li",{onClick:Object(c["H"])((function(n){return e.currentPage=t}),["prevent"])},[Object(c["h"])("a",S,Object(c["A"])(t),1)],8,["onClick"])})),256)),Object(c["h"])("li",{onClick:t[6]||(t[6]=Object(c["H"])((function(t){return e.currentPage+=1}),["prevent"])),class:{disabled:e.currentPage===Math.ceil(e.rows.length/e.countOfPage)}},[Object(c["h"])("a",{href:"#",class:{disabled2:e.currentPage===Math.ceil(e.rows.length/e.countOfPage)}},">>",2)],2)])])]),F],64)})),M=n("5530"),E=(n("a9e3"),n("4de4"),Object(c["I"])("data-v-66c59736"));Object(c["u"])("data-v-66c59736");var B={class:"loading"},H=Object(c["h"])("p",null,"資料讀取中..請稍後",-1);Object(c["s"])();var N=E((function(e,t,n,r,a,o){return Object(c["r"])(),Object(c["e"])("div",B,[H])})),D={name:"Loading"};n("19a6");D.render=N,D.__scopeId="data-v-66c59736";var U=D,R=n("bc3a"),V=n.n(R),q=Object(c["I"])("data-v-715e0291");Object(c["u"])("data-v-715e0291");var G={class:"hello"},J=Object(c["h"])("p",null,[Object(c["g"])(" For a guide and recipes on how to configure / customize this project,"),Object(c["h"])("br"),Object(c["g"])(" check out the "),Object(c["h"])("a",{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"},"vue-cli documentation"),Object(c["g"])(". ")],-1);Object(c["s"])();var W=q((function(e,t,n,r,a,o){return Object(c["r"])(),Object(c["e"])("div",G,[Object(c["h"])("h1",null,Object(c["A"])(n.msg),1),J])})),z={name:"HelloWorld",props:{msg:String}};n("ee61");z.render=W,z.__scopeId="data-v-715e0291";var K=z,Q={name:"Home",components:{HelloWorld:K,Loading:U},setup:function(){var e=Object(c["v"])({isLoading:!0,data:[],city:[],town:[],selectCity:"請選擇行政區域",selectTown:"請選擇鄉鎮區",rows:[],countOfPage:10,currentPage:1,totalPage:Number,index:Number});function t(e){""!=e&&window.open("".concat(e))}function n(t){e.currentPage=1;var n=[];e.rows=e.data.filter((function(e){return e.City==t})),e.selectTown="請選擇鄉鎮區";for(var c=0;c<e.data.length;c++)e.data[c].City==e.selectCity&&-1==n.indexOf(e.data[c].Town)&&(n.push(e.data[c].Town),e.town=n)}function r(t){e.currentPage=1,e.rows=e.data.filter((function(n){return n.City==e.selectCity&&n.Town==t}))}function a(){var t="https://a4927763.github.io/Service/OpenData/ODwsv/ODwsvTravelFood.aspx";V.a.get(t).then((function(t){var n=t.data,c=t.data.length;console.log(n),e.data=n,e.isLoading=!1,e.rows=n,e.startPage=(e.currentPage-1)*e.countOfPage,e.totalPage=Math.ceil(e.rows.length/e.countOfPage);for(var r=[],a=0;a<c;a++)-1==r.indexOf(t.data[a].City)&&(r.push(t.data[a].City),e.city=r)})).catch((function(e){console.log(e)}))}return Object(c["p"])((function(){a()})),Object(M["a"])(Object(M["a"])({},Object(c["B"])(e)),{},{changeCity:n,changeTown:r,connectURL:t})}};n("318e");Q.render=I,Q.__scopeId="data-v-86a8461c";var X=Q,Y=[{path:"/",name:"Home",component:X},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Z=Object(h["a"])({history:Object(h["b"])(""),routes:Y}),$=Z,ee=n("5502"),te=Object(ee["a"])({state:{isloading:!0},mutations:{setLoading:function(e){e.isloading=!1},setLoading2:function(e){e.isloading=!0}},actions:{actionSetLoading:function(e,t){e.commit("setLoading",t),console.log(e)}},modules:{}});Object(c["d"])(j).use(te).use($).mount("#app"),Object(c["d"])(j).config.productionTip=!1},"5ad8":function(e,t,n){},"603a":function(e,t,n){},9052:function(e,t,n){},ccb7:function(e,t,n){"use strict";n("5ad8")},ee61:function(e,t,n){"use strict";n("603a")}});
//# sourceMappingURL=app.js.map