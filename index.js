var allData;
var xhr = new XMLHttpRequest();
var searchResultTable = document.getElementsByClassName("searchResultTable")[0];
var searchResultButton = document.getElementById("searchResultButton");
var BookNowButton = document.getElementById("BookNowButton");
var form = document.getElementById("myform");
BookNowButton.style.display = "none";
var flightNumber = "" ;
var flightduration = "" ;
//searchResultButton.disabled = true ;
xhr.open("GET", "data.json", false);
xhr.send();
if (xhr.status === 200) allData = JSON.parse(xhr.response);
console.log(allData);
//for sourcecities
var sourceDetails = allData.sourceDetails;
var searchInput = document.getElementById('sourceCity');
var searchInput1 = document.getElementById('destinationCity');
var searchOptions = document.getElementById("searchOptions");
var sourceOptionsData = "";
console.log(document.getElementById('sourceCity'));
for (var i = 0; i < sourceDetails.length; i++) {
    sourceOptionsData += "<option value='" + sourceDetails[i] + "'>";
}
// sourceCity.addEventListener("keyup", function () {
//     searchOptions.innerHTML = sourceOptionsData;
// })
// sourceCity.addEventListener("mouseleave", function () {
//     searchOptions.innerHTML = "";
// })

var sourcecity = function(){
    searchOptions.innerHTML = sourceOptionsData;  
}

sourceCity.onkeyup = sourcecity;




//for destinationcities
var destinationDetails = allData.destinationDetails;
// var searchInput1 = document.getElementById('search_Input1');
var searchOptions1 = document.getElementById("searchOptions1");
var destinationOptionsData = "";
//console.log(document.getElementById('searchInput1'));
for (var i = 0; i < destinationDetails.length; i++) {
    destinationOptionsData += "<option value='" + destinationDetails[i] + "'>";
}
// destinationCity.addEventListener("keyup", function () {
//     searchOptions1.innerHTML = destinationOptionsData;
// })

// destinationCity.addEventListener("mouseleave", function () {
//     searchOptions1.innerHTML = "";
// })

var destinationcity = function(){
    searchOptions.innerHTML = sourceOptionsData;  
}

destinationCity.onkeyup = destinationcity;








//validation
function formvalidate(){
    var returnval = true;

    var SourceCity = document.getElementById("sourceCity").value.trim()
    var DestinationCity = document.getElementById("destinationCity").value.trim()
    var SourceCitycheck = /^[A-Za-z]{1,15}$/;
    var DestinationCitycheck = /^[A-Za-z]{1,15}$/;

    if (SourceCitycheck.test(SourceCity)) {
        document.getElementById("sourceCity").innerHTML = "";
    } else {
        document.getElementById("sourceCity").textContent = "Enter Valid First Name ";
        document.getElementById("sourceCity").style.color = "red";
        returnval = false;
    }
    if (DestinationCitycheck.test(DestinationCity)) {
        document.getElementById("destinationCity").innerHTML = "";
    } else {
        document.getElementById("destinationCity").textContent = "Enter Valid First Name ";
        document.getElementById("destinationCity").style.color = "red";
        returnval = false;
    }

    return returnval;

}



//for searching the flight details
var SomeFunction = function(){
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
 searchResultButton.onsubmit = SomeFunction;   
console.log("bvkvdj");
function getFlightDetails(key) {
    console.log(key);
    var foundDetails = [];
    for (var i = 0; i < allData.flightDetails.length; i++) {
        if (allData.flightDetails[i].hasOwnProperty(key)) {
            foundDetails.push(allData.flightDetails[i][key]);
        }
    }
    return foundDetails;
}
//getting details of the flight



var function1 = function(e){
    if (e.target.tagName === "INPUT") {
        flightNumber = e.target.dataset.flightnumber ;
        flightduration = e.target.dataset.flightduration;
        disableRadioBoxes(flightNumber);
    }
}
searchResultTable.onclick = function1;

function disableRadioBoxes(flightNumber) {
    checkboxes = document.getElementsByClassName("checkbox");
    for (var i = 0; i < checkboxes.length; i++) {
        if (flightNumber !== checkboxes[i].dataset.flightnumber) {
            checkboxes[i].checked = false;
            // console.log(checkboxes[i].dataset.flightnumber);
        }
    }
    BookNowButton.disabled = false;
}



var somefunction = function(){
    var obj = {};
    var formElements = form.elements ;
    for(var i = 0 ; i < formElements.length ; i++ )
    {
        var data = formElements[i] ;
         data.name ? obj[data.name] = data.value : null ;
    }
    obj["flightNumber"] = flightNumber ;
    obj["flightduration"] = flightduration ;
    var xhrToSend = new XMLHttpRequest();
    xhrToSend.open("POST", "http://localhost:3000/flightTickets");
    xhrToSend.setRequestHeader("content-type", "application/json");
    xhrToSend.responseType = "json";
    xhrToSend.send(JSON.stringify(obj));
    xhrToSend.onload = function () {
        var a = document.createElement('a');
        a.target = '_blank';
        a.href = 'http://127.0.0.1:5500/userDetails.html?id=' + (xhrToSend.response).id;
        a.click();
    }
}
BookNowButton.onclick = somefunction;



