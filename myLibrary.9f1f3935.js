function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"6uIEf":"myLibrary.9f1f3935.js","hfTiC":"defaultPicture.e241b070.png","1wIFZ":"myLibrary-img.6f5c0e18.jpg","6VJ3o":"watchedDefault.3b23267f.jpg","1pYr2":"queueDefault.af901f96.jpg","8eZPX":"myLibrary.4c98c9fe.js"}')),i("04jNI");var l=i("krGWQ"),o=i("6lwzw"),s=i("2oVyW");async function c(e){const t=new URLSearchParams({api_key:s.API_KEY}),n=await fetch(`${o.BASE_URL}/movie/${e}?${t}`);return await n.json()}var u,d=i("7xhh1");l=i("krGWQ");u=new URL(i("kyEFX").resolve("hfTiC"),import.meta.url).toString();const{myLibraryList:f}=(0,l.default)();function g({genres:e,original_title:n,overview:r,popularity:a,poster_path:i,title:l,release_date:o,vote_average:s,vote_count:c,id:d}){let g=0;if(o){g=new Date(`${o}`).getFullYear()}else g="No information";let y="";e.length?(y=e.map((e=>e.name)),y.length>2?y=y.slice(0,2).join(", ")+", Other":y.length>0&&y.length<=2&&(y=y.join(", "))):y="No information";let m="";m=i?`https://image.tmdb.org/t/p/w500${i}`:t(u);const p=`\n    <li class="film-gallery__item" data-id="${d}">\n    <img class="film-gallery__image" src="${m}" alt="Movie poster" loading="lazy">\n    <div class="film-gallery__info">\n        <p class="film-gallery__title">${n}</p>\n        <p class="film-gallery__text"><span class="genre">${y} |</span>\n              <span>${g}</span><span class="vote-average">${s.toFixed(1)}</span></p>\n    </div>\n    </li>`;f.insertAdjacentHTML("afterbegin",p)}let y=[],m=[],p=[];function b(){(0,d.getKey)("watched")&&(y=(0,d.getKey)("watched"));for(let e of y)c(e).then((e=>g(e))).catch((e=>console.log(e)))}function h(){(0,d.getKey)("queue")&&(m=(0,d.getKey)("queue"));for(let e of m)c(e).then((e=>g(e))).catch((e=>console.log(e)))}var v;v=new URL(i("kyEFX").resolve("1wIFZ"),import.meta.url).toString();var L;L=new URL(i("kyEFX").resolve("6VJ3o"),import.meta.url).toString();var _;_=new URL(i("kyEFX").resolve("1pYr2"),import.meta.url).toString(),(0,l.default)().watchedBtn.addEventListener("click",(function(){(0,l.default)().myLibraryList.innerHTML="",(0,l.default)().watchedBtn.classList.add("btn-active"),(0,l.default)().queueBtn.classList.remove("btn-active"),(0,l.default)().watchedBtn.disabled=!0,(0,l.default)().queueBtn.disabled=!1,b();const e=`<li class="mylibrary-img" role="presentation"><img src="${t(L)}"></img></li>`;0==y.length&&((0,l.default)().myLibraryList.innerHTML=e)})),(0,l.default)().queueBtn.addEventListener("click",(function(){(0,l.default)().myLibraryList.innerHTML="",(0,l.default)().queueBtn.classList.add("btn-active"),(0,l.default)().watchedBtn.classList.remove("btn-active"),(0,l.default)().queueBtn.disabled=!0,(0,l.default)().watchedBtn.disabled=!1,h();const e=`<li class="mylibrary-img" role="presentation"><img src="${t(_)}"></img></li>`;0==m.length&&((0,l.default)().myLibraryList.innerHTML=e)})),function(){(0,d.getKey)("watched")&&(y=(0,d.getKey)("watched")),(0,d.getKey)("queue")&&(m=(0,d.getKey)("queue")),p=[...y,...m];for(let e of p)c(e).then((e=>g(e))).catch((e=>console.log(e)))}();const w=`<li class="mylibrary-img" role="presentation"><img src="${t(v)}"></img></li>`;0==p.length&&((0,l.default)().myLibraryList.innerHTML=w),i("bTcpz"),i("7bYU0"),i("4S0r6");
//# sourceMappingURL=myLibrary.9f1f3935.js.map