!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}};var r={},o=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=T(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",m={};function v(){}function y(){}function g(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(N([])));x&&x!==n&&r.call(x,i)&&(b=x);var L=g.prototype=v.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function T(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function N(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return y.prototype=g,u(L,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(S.prototype),u(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new S(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,c,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(r);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var i=[{role:"guest",name:"Гість"},{role:"admin",name:"nagibator228"},{role:"user",name:"skuf1488"}],a=[];function c(){return u.apply(this,arguments)}function u(){return(u=t(e)(t(r).mark((function e(){return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(),document.getElementById("posts-container").innerHTML="",a.forEach((function(t){p(t.publicationTheme,t.publicationText,t.id)})),l(),f();case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function l(){return s.apply(this,arguments)}function s(){return(s=t(e)(t(r).mark((function e(){return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.querySelectorAll(".post").forEach((function(t){var e="";a.find((function(e){return e.id==t.getAttribute("data-index")})).comments.forEach((function(t){e+="<li class = 'comment'>".concat(t,"<li>")})),t.querySelector(".comments").innerHTML=e}));case 1:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function f(){document.querySelectorAll(".post").forEach((function(t){t.querySelector(".post-delete-btn").addEventListener("click",(function(t){var e=t.currentTarget.parentNode.parentNode;a=JSON.parse(localStorage.getItem("posts")).filter((function(t){return t.id!=e.getAttribute("data-index")})),m(),e.remove()})),t.querySelector(".post-edit-btn").addEventListener("click",(function(t){v();var e=t.currentTarget.parentNode.parentNode.getAttribute("data-index"),n=a.find((function(t){return t.id===e})),r=d(n.publicationTheme,n.publicationText);n&&(n.publicationText=r.publicationText,n.publicationTheme=r.publicationTheme,m(),c())})),t.querySelector(".post-comment-btn").addEventListener("click",(function(t){v();var e=t.currentTarget.parentNode.parentNode,n=prompt("Введите ваш комментарий:");n&&(a.find((function(t){return t.id===e.getAttribute("data-index")})).comments.push(n),m(),c())}))}))}function h(t){"guest"==t?document.querySelectorAll("button").forEach((function(t){t.setAttribute("disabled","true")})):"admin"==t?document.querySelectorAll("button").forEach((function(t){t.removeAttribute("disabled")})):"user"==t&&(document.querySelectorAll("button").forEach((function(t){t.setAttribute("disabled","true")})),document.querySelectorAll(".post-comment-btn").forEach((function(t){t.removeAttribute("disabled")})))}function p(t,e,n){var r='\n        <div class="post" data-index="'.concat(n,'">\n            <h2 class="post-title">').concat(t,'</h2>\n            <p class="post-content">').concat(e,'</p>\n            <div class="post-actions">\n                <button class="post-delete-btn">Видалити</button>\n                <button class="post-edit-btn">Редагувати</button>\n                <button class="post-comment-btn">Коментувати</button>\n            </div>\n            <ul class = \'comments\'>\n            </ul>\n        </div>\n    ');document.getElementById("posts-container").insertAdjacentHTML("beforeend",r)}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=prompt("Введите тему публикации:",t),r=prompt("Введите текст публикации:",e);if(null!==n&&null!==r){var o=0!=a.length?toString(parseInt(a[a.length-1].id)+1):"0";return{publicationTheme:n,publicationText:r,id:o,comments:[]}}}function m(){localStorage.setItem("posts",JSON.stringify(a))}function v(){a=JSON.parse(localStorage.getItem("posts"))}!function(){document.body.insertAdjacentHTML("afterbegin",'\n        <div class="header">\n             <button id="create-theme-btn" class="create-theme-btn">Додати тему</button>\n        </div>\n    '),document.querySelector(".create-theme-btn").addEventListener("click",(function(){var t=d();v(),t&&(a.push(t),m(),c())}));var t='<select name="example" class="select-user"> '+i.map((function(t){return'<option value="'.concat(t.name,'">').concat(t.name," (").concat(t.role,")</option>")})).join("")+"</select>";document.querySelector(".header").insertAdjacentHTML("afterbegin",t);var e=document.querySelector(".select-user");document.querySelector(".select-user").addEventListener("change",(function(t){h(i.find((function(t){return t.name==e.value})).role)}))}(),c(),h("guest")}();
//# sourceMappingURL=index.873bc72c.js.map
