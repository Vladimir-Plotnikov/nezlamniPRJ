!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},n.parcelRequired7c6=i),i.register("iE7OH",(function(e,n){var r,o;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("j1lrD",(function(e,n){t(e.exports,"displayLoader",(function(){return o})),t(e.exports,"disableLoader",(function(){return a}));var r=(0,i("4Nugj").default)().loader;function o(){r&&r.classList.remove("disable")}function a(){r&&r.classList.add("disable")}})),i.register("4Nugj",(function(e,n){t(e.exports,"default",(function(){return r}));var r=function(){return{filmGallery:document.querySelector(".film-gallery"),searchInput:document.querySelector(".search_input"),guard:document.querySelector(".guard-js"),containerPagination:document.getElementById("pagination"),watchedBtn:document.querySelector(".header_btn-watched"),queueBtn:document.querySelector(".header_btn-queue"),myLibraryList:document.querySelector(".mylibrary-film-gallery"),placeholder:document.querySelector(".js-search__form"),addToWatchedBtn:document.querySelector(".btn-add-to-watched"),btnAddToWatch:document.querySelector(".wached"),themaSwitchToogle:document.querySelector(".theme-switch__toggle"),body:document.querySelector("body"),loader:document.querySelector(".loader"),modalWindow:document.querySelector(".modal"),placeholderQB:document.querySelector(".placeholder"),btnAddToQueue:document.querySelector(".queue"),backdrop:document.querySelector(".backdrop"),closeButton:document.querySelector(".close-button"),openModalBtn:document.querySelector(".modal-open"),closeModalBtn:document.querySelector(".modal__close"),modal:document.querySelector(".backdrop-team"),loginOpenBtn:document.querySelector(".login__open-button"),loginBackdrop:document.querySelector(".login__backdrop"),loginCloseBtn:document.querySelector(".login__close-button"),loginForm:document.querySelector(".login__form"),loginEmail:document.getElementById("email"),loginPassword:document.getElementById("password"),loginSubmitBtn:document.querySelector(".login__submit-button"),currentUser:document.querySelector(".login__current-user")}}})),i.register("8nrFW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return n.default(t)||r.default(t)||a.default(t)||o.default()};var n=s(i("kMC0W")),r=s(i("7AJDX")),o=s(i("8CtQK")),a=s(i("auk6i"));function s(t){return t&&t.__esModule?t:{default:t}}})),i.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return r.default(t)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}})),i.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),i.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return r.default(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(t,e)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))}}})),i.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=P(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?h:d,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",v={};function m(){}function g(){}function y(){}var _={};c(_,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(k([])));x&&x!==n&&r.call(x,i)&&(_=x);var w=y.prototype=m.prototype=Object.create(_);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function P(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,P(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function k(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return g.prototype=y,c(w,"constructor",y),c(y,"constructor",g),g.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(L.prototype),c(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),c(w,s,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),i.register("4dL3P",(function(e,n){t(e.exports,"BASE_URL",(function(){return r}));var r="https://api.themoviedb.org/3"})),i.register("hYoMK",(function(e,n){t(e.exports,"API_KEY",(function(){return r}));var r="cbb822aa772537b57d5d040000698149"})),i.register("fgCMy",(function(n,r){t(n.exports,"getKey",(function(){return s})),t(n.exports,"textModalButton",(function(){return u})),t(n.exports,"changeWatchedQueueList",(function(){return l}));var o=i("8nrFW"),a=function(t,e){var n=JSON.stringify(e);localStorage.setItem(t,n)},s=function(t){var e=localStorage.getItem(t);return JSON.parse(e)||void 0},c=function(t){localStorage.removeItem(t)};function u(t){var n=document.querySelector(".btn-add-to-watched"),r=document.querySelector(".btn-add-to-queue");function i(t,n){var r=[],i=s(n);return i&&(r=e(o)(i)),new Set(r).has(t)}i(t,"watched")?(n.textContent="Remove from watched",n.classList.add("in-mylibrary")):(n.textContent="Add to watched",n.classList.remove("in-mylibrary")),i(t,"queue")?(r.textContent="Remove from queue",r.classList.add("in-mylibrary")):(r.textContent="Add to queue",r.classList.remove("in-mylibrary"))}function l(t){var n=document.querySelector(".btn-add-to-watched"),r=document.querySelector(".btn-add-to-queue");n.addEventListener("click",(function(){if(document.querySelector(".btn-add-to-watched").classList.contains("in-mylibrary"))!function(t){var n=[],r=s("watched");r&&(n=e(o)(r));c("watched");var i=n.indexOf(t);n.splice(i,1),a("watched",n),u()}(t);else{var n=[],r=s("watched");r&&(n=e(o)(r));var i=[],l=s("queue");if(l&&(i=e(o)(l)),new Set(i).has(t)){c("queue");var f=i.indexOf(t);i.splice(f,1),a("queue",i)}new Set(n).has(t)||(n.push(t),a("watched",n)),u(t)}})),r.addEventListener("click",(function(){if(document.querySelector(".btn-add-to-queue").classList.contains("in-mylibrary"))!function(t){var n=[],r=s("queue");r&&(n=e(o)(r));c("queue");var i=n.indexOf(t);n.splice(i,1),a("queue",n),u()}(t);else{var n=[],r=s("queue");r&&(n=e(o)(r));var i=[],l=s("watched");if(l&&(i=e(o)(l)),new Set(i).has(t)){c("watched");var f=i.indexOf(t);i.splice(f,1),a("watched",i),u(t)}new Set(n).has(t)||(n.push(t),a("queue",n)),u(t)}}))}})),i.register("5xtVg",(function(n,r){t(n.exports,"onModalWindowOpen",(function(){return y})),t(n.exports,"onEscClose",(function(){return b}));var o=i("bpxeT"),a=i("2TvXO"),s=i("4dL3P"),c=i("hYoMK"),u=i("bVeVz"),l=i("9lJIX"),f=i("fgCMy"),d=(0,i("4Nugj").default)(),p=d.filmGallery,h=d.modalWindow,v=d.backdrop,m=d.closeButton;function g(){return(g=e(o)(e(a).mark((function t(n){var r;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s.BASE_URL,"/movie/").concat(n,"?api_key=").concat(c.API_KEY));case 2:if((r=t.sent).ok){t.next=5;break}throw new Error(r.status);case 5:return t.next=7,r.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){if(t.target.closest("li")&&t.target.closest("li")){var n=t.target.closest("li").dataset.id,r=document.querySelector(".information");r&&r.remove(),function(t){return g.apply(this,arguments)}(n).then((function(t){!function(t){var n=t.genres,r=t.original_title,o=void 0===r?"Unknown":r,i=t.overview,a=t.popularity,s=t.poster_path,c=t.title,u=void 0===c?"Unknown":c,d=t.vote_average,p=void 0===d?0:d,v=t.vote_count,m=void 0===v?0:v,g=t.id,y="";y=n.length?n.map((function(t){return t.name})).join(", "):"No information";var _="";_=s?"https://image.tmdb.org/t/p/w500".concat(s):e(l);var b="";b=i||"No description";var x='<div class="information" data-id="'.concat(g,'"><div class="trailer">\n  <img src="').concat(_,'" alt="Movie poster"/>\n  <div class="overlay">\n    <div class="circle"><svg width="60" height="60" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n        <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM12 9l12 7-12 7z"></path>\n        </svg></div>\n    </div>\n  </div>\n    <div class="movie-details">\n      <h3 class="movie-heading">').concat(u,'</h3>\n      <ul class="movie-list-info">\n        <li class="movie-list-info__item">\n          <p class="movie-testimonial">Vote / Votes</p>\n          <p class="movie-mark">\n            <span class="rating">').concat(p.toFixed(1),'</span>\n            <span class="delimeter">/</span\n            ><span class="quantity">').concat(m,'</span>\n          </p>\n        </li>\n        <li class="movie-list-info__item">\n          <p class="movie-testimonial">Popularity</p>\n          <p class="movie-mark">').concat(a.toFixed(1),'</p>\n        </li>\n        <li class="movie-list-info__item">\n          <p class="movie-testimonial">Original Title</p>\n          <p class="movie-mark movie-mark--original-title">').concat(o,'</p>\n        </li>\n        <li class="movie-list-info__item">\n          <p class="movie-testimonial">Genre</p>\n          <p class="movie-mark">').concat(y,'</p>\n        </li>\n      </ul>\n      <p class="about">About</p>\n      <p class="about-descr">').concat(b,'</p>\n      <div class="button-wrapper">\n      <button class="button btn-add-to-watched modal__active-btn" type="button">Add to watched</button>\n      <button class="button btn-add-to-queue" type="button">Add to queue</button>\n    </div>\n  </div>\n</div>');//! ДГ - на кнопки додав класи
h.firstElementChild.insertAdjacentHTML("afterend",x),
//! ДГ - додав виклик функції
(0,f.changeWatchedQueueList)(g),(0,f.textModalButton)(g)}(t),document.querySelector(".circle").addEventListener("click",u.onPlayButtonClick)})).catch((function(t){return console.log(t)})),document.body.style.overflow="hidden",v.classList.remove("is-hidden"),document.addEventListener("keydown",b)}}function _(){v.classList.add("is-hidden"),document.body.style.overflow="visible"}function b(t){"Escape"===t.code&&(document.removeEventListener("keydown",b),_())}p.addEventListener("click",y),m.addEventListener("click",_),v.addEventListener("click",(function(t){t.currentTarget===t.target&&_()}))})),i.register("bVeVz",(function(n,r){t(n.exports,"onPlayButtonClick",(function(){return p}));var o=i("bpxeT"),a=i("2TvXO"),s=i("hYoMK"),c=i("4dL3P"),u=i("5xtVg"),l=document.querySelector(".trailer-wrapper"),f=document.querySelector(".iframe-container");function d(){return(d=e(o)(e(a).mark((function t(n){var r;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c.BASE_URL,"/movie/").concat(n,"/videos?api_key=").concat(s.API_KEY));case 2:if((r=t.sent).ok){t.next=5;break}throw new Error(r.status);case 5:return t.next=7,r.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){(function(t){return d.apply(this,arguments)})(document.querySelector(".information").dataset.id).then((function(t){var e,n=t.results;if(n.length){var r=n.find((function(t){return"Trailer"===t.type})).key,o="https://www.youtube.com/embed/".concat(r);e='<iframe\n        width="1280"\n        height="700"\n        src="'.concat(o,'"\n        title="YouTube Video Player"\n        frameborder="0"\n        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n        allowfullscreen\n      ></iframe>'),f.innerHTML=e}else!function(){var t='<img\n        src="https://media.tenor.com/zZ40mt2KOFoAAAAC/crying-mei-lee.gif"\n        alt="Panda crying"\n      />';f.innerHTML=t}()})).catch((function(t){return console.log(t)})),l.classList.remove("is-hidden"),document.addEventListener("keydown",h),document.removeEventListener("keydown",u.onEscClose)}function h(t){"Escape"===t.code&&(document.removeEventListener("keydown",h),document.addEventListener("keydown",u.onEscClose),l.classList.add("is-hidden"),f.innerHTML="")}l.addEventListener("click",(function(t){t.currentTarget===t.target&&(l.classList.add("is-hidden"),document.addEventListener("keydown",u.onEscClose),f.innerHTML="")}))})),i.register("9lJIX",(function(t,e){t.exports=i("aNJCr").getBundleURL("a0Xmu")+i("iE7OH").resolve("JNv3y")})),i.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i.register("aZhHc",(function(t,e){var n=(0,i("4Nugj").default)(),r=n.openModalBtn,o=n.closeModalBtn,a=n.modal,s=n.body;function c(){a.classList.toggle("is-hidden"),s.classList.toggle("no-scroll")}r.addEventListener("click",c),o.addEventListener("click",c),document.addEventListener("keydown",(function(t){"Escape"===t.key&&s.classList.contains("no-scroll")&&(a.classList.toggle("is-hidden"),s.classList.toggle("no-scroll"))})),a.addEventListener("click",(function(t){"backdrop-team"===t.target.className&&(a.classList.toggle("is-hidden"),s.classList.toggle("no-scroll"))}))})),i.register("9VC5X",(function(t,e){i("1VFfL");var n=(0,i("4Nugj").default)(),r=n.body,o=n.themaSwitchToogle,a="light-theme",s="dark-theme",c=localStorage.getItem("thema");c||(c=a,localStorage.setItem("thema",c)),r.classList.add(c),o.checked=c!==a,o.addEventListener("change",(function(){o.checked?(r.classList.remove(a),r.classList.add(s),localStorage.setItem("thema",s)):(r.classList.remove(s),r.classList.add(a),localStorage.setItem("thema",a))}))})),i.register("1VFfL",(function(t,e){
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
var n;window,n=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,r,o,i,a=Object.prototype.hasOwnProperty;for(o=1,i=arguments.length;o<i;o+=1)for(r in n=arguments[o])a.call(n,r)&&(t[r]=n[r]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var r=n(2),o=n(17),i=n(6);t.exports=function(t,e,n){r(t)?o(t,e,n):i(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r;for(r in n=n||null,t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))break}},function(t,e,n){"use strict";var r=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&r(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e,n){var o,i;if(n=n||0,!r(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(i=e.length,o=n;n>=0&&o<i;o+=1)if(e[o]===t)return o;return-1}},function(t,e,n){"use strict";var r=n(29),o=n(30),i=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=i(t)?t(e):r(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,r=Array.prototype.slice;return t.bind?t.bind.apply(t,r.call(arguments,1)):(n=r.call(arguments,2),function(){return t.apply(e,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var r=n(13),o=n(7),i=n(0),a=n(1),s=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=o({init:function(t,e){this._options=i({},u,e),this._currentPage=0,this._view=new s(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===t;return this._options.centerAlign?r?e-1:e+n:r?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),r=this._getPageIndex(t),o=this._getPageIndex(n),i=this._getEdge(t);return e.leftPageNumber=i.left,e.rightPageNumber=i.right,e.prevMore=r>1,e.nextMore=r<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,r,o=this._getLastPage(),i=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(r=Math.floor(i/2),(n=(e=Math.max(t-r,1))+i-1)>o&&(e=Math.max(o-i+1,1),n=o)):(e=(a-1)*i+1,n=a*i,n=Math.min(n,o)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),t.exports=l},function(t,e,n){"use strict";var r=n(0),o=n(14),i=n(4),a=n(16),s=n(2),c=n(5),u=n(3),l=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(t){r(t.prototype,f.prototype)},f.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},f.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},f.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},f.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},f.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},f.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},f.prototype._bindEvent=function(t,e,n){var r=this._safeEvent(t);this._memorizeContext(n),r.push(this._getHandlerItem(e,n))},f.prototype.on=function(t,e,n){var r=this;i(t)?(t=t.split(l),u(t,(function(t){r._bindEvent(t,e,n)}))):a(t)&&(n=e,u(t,(function(t,e){r.on(e,t,n)})))},f.prototype.once=function(t,e,n){var r=this;if(a(t))return n=e,void u(t,(function(t,e){r.once(e,t,n)}));this.on(t,(function o(){e.apply(n,arguments),r.off(t,o,n)}),n)},f.prototype._spliceMatches=function(t,e){var n,r=0;if(s(t))for(n=t.length;r<n;r+=1)!0===e(t[r])&&(t.splice(r,1),n-=1,r-=1)},f.prototype._matchHandler=function(t){var e=this;return function(n){var r=t===n.handler;return r&&e._forgetContext(n.context),r}},f.prototype._matchContext=function(t){var e=this;return function(n){var r=t===n.context;return r&&e._forgetContext(n.context),r}},f.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(r){var o=t===r.handler,i=e===r.context,a=o&&i;return a&&n._forgetContext(r.context),a}},f.prototype._offByEventName=function(t,e){var n=this,r=c(e),o=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);r?n._spliceMatches(e,o):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},f.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},f.prototype._offByObject=function(t,e){var n,r=this;this._indexOfContext(t)<0?u(t,(function(t,e){r.off(e,t)})):i(e)?(n=this._matchContext(t),r._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)})))},f.prototype.off=function(t,e){i(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},f.prototype.fire=function(t){this.invoke.apply(this,arguments)},f.prototype.invoke=function(t){var e,n,r,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),r=0;e[r];){if(!1===(o=e[r]).handler.apply(o.context,n))return!1;r+=1}return!0},f.prototype.hasListener=function(t){return this.getListenerLength(t)>0},f.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=f},function(t,e,n){"use strict";var r=n(1),o=n(15);t.exports=function(t){return!r(t)&&!o(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r=0,o=t.length;for(n=n||null;r<o&&!1!==e.call(n,t[r],r,t);r+=1);}},function(t,e,n){"use strict";var r=n(19);t.exports=function(t,e){var n=r(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var r=n(3),o=n(7),i=n(21),a=n(22),s=n(24),c=n(25),u=n(0),l=n(4),f=n(28),d=n(9),p={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],v=["prev","next"],m=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},p,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!f(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){r(h,(function(t){this._buttons[t]=d.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){r(h,(function(t){var e="disabled"+d.capitalizeFirstLetter(t);this._buttons[e]=d.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){r(v,(function(t){var e=t+"More";this._buttons[e]=d.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,r=t.leftPageNumber,o=t.rightPageNumber;for(n=r;n<=o;n+=1)n===t.page?e=d.createElementByTemplate(this._template.currentPage,{page:n}):(e=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==r||t.prevMore||c(e,this._firstItemClassName),n!==o||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,r,o=i(e);s(e),(r=this._getButtonType(o))||(n=this._getPageNumber(o)),t(r,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return r(n,(function(n,r){return!d.isContained(t,n)||(e=r,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(e=this._enabledPageElements[n],d.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var r=n(4),o=n(3),i=n(23);function a(t,e,n,r){function a(e){n.call(r||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,r){var a=i(t,e),s=!1;o(a,(function(t){return t.handler!==n||(s=!0,!1)})),s||a.push({handler:n,wrappedHandler:r})}(t,e,n,a)}t.exports=function(t,e,n,i){r(e)?o(e.split(/\s+/g),(function(e){a(t,e,n,i)})):o(e,(function(e,r){a(t,r,e,n)}))}},function(t,e,n){"use strict";var r="_feEventKey";t.exports=function(t,e){var n,o=t[r];return o||(o=t[r]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var r=n(3),o=n(8),i=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,c=[];s?r(n,(function(e){t.classList.add(e)})):((e=i(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,(function(t){o(t,c)<0&&c.push(t)})),a(t,c))}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var r=n(2),o=n(1);t.exports=function(t,e){e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var r=n(8),o=n(3),i=n(2),a=n(4),s=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,p=/^["']\w+["']$/,h=/"|'/g,v=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var r=function(t,e){var n=[t],r=[],i=0,a=0;return o(e,(function(t,o){0===t.indexOf("if")?i+=1:"/if"===t?i-=1:i||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(a,o)),a=o+1)})),r.push(e.slice(a)),{exps:n,sourcesInsideIf:r}}(t,e),i=!1,a="";return o(r.exps,(function(t,e){return(i=b(t,n))&&(a=x(r.sourcesInsideIf[e],n)),!i})),a},each:function(t,e,n){var r=b(t,n),a=i(r)?"@index":"@key",c={},u="";return o(r,(function(t,r){c[a]=r,c["@this"]=t,s(n,c),u+=x(e.slice(),n)})),u},with:function(t,e,n){var o=r("as",t),i=t[o+1],a=b(t.slice(0,o),n),c={};return c[i]=a,x(e,s(n,c))||""}},g=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,r,o=[],i=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)r=n.index,o.push(t.slice(i,r)),i=r+n[0].length,n=e.exec(t);return o.push(t.slice(i)),o};function y(t,e){var n,r=e[t];return"true"===t?r=!0:"false"===t?r=!1:p.test(t)?r=t.replace(h,""):u.test(t)?r=y((n=t.split(l))[0],e)[y(n[1],e)]:f.test(t)?r=y((n=t.split(d))[0],e)[n[1]]:v.test(t)&&(r=parseFloat(t)),r}function _(t,e,n){for(var r,o,i,s,c=m[t],u=1,l=2,f=e[l];u&&a(f);)0===f.indexOf(t)?u+=1:0===f.indexOf("/"+t)&&(u-=1,r=l),f=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(o=0,i=r,(s=e.splice(o+1,i-o)).pop(),s),n),e}function b(t,e){var n=y(t[0],e);return n instanceof Function?function(t,e,n){var r=[];return o(e,(function(t){r.push(y(t,n))})),t.apply(null,r)}(n,t.slice(1),e):n}function x(t,e){for(var n,r,o,i=1,s=t[i];a(s);)r=(n=s.split(" "))[0],m[r]?(o=_(r,t.splice(i,t.length-i),e),t=t.concat(o)):t[i]=b(n,e),s=t[i+=2];return t.join("")}t.exports=function(t,e){return x(g(t,c),e)}},function(t,e,n){"use strict";var r=n(1),o=n(31);t.exports=function(t,e){var n=location.hostname,i="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(i);(r(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>6048e5}(a)||(window.localStorage.setItem(i,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return r(e,(function(t,e){o+="&"+e+"="+t})),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},t.exports=n()})),i("iE7OH").register(JSON.parse('{"a0Xmu":"myLibrary.f25bd342.js","JNv3y":"defaultPicture.e241b070.png"}'))}();
//# sourceMappingURL=myLibrary.f25bd342.js.map