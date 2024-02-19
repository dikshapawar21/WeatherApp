window.addEventListener("load", () => {
    // let long;
    // let lat;
    let temperatureDescription = document.querySelector(
        ".temperature-description"
    );
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let ICON = document.querySelector("p");
    ICON.style.fontSize = "45px";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let long = position.coords.longitude;
            let latte = position.coords.latitude;

            const apiKey = "d43a2413eef89ef105c8c190b56098bd";
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latte}&lon=${long}&appid=${apiKey}`;
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    const temper = data.main.temp;
                    temperatureDegree.textContent = parseInt(temper - 273.15);
                    const Weather = data.weather[0].description;
                    temperatureDescription.textContent = Weather;
                    const ic = data.weather[0].icon;
                    // ICON.textContent = icon;
                    const Time = data.sys.country;
                    locationTimezone.textContent = Time;
                    if(Weather == "clear sky") ICON.textContent = "☀️";
                    if(Weather == "few clouds") ICON.textContent = "🌤️";
                    if(Weather == "scattered clouds") ICON.textContent = "🌥️";
                    if(Weather == "broken clouds") ICON.textContent = "☁️";
                    if(Weather == "shower rain") ICON.textContent = "🌦️";
                    if(Weather == "rain") ICON.textContent = "☔";
                    if(Weather == "thunderstorm") ICON.textContent = "⛈️";
                    if(Weather == "snow") ICON.textContent = "🌫️";
                    if(Weather == "mist") ICON.textContent = "❄️";
                });
        });
    }
});
