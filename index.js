// Recommended: All functions declared here
let userPrompt = prompt("Skriv en stad:")

let cityNameBox;

let cityAndCountryTitle;

function createAllCityBoxes() {

    let cityNamesContainer = document.querySelector("#cities");
    for (city of cities) {

        cityNameBox = document.createElement("div");
        cityNameBox.className = "cityBox";
        cityNameBox.textContent = city.name;

        cityNamesContainer.appendChild(cityNameBox);
        cityObject = city.name;

        markCityBox(cityObject);
    }
}

function markCityBox(cityObject) {
    cityAndCountryTitle = document.querySelector("h2")

    if (userPrompt == cityObject) {
        cityAndCountryTitle.textContent = cityObject + " (" + city.country + ") ";
        cityNameBox.className = "cityBox target";


    } else if (userPrompt != cityObject) {

        cityAndCountryTitle.textContent = userPrompt + " finns inte i databasen";
    }

}

createAllCityBoxes();