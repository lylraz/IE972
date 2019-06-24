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
        alert("no");
        window.location.href ="SignIn.html";
        }
      else{
        alert("yes");
        localStorage.setItem("fName",response.data.name);
        localStorage.setItem("lName",response.data.name);
        localStorage.setItem("email",response.data.email);
        window.location.href = "Cases.html";
      }
    });
    $.ajax(settings).fail(function (response){
          window.location.href ="Action.html";
        });
    }
