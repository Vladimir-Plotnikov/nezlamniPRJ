!function(){function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},r.parcelRequired7c6=i),i.register("j1lrD",(function(e,r){t(e.exports,"displayLoader",(function(){return n})),t(e.exports,"disableLoader",(function(){return o})),i("gGuPt");document.querySelector("body");function n(){var t=document.querySelector(".loader");t&&t.classList.remove("disable")}function o(){var t=document.querySelector(".loader");t&&t.classList.add("disable")}})),i.register("gGuPt",(function(t,e){})),i.register("4Nugj",(function(e,r){t(e.exports,"default",(function(){return n}));var n=function(){return{filmGallery:document.querySelector(".film-gallery"),guard:document.querySelector(".guard-js"),containerPagination:document.getElementById("pagination"),watchedBtn:document.querySelector(".header_btn-watched"),queueBtn:document.querySelector(".header_btn-queue"),myLibraryList:document.querySelector(".mylibrary-film-gallery")}}})),i.register("8nrFW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return r.default(t)||n.default(t)||a.default(t)||o.default()};var r=u(i("kMC0W")),n=u(i("7AJDX")),o=u(i("8CtQK")),a=u(i("auk6i"));function u(t){return t&&t.__esModule?t:{default:t}}})),i.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return n.default(t)};var r,n=(r=i("8NIkP"))&&r.__esModule?r:{default:r}})),i.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}})),i.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),i.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return n.default(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(t,e)};var r,n=(r=i("8NIkP"))&&r.__esModule?r:{default:r}})),i.register("bpxeT",(function(t,e){"use strict";function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}})),i.register("2TvXO",(function(t,e){var r=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=q(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?y:d,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=y,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",d="suspendedYield",h="executing",y="completed",p={};function v(){}function g(){}function m(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(k([])));x&&x!==r&&n.call(x,i)&&(b=x);var L=m.prototype=v.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function q(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,q(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=m,c(L,"constructor",m),c(m,"constructor",g),g.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(S.prototype),c(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(L),c(L,u,"Generator"),c(L,i,(function(){return this})),c(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),i.register("4dL3P",(function(e,r){t(e.exports,"BASE_URL",(function(){return n}));var n="https://api.themoviedb.org/3"})),i.register("hYoMK",(function(e,r){t(e.exports,"API_KEY",(function(){return n}));var n="cbb822aa772537b57d5d040000698149"})),i.register("fgCMy",(function(r,n){t(r.exports,"getKey",(function(){return u})),t(r.exports,"textModalButton",(function(){return l})),t(r.exports,"changeWatchedQueueList",(function(){return s}));var o=i("8nrFW"),a=function(t,e){var r=JSON.stringify(e);localStorage.setItem(t,r)},u=function(t){var e=localStorage.getItem(t);return JSON.parse(e)||void 0},c=function(t){localStorage.removeItem(t)};function l(t){var r=document.querySelector(".btn-add-to-watched"),n=document.querySelector(".btn-add-to-queue");function i(t,r){var n=[],i=u(r);return i&&(n=e(o)(i)),new Set(n).has(t)}i(t,"watched")?(r.textContent="Remove from watched",r.classList.add("in-mylibrary")):(r.textContent="Add to watched",r.classList.remove("in-mylibrary")),i(t,"queue")?(n.textContent="Remove from queue",n.classList.add("in-mylibrary")):(n.textContent="Add to queue",n.classList.remove("in-mylibrary"))}function s(t){var r=document.querySelector(".btn-add-to-watched"),n=document.querySelector(".btn-add-to-queue");r.addEventListener("click",(function(){if(document.querySelector(".btn-add-to-watched").classList.contains("in-mylibrary"))!function(t){var r=[],n=u("watched");n&&(r=e(o)(n));c("watched");var i=r.indexOf(t);r.splice(i,1),a("watched",r),l()}(t);else{var r=[],n=u("watched");n&&(r=e(o)(n));var i=[],s=u("queue");if(s&&(i=e(o)(s)),new Set(i).has(t)){c("queue");var f=i.indexOf(t);i.splice(f,1),a("queue",i)}new Set(r).has(t)||(r.push(t),a("watched",r)),l(t)}})),n.addEventListener("click",(function(){if(document.querySelector(".btn-add-to-queue").classList.contains("in-mylibrary"))!function(t){var r=[],n=u("queue");n&&(r=e(o)(n));c("queue");var i=r.indexOf(t);r.splice(i,1),a("queue",r),l()}(t);else{var r=[],n=u("queue");n&&(r=e(o)(n));var i=[],s=u("watched");if(s&&(i=e(o)(s)),new Set(i).has(t)){c("watched");var f=i.indexOf(t);i.splice(f,1),a("watched",i),l(t)}new Set(r).has(t)||(r.push(t),a("queue",r)),l(t)}}))}})),i.register("aZhHc",(function(t,e){!function(){var t={openModalBtn:document.querySelector(".modal-open"),closeModalBtn:document.querySelector(".modal__close"),modal:document.querySelector(".backdrop-team"),body:document.querySelector("body")};function e(){t.modal.classList.toggle("is-hidden"),t.body.classList.toggle("no-scroll")}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e),document.addEventListener("keydown",(function(e){"Escape"===e.key&&t.body.classList.contains("no-scroll")&&(t.modal.classList.toggle("is-hidden"),t.body.classList.toggle("no-scroll"))})),t.modal.addEventListener("click",(function(e){"backdrop-team"===e.target.className&&(t.modal.classList.toggle("is-hidden"),t.body.classList.toggle("no-scroll"))}))}()}))}();
//# sourceMappingURL=myLibrary.31cb3e3b.js.map
