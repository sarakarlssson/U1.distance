// Recommended: All functions declared here

function createAllCityBoxes() {

    let cityNamesContainer = document.querySelector("#cities");
    for (city of cities) {

        let cityNameBox = document.createElement("div");
        cityNameBox.className = "cityBox";
        cityNameBox.textContent = city.name;
        cityNamesContainer.appendChild(cityNameBox)

    }

}

createAllCityBoxes();

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

