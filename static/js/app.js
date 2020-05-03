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

// button.on("click", function() {
//     console.log("A filter was applied!");
//     console.log(d3.event.target);

//     d3.event.preventDefault();
    
//     var inputElement = d3.select("#datetime");
//     var inputValue = inputElement.property("value");

//     var filteredResults = tableData.filter(date => tableData.datetime === inputValue);

//     d3.select("#filter-applied").text("Filtered by date: " + inputValue);

//     tbody.html("");

//     filteredResults.forEach((report) => {
//         var newrow = tbody.append("tr");
//         Object.entries(report).forEach(([key, value]) => {
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });
// }