const API_KEY = "7bb7527a2dbfc2c2bf671f2bc4dc5fc1";
const weatherWidget = document.querySelector(".login-weather");

function correctGeo(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  console.log(lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherWidget.innerHTML = "";
      const currentTemp = Math.round(data.main.temp);
      const location = data.name;
      const tempHeader = document.createElement("h3");
      const locationHeader = document.createElement("p");
      tempHeader.classList.add("styling-weather-font");
      tempHeader.innerText = currentTemp;
      locationHeader.innerText = location;
      weatherWidget.appendChild(tempHeader);
      weatherWidget.appendChild(locationHeader);
    });
}

function errorGeo() {
  alert("I cannot find your geolocation!");
}

navigator.geolocation.getCurrentPosition(correctGeo, errorGeo);
