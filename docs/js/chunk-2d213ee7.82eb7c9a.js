(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213ee7"],{af7c:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-container",{attrs:{fluid:""}},[e("ViewTitle",{attrs:{title:"Sales",description:"you can see the statistics of sales"}}),e("v-row",[e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-btn",{on:{click:t.refresh}},[t._v("Refresh")]),e("v-card",{staticClass:"mx-5 my-5",attrs:{flat:""}},[e("LineChart",{ref:"chart",attrs:{labels:this.chart.labels,data:this.chart.data,options:this.chart.options,height:"200px"}})],1)],1)],1)],1)],1)},r=[],i=e("e724"),n={components:{LineChart:i["a"]},data:function(){return{timer:void 0,chart:{labels:[],data:[],options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{min:0,stepSize:10,max:100}}]}}}}},methods:{refresh:function(){60==this.chart.data.length&&this.chart.data.shift(),this.chart.data.push(Math.floor(80*Math.random())),this.$refs.chart.update()}},beforeMount:function(){for(var t=0;t<60;t++)this.chart.labels.push(t+1)},mounted:function(){var t=this;this.timer=setInterval((function(){t.refresh()}),100)},beforeDestroy:function(){var t=this;setTimeout((function(){clearTimeout(t.timer)}),0)}},o=n,c=e("2877"),h=e("6544"),l=e.n(h),f=e("7496"),u=e("8336"),d=e("b0af"),p=e("62ad"),m=e("a523"),v=e("0fd9"),b=Object(c["a"])(o,s,r,!1,null,null,null);a["default"]=b.exports;l()(b,{VApp:f["a"],VBtn:u["a"],VCard:d["a"],VCol:p["a"],VContainer:m["a"],VRow:v["a"]})}}]);
//# sourceMappingURL=chunk-2d213ee7.82eb7c9a.js.map