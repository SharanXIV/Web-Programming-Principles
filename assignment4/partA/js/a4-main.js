var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = function(){
    loadTableWithFilters();
}

function loadTableWithFilters(){
    var myTable = document.querySelector("#main-table-body");
    myTable.innerHTML = "";

    for (var i = 0; i < petData.length; i++){
        if ((filterType == "" || petData[i].type == filterType) && (petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax)){
            var tableRow = document.createElement("tr");
            var tableDesc = document.createElement("td");
            var image = document.createElement("img");

            image.src = petData[i].image.src;
            image.alt = petData[i].image.alt;
            image.height = petData[i].image.height;
            image.width = petData[i].image.width;
            
            tableDesc.appendChild(image);
            tableRow.appendChild(tableDesc);

            var tableDesc2 = document.createElement("td");
            var heading4 = document.createElement("h4");
            var heading4Text = document.createElement(petData[i].name);

            heading4.appendChild(heading4Text);
            tableDesc2.appendChild(heading4);

            var paragraph = document.createElement("p");
            paragraph.innerHTML = petData[i].description;

            tableDesc2.appendChild(paragraph);

            var span = document.createElement("span");
            var spanText = document.createTextNode("Age: "+ petData[i].age + " years old.");

            span.appendChild(spanText);
            tableDesc2.appendChild(span);
            tableRow.appendChild(tableDesc2);
            myTable.appendChild(tableRow);
        }
    }
}

function filterAllPets(){
    filterType = ""; 
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filterDog(){
    filterType = "dog"; 
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filterCat(){
    filterType = "cat"; 
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filterBird(){
    filterType = "bird"; 
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filter_zero_1(){
    filterType = ""; 
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
}

function filter_1_3(){
    filterType = ""; 
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
}

function filter_4_plus(){
    filterType = ""; 
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}