(function(e){function t(t){for(var n,u,s=t[0],c=t[1],i=t[2],f=0,p=[];f<s.length;f++)u=s[f],a[u]&&p.push(a[u][0]),a[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],u=r("2877"),s={},c=Object(u["a"])(s,a,o,!1,null,null,null),i=c.exports,l=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",{staticClass:"bro-chatPage"},[r("ul",{staticClass:"bro-chatPage-body"},e._l(e.messages,function(t,n){return r("li",{key:n,class:"bro-chatPage-author-"+t.author},[e._v(e._s(t.text))])}),0),r("b-row",{staticClass:"bro-chatPage-input"},[r("b-col",{attrs:{cols:"9"}},[r("b-form-input",{attrs:{type:"text",placeholder:"Enter title",maxlength:128,required:"",state:Boolean(e.curMsg)},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.send(t))}},model:{value:e.curMsg,callback:function(t){e.curMsg=t},expression:"curMsg"}})],1),r("b-col",{attrs:{cols:"3"}},[r("b-button",{staticClass:"bro-chatPage-send",on:{click:function(t){return t.preventDefault(),e.send(t)}}},[e._v("Send")])],1)],1)],1)],1)},p=[],d=(r("96cf"),r("3b8d")),h={name:"home",data:function(){return{messages:[],curMsg:""}},methods:{getAnswer:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r="/api/get-answer",n=new URLSearchParams,n.append("q",t),e.next=5,fetch(r,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),send:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.curMsg){e.next=2;break}return e.abrupt("return");case 2:return this.messages.push({text:this.curMsg,author:"me"}),e.next=5,this.getAnswer(this.curMsg);case 5:return e.next=7,e.sent.json();case 7:t=e.sent,this.messages.push({text:t.a,author:"notMe"}),this.curMsg="";case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},b=h,g=(r("de16"),Object(u["a"])(b,f,p,!1,null,null,null)),v=g.exports;n["a"].use(l["a"]);var m=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:v}]}),w=r("2f62");n["a"].use(w["a"]);var y=new w["a"].Store({state:{},mutations:{},actions:{}}),x=r("9f7b"),O=r.n(x);r("f9e3"),r("2dd8");n["a"].config.productionTip=!1,n["a"].use(O.a),new n["a"]({router:m,store:y,render:function(e){return e(i)}}).$mount("#app")},de16:function(e,t,r){"use strict";var n=r("f3e7"),a=r.n(n);a.a},f3e7:function(e,t,r){}});
//# sourceMappingURL=app.6e13bc7c.js.map