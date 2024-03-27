//API Key-urile, in general, nu ar fi bine sa le stocam in format text in codul nostru pentru ca oricine ar putea sa le vada si sa le foloseasca. E bine ca ele sa stea pe server, dar, in cazuk nostru, fiind un API gratuit, o sa le stocam aici.
const API_KEY = '78a9f22e05ce86c785365814accf486f'

// Construim linkurile (endpoint-urile) catre care noi o sa facem requesturi cu JS

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}


//Declaram a doua functie pw care o  vom folosi pentru a lua url-ul catre API-ul ce ne returneaza date despre vremea pe 5 zile.
function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}