var id = location.search;
id = id.split("=");
id = id[1];
var userDdetailsForm = document.getElementById("userDdetailsForm");

var Function1 = function(e){
    e.preventDefault();
    console.log(validateForm());
    if (validateForm()) {
        var obj = {};
        var formElements = userDdetailsForm.elements ;
        for(var i = 0 ; i < formElements.length ; i++ )
        {
            var data = formElements[i] ;
             data.name ? obj[data.name] = data.value : null ;
        }
        
        console.log(obj);//display userdetails
        var xhrToSend = new XMLHttpRequest();
        xhrToSend.open("PATCH", "http://localhost:3000/flightTickets/" + id);
        xhrToSend.setRequestHeader("content-type", "application/json");
        xhrToSend.responseType = "json";
        xhrToSend.send(JSON.stringify(obj));
        xhrToSend.onload = function () {
            var a = document.createElement('a');
            a.target = '_blank';
            a.href = 'http://127.0.0.1:5500/index1.html?id=' + (xhrToSend.response).id;
            a.click();
        }
    }
}
userDdetailsForm.onsubmit = Function1;

//validations
function validateForm() {
    var returnval = true;

    var firstname = document.getElementById("fname").value.trim()
    var lastname = document.getElementById("lname").value.trim()
    var firstnamecheck = /^[A-Za-z]{1,15}$/;
    var lastnamecheck = /^[A-Za-z]{1,15}$/;


    if (firstnamecheck.test(firstname)) {
        document.getElementById("invalidfname").innerHTML = "";
        document.getElementById("fname").style.border = "2px solid green " ;
    } else {
        document.getElementById("fname").style.border = "2px solid red " ;
        document.getElementById("invalidfname").textContent = "Enter Valid First Name ";
        document.getElementById("invalidfname").style.color = "red";
        returnval = false;
    }

    if (lastnamecheck.test(lastname)) {
        document.getElementById("invalidlname").innerHTML = "";
        document.getElementById("lname").style.border = "2px solid green " ;
    } else {
        document.getElementById("lname").style.border = "2px solid red " ;
        document.getElementById("invalidlname").innerHTML = "Enter Valid Last Name ";
        document.getElementById("invalidlname").style.color = "red";
        returnval = false;
    }

    var email = document.getElementById("email").value;
    var regex = /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (regex.test(email))
    {

        document.getElementById("lbltext").style.visibility = "hidden";
        document.getElementById("email").style.border = "2px solid green " ;
    } else {
        document.getElementById("email").style.border = "2px solid red " ;
        document.getElementById("lbltext").style.visibility = "visible";
        document.getElementById("lbltext").style.color = "red";
    }

    var mobilenumber = document.getElementById("number").value.trim();
    var regx = /^[7-9]\d{9}$/;

    if (regx.test(mobilenumber)) {
        document.getElementById("mnumber").innerHTML = "";
        document.getElementById("number").style.border = "2px solid green " ;
        returnval = true;
    } else {
        document.getElementById("number").style.border = "2px solid red " ;
        document.getElementById("mnumber").innerHTML = "Enter Valid Mobile Number";
        document.getElementById("mnumber").style.color = "red";
        returnval = false;
    }



    return returnval;
}