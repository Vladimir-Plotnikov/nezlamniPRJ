function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired7c6=a),a.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"6uIEf":"myLibrary.efd1e66c.js","1wIFZ":"myLibrary-img.6f5c0e18.jpg","8eZPX":"myLibrary.81fba04b.js"}')),a("04jNI");var l=a("krGWQ"),o=a("6lwzw"),c=a("2oVyW");async function u(e){const t=new URLSearchParams({api_key:c.API_KEY}),n=await fetch(`${o.BASE_URL}/movie/${e}?${t}`);return await n.json()}var s=a("7xhh1");l=a("krGWQ");const{myLibraryList:d}=(0,l.default)();function f({genres:e,original_title:t,overview:n,popularity:r,poster_path:i,title:a,vote_average:l,vote_count:o,id:c}){const u=`\n    <li class="film-gallery__item" data-id="${c}">\n    <img class="film-gallery__image" src="https://image.tmdb.org/t/p/w500${i}" alt="Movie poster" loading="lazy">\n    <div class="film-gallery__info">\n        <p class="film-gallery__title">${t}</p>\n        <p class="film-gallery__text">${e.map((e=>e.name)).join(", ")}</p>\n    </div>\n    </li>`;d.insertAdjacentHTML("afterbegin",u)}let g=[],y=[],b=[];function m(){(0,s.getKey)("watched")&&(g=(0,s.getKey)("watched"));for(let e of g)u(e).then((e=>f(e))).catch((e=>console.log(e)))}function p(){(0,s.getKey)("queue")&&(y=(0,s.getKey)("queue"));for(let e of y)u(e).then((e=>f(e))).catch((e=>console.log(e)))}var v;v=new URL(a("kyEFX").resolve("1wIFZ"),import.meta.url).toString(),(0,l.default)().watchedBtn.addEventListener("click",(function(){(0,l.default)().myLibraryList.innerHTML="",(0,l.default)().watchedBtn.classList.add("btn-active"),(0,l.default)().queueBtn.classList.remove("btn-active"),(0,l.default)().watchedBtn.disabled=!0,(0,l.default)().queueBtn.disabled=!1,m()})),(0,l.default)().queueBtn.addEventListener("click",(function(){(0,l.default)().myLibraryList.innerHTML="",(0,l.default)().queueBtn.classList.add("btn-active"),(0,l.default)().watchedBtn.classList.remove("btn-active"),(0,l.default)().queueBtn.disabled=!0,(0,l.default)().watchedBtn.disabled=!1,p()})),function(){(0,s.getKey)("watched")&&(g=(0,s.getKey)("watched")),(0,s.getKey)("queue")&&(y=(0,s.getKey)("queue")),b=[...g,...y];for(let e of b)u(e).then((e=>f(e))).catch((e=>console.log(e)))}();const h=`<li class="mylibrary-img" role="presentation"><img src="${t(v)}"></img></li>`;0==b.length&&((0,l.default)().myLibraryList.innerHTML=h),a("bTcpz"),a("7bYU0"),a("4S0r6");
//# sourceMappingURL=myLibrary.efd1e66c.js.map
