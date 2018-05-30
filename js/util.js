function httpPostAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        callback(xmlHttp);
        if (xmlHttp.readyState != 4 && xmlHttp.status != 200){
            console.log("Recieved HttpRequest Error: " + xmlHttp.status);
        }
    }
    xmlHttp.open("POST", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function httpDeleteAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("DELETE", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }

    return "";
}

function openNewWindow(name, size){
    window.open(name, "MsgWindow", size);
}