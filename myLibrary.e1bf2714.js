var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var l=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,l.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=l),l("04jNI");var a=l("krGWQ"),i=l("6lwzw"),o=l("2oVyW");async function r(e){const t=new URLSearchParams({api_key:o.API_KEY}),n=await fetch(`${i.BASE_URL}/movie/${e}?${t}`);return await n.json()}var c=l("7xhh1");const d=document.querySelector(".mylibrary-film-gallery");function u({genres:e,original_title:t,overview:n,popularity:l,poster_path:a,title:i,vote_average:o,vote_count:r,id:c}){const u=`\n    <li class="film-gallery__item">\n    <img class="film-gallery__image" src="https://image.tmdb.org/t/p/w500${a}" alt="Movie poster" loading="lazy">\n    <div class="film-gallery__info">\n        <p class="film-gallery__title">${t}</p>\n        <p class="film-gallery__text">${e.map((e=>e.name)).join(", ")}</p>\n    </div>\n    </li>`;d.insertAdjacentHTML("afterbegin",u)}let f=[],s=[],g=[];function y(){(0,c.getKey)("watched")&&(f=(0,c.getKey)("watched"));for(let e of f)r(e).then((e=>u(e))).catch((e=>console.log(e)))}function p(){(0,c.getKey)("queue")&&(s=(0,c.getKey)("queue"));for(let e of s)r(e).then((e=>u(e))).catch((e=>console.log(e)))}(0,a.default)().watchedBtn.addEventListener("click",(function(){(0,a.default)().myLibraryList.innerHTML="",(0,a.default)().watchedBtn.disabled=!0,(0,a.default)().queueBtn.disabled=!1,y()})),(0,a.default)().queueBtn.addEventListener("click",(function(){(0,a.default)().myLibraryList.innerHTML="",(0,a.default)().queueBtn.disabled=!0,(0,a.default)().watchedBtn.disabled=!1,p()})),function(){(0,c.getKey)("watched")&&(f=(0,c.getKey)("watched")),(0,c.getKey)("queue")&&(s=(0,c.getKey)("queue")),g=[...f,...s];for(let e of g)r(e).then((e=>u(e))).catch((e=>console.log(e)))}(),0==g.length&&console.log("НЕТУ ФИЛЬМОВ"),l("7bYU0"),l("4S0r6");
//# sourceMappingURL=myLibrary.e1bf2714.js.map
