document.querySelector("body");var e=function(){return{filmGallery:document.querySelector(".film-gallery"),guard:document.querySelector(".guard-js"),containerPagination:document.getElementById("pagination"),watchedBtn:document.querySelector(".header_btn-watched"),queueBtn:document.querySelector(".header_btn-queue"),myLibraryList:document.querySelector(".mylibrary-film-gallery")}};async function t(e){const t=new URLSearchParams({api_key:"cbb822aa772537b57d5d040000698149"}),o=await fetch(`https://api.themoviedb.org/3/movie/${e}?${t}`);return await o.json()}const o=e=>{let t=localStorage.getItem(e);return JSON.parse(t)||void 0};const n=document.querySelector(".mylibrary-film-gallery");function l({genres:e,original_title:t,overview:o,popularity:l,poster_path:a,title:c,vote_average:i,vote_count:r,id:d}){const s=`\n    <li class="film-gallery__item">\n    <img class="film-gallery__image" src="https://image.tmdb.org/t/p/w500${a}" alt="Movie poster" loading="lazy">\n    <div class="film-gallery__info">\n        <p class="film-gallery__title">${t}</p>\n        <p class="film-gallery__text">${e.map((e=>e.name)).join(", ")}</p>\n    </div>\n    </li>`;n.insertAdjacentHTML("afterbegin",s)}let a=[],c=[],i=[];function r(){o("watched")&&(a=o("watched"));for(let e of a)t(e).then((e=>l(e))).catch((e=>console.log(e)))}function d(){o("queue")&&(c=o("queue"));for(let e of c)t(e).then((e=>l(e))).catch((e=>console.log(e)))}e().watchedBtn.addEventListener("click",(function(){e().myLibraryList.innerHTML="",e().watchedBtn.disabled=!0,e().queueBtn.disabled=!1,r()})),e().queueBtn.addEventListener("click",(function(){e().myLibraryList.innerHTML="",e().queueBtn.disabled=!0,e().watchedBtn.disabled=!1,d()})),function(){o("watched")&&(a=o("watched")),o("queue")&&(c=o("queue")),i=[...a,...c];for(let e of i)t(e).then((e=>l(e))).catch((e=>console.log(e)))}(),0==i.length&&console.log("НЕТУ ФИЛЬМОВ"),(()=>{const e={openModalBtn:document.querySelector(".modal-open"),closeModalBtn:document.querySelector(".modal__close"),modal:document.querySelector(".backdrop-team"),body:document.querySelector("body")};function t(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),document.addEventListener("keydown",(function(t){"Escape"===t.key&&e.body.classList.contains("no-scroll")&&(e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll"))})),e.modal.addEventListener("click",(function(t){"backdrop-team"===t.target.className&&(e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll"))}))})();
//# sourceMappingURL=myLibrary.adddc08d.js.map
