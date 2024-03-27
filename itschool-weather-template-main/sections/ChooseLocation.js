const bucharestButton = document.querySelector(".dropdown-menu li .bucharest");
const timisoaraButton = document.querySelector(".dropdown-menu li .timisoara");
const oradeaButton = document.querySelector(".dropdown-menu li .oradea");
const aradButton = document.querySelector(".dropdown-menu li .arad");
const sibiuButton = document.querySelector(".dropdown-menu li .sibiu");




//Adaugam event listeneri pe fiecare elemet in parte - pe fiecare oras

bucharestButton.addEventListener("click", function () {
    //La click pe butonul Bucuresti, ar trebui sa schimb numele orasului si al doilea lucru, sa fac update la vreme
    updateWeather('Bucharest');
});

timisoaraButton.addEventListener("click", function () {
    updateWeather('Timisoara');
});

oradeaButton.addEventListener("click", function () {
    updateWeather("Oradea");
});

aradButton.addEventListener("click", function () {
    updateWeather("Arad");
});

sibiuButton.addEventListener("click", function () {
    updateWeather("Sibiu");
});


//Declaram o functie care ne schimba orasul curent
function updateCurrentCity(cityName) {
    //Mai intai trebuie sa selectez elementul care imi tine orasul curent
    const currentCity = document.querySelector('.current-city');
    currentCity.innerHTML = cityName;
}
    
//Declaram o functie care ne va schimba orasul si ne va face update la vreme
function updateWeather(cityName) {
    //Actualizam orasul selectat din dropdown in local storage
    localStorage.setItem("city", cityName);
 //Actualizam orasul afisat pe ecran
    //Apelez functia update current city
    updateCurrentCity(cityName);
    //Reafisam vremea curents in functie de orasul selectat
    displayCurrentWeather(cityName);
    displayWeatherForecast(cityName);
   
}