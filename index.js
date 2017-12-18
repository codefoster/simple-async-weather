let request = require('request-promise');
let cowsay = require('cowsay');

async function getWeather(city) {
    city = encodeURI(city);
    let result = await request.get(`http://weathers.co/api.php?city=${city}`);
    result = JSON.parse(result);
    console.log(cowsay.say({ text: result.data.temperature }));
}

getWeather('Seattle');