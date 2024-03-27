//Lauum valoarea cheii city din local Storage
let currentCityFromLS = localStorage.getItem("city");

//Pasul urmator este sa actualizam orasul afisat pe ecran daca avem cheia city in localStirage
const currentCityTag = document.querySelector(".current-city");

if (currentCityFromLS) {
    currentCityTag.innerHTML = currentCityFromLS
}

//Daca nu avem cheia city in kocal storage, atunci setam ca valoare default Bucuresti, atat pt localStorage, cat si pentru varibila currentCaityFromLS
if (!currentCityFromLS) {
    localStorage.setItem("city", "Bucuresti");
    currentCityFromLS = "Bucuresti";
}
//Afisam prima data vremea curenta folosind o functie din alt fisier
displayCurrentWeather(currentCityFromLS);

//Afisam vremea pe urmatoarele 5 zile
displayWeatherForecast(currentCityFromLS);

const scrollToTopButton = document.querySelector(".scroll-to-top");

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
document.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
});
