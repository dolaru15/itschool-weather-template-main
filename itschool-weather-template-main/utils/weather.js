//Imi definesc o functie care sa imi returneze iconita de la open weather pe baza codului primit de la api.

function getWeatherIcon(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
}

//Primim viteza vantului in mps si noi vrem sa ii convertim in kmph
function windToKmPerHour(meterPerSec) {
    return ((meterPerSec * 3600)/1000)
}