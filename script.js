const url = `https://api.openweathermap.org/data/2.5/`;
const key = `ae775d6b5b272e351b331161aa5b7b3c`;

const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResult(e.target.value);
  }
};
const getResult = (cityname) => {
  let query = `${url}weather?q=${cityname}&appid=${key}&units=metric&lang=tr`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};
const displayResult = (result) => {
  let city = document.querySelector(".city");
  city.innerText = `${result.name} , ${result.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`;

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;

  let minmax = document.querySelector(".minmax");
   minmax.innerText = `${Math.round(result.main.temp_min)} °C / 
  ${Math.round(result.main.temp_max)} °C `;
};

const searchbar = document.getElementById("SearchBar");
searchbar.addEventListener("keypress", setQuery);
