!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a("j1lrD");var l=a("4Nugj"),i=a("8nrFW"),o=a("bpxeT"),u=a("2TvXO"),c=a("4dL3P"),f=a("hYoMK");function d(e){return s.apply(this,arguments)}function s(){return(s=e(o)(e(u).mark((function t(n){var r,a,l;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:f.API_KEY}),e.next=3,fetch("".concat(c.BASE_URL,"/movie/").concat(n,"?").concat(r));case 3:return a=e.sent,e.next=6,a.json();case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var y=a("fgCMy"),g=document.querySelector(".mylibrary-film-gallery");function v(e){var t=e.genres,n=e.original_title,r=(e.overview,e.popularity,e.poster_path),a=(e.title,e.vote_average,e.vote_count,e.id,'\n    <li class="film-gallery__item">\n    <img class="film-gallery__image" src="https://image.tmdb.org/t/p/w500'.concat(r,'" alt="Movie poster" loading="lazy">\n    <div class="film-gallery__info">\n        <p class="film-gallery__title">').concat(n,'</p>\n        <p class="film-gallery__text">').concat(t.map((function(e){return e.name})).join(", "),"</p>\n    </div>\n    </li>"));g.insertAdjacentHTML("afterbegin",a)}var p=[],h=[],m=[];function w(){(0,y.getKey)("watched")&&(p=(0,y.getKey)("watched"));var e=!0,t=!1,n=void 0;try{for(var r,a=p[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){d(r.value).then((function(e){return v(e)})).catch((function(e){return console.log(e)}))}}catch(e){t=!0,n=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}}function _(){(0,y.getKey)("queue")&&(h=(0,y.getKey)("queue"));var e=!0,t=!1,n=void 0;try{for(var r,a=h[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){d(r.value).then((function(e){return v(e)})).catch((function(e){return console.log(e)}))}}catch(e){t=!0,n=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}}(0,l.default)().watchedBtn.addEventListener("click",(function(){(0,l.default)().myLibraryList.innerHTML="",(0,l.default)().watchedBtn.disabled=!0,(0,l.default)().queueBtn.disabled=!1,w()})),(0,l.default)().queueBtn.addEventListener("click",(function(){(0,l.default)().myLibraryList.innerHTML="",(0,l.default)().queueBtn.disabled=!0,(0,l.default)().watchedBtn.disabled=!1,_()})),function(){(0,y.getKey)("watched")&&(p=(0,y.getKey)("watched")),(0,y.getKey)("queue")&&(h=(0,y.getKey)("queue")),m=e(i)(p).concat(e(i)(h));var t=!0,n=!1,r=void 0;try{for(var a,l=m[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){d(a.value).then((function(e){return v(e)})).catch((function(e){return console.log(e)}))}}catch(e){n=!0,r=e}finally{try{t||null==l.return||l.return()}finally{if(n)throw r}}}(),0==m.length&&console.log("НЕТУ ФИЛЬМОВ"),a("aZhHc")}();
//# sourceMappingURL=myLibrary.0e62080f.js.map
