 var xhrToSend = new XMLHttpRequest();
const urls =  "http://localhost:3000/"

function put(url, body){
    xhrToSend.open("PATCH",`${url}`, body);
    xhrToSend.setRequestHeader("content-type", "application/json");
    xhrToSend.responseType = "json";
  return  xhrToSend.status(200).send(JSON.stringify(obj));
  
}

function post(url,body){
    var xhrToSend = new XMLHttpRequest();
    xhrToSend.open("POST", "http://localhost:3000/flightTickets");
    xhrToSend.setRequestHeader("content-type", "application/json");
    xhrToSend.responseType = "json";
   return xhrToSend.send(JSON.stringify(obj));
}

function get(){

}

export { urls, xhrToSend, put, post, get}