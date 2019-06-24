
function openGroupTab(evt, tabName) {
    var i, tabContent, group;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    group = document.getElementsByClassName("group");
    for (i = 0; i < group.length; i++) {
        group[i].className = group[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function backB() {
    window.history.back();
}

function profileEdit() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/contacts/rest/auth/profileEdit",
        "method": "POST",
        "headers": {
            "cache-control": "no-cache",
            "postman-token": "5cccda77-1300-6257-8852-92079f7103c9"
        },
        "data": {
            "email": localStorage.getItem("email"),
            "name": document.getElementById("name").value,
            "familyName": document.getElementById("familyName").value,
            "profileName": document.getElementById("profileName").value,
            "newEmail": document.getElementById("newEmail").value
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
        alert(response.message);
        localStorage.setItem("email", document.getElementById("newEmail").value);
    });

    $.ajax(settings).fail(function (response) {
        alert("ajax_fail");
    });
}

function passChange() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/contacts/rest/auth/profileEdit",
        "method": "POST",
        "headers": {
            "cache-control": "no-cache",
            "postman-token": "5cccda77-1300-6257-8852-92079f7103c9"
        },
        "data": {
            "email": localStorage.getItem("email"),
            "password": document.getElementById("password").value,
            "newPass": document.getElementById("newPass").value,
            "reNewPass": document.getElementById("reNewPass").value
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
