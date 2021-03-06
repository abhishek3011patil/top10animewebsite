const url = "data.json";

apiRequest(url);

function apiRequest(url) {
  var quiz = new XMLHttpRequest();
  quiz.open("GET", url);

  quiz.onload = () => {
    var abc = JSON.parse(quiz.responseText);

    animeData(abc);
  };
  quiz.send();
}

const anime_list = document.getElementById("animelist");

function animeData(anime_data) {
  return anime_data;
}
window.addEventListener("DOMContentLoaded", () => {
  const url = "data.json";

  apiRequest(url);

  function apiRequest(url) {
    var quiz = new XMLHttpRequest();
    quiz.open("GET", url);

    quiz.onload = () => {
      var abc = JSON.parse(quiz.responseText);

      animeData(abc.anime);
    };
    quiz.send();
  }

  function animeData(anime_data) {
    let display = anime_data.map((item) => {
      return `<div class="row img-anime">
      <h2 class="col-12 ">${item.id}<br>${item.Title}</h2>
      <img
        src="${item.img}"
        alt="${item.Title}"
        class="col-xl-12 col-lg-7"
      />
 
    
      <div class="stats col-xl-4 col-lg-5">
          <h3>Information</h3>
          <br>
          
          <p>Rating:     ${item.imdbRating} </p>
          <p>Season:     ${item.totalSeasons}</p>
          <p>Year:       ${item.Year} </p>
          <p>Genre:      ${item.Genre}</p>
          <p>Release:    ${item.Released} </p>
          <p>Duration:   ${item.duration}</p>
      </div>
      <div class="desc col-xl-8 col-lg-12">
          <h3>Description</h1>
        <p>
        ${item.Plot}
        </p>
      </div>`;
    });
    display = display.join("");
    anime_list.innerHTML = display;
  }
});
