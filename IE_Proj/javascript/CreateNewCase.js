
function close_nav(){
    nav = document.getElementById("nav_bar");
    nav.style.transform ='translateX(100%)' ;
    nav1 = document.getElementById("closed_nav");
    nav1.style.transform ='translateX(50%)' ;
    divv = document.getElementById("divContent");
    divv.style.marginRight = '23%';
    cButton = document.getElementById("confirmButton");
    cButton.style.marginRight = '73%';
}

function Open_nav(){
    nav = document.getElementById("closed_nav");
    nav.style.transform ='translateX(150%)';
    nav1 = document.getElementById("nav_bar");
    nav1.style.transform ='translateX(0)';
    divv = document.getElementById("divContent");
    divv.style.marginRight = '32%';
    cButton = document.getElementById("confirmButton");
    cButton.style.marginRight = '82%';
}

function createNewCase() {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/contacts/rest/case/createNewCase",
        "method": "POST",
        "headers": {
            "cache-control": "no-cache",
            "postman-token": "5cccda77-1300-6257-8852-92079f7103c9"
        },
        "data": {
            "title": document.getElementById("title").value,
            "request": document.getElementById("requestText").value,
            "requestContent": document.getElementById("requestSelect").value,
            "receiverContent": document.getElementById("receiverSelect").value
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
        alert(response.message);
    });

    $.ajax(settings).fail(function (response) {
        alert("ajax_fail");
    });
}
