searchResultButton.addEventListener("click", function () {
    var sourceCity = searchInput.value.toLowerCase();
    var destinationCity = searchInput1.value.toLowerCase();
    var gotFlightDetails = getFlightDetails(sourceCity + "-" + destinationCity); // aoo
    console.log(gotFlightDetails[1]);
    var data = "";
    //creating the table for flight details
    data = " <table><tr><th>Select Flight</th> <th>Flight Number</th>  <th>NoOfStops</th> <th>price</th> <th>Duration</th> <th>DepartureTime</th> <th>ArrivalTime</th> <th>AirlineName</th> <th>AirlineLogo </tr>";
    BookNowButton.style.display = "block";
    BookNowButton.disabled = true;
    for (var i = 0; i < gotFlightDetails.length; i++) {
        data += "<tr><td><input type='radio' class='checkbox' data-flightduration="+gotFlightDetails[i]["duration"]+" data-flightnumber=" + gotFlightDetails[i]["flightNumber"] + "></td> <td>" + gotFlightDetails[i]["flightNumber"] + "</td><td>" + gotFlightDetails[i]["noOfStops"] + "</td><td>" + gotFlightDetails[i]["price"] + "</td><td>" + gotFlightDetails[i]["duration"] + "</td><td>" + gotFlightDetails[i]["departureTime"] + "</td><td>" + gotFlightDetails[i]["arrivalTime"] + "</td><td>" + gotFlightDetails[i]["airlineName"] + "</td><td><img src=" + gotFlightDetails[i]["imagePath"] + "></td></tr>";
    }
    data += "</table>";
    searchResultTable.innerHTML = data;
})

// using functional declaration

searchResultButton.onclick = someFunction ;

function someFunction(){
    var sourceCity = searchInput.value.toLowerCase();
    var destinationCity = searchInput1.value.toLowerCase();
    var gotFlightDetails = getFlightDetails(sourceCity + "-" + destinationCity); // aoo
    console.log(gotFlightDetails[1]);
    var data = "";
    //creating the table for flight details
    data = " <table><tr><th>Select Flight</th> <th>Flight Number</th>  <th>NoOfStops</th> <th>price</th> <th>Duration</th> <th>DepartureTime</th> <th>ArrivalTime</th> <th>AirlineName</th> <th>AirlineLogo </tr>";
    BookNowButton.style.display = "block";
    BookNowButton.disabled = true;
    for (var i = 0; i < gotFlightDetails.length; i++) {
        data += "<tr><td><input type='radio' class='checkbox' data-flightduration="+gotFlightDetails[i]["duration"]+" data-flightnumber=" + gotFlightDetails[i]["flightNumber"] + "></td> <td>" + gotFlightDetails[i]["flightNumber"] + "</td><td>" + gotFlightDetails[i]["noOfStops"] + "</td><td>" + gotFlightDetails[i]["price"] + "</td><td>" + gotFlightDetails[i]["duration"] + "</td><td>" + gotFlightDetails[i]["departureTime"] + "</td><td>" + gotFlightDetails[i]["arrivalTime"] + "</td><td>" + gotFlightDetails[i]["airlineName"] + "</td><td><img src=" + gotFlightDetails[i]["imagePath"] + "></td></tr>";
    }
    data += "</table>";
    searchResultTable.innerHTML = data;
}



// using functional expression

var  someFunction = function(){
    var sourceCity = searchInput.value.toLowerCase();
    var destinationCity = searchInput1.value.toLowerCase();
    var gotFlightDetails = getFlightDetails(sourceCity + "-" + destinationCity); // aoo
    console.log(gotFlightDetails[1]);
    var data = "";
    //creating the table for flight details
    data = " <table><tr><th>Select Flight</th> <th>Flight Number</th>  <th>NoOfStops</th> <th>price</th> <th>Duration</th> <th>DepartureTime</th> <th>ArrivalTime</th> <th>AirlineName</th> <th>AirlineLogo </tr>";
    BookNowButton.style.display = "block";
    BookNowButton.disabled = true;
    for (var i = 0; i < gotFlightDetails.length; i++) {
        data += "<tr><td><input type='radio' class='checkbox' data-flightduration="+gotFlightDetails[i]["duration"]+" data-flightnumber=" + gotFlightDetails[i]["flightNumber"] + "></td> <td>" + gotFlightDetails[i]["flightNumber"] + "</td><td>" + gotFlightDetails[i]["noOfStops"] + "</td><td>" + gotFlightDetails[i]["price"] + "</td><td>" + gotFlightDetails[i]["duration"] + "</td><td>" + gotFlightDetails[i]["departureTime"] + "</td><td>" + gotFlightDetails[i]["arrivalTime"] + "</td><td>" + gotFlightDetails[i]["airlineName"] + "</td><td><img src=" + gotFlightDetails[i]["imagePath"] + "></td></tr>";
    }
    data += "</table>";
    searchResultTable.innerHTML = data;
}

searchResultButton.onclick = someFunction ;