let request = require('request-promise');

async function getWeather(city) {
    city = encodeURI(city);
    let result = await request.get(`http://weathers.co/api.php?city=${city}`);
    console.log(result);
}

getWeather('Seattle');
getWeather('New York');
getWeather('Orlando');