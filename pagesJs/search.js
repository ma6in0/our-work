// DOM
const inputField = document.querySelector("#search")
const search_result = document.querySelector(".search_result")

const url = 'https://api.themoviedb.org/3/'
const api_key = '?api_key=2fa8f297328a4293f06805fe0c1b915d'
const img_url = "https://image.tmdb.org/t/p/original"

const api = {
  recommended_channels: 'tv/airing_today',
  search: "search/movie"
}



async function handleSearch() {
    if (inputField.value.trim()) {
      const res = await fetch(url + api.search + api_key + `&query=${inputField.value}`)
      const data = await res.json()
      console.log(data);
      const { results } = data
      renderSearchMovies(results)
    }
  }
  
  function useDebounce(func, delay) {
    let timeoutId;
    return function (...args) {
      const context = this;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(context, args), delay);
    };
  }
  const ms = 1000;
  const debouncedInputHandler = useDebounce(handleSearch, ms);
  inputField.addEventListener('input', debouncedInputHandler);
  
//   function renderSearchMovies(arr) {
//     search_result.style.display = 'block'
//     search_result.innerHTML = ''
//     for (const film of arr) {
//       const { title, poster_path } = film
//       if (poster_path) {
//         search_result.innerHTML += `
//           <div class="s-movie">
//             <div class="img">
//                 <img src="${img_url + poster_path}" alt="" />
//             </div>
//             <div>
//                 <h4>${title}</h4>
//             </div>
//           </div>
//         `
//       }
//     }
//   }
//   search_result.addEventListener('mouseleave', () => {
//     search_result.style.display = 'none';
//   });


function renderSearchMovies(arr) {
    search_result.style.display = 'block';
    search_result.innerHTML = '';
    for (const film of arr) {
      const { title, poster_path } = film;
      if (poster_path) {
        const movieElement = document.createElement('div');
        movieElement.classList.add('s-movie');
        movieElement.innerHTML = `
          <div class="img">
            <img src="${img_url + poster_path}" alt="" />
          </div>
          <div>
            <h4>${title}</h4>
          </div>
        `;
        movieElement.addEventListener('click', function() {
          search_result.style.display = 'none';
        });
  
        search_result.appendChild(movieElement);
      }
    }
  }
  
  


  