let input = document.getElementById('cityInput');
let button = document.getElementById('getWeatherBtn');
let weatherInfo = document.getElementById('weatherInfo');   
let apiKey= "ff8281b30ea12b3acd531d37965e1101"; // Your real API key

button.addEventListener('click', function() {  
    let city = input.value.trim();
    if(city === "") {
        alert("Please enter a city name");
        return;
    }   

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if(!response.ok) {
                throw new Error("City not found");
            }   
            return response.json();
        })
        .then(data => {
            let temp = data.main.temp;
            let description = data.weather[0].description;
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                     <p>Temperature: ${temp} °C</p>
                                     <p>Description: ${description}</p>`;
        })  
        .catch(error => {
            alert(error.message);
        });
});
