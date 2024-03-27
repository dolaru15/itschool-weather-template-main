//Declar functia care imi va afisa vremea pe urmatoarele 5 zile, iar apleul functiei se face din index.js
function displayWeatherForecast(city) {
    //Prima data ne generam link-ul API-ului catre care vom face requestul
    const forecastEndpoint = getForecastEndpoint(city);

    //Imi selectez emelentul cu clasa .weather-forecast deoacrece aici am sa inserez html-ul general in faza de fetch.
    let weatherForecastContainer = document.querySelector('.weather-forecast');
    //Inainte de a face call-ul catre server, adica inainte de fetch, am sa goesc containerrul de dinainte, de weather forecast container
    weatherForecastContainer.innerHTML = "";
   
    //Facem requestul catre API
    fetch(forecastEndpoint)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            //Ne folosim de object destructuring pentru a accesa doar proprietatea list din obiectul data
            const { list } = data;

            //Ne declaram un obiect gol in care o sa tinem predictiile pe zile
            const daysMap = {};
            //Iteram cele 40 de predictii primite de la server, adica prin fiecare element al array-ului list
            list.forEach((element) => {
                //Extragem proprietare dt din fiecare element al array-ului
                const { dt } = element;
                const day = getDayOfTheWeek(dt);

                //Daca avem deja ziua saptamanii in obiectul daysmAP, ii adaugam o noua predictie, adica ii adaugam un element
                if (daysMap[day]) {
                    daysMap[day].push(element);
                    //Altfel, daca nu avem ziua saptamanii in obiectul daysMap, o sa adaugam ziua respectiva impreuna cu elementul sau preditia.
                } else {
                    daysMap[day] = [element];
                }
            })
            //Iteram prin obiectul daysmap care are deja datele grupate pe zile, folosind instructiunea for...in, adica fiecre cheie din obiect reprezinta o zi a saptamanii
            for (dayKey in daysMap) {
                //Inserez in HTML ziua din obiectul daysMap
                weatherForecastContainer.innerHTML += `<h3 class="text-primary">${dayKey}</h3>`;
                //Imi extrag elementul curent din obiectul daysMap
                //console.log(dayKey)
                let weatherByDay = daysMap[dayKey]
                weatherByDay.forEach((element) => {
                    //Pentru fiecare element/predictie pot sa ma apuc sa extrag datele de interes.
                    const { dt, main, weather } = element;
                    //Procesez ora
                    const hour = getHour(dt);
                    //Rotunjum temperatura
                    const temperature = Math.round(main.temp);
                    const realFeel = Math.round(main.feels_like);
                    //Atentie la descriere - weather este un array cu un singur element -> accesam mereu elementuk 0
                    const description = weather[0].description;
                    const weatherIcon = getWeatherIcon(weather[0].icon);

                    //Inseram in HTML toate datele de mai sus
                    weatherForecastContainer.innerHTML += `
                    <div class="weather-forecast-box d-flex justify-content-between align-items-center w-100 border rounded mb-3 p-3">
                    <div>${hour}</div>
                    <div><img src="${weatherIcon}" /></div>
                    <div class="fs-3"><strong>${temperature}°C</strong></div>
                    <div>${description}</div>
                    <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
                    </div>`;
                })
            }
        })
}