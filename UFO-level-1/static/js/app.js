// from data.js
var tableData = data;

//*** Append data to table
// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through each dictionary in data and append the key value to each column
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


//*** Listen for events and search through the date/time column to find rows that match user input
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  // If no input value, populate table with all data
  if(!inputValue) {
        // Loop through each dictionary in data and append the key value to each column
        tableData.forEach((ufoSighting) => {
            var row = tbody.append("tr");
            Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
    } else { // else populate table with filtered data
        var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

        console.log(filteredData);
    
        // clear table
        tbody.html("");
    
        // Loop through each dictionary in filtered data and append the key value to each column
        filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
        });
    }

}

