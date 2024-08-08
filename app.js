let cityname = document.querySelector("#search");
document.querySelector("button").addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=b48cd167f07b16bdb751bf1eaf89b818&units=metric`)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            setTimeout(() => {

                document.querySelector("img").src = "images.jfif"
                document.querySelector(".card-title").innerHTML = response.name
                document.querySelector(".temp").innerHTML = Math.round(response.main.temp) + ("°C");
                document.querySelector(".humidity").innerHTML = (response.main.humidity + " %");
                document.querySelector(".wind").innerHTML = (response.wind.speed + " km/hr");

            }, 1000)
        })
        .catch(err => console.error(err));
})



