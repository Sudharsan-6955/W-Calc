const apikey = "774f5c8a792e05d8cfdf364b033e0dce";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".wea-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";


    }
    else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humadity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "../img/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "../img/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "../img/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "../img/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "../img/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


    }


}



searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})

