const apikey = "fb85f4d74e3bc51bb1403b5e580d4edd";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=en";

const searchinput = document.getElementsByClassName("search")[0];
const searchbutton = document.getElementsByClassName("button")[0];

async function checkweather(city) {
    const response = await fetch(`${apiurl}&q=${city}&appid=${apikey}`);
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = `${data.main.temp} °C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".windspeed").innerHTML = `${data.wind.speed} m/s`;
}

searchbutton.addEventListener("click", () => {
    checkweather(searchinput.value);
});
