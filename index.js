

// Recommended: All functions declared here
let userPrompt = prompt("Skriv en stad:")

let eachCityNameBox;
let cityAndCountryTitle;
let found = false;
let target = " "

function createAllCityBoxes() {

    let cityNamesContainer = document.querySelector("#cities");
    for (let city of cities) {

        let eachCityNameBox = document.createElement("div");
        eachCityNameBox.className = "cityBox";
        eachCityNameBox.textContent = city.name;

        cityNamesContainer.appendChild(eachCityNameBox);
        let cityNameObject = city.name;
        let cityObjectCountry = city.country;

        if (userPrompt == cityNameObject) {
            markCurrentCityBox(cityNameObject, cityObjectCountry, eachCityNameBox);
            found = true; // när användarens stad är samma som nyckeln blir found = true, men loopen fortsätter köra
        }
    }

    if (found != true) {
        markCurrentCityBox(); //när found inte är true  anropas 
    }
}

function markCurrentCityBox(cityNameObject, cityObjectCountry, eachCityNameBox) {
    cityAndCountryTitle = document.querySelector("h2")

    if (userPrompt == cityNameObject) {
        cityAndCountryTitle.textContent = cityNameObject + " (" + cityObjectCountry + ") ";
        eachCityNameBox.className = "cityBox target";

    } else if (userPrompt != cityNameObject) {
        cityAndCountryTitle.textContent = userPrompt + " finns inte i databasen";
    }

}

function createTable() {
    let table = document.getElementById("table");

    // skapa en en tom div längst upp

    let idRowTop = document.createElement("div");
    idRowTop.textContent = "tom";
    idRowTop.classList.add("cell")
    idRowTop.classList.add("head_row")
    table.appendChild(idRowTop);



    // skapa raden längst upp med id
    for (let i = 0; i < cities.length; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell")
        cell.classList.add("head_row")
        cell.textContent = cities[i].id;
        table.appendChild(cell)

    }
    // skapa namnet på staden 
    for (let i = 0; i < cities.length; i++) {
        let nameCell = document.createElement("div")
        nameCell.textContent = cities[i].id + "-" + cities[i].name;
        nameCell.classList = ("head_column cell");



        table.appendChild(nameCell);

        // gå igenom distancetabellen skapa tom ruta om id och 
        for (let j = 0; j < cities.length; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell")

            if (j % 2 == 0) {
                evenColClass(cell); //anropar funktion som gör bakgrunden på varannan column rosa
            }

            cell.textContent = " "
            table.appendChild(cell)

            if (cities[i].id % 2 == 0) {  //anropar funktion som gör varannan rad tjock border
                evenRowClass(nameCell, cell)
            }

            //evenRowClass(nameCell, cell)

            let cellContent;
            // om i o j är samma gör strängen är tom
            if (i == j) {
                cellContent = "tom";
            } else {

                for (let k = 0; k < distances.length; k++) {

                    // ifall city1 är samma som id rad och city2 är samma som id column
                    if (((distances[k].city1 === cities[i].id) && (distances[k].city2 === cities[j].id))
                        || ((distances[k].city1 === cities[j].id) && (distances[k].city2 === cities[i].id))) {

                        cellContent = distances[k].distance / 10;

                        break; // Avslutar loopen när en match hittas
                        //cell.appendChild(cellContent);
                    }
                }
                cell.textContent = cellContent;
            }
        }
    }

}
// få fram närmsta avstånd och stad
function closestDistance() {
    let closest = null;
    let closestDistance = Infinity;
    let closestId = null;

    for (let i = 0; i < cities.length; i++) {
        if (userPrompt == cities[i].name) {
            target = cities[i].name;

            for (let j = 0; j < distances.length; j++) {
                if ((cities[i].id != distances[j].city1) ||
                    (cities[i].id != distances[j].city2)) {
                    let otherCityId;

                    if (cities[i].id != distances[j].city1) {
                        otherCityId = distances[j].city1;

                    } else {
                        let otherCityId = distances[j].city2
                    }

                    if (distances[j].distance < closestDistance) {

                        closestDistance = distances[j].distance;

                        closest = otherCityId;

                        console.log(closest)
                        console.log(closestDistance)
                    }


                }

            }



        }
    }
}







function evenRowClass(nameCell, cell) {

    nameCell.classList.add("even_row");
    cell.classList.add("even_row");
}

function evenColClass(cell) {
    cell.classList.add("even_col")
}



createAllCityBoxes();
createTable();
closestDistance();