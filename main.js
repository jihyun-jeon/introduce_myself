(function () {
  var typed2 = new Typed("#hello", {
    strings: ["", "welcome!"],
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: false,
    smartBackspace: true,
    cursorChar: "_",
    loop: true,
  });
})();

const helloEl = document.querySelector("#hello");
const homeEl = document.querySelector("h1");
const btn1 = document.querySelectorAll("button")[0];
const btn2 = document.querySelectorAll("button")[1];
const btn3 = document.querySelectorAll("button")[2];
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");
const page4 = document.querySelector("#page4");

homeEl.addEventListener("click", (e) => {
  page1.scrollIntoView({ behavior: "smooth", block: "start" });
});

btn1.addEventListener("click", (e) => {
  page2.scrollIntoView({ behavior: "smooth", block: "start" });
});
btn2.addEventListener("click", (e) => {
  page3.scrollIntoView({ behavior: "smooth", block: "start" });
});
btn3.addEventListener("click", (e) => {
  page4.scrollIntoView({ behavior: "smooth", block: "start" });
});

// < 날씨정보 불러오기 >
const locat = document.querySelector("#locat");
const temp = document.querySelector("#temp");

function onGeoOk(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${"91143b3c888751ffcd5ce4c95b4a11ba&units=metric"}`
  )
    .then((res) => res.json())
    .then((result) => {
      locat.innerHTML = ` <img
      src="./imgs/115718_location_map_pin_icon.png"
      style="width: 20px"
    />  ${result.name}`;
      temp.innerHTML = `  <img
      src="./imgs/thermometer-with-high-temperature_icon-icons.com_54634.png"
      style="width: 20px"
    />  ${result.weather[0].main}  ${result.main.temp}`;
    });
}

function onGeoErr() {
  alert("can't find you. No weather for yousss");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
