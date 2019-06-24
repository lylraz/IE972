$(document).ready(function () {
    document.getElementById("title").innerText = localStorage.getItem("title");
    document.getElementById("sender").innerText = localStorage.getItem("sender");
    document.getElementById("request").innerText = localStorage.getItem("request");
});

function action() {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/contacts/rest/case/action",
        "method": "POST",
        "headers": {
            "cache-control": "no-cache",
            "postman-token": "5cccda77-1300-6257-8852-92079f7103c9"
        },
        "data": {
            "title": localStorage.getItem("title"),
            "answer": document.getElementById("answer").value,
            "referContent": document.getElementById("referSelect").value,
            "statusContent": document.getElementById("statusSelect").value
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
        alert(response.message);
        if(response.success) {
            window.location.href = "Cases.html";
        }
    });

    $.ajax(settings).fail(function (response) {
        alert("ajax_fail");
        window.location.href ="Action.html";
    });
}

// function referF() {
//     document.getElementById("referD").classList.toggle("show");
// }

// window.onclick = function(event) {
//     if (!event.target.matches('.referButton')) {
//         var dropdowns = document.getElementsByClassName("referContent");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// };
