// Week 4 Feature #1

let now = new Date();
//let now = new Date("2021-01-01T09:03");
let hours = (`0` + now.getHours()).slice(-2);
let minutes = (`0` + now.getMinutes()).slice(-2); // 0+3 = 03, 0+11 = 011 -> nimm die letzten 2 -> 03 bzw 11

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let today = document.querySelector("h2");
today.innerHTML = `${day} ${hours}:${minutes}`;


//Week 5 Feature #1

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#exampleInputCity");
  console.log(searchInput.value);
  let apiKey = "6b34a5900264dc73092b5b2546b2d76b";
  let currCity = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showThemperature);
}


function showThemperature(response) {
  console.log(response.data);
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#weather").innerHTML = response.data.weather[0].main;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("h1").innerHTML = response.data.name;
}

//Neue Struktur: document.querySelector("#city").innerHTML = response.data.name;

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//Feature #2

function currPosition(position) {
  let apiKey = "6b34a5900264dc73092b5b2546b2d76b";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showThemperature);
}


let button = document.querySelector("#buttonCurrent");
button.addEventListener("click", getPosition);

function getPosition() {
  navigator.geolocation.getCurrentPosition(currPosition);
}
