/*! For license information please see 619.a807da26.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[619],{2147:function(n,t,r){r.d(t,{O:function(){return C}});var e,o,i,a,c,s,l,u,h,p,d,f=r(2332),v=r(9809),g=r(9515),m=r(168),x=r(5867),y=r(8820),w=x.ZP.div(e||(e=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 8px;\n\n  padding: 8px;\n\n  @media screen and (min-width: 375px) {\n    height: 116px;\n  }\n\n  @media screen and (min-width: 768px) {\n    height: 100px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    height: 128px;\n    gap: 12px;\n    padding: 12px;\n  }\n"]))),b=x.ZP.img(o||(o=(0,m.Z)(["\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    height: 320px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    height: 388px;\n  }\n"]))),j=x.ZP.h3(i||(i=(0,m.Z)(["\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n\n  margin: auto 0;\n\n  text-align: center;\n  font-size: 24px;\n  line-height: 1.17;\n  letter-spacing: -0.96px;\n\n  @media screen and (min-width: 768px) and (max-width: 1439px) {\n    font-size: 18px;\n    line-height: 1.33;\n    letter-spacing: -0.36px;\n  }\n"]))),Z=x.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),k=(0,x.ZP)(y.y5j)(c||(c=(0,m.Z)(["\n  width: 32px;\n  height: 32px;\n\n  @media screen and (min-width: 768px) {\n    width: 24px;\n    height: 24px;\n  }\n"]))),L=(0,x.ZP)(y.gwB)(s||(s=(0,m.Z)(["\n  width: 32px;\n  height: 32px;\n\n  @media screen and (min-width: 768px) {\n    width: 24px;\n    height: 24px;\n  }\n"]))),E=x.ZP.span(l||(l=(0,m.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: -0.96px;\n\n  @media screen and (min-width: 768px) and (max-width: 1439px) {\n    font-size: 18px;\n    line-height: 1.33;\n    letter-spacing: -0.36px;\n  }\n"]))),P=x.ZP.span(u||(u=(0,m.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  padding: 8px;\n\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.96px;\n\n  color: var(--black-color);\n  background-color: var(--gray-color);\n\n  @media screen and (min-width: 768px) and (max-width: 1439px) {\n    font-size: 18px;\n    line-height: 1.33;\n    letter-spacing: 0.36px;\n  }\n"]))),_=r(184),S=function(n){var t=n.movies,r=void 0===t?{}:t,e=g.pq.baseUrl,o=g.pq.posterSize,i=r.title,a=void 0===i?"":i,c=r.release_date,s=r.adult,l=r.poster_path,u=r.vote_average,h=void 0===u?0:u,p=l?"".concat(e,"/w").concat(o,"/").concat(l):v,d=new Date(c).getFullYear()||null;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(b,{src:p,alt:"Poster for the movie ".concat(a),width:o,height:1.5*o}),(0,_.jsxs)(w,{children:[a&&(0,_.jsxs)(j,{children:[a," "]}),(0,_.jsxs)(Z,{children:[(0,_.jsx)(f.Z,{readonly:!0,stop:10,step:2,initialRating:h,emptySymbol:(0,_.jsx)(k,{color:"var(--gold-color)"}),fullSymbol:(0,_.jsx)(L,{color:"var(--gold-color)"})}),d&&(0,_.jsx)(E,{children:d})]})]}),s&&(0,_.jsx)(P,{children:"18+"})]})},O=r(1087),A=x.ZP.ul(h||(h=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px 24px;\n\n  width: 100%;\n"]))),N=x.ZP.li(p||(p=(0,m.Z)(["\n  position: relative;\n  transform: scale(1, 1);\n\n  display: flex;\n\n  width: 100%;\n  border-radius: 8px;\n\n  overflow: hidden;\n\n  color: var(--black-color);\n  background-color: var(--gray-color);\n  box-shadow: var(--box-shadow);\n\n  transition: background-color var(--transition-duration)\n      var(--transition-timing-function),\n    transform var(--transition-duration) var(--transition-timing-function);\n\n  @media screen and (min-width: 768px) {\n    width: calc((100% - 32px * 2) / 3);\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: calc((100% - 24px * 4) / 5);\n  }\n\n  &:is(:hover, :focus) {\n    transform: scale(1.04, 1.04);\n\n    background-color: var(--gray-active-color);\n  }\n"]))),q=(0,x.ZP)(O.rU)(d||(d=(0,m.Z)(["\n  display: block;\n\n  width: 100%;\n\n  color: currentColor;\n"]))),C=function(n){var t=n.movies,r=void 0===t?[]:t,e=n.state,o=void 0===e?"/":e;return(0,_.jsx)(A,{children:r.map((function(n){return(0,_.jsx)(N,{children:(0,_.jsx)(q,{to:"/movies/".concat(n.id),state:o,children:(0,_.jsx)(S,{movies:n})})},n.id)}))})}},5619:function(n,t,r){r.r(t),r.d(t,{default:function(){return N}});var e,o,i,a,c,s,l=r(5861),u=r(9439),h=r(2791),p=r(1087),d=r(7689),f=r(9014),v=r(4390),g=r(2147),m=r(9515),x=r(168),y=r(5867),w=r(9126),b=r(8820),j=y.ZP.form(e||(e=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100%;\n  margin-bottom: 40px;\n"]))),Z=y.ZP.label(o||(o=(0,x.Z)(["\n  position: relative;\n\n  width: 100%;\n  margin-right: 20px;\n\n  @media screen and (min-width: 1440px) {\n    width: 800px;\n  }\n"]))),k=y.ZP.input(i||(i=(0,x.Z)(["\n  display: block;\n\n  width: 100%;\n  padding: 8px 32px;\n  border: 2px solid transparent;\n  border-radius: 8px;\n\n  overflow: hidden;\n\n  color: var(--black-color);\n  background-color: var(--gray-color);\n  outline: 2px solid transparent;\n\n  transition: background-color var(--transition-duration)\n      var(--transition-timing-function),\n    border-color var(--transition-duration) var(--transition-timing-function),\n    outline var(--transition-duration) var(--transition-timing-function);\n\n  &:focus {\n    background-color: var(--white-color);\n    border-color: var(--black-color);\n    outline-color: var(--white-color);\n  }\n"]))),L=(0,y.ZP)(w.dVI)(a||(a=(0,x.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 8px;\n  transform: translateY(-50%);\n\n  fill: var(--black-color);\n"]))),E=(0,y.ZP)(b.oHP)(c||(c=(0,x.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  transform: translateY(-50%);\n\n  cursor: pointer;\n\n  fill: var(--black-color);\n"]))),P=y.ZP.button(s||(s=(0,x.Z)(["\n  min-width: 100px;\n  padding: 8px 12px;\n  border: 2px solid transparent;\n  border-radius: 8px;\n\n  color: var(--black-color);\n  background-color: var(--gray-color);\n  outline: 2px solid transparent;\n\n  transition: background-color var(--transition-duration)\n      var(--transition-timing-function),\n    border-color var(--transition-duration) var(--transition-timing-function),\n    outline var(--transition-duration) var(--transition-timing-function);\n\n  &:is(:hover, :focus) {\n    background-color: var(--white-color);\n    border-color: var(--black-color);\n    outline-color: var(--white-color);\n  }\n"]))),_=r(184),S=function(n){var t=n.onSearch;return(0,_.jsxs)(j,{onSubmit:function(n){n.preventDefault();var r=n.target.query.value.trim();return r?(t(r),n.target.reset(),function(){f.Am.remove()}):(f.Am.remove(),void(0,f.Am)("Input field is empty. Enter search query!",m.KA))},children:[(0,_.jsxs)(Z,{children:[(0,_.jsx)(k,{type:"text",name:"query",placeholder:"Movie title"}),(0,_.jsx)(L,{}),(0,_.jsx)(E,{onClick:function(n){n.target.closest("form").reset()}})]}),(0,_.jsx)(P,{type:"submit",children:"Search"})]})},O=r(8512);function A(){A=function(){return t};var n,t={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(n,t,r){n[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(n,t,r){return Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{l({},"")}catch(n){l=function(n,t,r){return n[t]=r}}function u(n,t,r,e){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),c=new S(e||[]);return o(a,"_invoke",{value:L(n,r,c)}),a}function h(n,t,r){try{return{type:"normal",arg:n.call(t,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var p="suspendedStart",d="executing",f="completed",v={};function g(){}function m(){}function x(){}var y={};l(y,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(O([])));b&&b!==r&&e.call(b,a)&&(y=b);var j=x.prototype=g.prototype=Object.create(y);function Z(n){["next","throw","return"].forEach((function(t){l(n,t,(function(n){return this._invoke(t,n)}))}))}function k(n,t){function r(o,i,a,c){var s=h(n[o],n,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&e.call(u,"__await")?t.resolve(u.__await).then((function(n){r("next",n,a,c)}),(function(n){r("throw",n,a,c)})):t.resolve(u).then((function(n){l.value=n,a(l)}),(function(n){return r("throw",n,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(n,e){function o(){return new t((function(t,o){r(n,e,t,o)}))}return i=i?i.then(o,o):o()}})}function L(t,r,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===f){if("throw"===i)throw a;return{value:n,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var s=E(c,e);if(s){if(s===v)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=f,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var l=h(t,r,e);if("normal"===l.type){if(o=e.done?f:"suspendedYield",l.arg===v)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(o=f,e.method="throw",e.arg=l.arg)}}}function E(t,r){var e=r.method,o=t.iterator[e];if(o===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=n,E(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),v;var i=h(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=n),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function P(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function _(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function S(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(P,this),this.reset(!0)}function O(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(e.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=n,r.done=!0,r};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return m.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=l(x,s,"GeneratorFunction"),t.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,x):(n.__proto__=x,l(n,s,"GeneratorFunction")),n.prototype=Object.create(j),n},t.awrap=function(n){return{__await:n}},Z(k.prototype),l(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(n,r,e,o,i){void 0===i&&(i=Promise);var a=new k(u(n,r,e,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},Z(j),l(j,s,"Generator"),l(j,a,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),t.keys=function(n){var t=Object(n),r=[];for(var e in t)r.push(e);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(e,o){return c.type="throw",c.arg=t,r.next=e,o&&(r.method="next",r.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=e.call(a,"catchLoc"),l=e.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),v},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===n)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===n){var e=r.completion;if("throw"===e.type){var o=e.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=n),v}},t}var N=function(){var n,t=(0,p.lr)(),r=(0,u.Z)(t,2),e=r[0],o=r[1],i=(0,h.useState)(""),a=(0,u.Z)(i,2),c=a[0],s=a[1],m=(0,h.useState)(null!==(n=e.get("query"))&&void 0!==n?n:""),x=(0,u.Z)(m,2),y=x[0],w=x[1],b=(0,h.useState)([]),j=(0,u.Z)(b,2),Z=j[0],k=j[1],L=(0,h.useState)(!1),E=(0,u.Z)(L,2),P=E[0],N=E[1],q=(0,d.TH)(),C=(0,h.useRef)();(0,h.useEffect)((function(){if(y)return N(!0),C.current&&C.current.abort(),C.current=new AbortController,function(){n.apply(this,arguments)}(),function(){C.current.abort(),f.Am.remove()};function n(){return(n=(0,l.Z)(A().mark((function n(){var t;return A().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.mv)(y,C.current);case 3:if((t=n.sent).results.length){n.next=8;break}return f.Am.remove(),f.Am.error("Sorry, there are no movies matching your search query. Please try again."),n.abrupt("return");case 8:k(t.results),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&(f.Am.remove(),f.Am.error("Oops, something went wrong. Try reloading the page."));case 14:return n.prev=14,N(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,11,14,17]])})))).apply(this,arguments)}}),[y,c]);return(0,_.jsx)("main",{children:(0,_.jsxs)("div",{children:[(0,_.jsx)(S,{onSearch:function(n){w(n),s(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}()),e.set("query",n),o({searchParams:e})}}),Z.length>0&&(0,_.jsx)(g.O,{movies:Z,state:{from:q}}),P&&(0,_.jsx)(O.a,{text:"Loading data, please wait..."})]})})}}}]);
//# sourceMappingURL=619.a807da26.chunk.js.map