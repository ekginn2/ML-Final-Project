// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildTable(data) {

  tbody.html("");


  data.forEach((dataRow) => {

    var row = tbody.append("tr");


    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function Click() {

  // Prevent the form from refreshing the page
  d3.event.preventDefault();


  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;


  if (date) {

    filteredData = filteredData.filter(row => row.datetime === date);
  }


  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", Click);

// Build the table when the page loads
buildTable(tableData);
