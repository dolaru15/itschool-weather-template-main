//aici o sa avem logica pentru a ne extrage data primita de la api intr-un mod cititbil (propr dt de pe obietul de la open weather api)

function getDayOfTheWeek(dateInUtc){
    //Pentru ca data de la API este in UTC fromat, trebuie sa o transofmr folosind obiectul date din js.
    const date = new Date(dateInUtc * 1000);
    const dayIndex = date.getDay();
    console.log(dayIndex);
    let day;

    switch (dayIndex) {
        case 0:
            day = "Duminica";
            break;
        case 1:
            day = "Luni";
            break;
        case 2:
            day = "Marti";
            break;
        case 3:
            day = "Miercuri";
            break;
        case 4:
            day = "Joi";
            break;
        case 5:
            day = "Vineri";
            break;
        case 6:
            day = "Sambata";
            break;
        default:
        //Aruncam o eroare daca  indexul nu este valid. Teoretic nu ar trebui sa ajungem aici
            throw new Error("invalid day Index")
    }
    return day;
}
function getHour(dateInUtc) {
    const date = new Date(dateInUtc * 1000);
    //Extragem ora folosind metoda getHours a obiextului date
    //Daca ora este mai mica decat 10, o sa ii adaugam noi un 0 in fata.

    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    //EXtragem minutele foloind o metoda de pe obiextul date - getMinutes

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    //REturnam ora sub formatul dorit
    return `${hours}:${minutes}`
}