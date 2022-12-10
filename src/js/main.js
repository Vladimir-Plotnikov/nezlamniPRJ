import { TrendingFilmsApiService } from "./apiFilms/apiTrending";
import axios from 'axios';
const trending  = new TrendingFilmsApiService()

// const releaseDate = new Date(2022-11-17);
// const releaseYear = releaseDate.getFullYear()
// console.log(releaseYear)

const filmGallery = document.querySelector('.film-gallery')
trending.fetchFilms().then(response => 
    console.log(response.results)
    // markUpGallery(response.results)
    )
trending.fetchGenres().then(response =>console.log(response))

function markUpGallery(filmsArr) {
    
    // return 
    filmsArr
      .map(
        ({id, title, release_date, poster_path, genre_ids}) =>{
            const imgPath = `https://image.tmdb.org/t/p/w500${poster_path}`
            // const genresList = genres.filter(genre => genre_ids.includes(genre.id))
          const markup = `<li class = "gallery-item">
           <img class="gallery-image" src="${imgPath}" alt="${title}" loading="lazy"/>
           <div class="info">
            <p class="info-item">${title}</p>
            <p class="info-item">${genre_ids} | ${release_date}</p>
          </div>
          </li>`}
      )
      .join('');
      console.log(markup)
      filmGallery.innerHTML = markup;
  }
  


