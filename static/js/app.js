// import data from data.js to table
var tableData = data;
console.log(tableData)

var tbody = d3.select("tbody");

tableData.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// Apply date filter
var button = d3.select("#filter-btn");

button.on("click", function() {
    console.log("A filter was applied!");
    console.log(d3.event.target);

    d3.event.preventDefault();
    
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredResults = tableData.filter(report => report.datetime === inputValue);

    d3.select("#filter-applied").text("Filtered by date: " + inputValue);

    // console.log(filteredResults);

    tbody.html("");

    filteredResults.forEach((report) => {
        var row = tbody.append("tr");
        console.log("working so far");
        Object.entries(report).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
})

var reset = d3.select("#reset-btn");

reset.on("click", runReset);

function runReset() {
    tbody.html("");
    tableData.forEach((report) => {
        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    d3.select("#filter-applied").text("");
    // d3.select("#datetime").clear();
}