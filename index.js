const latitude = 40.7128; // NYC
const longitude = -74.0060;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));