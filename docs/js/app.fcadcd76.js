(function(e){function t(t){for(var i,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},r={app:0},o=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-b56a988e":"f97819f2","chunk-f88b53c8":"7c73d4db","chunk-672ebcd6":"40250f77","chunk-7151bf6d":"88cc6662","chunk-bb4370f4":"4d0d19c5","chunk-cf3fac10":"f0231a85","chunk-e034845e":"3ef9930d","chunk-2d213ee7":"87133765"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-b56a988e":1,"chunk-f88b53c8":1,"chunk-672ebcd6":1,"chunk-7151bf6d":1,"chunk-e034845e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-b56a988e":"f0222215","chunk-f88b53c8":"f0222215","chunk-672ebcd6":"8a32553d","chunk-7151bf6d":"af984da9","chunk-bb4370f4":"31d6cfe0","chunk-cf3fac10":"31d6cfe0","chunk-e034845e":"7129d2ea","chunk-2d213ee7":"31d6cfe0"}[e]+".css",r=s.p+i,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===i||l===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var i=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete a[e],p.parentNode.removeChild(p),n(o)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var i=r[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise((function(t,n){i=r[e]=[t,n]}));t.push(i[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,n[1](d)}r[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/statistics-fast-food/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("AppNavigator"),n("v-main",[n("router-view")],1),n("AppConfirm"),n("AppSnackBar")],1)},r=[],o={name:"App"},c=o,s=(n("034f"),n("2877")),u=n("6544"),l=n.n(u),d=n("7496"),p=n("f6c4"),f=Object(s["a"])(c,a,r,!1,null,null,null),h=f.exports;l()(f,{VApp:d["a"],VMain:p["a"]});n("d3b7"),n("3ca3"),n("ddb0");var m=n("8c4f");i["a"].use(m["a"]);var v,b,k=[{path:"/",name:"DashBoard",component:function(){return Promise.all([n.e("chunk-f88b53c8"),n.e("chunk-672ebcd6"),n.e("chunk-bb4370f4"),n.e("chunk-cf3fac10")]).then(n.bind(null,"7e48"))}},{path:"/dashboard",name:"DashBoard",component:function(){return Promise.all([n.e("chunk-f88b53c8"),n.e("chunk-672ebcd6"),n.e("chunk-bb4370f4"),n.e("chunk-cf3fac10")]).then(n.bind(null,"7e48"))}},{path:"/material",name:"Material",component:function(){return Promise.all([n.e("chunk-f88b53c8"),n.e("chunk-672ebcd6"),n.e("chunk-7151bf6d")]).then(n.bind(null,"3d2f"))}},{path:"/food",name:"Food",component:function(){return Promise.all([n.e("chunk-f88b53c8"),n.e("chunk-672ebcd6"),n.e("chunk-e034845e")]).then(n.bind(null,"ae7f"))}},{path:"/sales",name:"Sales",component:function(){return Promise.all([n.e("chunk-f88b53c8"),n.e("chunk-bb4370f4"),n.e("chunk-2d213ee7")]).then(n.bind(null,"af7c"))}},{path:"/stock",name:"Stock",component:function(){return n.e("chunk-b56a988e").then(n.bind(null,"68e3"))}}],y=new m["a"]({mode:"hash",base:"/statistics-fast-food/",routes:k}),g=y,P=n("ade3"),x=(n("d81d"),n("b0c0"),n("7db0"),n("d9e2"),n("a434"),n("c740"),n("4de4"),n("a9e3"),n("2f62")),C=n("9fb0");i["a"].use(x["a"]);var A=new x["a"].Store({state:{materials:[{id:1,name:"Bruger Burn",purchaseUnit:"Box",purchasePrice:18e3,supplyPrice:16364,valueAddedTax:1636,stockUnit:"Each",stockConversionQuantity:100,stockUnitPrice:163.64},{id:2,name:"Patty",purchaseUnit:"Box",purchasePrice:28e3,supplyPrice:25455,valueAddedTax:2545,stockUnit:"Each",stockConversionQuantity:30,stockUnitPrice:848.5},{id:3,name:"Lettuce",purchaseUnit:"Kg",purchasePrice:13e3,supplyPrice:11818,valueAddedTax:1182,stockUnit:"g",stockConversionQuantity:1e3,stockUnitPrice:11.818},{id:4,name:"Tomato",purchaseUnit:"Kg",purchasePrice:9e3,supplyPrice:8182,valueAddedTax:818,stockUnit:"g",stockConversionQuantity:1e3,stockUnitPrice:8.182},{id:5,name:"Burger Sauce",purchaseUnit:"Kg",purchasePrice:1e4,supplyPrice:9091,valueAddedTax:909,stockUnit:"g",stockConversionQuantity:1e3,stockUnitPrice:9.091},{id:6,name:"Pickle",purchaseUnit:"Kg",purchasePrice:7e3,supplyPrice:6364,valueAddedTax:636,stockUnit:"g",stockConversionQuantity:1e3,stockUnitPrice:6.364},{id:7,name:"Wrapping Paper",purchaseUnit:"Box",purchasePrice:11e3,supplyPrice:1e4,valueAddedTax:1e3,stockUnit:"Each",stockConversionQuantity:300,stockUnitPrice:33.333},{id:8,name:"Potato",purchaseUnit:"Kg",purchasePrice:8500,supplyPrice:7727,valueAddedTax:773,stockUnit:"g",stockConversionQuantity:1e3,stockUnitPrice:7.727},{id:9,name:"French Fries Box",purchaseUnit:"Box",purchasePrice:15e3,supplyPrice:13636,valueAddedTax:1364,stockUnit:"Each",stockConversionQuantity:100,stockUnitPrice:136.36},{id:10,name:"Ketchup",purchaseUnit:"Kg",purchasePrice:5500,supplyPrice:5e3,valueAddedTax:500,stockUnit:"g",stockConversionQuantity:1e3,stockUnitPrice:5},{id:11,name:"Coke Cup",purchaseUnit:"Box",purchasePrice:8e3,supplyPrice:7273,valueAddedTax:727,stockUnit:"Each",stockConversionQuantity:30,stockUnitPrice:242.433},{id:12,name:"Straw",purchaseUnit:"Box",purchasePrice:3e3,supplyPrice:2727,valueAddedTax:273,stockUnit:"Each",stockConversionQuantity:100,stockUnitPrice:27.27},{id:13,name:"Coke Syrup",purchaseUnit:"L",purchasePrice:1e4,supplyPrice:9091,valueAddedTax:909,stockUnit:"ml",stockConversionQuantity:1e3,stockUnitPrice:9.091},{id:14,name:"Hotdog Burn",purchaseUnit:"Box",purchasePrice:16e3,supplyPrice:14545,valueAddedTax:1455,stockUnit:"Each",stockConversionQuantity:100,stockUnitPrice:145.45},{id:15,name:"Sausage",purchaseUnit:"Kg",purchasePrice:2e4,supplyPrice:18182,valueAddedTax:1818,stockUnit:"g",stockConversionQuantity:1e3,stockUnitPrice:18.182},{id:16,name:"Mustart Sauce",purchaseUnit:"Kg",purchasePrice:12e3,supplyPrice:10909,valueAddedTax:1091,stockUnit:"g",stockConversionQuantity:1e3,stockUnitPrice:10.909},{id:17,name:"Sandwich Bread",purchaseUnit:"Box",purchasePrice:14e3,supplyPrice:12727,valueAddedTax:1273,stockUnit:"Each",stockConversionQuantity:100,stockUnitPrice:127.27},{id:18,name:"Slice Ham",purchaseUnit:"Box",purchasePrice:16e3,supplyPrice:14545,valueAddedTax:1455,stockUnit:"Each",stockConversionQuantity:30,stockUnitPrice:484.833},{id:19,name:"Slice Cheese",purchaseUnit:"Box",purchasePrice:15e3,supplyPrice:13636,valueAddedTax:1364,stockUnit:"Each",stockConversionQuantity:30,stockUnitPrice:454.533},{id:20,name:"Fried Eggs",purchaseUnit:"Box",purchasePrice:5e3,supplyPrice:4545,valueAddedTax:455,stockUnit:"Each",stockConversionQuantity:30,stockUnitPrice:151.5},{id:21,name:"Mayonnaise",purchaseUnit:"Kg",purchasePrice:6800,supplyPrice:6182,valueAddedTax:618,stockUnit:"g",stockConversionQuantity:1e3,stockUnitPrice:6.182}],foods:[{id:1,name:"Burger",productType:"Single",price:3e3},{id:2,name:"Hotdog",productType:"Single",price:2500},{id:3,name:"French Fries",productType:"Single",price:1500},{id:4,name:"Sandwich",productType:"Single",price:2300},{id:5,name:"Coke",productType:"Single",price:1800},{id:6,name:"Burger Set",productType:"Set",price:6100},{id:7,name:"Hotdog Set",productType:"Set",price:4100},{id:8,name:"Sandwich Set",productType:"Set",price:4e3}],compositions:[{id:6,foods:[{id:1,quantity:1},{id:3,quantity:1},{id:5,quantity:1}]},{id:7,foods:[{id:2,quantity:1},{id:5,quantity:1}]},{id:8,foods:[{id:4,quantity:1},{id:5,quantity:1}]}],recipes:[{id:1,materials:[{id:1,amount:1},{id:2,amount:1},{id:3,amount:5},{id:4,amount:10},{id:5,amount:75},{id:7,amount:1}]}],transaction:[]},mutations:(v={},Object(P["a"])(v,C["i"],(function(e,t){var n=Math.max.apply(Math,e.foods.map((function(e){return e.id})));if(t.id=n>0?n+1:1,e.foods.push({id:t.id,name:t.name,productType:t.productType,price:t.price}),"Single"==t.productType){var i=t.recipe.map((function(e){return{id:e.id,amount:e.amount}}));e.recipes.push({id:t.id,materials:i})}else if("Set"==t.productType){var a=t.composition.map((function(e){return{id:e.id,quantity:e.quantity}}));e.compositions.push({id:t.id,foods:a})}})),Object(P["a"])(v,C["l"],(function(e,t){var n=e.foods.find((function(e){return e.id==t.id}));if(void 0==n&&new Error("food is not found"),n.name=t.name,n.productType=t.productType,n.price=t.price,"Single"==n.productType){var i=e.recipes.find((function(e){return e.id==n.id}));i.materials=t.recipe}else if("Set"==n.productType){var a=e.compositions.find((function(e){return e.id==n.id}));a.foods=t.composition}})),Object(P["a"])(v,C["g"],(function(e,t){var n=e.foods.find((function(e){return e.id==t.id})),i=e.recipes.find((function(e){return e.id==t.id})),a=e.recipes.find((function(e){return e.id==t.id}));e.foods.splice(n,1),e.recipes.splice(i,1),e.compositions.splice(a,1)})),Object(P["a"])(v,C["j"],(function(e,t){var n=Math.max.apply(Math,e.materials.map((function(e){return e.id})));t.id=n>0?n+1:1,e.materials.push(t)})),Object(P["a"])(v,C["m"],(function(e,t){var n=e.materials.find((function(e){return e.id==t.id}));void 0==n&&new Error("material is not found"),n.name=t.name,n.purchaseUnit=t.purchaseUnit,n.purchasePrice=t.purchasePrice,n.stockUnit=t.stockUnit,n.stockConversionQuantity=t.stockConversionQuantity,n.supplyPrice=t.supplyPrice,n.valueAddedTax=t.valueAddedTax,n.stockUnitPrice=t.stockUnitPrice})),Object(P["a"])(v,C["h"],(function(e,t){var n=e.materials.findIndex((function(e){return e.id==t.id}));e.materials.splice(n,1);var i=e.recipes.filter((function(e){return void 0!=e.materials.find((function(e){return e.id==t.id}))}));void 0!=i&&i.map((function(e){var n=e.materials.findIndex((function(e){return e.id==t.id}));e.materials.splice(n,1)}))})),Object(P["a"])(v,C["n"],(function(e,t){var n=e.recipes.find((function(e){return e.id==t.id}));if(void 0!=n){var i=n.materials.find((function(e){return e.id==t.material.id}));void 0!=i&&(i.amount=Number(t.material.amount))}})),Object(P["a"])(v,C["k"],(function(e,t){var n=e.compositions.find((function(e){return e.id==t.id}));if(void 0!=n){var i=n.foods.find((function(e){return e.id==t.food.id}));void 0!=i&&(i.quantity=Number(t.food.quantity))}})),v),actions:(b={},Object(P["a"])(b,C["c"],(function(e,t){var n=e.commit;try{n(C["i"],t)}catch(i){console.error(i)}})),Object(P["a"])(b,C["e"],(function(e,t){var n=e.commit;try{n(C["l"],t)}catch(i){console.error(i)}})),Object(P["a"])(b,C["a"],(function(e,t){var n=e.commit;try{n(C["g"],t)}catch(i){console.error(i)}})),Object(P["a"])(b,C["d"],(function(e,t){var n=e.commit;try{n(C["j"],t)}catch(i){console.error(i)}})),Object(P["a"])(b,C["f"],(function(e,t){var n=e.commit;try{n(C["m"],t)}catch(i){console.error(i)}})),Object(P["a"])(b,C["b"],(function(e,t){var n=e.commit;try{n(C["h"],t)}catch(i){console.error(i)}})),b),modules:{}}),S=(n("15f5"),n("d1e78"),n("f309"));i["a"].use(S["a"]);var U=new S["a"]({icons:{iconfont:"md"},theme:{colors:{primary:"#7BC6FF"},navigator:{background:"#F2F2F2"}}}),T=n("53ca"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:"","max-width":"400px"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.onClose.apply(null,arguments)}},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("v-card",[n("v-card-title",{staticClass:"text-h6",staticStyle:{"background-color":"#9D84BF",color:"white"}},[e._v(" "+e._s(e.title)+" ")]),n("v-card-text",{staticClass:"py-5 px-6 text-body-1"},[e._v(" "+e._s(e.message)+" ")]),n("v-card-actions",[n("v-spacer"),n("AppButton",{attrs:{text:"Cancel",icon:"close",depressed:""},on:{click:e.onClose}}),n("AppButton",{attrs:{text:"Ok",icon:"done",depressed:""},on:{click:e.onConfirm}}),n("v-spacer")],1)],1)],1)},E=[],O=new i["a"]({name:"AppConfirm"}),w={name:"AppConfirm",data:function(){return{title:"",message:"",visible:!1,callback:void 0}},methods:{onOpen:function(e){this.title=e.title,this.message=e.message,this.visible=!0,this.callback=e.callback},onClose:function(){this.visible=!1,this.callback&&this.callback(!1)},onConfirm:function(){this.visible=!1,this.callback&&this.callback(!0)}},mounted:function(){var e=this;document&&(O.$on("open",this.onOpen),O.$on("close",(function(){e.onClose()})))}},j=w,V=j,B=n("b0af"),F=n("99d9"),M=n("169a"),$=n("2fa4"),D=Object(s["a"])(V,_,E,!1,null,null,null),L=D.exports;l()(D,{VCard:B["a"],VCardActions:F["a"],VCardText:F["c"],VCardTitle:F["d"],VDialog:M["a"],VSpacer:$["a"]});var I={install:function(e){if(1!=this.installed){this.installed=!0,e.component("AppConfirm",L);var t=function(e){if("object"!=Object(T["a"])(e)||Array.isArray(e)){var t=Object(T["a"])(e);throw Array.isArray(e)&&(t="array"),new Error("Options type must be an object. Caught: ".concat(t,". Expected: object"))}if("object"===Object(T["a"])(e)){if(Object.prototype.hasOwnProperty.call(e,"callback")&&"function"!=typeof e.callback){var n=Object(T["a"])(e.callback);throw new Error("Callback type must be an function. Caught: ".concat(n,". Expected: function"))}O.$emit("open",e)}};t.close=function(){O.$emit("close")},e.prototype.$confirm=t,e["$confirm"]=t}}},Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-snackbar",{attrs:{timeout:3e3,color:"rgba(157, 132, 191)",absolute:"",top:""},scopedSlots:e._u([{key:"action",fn:function(t){var i=t.attrs;return[n("v-btn",e._b({attrs:{color:"white",text:""},on:{click:function(t){e.visible=!1}}},"v-btn",i,!1),[e._v(" Close ")])]}}]),model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e._v(" "+e._s(e.text)+" ")])},N=[],R=new i["a"]({name:"AppSnackBar"}),q={name:"AppSnackBar",data:function(){return{visible:!1,text:""}},methods:{onOpen:function(e){this.text=e,this.visible=!0}},mounted:function(){var e=this;document&&(R.$on("open",this.onOpen),R.$on("close",(function(){return e.visible=!1})))}},K=q,z=K,H=n("8336"),J=n("2db4"),W=Object(s["a"])(z,Q,N,!1,null,null,null),G=W.exports;l()(W,{VBtn:H["a"],VSnackbar:J["a"]});var X={install:function(e){if(1!=this.installed){this.installed=!0,e.component("AppSnackBar",G);var t=function(e){if("string"!=typeof e){var t=Object(T["a"])(e);throw new Error("Message type muse be an string. Caught: ".concat(t,". Expected: string"))}R.$emit("open",e)};t.close=function(){R.$emit("close")},e.prototype.$snackbar=t,e["$snackbar"]=t}}},Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{style:e.buttonStyle,attrs:{outlined:e.outlined,depressed:e.depressed,color:e.color,fab:e.fab,small:e.small},on:{click:e.onClick}},[n("v-icon",{class:{"mr-2":null!=this.text},attrs:{color:this.color,size:e.iconSize},domProps:{textContent:e._s(e.icon)}}),e._v(" "+e._s(e.text)+" ")],1)},Z=[],ee={props:["text","icon","outlined","depressed","color","fab","small","white","iconSize"],computed:{buttonStyle:{get:function(){return{color:void 0!=this.white?"#FFFFFF":"#9D84BF",backgroundColor:"transparent"}}}},methods:{onClick:function(e){this.$emit("click",e)}}},te=ee,ne=n("132d"),ie=Object(s["a"])(te,Y,Z,!1,null,null,null),ae=ie.exports;l()(ie,{VBtn:H["a"],VIcon:ne["a"]});var re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-text-field",e._b({ref:"field",attrs:{"error-messages":e.errorMessages},on:{focus:e.onFocus,keyup:e.onKeyUp,change:e.onChange,blur:e.onBlur},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},"v-text-field",e.$attrs,!1))},oe=[];n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("5319"),n("fb6a");function ce(e,t){var n=t;return null!==e&&e.length>0&&(isNaN(e)||(n=parseFloat(e))),n}var se={props:{value:{type:Number,default:void 0},"error-messages":null,allowNegative:{type:Boolean,default:!1},prefix:{type:String,default:"$ "},thousandsSeparator:{type:String,default:","},decimalSeparator:{type:String,default:"."},languageCode:{type:String,default:"en-US"}},data:function(){return{numberValue:this.value,model:this.value,isMasked:!0,thousandsSeparatorRegex:new RegExp("\\".concat(this.thousandsSeparator),"g"),decimalSeparatorRegex:new RegExp("\\".concat(this.decimalSeparator),"g")}},methods:{onFocus:function(){this.isMasked=!1,this.updateModel()},onBlur:function(){this.$listeners.blur&&this.$listeners.blur(),this.isMasked=!0,this.format()},onKeyUp:function(){this.updateNumberValue()},onChange:function(){this.$listeners.change&&this.$listeners.change()},updateNumberValue:function(){var e,t=this.model;t=t.replace(this.thousandsSeparatorRegex,""),"."!==this.decimalSeparator&&(t=t.replace(this.decimalSeparatorRegex,this.thousandsSeparator));var n=ce(t);e=n||0,!this.allowNegative&&n<0&&(e=0),this.numberValue=Math.round(100*e)/100},updateModel:function(){if(void 0!=this.numberValue&&null!=this.numberValue){var e=this.numberValue.toString();e=e.replace(this.thousandsSeparatorRegex,this.decimalSeparator),this.model=e}},format:function(){if(void 0!=this.numberValue&&null!=this.numberValue){var e=this.numberValue;e=e.toLocaleString(this.languageCode),1!==e.length&&1===e.slice(e.indexOf(this.decimalSeparator)+1).length&&(e+="0"),this.model=e}}},watch:{numberValue:function(e){this.$emit("input",e)},value:function(e){this.numberValue=e,this.$refs.field.isFocused||this.format()}},created:function(){this.format()}},ue=se,le=n("8654"),de=Object(s["a"])(ue,re,oe,!1,null,null,null),pe=de.exports;l()(de,{VTextField:le["a"]});var fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},he=[],me={},ve=me,be=Object(s["a"])(ve,fe,he,!1,null,null,null),ke=be.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{app:"","mini-variant":"","mini-variant-width":"80",color:"#F2F2F2"}},[n("v-avatar",{staticClass:"d-block text-center mx-auto mt-4",attrs:{size:"52"}},[n("v-icon",{attrs:{color:"#9D84BF",size:"52"},on:{click:function(t){return e.redirect("https://github.com/Ohmry/statistics-fast-food")}}},[e._v("fab fa-github")])],1),n("v-divider",{staticClass:"mx-3 my-3"}),n("v-list",{attrs:{flat:""}},e._l(e.menuItems,(function(t,i){return n("router-link",{key:i,attrs:{to:t.title}},[n("v-list-item",{staticClass:"mb-1",attrs:{ripple:!1,"active-class":"menu-selected"}},[n("v-list-item-icon",[n("v-icon",{attrs:{size:"32",light:""},domProps:{textContent:e._s(t.icon)}})],1)],1)],1)})),1)],1)},ge=[],Pe={data:function(){return{currentMenuItem:0,menuItems:[{title:"DashBoard",icon:"dashboard"},{title:"Material",icon:"local_shipping"},{title:"Food",icon:"restaurant"}]}},methods:{redirect:function(e){window.location.href=e}}},xe=Pe,Ce=(n("dc84"),n("8212")),Ae=n("ce7e"),Se=n("8860"),Ue=n("da13"),Te=n("34c3"),_e=n("f774"),Ee=Object(s["a"])(xe,ye,ge,!1,null,null,null),Oe=Ee.exports;l()(Ee,{VAvatar:Ce["a"],VDivider:Ae["a"],VIcon:ne["a"],VList:Se["a"],VListItem:Ue["a"],VListItemIcon:Te["a"],VNavigationDrawer:_e["a"]});var we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{attrs:{"two-line":"",flat:""}},[n("v-list-item",{staticClass:"d-block"},[n("v-list-item-title",{staticClass:"text-h4",staticStyle:{color:"#9D84BF"},domProps:{textContent:e._s(e.title)}}),e.description?n("v-list-item-subtitle",{domProps:{textContent:e._s(e.description)}}):e._e()],1)],1)},je=[],Ve={props:["title","description"]},Be=Ve,Fe=n("5d23"),Me=Object(s["a"])(Be,we,je,!1,null,null,null),$e=Me.exports;l()(Me,{VList:Se["a"],VListItem:Ue["a"],VListItemSubtitle:Fe["b"],VListItemTitle:Fe["c"]});var De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{attrs:{"two-line":"",flat:""}},[n("v-list-item",{staticClass:"d-block pa-0"},[n("v-list-item-title",{staticClass:"text-h5",staticStyle:{color:"#9D84BF"},domProps:{textContent:e._s(e.title)}}),e.description?n("v-list-item-subtitle",{domProps:{textContent:e._s(e.description)}}):e._e()],1)],1)},Le=[],Ie={props:["title","description"]},Qe=Ie,Ne=Object(s["a"])(Qe,De,Le,!1,null,null,null),Re=Ne.exports;l()(Ne,{VList:Se["a"],VListItem:Ue["a"],VListItemSubtitle:Fe["b"],VListItemTitle:Fe["c"]}),i["a"].use(I),i["a"].use(X),i["a"].component("AppConfirm",L),i["a"].component("AppButton",ae),i["a"].component("AppCurrencyField",pe),i["a"].component("AppDialog",ke),i["a"].component("AppNavigator",Oe),i["a"].component("AppSnackBar",G),i["a"].component("ViewTitle",$e),i["a"].component("ViewSubTitle",Re),i["a"].config.productionTip=!1,new i["a"]({router:g,store:A,vuetify:U,render:function(e){return e(h)}}).$mount("#app")},"7a55":function(e,t,n){},"85ec":function(e,t,n){},"9fb0":function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"j",(function(){return o})),n.d(t,"m",(function(){return c})),n.d(t,"h",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"l",(function(){return f})),n.d(t,"g",(function(){return h})),n.d(t,"n",(function(){return m})),n.d(t,"k",(function(){return v}));var i="AC_SAVE_MATERIAL",a="AC_UPDATE_MATERIAL",r="AC_DELETE_MATERIAL",o="MT_SAVE_MATERIAL",c="MT_UPDATE_MATERIAL",s="MT_DELETE_MATERIAL",u="AC_SAVE_FOOD",l="AC_UPDATE_FOOD",d="AC_DELTE_FOOD",p="MT_SAVE_FOOD",f="MT_UPDATE_FOOD",h="MT_DELETE_FOOD",m="UPDATE_RECIPE",v="UPDATE_COMPOSITION"},dc84:function(e,t,n){"use strict";n("7a55")}});
//# sourceMappingURL=app.fcadcd76.js.map