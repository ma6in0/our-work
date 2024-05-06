//Dom
const sticks = document.querySelectorAll(".stick");
const iconLeft = document.querySelector(".iconLeft");
const iconRight = document.querySelector(".iconRight");
const movieName = document.querySelector(".movie-name");
const movieInfo = document.querySelector(".movie-info");
const heroBg = document.querySelector(".hero-slide");
const btnPlay = document.querySelector(".m-play-btn");
const overlay = document.querySelector(".overlay");
const sighIn = document.querySelector(".sign-in-button");
const returnOve = document.querySelector(".return");
const closeButton = document.querySelector(".close");
const closeButton2 = document.querySelector(".close2");
const registration = document.querySelector(".registration");
const registration2 = document.querySelector(".registration2");
const textREG = document.querySelector(".textREG");
const textREG2 = document.querySelector(".textREG2");
const signIn = document.querySelector(".sign-in")
// signIn.onclick = function () {
//   returnOve.style.display = "none";
//   registration.style.display = "none";
//   registration2.style.display = "none";
// };
// textREG.onclick = function () {
//   returnOve.style.display = "block";
//   registration.style.display = "none";
//   registration2.style.display = "block";
// };
// textREG2.onclick = function () {
//   returnOve.style.display = "block";
//   registration.style.display = "block";
//   registration2.style.display = "none";
// };
// closeButton.addEventListener("click", () => {

//   returnOve.style.display = "none";
//   returnOve.style.display = "none";
// });
// closeButton2.addEventListener("click", () => {
//   returnOve.style.display = "none";
//   returnOve.style.display = "none";
// });

sighIn.onclick = function () {
  returnOve.style.display = "block";
  registration.style.display = "block";
  registration2.style.display = "none";
};
const baseUrl = "https://api.themoviedb.org/3/";
const api_key = "&api_key=2fa8f297328a4293f06805fe0c1b915d";
const Imgurl = "https://image.tmdb.org/t/p/original/";

const api = {
  popular: "movie/popular?language=ru",
};

top10Movie = [];
let index = [0];
iconRight.addEventListener("click", () => {
  sticks[index].classList.remove("active");
  index = (index + 1) % sticks.length;
  sticks[index].classList.add("active");
  // console.log(sticks);
  renderHero(index + 1);
});
fetchNowPlaying();

iconLeft.addEventListener("click", () => {
  sticks[index].classList.remove("active");
  index = (index - 1 + sticks.length) % sticks.length; // Ensure index stays within bounds
  sticks[index].classList.add("active");
  renderHero(index + 1);
});

async function fetchNowPlaying() {
  const res = await fetch(baseUrl + api.popular + api_key);
  const data = await res.json();
  console.log(data);
  top10Movie = [...data.results.slice(13, 18)];
  renderHero(index);
}
function renderHero(index = 0) {
  const { backdrop_path, title, overview } = top10Movie[index];
  heroBg.style.background = `url(${
    Imgurl + backdrop_path
  }) no-repeat center/cover`;
  movieName.innerText = title;
  movieInfo.innerText = overview.substring(0, 100) + "...";
}
