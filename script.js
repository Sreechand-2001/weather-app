`use strict`;

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// API key = bd0c4a8ec7fc63143c2be409c88c4476
// open weather map website
// username - kunjumanni@gmail.com
// password - Hello@2002

const getInput = document.querySelector(".getInput");
const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", () => {
  fetchData(getInput.value);
});
let fetchData = async (placeName) => {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=bd0c4a8ec7fc63143c2be409c88c4476`
  );
  let data = await response.json();
  if (data.name !== undefined) {
    document.querySelector(".place").textContent = data.name;
    document.querySelector(".temperature").innerHTML = `${Math.round(
      data.main.temp - 273.15,
      2
    )}&degC`;
    document.querySelector(".put-image").style.visibility = "visible";
    document.querySelector(
      ".put-image"
    ).src = `./images/${data.weather[0].main}.png`;
    document.querySelector(".hum").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".spe").innerHTML = `${data.wind.speed} km/h`;
  } else {
    getInput.value = "";
    getInput.placeholder = "Enter Valid Location";
  }
};
(function () {
  fetchData("bengaluru");
})();
