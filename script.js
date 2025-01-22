async function getWeather() {
    const cityName = document.getElementById('cityInput').value;
    const apiKey = 'key here';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            console.log('API response not ok:', data);
            throw new Error(`Error: ${data.error.message}`);
        }
    } catch (error) {
        console.error('Failed to fetch data:', error);
        document.getElementById('weatherDisplay').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weather = `
        <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind: ${data.current.wind_kph} kph from ${data.current.wind_dir}</p>
    `;
    document.getElementById('weatherDisplay').innerHTML = weather;
}
