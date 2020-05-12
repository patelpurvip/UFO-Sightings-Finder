// import data from data.js to table
var tableData = data;
console.log(tableData)


function buildTable(data) {
    var tbody = d3.select("tbody");
    tbody.html("");

    data.forEach((report) => {
        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

buildTable(tbody);


//--CREATE NEW BUTTONS
d3.select("#input-fields").append("br");
d3.select("#input-fields").append("label").attr("for", "city").text("City");
d3.select("#input-fields").append("input").attr("class", "form-control").attr("id", "city").attr("type", "text").attr("placeholder", "el cajon");

d3.select("#input-fields").append("br");
d3.select("#input-fields").append("label").attr("for", "state").text("State");
d3.select("#input-fields").append("input").attr("class", "form-control").attr("id", "state").attr("type", "text").attr("placeholder", "ca");

d3.select("#input-fields").append("br");
d3.select("#input-fields").append("label").attr("for", "country").text("Country");
d3.select("#input-fields").append("input").attr("class", "form-control").attr("id", "country").attr("type", "text").attr("placeholder", "us");

d3.select("#input-fields").append("br");
d3.select("#input-fields").append("label").attr("for", "shape").text("Shape");
d3.select("#input-fields").append("input").attr("class", "form-control").attr("id", "shape").attr("type", "text").attr("placeholder", "circle/light/etc.");


//--Program Listener
var button = d3.select("#filter-btn");
button.on("click", collectFilters);

//--Filter data and build new table
function collectFilters() {
    d3.event.preventDefault();

    var inputDate = d3.select("#datetime");
    var inputDateValue = inputDate.property("value");

    var inputCity = d3.select("#city");
    var inputCityValue = inputCity.property("value");

    var inputState = d3.select("#state");
    var inputStateValue = inputState.property("value");

    var inputCountry = d3.select("#country");
    var inputCountryValue = inputCountry.property("value");

    var inputShape = d3.select("#shape");
    var inputShapeValue = inputShape.property("value");

    
    // var inputFilters = d3.selectALL(".form-control");
    // // var inputFilters = d3.selectALL("input");
    // var inputFiltersValue = inputFilters.property("value");
    // var filterID = inputFilters.attr("id");

    filterTable();
}

function filterTable() {
    
    if (inputDateValue) {
        var filteredResults = tableData.filter(report => report.datetime === inputDateValue);
        d3.select("#filter-applied").text("Filtered by date: " + inputDateValue);
}

    else if (inputCityValue) {
        var filteredResults = tableData.filter(report => report.city === inputCityValue);
        d3.select("#filter-applied").text("Filtered by city: " + inputCityValue);
}
    else if (inputStateValue) {
        var filteredResults = tableData.filter(report => report.state === inputStateValue);
        d3.select("#filter-applied").text("Filtered by state: " + inputStateValue);
}
    else if (inputCountryValue) {
        var filteredResults = tableData.filter(report => report.country === inputCountryValue);
        d3.select("#filter-applied").text("Filtered by country: " + inputCountryValue);
}
    else if (inputShapeValue) {
        var filteredResults = tableData.filter(report => report.shape === inputShapeValue);
        d3.select("#filter-applied").text("Filtered by shape: " + inputShapeValue);
}
    else {
        console.log("Just kidding! No filter applied.");
}

    // if (inputFiltersValue) {
    //     var filteredResults = tableData.filter(report => report.datetime === inputFiltersValue); --> NEED A MORE GENERIC ELEMENT FOR EACH FILTER OTHER THAN JUST DATETIME
    //     d3.select("#filter-applied").text("Filtered by" + filterID + ": " + inputFiltersValue);
    //     }
    // else {
    //     console.log("Just kidding! No filter applied.");
    //     }
        
    buildTable(filteredResults);

    // tbody.html("");

    // filteredResults.forEach((report) => {
    //     var row = tbody.append("tr");
    //     Object.entries(report).forEach(([key, value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });
}



// //--Apply filters--OPTION 2
// var filtersApplied = {};

// function collectFilters() {
    
//     d3.event.preventDefault();

//     var inputFilters = d3.select(".form-control");
//     // var inputFilters = d3.select("input");
//     var inputFiltersValue = inputFilters.property("value");
//     var filterID = inputFilters.attr("id");
//     d3.select("#filter-applied").text("Filtered by" + filterID + ": " + inputFiltersValue);
    
//     if (inputFiltersValue) { 
//         filtersApplied[filterID] = inputFiltersValue;
//     }
//     else {
//         console.log("Just kidding! No filter applied.");
//         console.log("null values are no longer a problem");
//         delete filtersApplied[filterID];
//     };

//     // console.log("The collectFilters function works");
//     // console.log(filtersApplied)

//     filterTable();
// }

// function filterTable () {
//     tbody.html("");

//     Object.entries(filtersApplied).forEach(([key, value]) => {
//         var filteredResults = tableData.filter(report => report[key] === value);
//         d3.select("#filter-applied").text("Filtered by" + key +": " + value);
//         });

//         buildTable(filteredResults);
//     }

    




//--RESET-BUTTON-----------------------------------------------------------------------------
var reset = d3.select("#reset-btn");

reset.on("click", runReset);

function runReset() {
    tbody.html("");
    buildTable();
    
    d3.select("#filter-applied").text("");

    d3.select("#datetime").node().value = "";
    d3.select("#city").node().value = "";
    d3.select("#state").node().value = "";
    d3.select("#country").node().value = "";
    d3.select("#shape").node().value = "";
}

