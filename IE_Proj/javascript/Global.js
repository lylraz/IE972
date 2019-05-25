
function signIn() {
    var emaill = document.getElementById("email");
    var passwordd = document.getElementById("password");
    $(document).ready(function () {
        $.getJSON("data.json",function (jdata) {
            for(var i = 0 ; i < jdata.members.length ; i++){
                if (emaill.value === jdata.members[i].email && passwordd.value === jdata.members[i].password) {
                    // userID = i;
                    window.location = "Cases.html"
                }
            }
        })
    });
}

function Open_ProfileEdit() {
    window.location = "ProfileEdit.html" ;
}

function click() {
    text = localStorage.getItem("x");
    obj = JSON.parse(text);
    alert(obj.name);
}
