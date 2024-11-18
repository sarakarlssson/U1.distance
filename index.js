// Recommended: All functions declared here
let userPrompt = prompt("Skriv en stad:")

let cityNameBox;

function createAllCityBoxes() {

    let cityNamesContainer = document.querySelector("#cities");
    for (city of cities) {

        cityNameBox = document.createElement("div");
        cityNameBox.className = "cityBox";
        cityNameBox.textContent = city.name;
        cityNamesContainer.appendChild(cityNameBox);

        markCityBox();
    }
}

createAllCityBoxes();

function markCityBox() {

    if (userPrompt == city.name) {
        cityNameBox.className = "cityBox target";
    }
}

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

