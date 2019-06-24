function register(){

      localStorage.setItem("fName", "0");
      localStorage.setItem("lName", "0");
      localStorage.setItem("email", "0");

      var settings = {
      "async": true,
       "crossDomain": true,
       "url": "http://localhost:8080/contacts/rest/auth/register",
       "method": "POST",
       "headers": {
          "cache-control": "no-cache",
          "postman-token": "5cccda77-1300-6257-8852-92079f7103c9"
        },
      "data": {
        "fName": document.getElementById("fName").value,
        "lName": document.getElementById("lName").value,
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value,
        "rePassword": document.getElementById("rePassword").value,
      }
    }
    $.ajax(settings).done(function (response) {
      console.log(response);
      if(!response.success){
        alert(response.message);
        }
      else{
        alert("yes");
        localStorage.setItem("fName",response.data.fName);
        localStorage.setItem("lName",response.data.lName);
        localStorage.setItem("email",response.data.email);
        window.location.href = "Cases.html";
      }
    });
    $.ajax(settings).fail(function (response){
          alert("Fail");
        });
}

function login(){
      localStorage.setItem("fName", "0");
      localStorage.setItem("lName", "0");
      localStorage.setItem("email", "0");

      var settings = {
      "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/contacts/rest/auth/login",
        "method": "POST",
        "headers": {
          "cache-control": "no-cache",
          "postman-token": "1413b85e-c4c9-75c5-6fbf-c2aabb0e5808"
        },
      "data": {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value,
      }
    }
    $.ajax(settings).done(function (response) {
      console.log(response);
      if(!response.success){
        alert(response.message);
        }
      else{
        localStorage.setItem("fName",response.data.fName);
        localStorage.setItem("lName",response.data.lName);
        localStorage.setItem("email",response.data.email);
        window.location.href = "Cases.html";
      }
    });
    $.ajax(settings).fail(function (response){
    alert("Fail")
        });
}
