(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{183:function(t,e,r){"use strict";var o=r(0),n=r(246);o.a.use(n.a)},225:function(t,e,r){var content=r(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("6570a8f6",content,!0,{sourceMap:!1})},227:function(t,e,r){var content=r(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("ad99bda6",content,!0,{sourceMap:!1})},247:function(t,e,r){"use strict";var o={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,title:"Vuetify.js"}}},n=(r(291),r(66)),c=r(118),l=r.n(c),d=r(362),v=r(367),f=r(368),m=r(363),_=r(175),h=r(176),x=r(114),V=r(177),w=r(88),y=r(364),k=r(366),C=r(365),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[o("client-only",[o("vue-particles",{attrs:{color:"#A2248F","particles-number":150,"particle-opacity":.2,"line-opacity":.4,"move-speed":2}})],1),t._v(" "),o("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",t._l(t.items,(function(e,i){return o("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[o("v-list-item-action",[o("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),o("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[o("img",{staticClass:"logo",attrs:{src:r(290)}}),t._v(" "),o("span",{staticClass:"ml-3"},[o("strong",[t._v("Cultivar")]),t._v(" digital")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"primary",icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[o("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),o("v-main",{staticStyle:{"background-color":"#2b2b2b"}},[o("Nuxt")],1),t._v(" "),o("v-footer",{staticClass:"pa-3",attrs:{fixed:"",app:""}},[o("span",{},[t._v("\n      Tem uma boa idéia?\n    ")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"accent"}},[t._v("\n      Nós te ajudamos!\n    ")])],1)],1)}),[],!1,null,"0912a857",null);e.a=component.exports;l()(component,{VApp:d.a,VAppBar:v.a,VBtn:f.a,VFooter:m.a,VIcon:_.a,VList:h.a,VListItem:x.a,VListItemAction:V.a,VListItemContent:w.a,VListItemTitle:w.b,VMain:y.a,VNavigationDrawer:k.a,VSpacer:C.a})},252:function(t,e,r){r(253),t.exports=r(254)},284:function(t,e,r){"use strict";r(225)},285:function(t,e,r){var o=r(19)(!1);o.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=o},290:function(t,e,r){t.exports=r.p+"img/cultivar-digital-logo.0ed42f9.png"},291:function(t,e,r){"use strict";r(227)},292:function(t,e,r){var o=r(19)(!1);o.push([t.i,"section[data-v-0912a857]{min-height:calc(100vh - 112px)}.tertiary--text[data-v-0912a857]{opacity:.4}#particles-js[data-v-0912a857]{position:absolute;top:0;left:0;width:100%;height:100%}.logo[data-v-0912a857]{width:42px}",""]),t.exports=o},77:function(t,e,r){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(r(284),r(66)),c=r(118),l=r.n(c),d=r(362),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[252,11,3,12]]]);